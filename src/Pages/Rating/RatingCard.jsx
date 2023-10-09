import PropTypes from 'prop-types';

const RatingCard = ({ serviceCard }) => {
    const { name, image } = serviceCard;
    return (
        <div className='bg-white lg:pb-0 pb-5 ' >
            
                <div className="card w-96 bg-slate-100  shadow-xl ">
                    <figure className="px-10 pt-10">
                        <img  src={image} alt="Shoes" className="rounded-xl h-[200px] w-[300px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{name}</h2>
                        <p>Please rate our event</p>
                        <div className="card-actions">
                            <div className="rating">
                                <input type="radio" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                    </div>
                </div>
           
        </div>
    );
};

RatingCard.propTypes = {
    serviceCard: PropTypes.object,
};

export default RatingCard;