import { useNavigate } from 'react-router-dom'; 
import { MdOutlineError } from 'react-icons/md';
import { useCallback, useEffect, useRef } from 'react';

const MissingMessage = ({ pageRef }) => {

    const navigate = useNavigate();
    const messageRef = useRef();

    const handleNavigateHome = () => {
        navigate('/');
    }

    const handleNavigateProducts = () => {
        navigate('/products/all');
    }

    const handleMissingMessageHeight = useCallback(() => {
        messageRef.current.style.height = `${pageRef.current.clientHeight}px`
    }, [pageRef]);

    useEffect(() => {
        handleMissingMessageHeight();
    }, [handleMissingMessageHeight]);

    useEffect(() => {
        window.addEventListener('resize', handleMissingMessageHeight);

        return () => {
            window.removeEventListener('resize', handleMissingMessageHeight);
        }
    });

    return (
        <div ref={messageRef} className='missingmessage'>
            <div className='missingmessage-wrapper'>
                <MdOutlineError className='missingmessage__icon' />
                <h2 className='missingmessage__header'>Page Not Found!</h2>
                <p className='missingmessage__body'>Woops. Seems like you are looking for page that doesn't exist.</p>
                <div className='missingmessage__hyperlink-wrapper'>
                    <p onClick={handleNavigateHome} className='missingmessage__body missingmessage__body--highlight'>Back To Home</p>
                    <span className='missingmessage__body missingmessage__body--sep'> | </span>
                    <p onClick={handleNavigateProducts} className='missingmessage__body missingmessage__body--highlight'>Look For Products</p>
                </div>
            </div>
        </div>
    )
}

export default MissingMessage;