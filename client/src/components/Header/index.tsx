import styles from "./Header.module.css";
import menuOpen from '../../assets/menu.svg'
import menuClose from '../../assets/close.svg'
import logo from '../../assets/logo.png'
import { useState } from "react";
import { Menu } from "../Menu";
import { Container, ImgToggle } from "./style";
import { Link } from "react-router-dom";

export function Header() {
  const [toggle, setToggle] = useState<boolean>(false)

  return (
    <Container>
      <img src={logo} width={140} alt="logo" />
      <div>
        <nav className='navHeader'>
          <ul>
            <li>
              <Link to="/"> HOME </Link>
            </li>
            <li>
              <Link to="/tasks"> TASKS </Link>
            </li>
            <li>
              <Link to="/about"> ABOUT </Link>
            </li>
          </ul>
        </nav>


        <ImgToggle src={toggle ? menuClose : menuOpen} onClick={() => setToggle(prev => !prev)} alt="" />
        <Menu isToggle={toggle} />
      </div>
    </Container>
  );
}
