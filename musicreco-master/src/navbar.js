import './App.css';
import logo from './logo.png';


function Nav(){
    return(
        <nav class="navi">
            <div class="container-fluid">
              <a class="navbar-brand" href="/">
                <img src={logo} alt="Logo" class="logo"/>
                Melodify </a>
              <ul class="nav ">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/Recommend">Random Recommendation</a>
                </li><li class="nav-item">
                  <a class="nav-link" href="/About">About Us</a>
                </li>
              </ul>
            </div>
          </nav>
    );
}

export default Nav;