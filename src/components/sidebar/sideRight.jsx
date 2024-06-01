// import { GoHome } from "react-icons/go";

const SideRight = () => {
    return(
        <aside className="flex flex-col grow-0 bg-[#121212] rounded-lg p-5 overflow-hidden w-1/4">
            <div className="flex justify-between items-center text-white">
                <h1>Judul</h1>
                <button>... X</button>
            </div>
            <div className="h-60 w-60 bg-white mt-10">
                gambar
            </div>
        </aside>
    )
}
export default SideRight