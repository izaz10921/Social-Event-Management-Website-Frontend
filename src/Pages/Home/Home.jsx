import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Footer from "./Footer";
import ServiceCard from "./ServiceCard";



const Home = () => {

    const cardsData = useLoaderData();
    console.log(cardsData);
    return (
        <div className="bg-slate-100">
            <Banner></Banner>
            {
                cardsData.map(card => <ServiceCard
                key={card.id} serviceCard={card} >

                </ServiceCard> )
            }
            
            <h2>previous event</h2>
            <h2>employee section </h2>
            <Footer></Footer>


        </div>
    );
};

export default Home;