import {  useLoaderData, useParams } from "react-router-dom";





const ServiceCardDetails = () => {


    const cards = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);

    const card = cards.find(card => card.id === idInt);



    return (
        <div className="bg-slate-100 lg:pl-0 pl-3 ">
            
            <div className="pb-[300px]  ">
            <div className="card card-compact lg:w-[800px] w-[400px] lg:mx-[400px] pt-10 lg:h-[700px] h-[500px]  bg-slate-100 shadow-xl ">
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
