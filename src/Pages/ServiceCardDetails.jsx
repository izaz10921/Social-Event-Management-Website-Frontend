import {  useLoaderData, useParams } from "react-router-dom";





const ServiceCardDetails = () => {


    const cards = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);

    const card = cards.find(card => card.id === idInt);



    return (
        <div className="bg-slate-100 ">
            
            <div className="pb-[300px]  ">
            <div className="card card-compact w-[800px] mx-[400px] pt-10 h-[700px] bg-slate-100 shadow-xl ">
                <figure><img src={card.image}  /></figure>
                <div className="card-body">
                    <h2 className="card-title">{card.name}</h2>
                    <p>{card.detailDescription}</p>
                   
                </div>
            </div>
            </div>



        </div>
    );
};

export default ServiceCardDetails;
