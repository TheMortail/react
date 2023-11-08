import {Link} from "react-router-dom";

const NavigationComponent = () => {
    return (
        <nav>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/Items">Termekek</Link>
            </li>
            <li>
                <Link to="/About">Rolunk</Link>
            </li>
            <li>
                <Link to="/Contact">Kapcsolat</Link>
            </li>
        </nav>
    )
};

export default NavigationComponent;