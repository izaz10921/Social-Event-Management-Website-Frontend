import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ServiceCard = ({ serviceCard }) => {
    const { name, image, description, price, id } = serviceCard;
    return (
        <div className='lg:w-[700px]   w-[300px] lg:h-[200px] h-[350px] mx-auto pb-4 mt-5   rounded-xl shadow-lg bg-slate-100  '>
            <div className='lg:flex lg:gap-9 items-center'>
                <div className=' w-[300px] h-[200px]  '><img className=' rounded-xl w-[300px] h-[200px] ' src={image} alt="" /></div>



                <div className='lg:w-1/2 h-[200px] '>
                    <h4 className='lg:text-2xl text-base font-bold lg:mb-3 mb-1 lg:ml-0 ml-2'>{name}</h4>
                    <p className='lg:text-base text-sm mb-5 lg:ml-0 ml-2'>{description}</p>
                    <div className='grid grid-cols-2 lg:ml-0 ml-2'>
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