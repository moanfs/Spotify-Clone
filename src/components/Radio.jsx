export default function Radio({album}){
    return(
        <div className="flex flex-col  hover:bg-[#242424] p-4 rounded-md">
            <img src={album.image} alt="" className="object-fill h-56 w-56" />
            <h3 className="font-bold">{album.title}</h3>
        </div>
    )
}