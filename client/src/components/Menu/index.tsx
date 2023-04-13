import { Link } from 'react-router-dom';
import { NavContainer } from './style';

interface MenuProps {
    isToggle: boolean;
}

export function Menu({ isToggle }: MenuProps) {
    return (
        // <nav className={isToggle ? styles.navContainer : styles.navFalse}>
        <NavContainer isToggle={isToggle}>
            <ul className='ulToggle'>
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
        </NavContainer>
    )
}