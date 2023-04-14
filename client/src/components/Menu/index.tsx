import { NavLink } from 'react-router-dom';
import { NavContainer } from './style';
interface MenuProps {
    isToggle: boolean;
    onSetToggle: (toggle: boolean) => void;
}

export function Menu({ isToggle, onSetToggle }: MenuProps) {
    function toggle() {
        onSetToggle(false)
    }
    
    return (
        // <nav className={isToggle ? styles.navContainer : styles.navFalse}>
        <NavContainer isToggle={isToggle}>
            <ul className='ulToggle'>
            <li>
              <NavLink onClick={toggle} className={(NavLink) => NavLink.isActive ? 'active' : '' } to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink onClick={toggle} className={(NavLink) => NavLink.isActive ? 'active' : '' } to="/tasks">TASKS</NavLink>
            </li>
            <li>
              <NavLink onClick={toggle} className={(NavLink) => NavLink.isActive ? 'active' : '' } to="/about">ABOUT</NavLink>
            </li>
            </ul>
        </NavContainer>
    )
}