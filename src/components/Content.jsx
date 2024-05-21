// import Navbar from "./Navbar";

import Navbar from "./Navbar";

export default function Content({children}){
    return(      
        <div className="h-screen w-full py-2">
            <div className="content h-full overflow-auto rounded-md">
            <Navbar/>
                <div className="text-white">
                    {children}
                </div>
            </div>
        </div>
    )
}