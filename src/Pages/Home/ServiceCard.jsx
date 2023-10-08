import PropTypes from 'prop-types';

const ServiceCard = ({ serviceCard }) => {
    const { name, image, description ,price} = serviceCard;
    return (
        <div className='max-w-[1240px] mx-auto pb-4 mt-5  rounded-xl shadow-lg '>
            <div className='flex gap-9 items-center'>
                <div className='w-[500px] h-[400px] border-2  '><img className='w-full h-full rounded-xl ' src={image} alt="" /></div>



                <div className='w-[600px] h-[200px] border-4'>
                    <h4 className='text-3xl font-bold mb-5'>{name}</h4>
                    <p className='text-base'>{description}</p>
                    <button className='mr-60'>Price {price}</button>
                    <button className='btn btn-primary'>Details</button>



                </div>
            </div>
        </div>
    );
};
ServiceCard.propTypes = {
    serviceCard: PropTypes.object,
};
export default ServiceCard;