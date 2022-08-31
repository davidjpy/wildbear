import { useNavigate } from 'react-router-dom'; 
import { FaCheckCircle } from 'react-icons/fa';

const SuccessMessage = () => {

    const navigate = useNavigate();

    const handleNavigateHome = () => {
        navigate('/');
    }

    const handleNavigateProducts = () => {
        navigate('/products/all');
    }


    return (
        <div className='successmessage'>
            <FaCheckCircle className='successmessage__icon' />
            <h2 className='successmessage__header'>Thank you for your purchase!</h2>
            <p className='successmessage__body'>You will receive an order confirmation email to your email.</p>
            <p className='successmessage__body'>Your order number is: <span className='successmessage__body successmessage__body--highlight'>900000005</span></p>
            <div className='successmessage__hyperlink-wrapper'>
                <p onClick={handleNavigateHome} className='successmessage__body successmessage__body--highlight'>Back To Home</p>
                <span className='successmessage__body successmessage__body--sep'> | </span>
                <p onClick={handleNavigateProducts} className='successmessage__body successmessage__body--highlight'>Look For Products</p>
            </div>
        </div>
    );
}

export default SuccessMessage;