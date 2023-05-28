import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import '../../scss/Navbar.scss';

const Navbar = (props) => {
  const listLink = [
    {
      id: 1,
      to: '/',
      text: 'Home'
    },
    {
      id: 2,
      to: '/Event/Events',
      text: 'Události'
    }
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toogleSidebar = () => {
    setIsOpen(!isOpen);

    const side = document.querySelector('.side');
    if (isOpen) {
      side?.classList.remove('is-closed');
      side?.classList.add('is-open');
    } else {
      side?.classList.remove('is-open');
      side?.classList.add('is-closed');
    }
  };

  return (
    <header className="head">
      <div className="nav-box">
        <div className="hamburger">
          {props.hamburger && <GiHamburgerMenu className="hamburgericon" onClick={toogleSidebar} size={32} />}
        </div>

        <div className="menu">
          <ul>
            {listLink.map((link) => {
              return (
                <li key={link.id}>
                  <NavLink to={link.to} className="nav-link">
                    {link.text}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
