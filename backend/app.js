const express = require('express')
var cors = require('cors')
const pg = require('pg');
const app = express()
const port = 3050

const config = {
  host: "127.0.0.1",
  port: 5432,
  user: "postgres",
  password: "test",
  database: 'web-dev_2_semester'
}

const pool = new pg.Pool(config);

app.use(cors());

app.get('/products', (req, responce) => {
  pool
    .query(`SELECT "Id", "Name", "Price", "ProductPhoto" FROM public.products;`)
    .then(res => res.rows[0] !== undefined ? responce.json(res.rows) : responce.sendStatus(404))
    .catch(err => {throw err});
})

app.get('/products/filter', (req, responce) => {
  pool
    .query(`SELECT "Id", "Name", "Price", "ProductPhoto" FROM public.products WHERE "Price" >= ${req.query.min} AND "Price" <= ${req.query.max};`)
    .then(res => res.rows[0] !== undefined ? responce.json(res.rows) : responce.sendStatus(404))
    .catch(err => {throw err});
})

app.get('/product/:id', (req, responce) => {
  pool
  .query(`SELECT * FROM public.products WHERE "Id"=${req.params.id};`)
  .then(res => res.rows[0] !== undefined ? responce.json(res.rows[0]) : responce.sendStatus(404))
  .catch(err => {throw err});
})

app.get('/orders', (req, responce) => {
  pool
  .query(`SELECT * FROM public.shopping_list;`)
  .then(res => res.rows[0] !== undefined ? responce.json(res.rows) : responce.sendStatus(404))
  .catch(err => {throw err});
})


app.post('/order/:id', (req, responce) => {
  pool
  .query(`INSERT INTO public.shopping_list("productId", "counts") VALUES (${req.params.id},${req.query.count})`)
  .then(res => res.rows[0] !== undefined ? responce.json(res.rows) : responce.sendStatus(404))
  .catch(err => {throw err});
})

app.delete('/order/:id', (req, responce) => {
  pool
  .query(`DELETE FROM public.shopping_list WHERE "productId"=${req.params.id};`)
  .then(res => res.rows[0] !== undefined ? responce.json(res.rows) : responce.sendStatus(404))
  .catch(err => {throw err});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
