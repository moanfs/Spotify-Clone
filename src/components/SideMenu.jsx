export default function SideMenu({icon, text, active, alert}){
    return(
        <li>
            {icon}
            <span>{text}</span>
        </li>
        // <div className="side-menu bg-[#121212] rounded-md p-2 text-white ">
        //    <Logo/>
        //     <div className="home">
        //         <a href=""><i className="bi bi-house-door-fill mr-5"></i>Home</a>
        //     </div>
        //     <div className="search">
        //         <a href=""><i className="bi bi-search mr-5"></i>Search</a>
        //     </div>
        // </div>
    )
}