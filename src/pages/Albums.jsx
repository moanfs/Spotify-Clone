import { useEffect, useState } from "react";
import Main from "../layouts/main";
import { getAlbum } from "../services/spotifyService";
import { useParams } from "react-router-dom";

const Albums = () => {
    const { id } = useParams();
    const [albumData, setAlbum] = useState(null);

    useEffect(() => {
        // Memuat data Albums saat komponen dimuat
        getAlbum(id)
            .then(data => {
                setAlbum(data);
            })
            .catch(error => console.error('Error fetching getAlbum:', error));
    }, [id]); // Memastikan useEffect dijalankan ketika id berubah

    return (
        <div className="h-screen max-h-screen w-screen bg-black">
            <Main>
                {albumData ? (
                    <div className="p-4 text-white">
                        {albumData.images && albumData.images.length > 0 && (
                            <img src={albumData.images[0].url} alt={albumData.name} className="rounded-2xl" />
                        )}
                        <h2>Name : {albumData.name}</h2>
                        <h2>Release Data : {albumData.release_date}</h2>
                        <p>Type Album : {albumData.album_type}</p>
                        <p>Tracks : {albumData.tracks.total}</p>
                    </div>
                ) : (
                    <h1>error</h1>
                )}
            </Main>
        </div>
    );
};

export default Albums;
