import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <div className="flex items-center justify-between p-4 rounded-md shadow-xl">
            <NavLink to="/" className="text-[40px]">
                7oy 4dars
            </NavLink>
            <ul className="flex gap-5">
                <NavLink to="/">1.Todo List</NavLink>
                <NavLink to="/2">2.Copy/Paste </NavLink>
                <NavLink to="/3">3.Drag and Drop </NavLink>
                <NavLink to="/4">4.Text Editor</NavLink>
            </ul>
            <div className="text-[30px]">JUST</div>
        </div>
    );
}

export default Header;
