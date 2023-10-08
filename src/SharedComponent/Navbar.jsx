import { Link, NavLink } from "react-router-dom";

import loginDefaultPic from '../assets/login.png'
const Navbar = () => {

    const navlinks = <>

        <li ><NavLink to="/" style={({ isActive }) => {
            return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "orange" : "black",
                textDecoration: isActive ? "underline" : "",
            };
        }}>Home</NavLink></li>
        <li ><NavLink to="/about" style={({ isActive }) => {
            return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "orange" : "black",
                textDecoration: isActive ? "underline" : "",
            };
        }}>About</NavLink></li>
        <li><NavLink to="/rating" style={({ isActive }) => {
            return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "orange" : "black",
                textDecoration: isActive ? "underline" : "",
            };
        }}>Rating</NavLink></li>

    </>
    return (
        <div>
            <div className="navbar  bg-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-primary lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="  btn-active btn-accent dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                navlinks
                            }
                        </ul>
                    </div>
                    <button className="btn btn-ghost normal-case text-xl font-bold text-orange-500">Social event</button>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navlinks
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={loginDefaultPic} />
                        </div>
                    </label>
                    <Link to='/login'> <button className="btn">Login</button> </Link>

                </div>
            </div>
        </div>
    );
};

export default Navbar;