export default function Navbar(){
    return(
        <nav className="sticky top-0 bg-[#101010] rounded-t-md px-8">
           <div className="h-16 w-full text-white content-center ">
           <div className="flex justify-between">
                <div className="">
                    <a href="" className="bg-[#242424] rounded-full m-2 p-2"><i className="bi bi-chevron-left "></i></a>
                    <a href="" className="bg-[#242424] rounded-full m-2 p-2"><i className="bi bi-chevron-right "></i></a>
                </div>
                <div className="">
                    <a className="mx-8" href="#">Sign Up</a>
                    <a className="bg-white rounded-full text-black font-semibold p-3 px-6" href="#">Log In</a>
                </div>
           </div>
           </div>
        </nav>
    )
}