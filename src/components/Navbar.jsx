// import {Link} from 'react-router-dom'
import {NavLink} from 'react-router-dom'
import classes from './Navbar.module.css'


export default function Navbar() {
    return (
        <header>
            <nav>
                <ul className={classes['navbar-list']}>
                    <li><NavLink to="/welcome" activeClassName={classes.active}>Welcome</NavLink></li>
                    <li><NavLink to="/users" activeClassName={classes.active}>users</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}