import { useNavigate } from 'react-router-dom'; 
import { FaCheckCircle } from 'react-icons/fa';
import { useCallback, useEffect, useRef } from 'react';

const SuccessMessage = ({ pageRef }) => {

    const navigate = useNavigate();
    const messageRef = useRef();

    const handleNavigateHome = () => {
        navigate('/');
    }

    const handleNavigateProducts = () => {
        navigate('/products/all');
    }

    const handleSuccessMessageHeight = useCallback(() => {
        messageRef.current.style.height = `${pageRef.current.clientHeight}px`;
    }, [pageRef]);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0
        })
    }, []);

    useEffect(() => {
        handleSuccessMessageHeight();
    }, [handleSuccessMessageHeight]);

    useEffect(() => {
        window.addEventListener('resize', handleSuccessMessageHeight);

        return () => {
            window.removeEventListener('resize', handleSuccessMessageHeight);
        }
    });

    return (
        <div ref={messageRef} className='successmessage'>
            <div className='successmessage-wrapper'>
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
        </div>
    );
}

export default SuccessMessage;