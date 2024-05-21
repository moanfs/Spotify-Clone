export default function Sidebar(){
    return(
        <aside className="h-screen ">
            <nav className="h-full flex flex-col text-white">
                <div className=" my-2 py-6 rounded-md p-4 text-[1.2rem] font-semibold bg-[#121212]">
                    <div className="items-center justify-between flex mb-2 bg-[#121212] ">
                        <a href="" className="w-32 bg-[#121212]"><i className="bi bi-spotify mr-2 "></i>Spotify</a>
                    </div>
                    <ul className="items-center justify-between flex-col bg-[#121212]">
                        <li className="mb-2 bg-[#121212]">
                            <a href=""><i className="bi bi-house-door-fill mr-5 "></i>Home</a>
                        </li>
                        <li className="bg-[#121212]">
                            <a href=""><i className="bi bi-search mr-5"></i>Search</a>
                        </li>
                    </ul>
                </div>
                <div className="bg-[#121212] h-full mb-2 rounded-md text-[1rem] font-bold ">
                    <div className="flex justify-between p-4 bg-[#121212]">
                        <a href="" className="bg-[#121212]"><i className="bi bi-music-note-list mr-2"></i>Your Library</a>
                        <a href="" className="bg-[#121212]"><i className="bi bi-plus-lg"></i></a>
                    </div>
                    <div className="card bg-[#242424] rounded-md m-2 p-2">
                        <h1 className="bg-[#242424]">Create your playlist</h1>
                        <p className="text-sm font-normal bg-[#242424] ">It`s easy, we`ll help you</p>
                        <button className="rounded-full bg-white text-black px-4 py-1 text-[1rem] my-2 mt-5">Create playlist</button>
                    </div>
                    <div className="card bg-[#242424] rounded-md m-2 p-2">
                        <h1 className="bg-[#242424]">let`s find some podcasts to follow</h1>
                        <p className="text-sm font-normal bg-[#242424]">We`ll keep you update on new episodes</p>
                        <button className="rounded-full bg-white text-black px-4 py-1 text-[1rem] my-2 mt-5">Browse podcasts</button>
                    </div>
                </div>
            </nav>
        </aside>
    )
}