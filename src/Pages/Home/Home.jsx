import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Footer from "./Footer";
import ServiceCard from "./ServiceCard";
import PreviousEvent from "./PreviousEvent";
import MeetTeam from "./MeetTeam";



const Home = () => {

    const cardsData = useLoaderData();
    
    return (
        <div className="bg-white">
            <Banner></Banner>
            <div><h2 className="text-center text-4xl font-extrabold mt-7 mb-5 text-orange-500 ">Our services</h2></div>
           <div className="grid grid-cols-2 gap-7 ">
           {
                cardsData.map(card => <ServiceCard
                key={card.id} serviceCard={card} >

                </ServiceCard> )
            }
           </div>
            <div><h2 className="text-center text-4xl font-extrabold mt-7 mb-5 text-orange-500 ">Previous managed event</h2></div>
            <PreviousEvent></PreviousEvent>
            <div><h2 className="text-center text-4xl font-extrabold mt-7 mb-5 text-orange-500 ">Meet our team</h2></div>
           <MeetTeam></MeetTeam>
            <Footer></Footer>


        </div>
    );
};

export default Home;