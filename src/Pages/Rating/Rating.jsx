import { useLoaderData } from "react-router-dom";
import RatingCard from "./RatingCard";


const Rating = () => {
    const cardsData = useLoaderData();
    return (
        <div className="grid grid-cols-3 px-[200px] gap-8 bg-white">
             {
                cardsData.map(card => <RatingCard  key={card.id} serviceCard={card}>

                </RatingCard>  )
            }
        </div>
    );
};

export default Rating;

