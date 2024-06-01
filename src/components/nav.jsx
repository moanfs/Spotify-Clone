// import { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdDownloading } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Nav = ({scrollPosition}) =>{
     
    function classNames(...classes) {
        return classes.filter(Boolean).join(" ");
    }


    return(
        <nav className={classNames(scrollPosition > 0 ? "bg-[#565A56]" : "bg-transparent", "transition duration-500 ease-in-out sticky top-0  rounded-tl-lg justify-between px-5 h-28 p-5 z-50")}>
            <div className="flex justify-between items-center">
                <div className="flex gap-5 text-white">
                
                {/* {isBackActive() && ()} */}
                <NavLink to="/" className={ ({isActive}) => isActive ? "bg-[#121212] p-1.5 rotate-180 rounded-full opacity-75" : "bg-[#121212]   p-1.5 rotate-180 rounded-full"}><FaChevronRight/></NavLink>    
                <NavLink to="/" className={ ({isActive}) => !isActive ? "bg-[#121212] p-1.5 rotate-180 rounded-full" : "bg-[#121212] disabled opacity-75 p-1.5 rotate-180 rounded-full"}><FaChevronRight className="rotate-180"/></NavLink>

                </div>
                <div className="flex gap-2 text-sm items-center ">
                    <h1 className="bg-white rounded-3xl px-2 py-1.5 font-medium">Explore Premium</h1>
                    <h1 className="bg-[#121212] text-white rounded-3xl px-2 py-1.5 font-medium flex items-center gap-1"><MdDownloading /> Install App</h1>
                    <IoMdNotificationsOutline size={32} className="bg-[#121212] text-white rounded-full p-1 font-medium"/>
                    <p className="bg-[#121212] text-white rounded-full p-2 font-medium">OO</p>
                </div>
            </div>
        </nav>
    )
}
export default Nav