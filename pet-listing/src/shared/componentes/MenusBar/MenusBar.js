import { NavLink } from "react-router-dom"
import styles from './MenusBar.module.css'

const MenusBar = () => {
    return (
        <nav className={styles.nav}>
            <NavLink to='/' className={({isActive}) => isActive ? styles.activeLink : ''}>Add Pet</NavLink>
            <NavLink to='/pets' className={({isActive}) => isActive ? styles.activeLink : ''}>View Pets</NavLink>
        </nav>
    )
}

export default MenusBar