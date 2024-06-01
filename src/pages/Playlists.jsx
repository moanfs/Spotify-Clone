import { useEffect, useState } from "react";
import Main from "../layouts/main";
import { getPlaylist } from "../services/spotifyService"; // Mengimpor fungsi getPlaylist
import { useParams } from "react-router-dom";

const Playlists = () => {
    const { id } = useParams();
    const [playlistData, setPlaylistData] = useState(null);

    useEffect(() => {
        // Memuat data playlist saat komponen dimuat
        getPlaylist(id)
            .then(data => {
                setPlaylistData(data);
            })
            .catch(error => console.error('Error fetching playlist:', error));
    }, [id]); // Memastikan useEffect dijalankan ketika id berubah

    return (
        <div className="h-screen max-h-screen w-screen bg-black">
            <Main>
                {playlistData ? (
                    <div className="p-4 text-white">
                        <h2>{playlistData.name}</h2>
                        {/* Tampilkan informasi playlist sesuai kebutuhan */}
                        <p>Description: {playlistData.description}</p>
                        <p>Number of tracks: {playlistData.tracks.total}</p>
                        {/* Tambahkan informasi lain yang ingin ditampilkan */}
                    </div>
                ) : (
                    <h1>Loading...</h1>
                )}
            </Main>
        </div>
    );
};

export default Playlists;
