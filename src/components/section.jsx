const Section = ({children, titleCard =""}) => {
    return (
        <div className="mx-3 mt-10">
            <div className="flex mx-2 justify-between text-white items-center">
                <h1 className="font-semibold text-2xl">{titleCard}</h1>
                <p >Show All</p>
            </div>
            <div className="flex">
                {children}
            </div>
        </div>
    );
};
export default Section;
