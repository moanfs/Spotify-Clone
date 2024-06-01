import Card from "./card";

const Section = ({ title, data, cardTitleClass, categorieUrl }) => {
    return (
        <div className="mx-3 mt-10">
            <div className="flex mx-2 justify-between text-white items-center">
                <h1 className="font-semibold text-2xl">{title}</h1>
                <a href="">Show All</a>
            </div>
            <div className="flex">
                <Card data={data} cardTitleClass={cardTitleClass} categorieUrl={categorieUrl}/>
            </div>
        </div>
    );
};
export default Section;
