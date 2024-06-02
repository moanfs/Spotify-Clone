import { FaPlayCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const CardPlaylists = ({ data}) => {
    // Pastikan data tidak kosong dan merupakan array
    if (!data || !Array.isArray(data)) {
        return <div>Data tidak tersedia</div>;
    }

    const limitedData = data.slice(0, 6);
    return (
        <>
            {limitedData.map(item => (
                <div key={item.id} className="flex items-center mb-2 w-56 h-56 cursor-pointer">
                    <Link to={`playlist/${item.id}`}>
                    <div className="mt-2 hover:bg-[#202020] rounded-lg">
                    <div className="relative overflow-hidden">
                        {item.images && item.images.length > 0 && (
                            <img src={item.images[0].url} alt={item.name} className="p-2 rounded-2xl" />
                        )}
                        <div className="absolute inset-0 flex justify-end items-end right-3 bottom-3 opacity-0 transition-opacity duration-500 hover:opacity-100">
                            <button 
                            className="shadow-2xl flex" 
                            >
                                <FaPlayCircle size={48} className="text-green-600"/>
                            </button>
                        </div>
                    </div>
                    <div className="p-2  text-white">
                        <h1>{item.name}</h1>
                    </div>
                    </div>
                    </Link>
                </div>
            ))}
        </>
    );
};
export default CardPlaylists;