import { Link } from "react-router-dom";
import './navigation.css'
export default function Navigation() {
  return (
    <div className='sidebar'>
      <div className='id'>
        <div className='idcontent'>
          <img src='./medias/profilcv.png' alt='profile-pic'/>
          <h3>Allegria kinzola</h3>
        </div>
      </div>

      <div className="navigation">
        <ul>
          <li>
            <Link exact to='/' activeClassName='navActive'>
              <i className="fas fa-home"></i>
              <span>acceuil</span>
            </Link>
          </li>
          <li>
            <Link exact to='/portfolio' activeClassName='navActive'>
            <i className="fa-solid fa-book"></i>
              <span>portfolio</span>
            </Link>
          </li>
          <li>
            <Link exact to='/contact' activeClassName='navActive'>
            <i className="fa-solid fa-address-book"></i>
              <span>contact</span>
            </Link>
          </li>
          <li>
            <Link exact to='/Knowledges' activeClassName='navActive'>
            <i className="fa-solid fa-code"></i>
              <span>outils</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="socialNetwork">
        <ul>
          <li>
            <a href="google.com" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin"></i></a>
          </li>
          <li>
            <a href="google.com" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i></a>
          </li>
          <li>
            <a href="google.com" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-facebook"></i></a>
          </li>
        </ul>
        <div className="signature">
          <p>allegria kinzola - 2023</p>
        </div>
      </div>
    </div>
  );
}