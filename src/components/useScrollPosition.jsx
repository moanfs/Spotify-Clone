import { useEffect, useState } from "react";

const useScrollPosition = (mainRef) => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const updatePosition = () => {
            if (mainRef.current) {
                setScrollPosition(mainRef.current.scrollTop);
            }
        };

        if (mainRef.current) {
            mainRef.current.addEventListener('scroll', updatePosition);
            updatePosition();
        }

        return () => {
            if (mainRef.current) {
                mainRef.current.removeEventListener('scroll', updatePosition);
            }
        };
    }, [mainRef]);

    return scrollPosition;
};

export default useScrollPosition;
