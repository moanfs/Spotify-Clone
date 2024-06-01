import { useEffect, useState } from "react";
import Main from "../layouts/main";
import { getCategorie } from "../services/spotifyService"; // Mengimpor fungsi getPlaylist
import { useParams } from "react-router-dom";

const Categories = () => {
    const { id } = useParams();
    const [categorieData, setCategorie] = useState(null);

    useEffect(() => {
        // Memuat data Categorie saat komponen dimuat
        getCategorie(id)
            .then(data => {
                setCategorie(data);
            })
            .catch(error => console.error('Error fetching getCategorie:', error));
    }, [id]); // Memastikan useEffect dijalankan ketika id berubah

    return (
        <div className="h-screen max-h-screen w-screen bg-black">
            <Main>
                {categorieData ? (
                    <div className="flex justify-center">
                        <div className="relative">
                            {categorieData.icons && categorieData.icons.length > 0 && (
                                <img src={categorieData.icons[0].url} alt={categorieData.name} className="" />
                            )}
                            <div className="absolute inset-0 flex justify-center items-end  text-white transition-opacity duration-500 text-[2rem]">
                                <h2 className="">{categorieData.name}</h2>
                            </div>
                        </div>
                    </div>
                ) : (
                    <h1 >Loading...</h1>
                )}
            </Main>
        </div>
    );
};

export default Categories;
