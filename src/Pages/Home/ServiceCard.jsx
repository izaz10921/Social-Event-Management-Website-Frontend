import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ServiceCard = ({ serviceCard }) => {
    const { name, image, description, price, id } = serviceCard;
    return (
        <div className='w-[700px] h-[200px] mx-auto pb-4 mt-5  rounded-xl shadow-lg bg-slate-100  '>
            <div className='flex gap-9 items-center'>
                <div className=' w-[300px] h-[200px]  '><img className=' rounded-xl w-[300px] h-[200px] ' src={image} alt="" /></div>



                <div className='w-1/2 h-[200px] '>
                    <h4 className='text-2xl font-bold mb-3'>{name}</h4>
                    <p className='text-base mb-5'>{description}</p>
                    <div className='grid grid-cols-2 '>
                        <div> <button className='  btn btn-secondary '>Price {price}</button></div>
                        <div><Link to={`/serviceCard/${id}`}><button className='btn btn-primary '>Details</button></Link></div>
                    </div>



                </div>
            </div>
        </div>
    );
};
ServiceCard.propTypes = {
    serviceCard: PropTypes.object,
};
export default ServiceCard;