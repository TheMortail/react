import NavigationComponent from "../../components/NavigationComponent";
import {Route, Routes} from "react-router-dom";
import Home from "../../pages/Home";
import Items from "../../pages/Items";
import About from "../../pages/About";
import Contact from "../../pages/Contact";

const NavigationContainer = () => {
    return (
        <>
            <NavigationComponent/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/Items"} element={<Items/>}/>
                <Route path={"/About"} element={<About/>}/>
                <Route path={"/Contact"} element={<Contact/>}/>
            </Routes>
        </>
    )
};

export default NavigationContainer;