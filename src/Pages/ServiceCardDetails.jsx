import { useLoaderData, useParams } from "react-router-dom";





const ServiceCardDetails = () => {
    
    
    const cards = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt (id);
    
    const card = cards.find(card => card.id === idInt);
    console.log(card);
    
    
     return (
        <div>
            <p>{card.name}</p>
            
            
           
        </div>
    );
};

export default ServiceCardDetails;
