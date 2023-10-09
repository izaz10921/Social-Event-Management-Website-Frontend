import { useLoaderData } from "react-router-dom";
import RatingCard from "./RatingCard";


const Rating = () => {
    const cardsData = useLoaderData();
    return (
        <div className="lg:grid lg:grid-cols-3 lg:px-[200px] px-[20px] lg:gap-8  bg-white">
             {
                cardsData.map(card => <RatingCard  key={card.id} serviceCard={card}>

                </RatingCard>  )
            }
        </div>
    );
};

export default Rating;

