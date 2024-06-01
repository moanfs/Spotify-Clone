import { NavLink } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { VscLibrary } from "react-icons/vsc";
import { LuPlus } from "react-icons/lu";
import { LuArrowRight } from "react-icons/lu";

const SideLeft = () => {
    return(
        <aside className="rounded-lg flex flex-col grow-0 gap-2 overflow-hidden w-1/4">
            <div className="bg-[#121212] p-5 font-bold flex flex-col gap-5 rounded-lg">
                <NavLink to="/" className={ ({isActive}) => isActive ? "opacity-100 flex text-white items-center gap-5 " : "opacity-65 flex text-white items-center gap-5"}><GoHome size={24} className=""/>Home</NavLink>
                <NavLink to="/search" className={ ({isActive}) => isActive ? "opacity-100 flex text-white items-center gap-5 " : "opacity-65 flex text-white items-center gap-5"}><IoSearch size={24}/>Search</NavLink>
            </div>
            
            <div className="bg-[#121212] p-5 rounded-lg grow">
                <div className="text-white flex items-center justify-between font-bold">
                    <div className="flex items-center gap-5">
                        <VscLibrary size={24}/> 
                        <span>Your Library</span>
                    </div>
                    <div className="flex gap-5">
                        <LuPlus size={20}/>
                        <LuArrowRight size={20}/>
                    </div>
                </div>
                <div className="mt-10 text-white text-justify">

                </div>
            </div>
        </aside>
    )
}
export default SideLeft