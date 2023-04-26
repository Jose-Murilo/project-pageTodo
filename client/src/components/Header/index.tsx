import menuOpen from '../../assets/menu.svg'
import menuClose from '../../assets/close.svg'
import logo from '../../assets/logo.png'
import { useState } from "react";
import { Menu } from "../Menu";
import { Container, ImgToggle } from "./style";
import { NavLink } from "react-router-dom";

export function Header() {
  const [toggle, setToggle] = useState<boolean>(false)

  return (
    <Container>
      <img src={logo} width={140} alt="logo" />
      <div>
        <nav className='navHeader'>
          <ul>
            <li>
              <NavLink className={(NavLink) => NavLink.isActive ? 'active' : '' } to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink className={(NavLink) => NavLink.isActive ? 'active' : '' } to="/tasks">TASKS</NavLink>
            </li>
            <li>
              <NavLink className={(NavLink) => NavLink.isActive ? 'active' : '' } to="/about">ABOUT</NavLink>
            </li>
          </ul>
        </nav>


        <ImgToggle src={toggle ? menuClose : menuOpen} onClick={() => setToggle(prevState => !prevState)} alt="" />
        <Menu isToggle={toggle} onSetToggle={setToggle} />
      </div>
    </Container>
  );
}
