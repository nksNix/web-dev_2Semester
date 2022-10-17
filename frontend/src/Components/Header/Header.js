import "./Header.css"
import { Link, Outlet } from "react-router-dom";

function Header(){
    return (
    <>
    <header class="site-header">
      <div class="wrapper site-header__wrapper">
        <div class="site-header__start">
          <Link to='/' className="brand">Світ грабель</Link>
        </div>
        <div class="site-header__middle">
          <nav class="nav">
            <button class="nav__toggle" aria-expanded="false" type="button">
              menu
            </button>
            <ul class="nav__wrapper">
              <li class="nav__item"><Link to='/'>Граблі</Link></li>
              <li class="nav__item"><Link to='about'>Про нас</Link></li>
              <li class="nav__item"><Link to='orders'>Ваші замовлення</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    <Outlet />
    </>
    );
}

export default Header;