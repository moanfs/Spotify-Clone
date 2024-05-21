import Artist from "./Artist";

export default function ArtistsList({albums}){
    return(
        <>
            <div className="mx-4 font-bold flex justify-between ">
                <button className="hover:underline text-[1.2rem]">Popular Artists</button>
                <button className="hover:underline text-[#b2b2b2] text-[0.8rem]">Show All</button>
            </div>
            <div className="flex">
                {albums?.map((album) =>
                <Artist key={album.mal_id} album={album}/>
            )}
            </div>
        </>
    )
}