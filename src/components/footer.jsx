import { FiPlusCircle } from "react-icons/fi";
import { IoPlaySkipForward } from "react-icons/io5";
import { FaPlayCircle } from "react-icons/fa";
import { TbRepeat } from "react-icons/tb";
import { LiaRandomSolid } from "react-icons/lia";
import { PiMicrophoneStageBold } from "react-icons/pi";
import { BsFilePlay } from "react-icons/bs";
import { HiOutlineQueueList } from "react-icons/hi2";
import { CiSpeaker } from "react-icons/ci";
import { MdOutlineCloseFullscreen } from "react-icons/md";
import { PiSpeakerHighBold } from "react-icons/pi";

const Footer = ({onHidden, active="" }) =>{
    return(
        <footer className="w-screen grid grid-cols-4 text-white h-[10vh] bg-black fixed bottom-0 px-5">
            <div className="flex gap-5 items-center ">
                <div className="bg-white w-14 h-14 rounded-md"></div>
                <div>
                    <h1 className="">Judul</h1>
                    <p className="text-[0.75rem] opacity-75">Singer</p>
                </div>
                <FiPlusCircle size={18}/>
            </div>
            <div className="flex flex-col col-span-2 items-center">
                <div className="flex items-center gap-5">
                    <LiaRandomSolid size={20} className="opacity-75"/>
                    <IoPlaySkipForward size={20} className="rotate-180 opacity-75"/>
                    <FaPlayCircle size={32} className=""/>
                    <IoPlaySkipForward size={20}className="opacity-75"/>
                    <TbRepeat size={20} className="opacity-75"/>
                </div>
                <div className="my-3">
                    <div className="border-2 w-96 opacity-75"></div>
                </div>
            </div>
            <div className="flex gap-2.5 items-center opacity-75 pb-5 justify-end cursor-pointer">
                <BsFilePlay size={18} onClick={onHidden} className={active}/>
                <PiMicrophoneStageBold size={18}/>
                <HiOutlineQueueList size={18}/>
                <CiSpeaker size={18}/>
                <PiSpeakerHighBold size={18}/>
                <div className="border-2 w-20"></div>
                <MdOutlineCloseFullscreen size={18}/>
            </div>
        </footer>
    )
}
export default Footer