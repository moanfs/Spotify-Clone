import Footer from "../components/footer"
import SideLeft from "../components/sidebar/sideLeft"
import SideRight from "../components/sidebar/sideRight"
import Nav from "../components/nav"
import { useRef, useState } from "react"
import useScrollPosition from "../components/useScrollPosition"

const Main = (props) => {
    const [isSideRightVisible, setSideRightVisible] = useState(false);
    const mainRef = useRef(null);
    const scrollPosition = useScrollPosition(mainRef);

    const toggleSideRight = () => {
        setSideRightVisible(!isSideRightVisible);
    };
    
    return(
    <>
        <section className="flex py-2 px-2 gap-2 h-[90vh] max-h-[90vh]">
            <SideLeft/>
            <main ref={mainRef} className="grow-2 bg-gradient-to-b from-[#505250] from-0% to-[#121212] rounded-lg overflow-y-scroll overflow-x-hidden">
            {/* <main ref={mainRef} className={`${isSideRightVisible ? 
                'bg-gradient-to-b from-[#505250] from-0% to-[#121212] rounded-lg text-justify overflow-y-scroll overflow-x-hidden ' : 
                'bg-gradient-to-b from-[#505250] from-0% to-[#121212] rounded-lg text-justify overflow-y-scroll overflow-x-hidden'
                }`}> */}
                <Nav scrollPosition={scrollPosition}/>
                {props.children}
            </main>
            {isSideRightVisible && <SideRight />}
        </section>
       
        <Footer onHidden={toggleSideRight} active={`${isSideRightVisible ? "text-green-500" : ''}`}/>
    </>
    )
}
export default Main