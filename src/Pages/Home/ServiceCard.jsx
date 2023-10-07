import PropTypes from 'prop-types';

const ServiceCard = ({ serviceCard }) => {
    const { name, image, description } = serviceCard;
    return (
        <div className='max-w-[1240px] mx-auto pb-4 mt-5 '>
            <div className='flex gap-9'>
                <div className='w-[500px] h-[400px]'><img className='w-full h-full' src={image} alt="" /></div>



                <div className='w-[200px] h-[200px]'>
                    <h4>{name}</h4>
                    <p className=''>{description}</p>
                    <button>Price</button>
                    <button>Details</button>



                </div>
            </div>
        </div>
    );
};
ServiceCard.propTypes = {
    serviceCard: PropTypes.object,
};
export default ServiceCard;