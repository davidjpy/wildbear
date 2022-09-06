import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ImLocation2 } from 'react-icons/im';
import { 
    FaPhoneSquareAlt, 
    FaYoutubeSquare, 
    FaFacebookSquare, 
    FaGooglePlusSquare, 
    FaTwitterSquare, 
    FaInstagramSquare, 
    FaLinkedin 
} from 'react-icons/fa';
import { RiMailFill } from 'react-icons/ri';

import { updateNotification } from '../../../features/notification/notificationSlice';

const ContactMessage = ({ pageRef }) => {

    const dispatch = useDispatch();
    const messageRef = useRef();
    const [showContent, setShowContent] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleContactMessageHeight = useCallback(() => {
        messageRef.current.style.height = `${pageRef.current.clientHeight}px`;
    }, [pageRef]);

    const inputValid = Boolean(name && email && subject && message && !isLoading);

    const handleNameInput = (e) => {
        setName(e.target.value);
    }

    const handleEmailInput = (e) => {
        setEmail(e.target.value);
    }

    const handleSubjectInput = (e) => {
        setSubject(e.target.value);
    }

    const handleMessageInput = (e) => {
        setMessage(e.target.value);
    }

    const handleSubmit = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            dispatch(updateNotification({
                message: {
                    title: `Action Success`,
                    body: 'We have received your message, we will contact you as soon as possible!'
                },
                position: {
                    height: '12%',
                    right: '20px'
                }
            }));
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
        }, 2000);
    }

    useEffect(() => {
        handleContactMessageHeight();
    }, [handleContactMessageHeight]);

    useEffect(() => {
        window.addEventListener('resize', handleContactMessageHeight);

        return () => {
            window.removeEventListener('resize', handleContactMessageHeight);
        }
    });

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0
        });
        setTimeout(() => {
            setShowContent(true);
        }, 200)
    }, []);

    return (
        <div ref={messageRef} className='contactmessage'>
            <div className='contactmessage__header-wrapper' style={showContent ? { top: '6%', opacity: 1 } : null}>
                <p className='contactmessage__header'>Contact Us</p>
                <p className='contactmessage__header contactmessage__header--small'>We're happy to answer any questons you have. Just send us a message by the filling up the form below.</p>
            </div>
            <div className='contactmessage-wrapper' style={showContent ? { left: '0px', opacity: 1 } : null}>
                <div className='contactmessage__form'>
                    <form>
                        <label className='contactmessage__body contactmessage__body--label' htmlFor='name'>Name</label>
                        <input onChange={(e) => handleNameInput(e)} value={name} placeholder='Enter your name here...' className='contactmessage__input' id='name' />
                        <label className='contactmessage__body contactmessage__body--label' htmlFor='email'>Email</label>
                        <input onChange={(e) => handleEmailInput(e)} value={email} placeholder='example@mail.com...' className='contactmessage__input' id='email' />
                        <label className='contactmessage__body contactmessage__body--label' htmlFor='title'>Subject</label>
                        <input onChange={(e) => handleSubjectInput(e)} value={subject} placeholder='Enter your subject here...' className='contactmessage__input' id='title' />
                        <label className='contactmessage__body contactmessage__body--label' htmlFor='message'>Message</label>
                        <textarea onChange={(e) => handleMessageInput(e)} value={message} placeholder='Enter your Message here...' className='contactmessage__input contactmessage__input--large' id='message' />
                    </form>
                    <button onClick={handleSubmit} disabled={!inputValid} className='contactmessage__button'>
                        {isLoading ? (<div className='contactmessage__spinner'><div></div><div></div><div></div><div></div></div>) : 'Submit'}
                    </button>
                </div>
                <div className='contactmessage__info'>
                    <div className='contactmessage__body--wrapper'>
                        <RiMailFill className='contactmessage__icon' />
                        <p className='contactmessage__body' style={{ width: '92%' }}>Email: info@wildbear.com</p>
                    </div>
                    <div className='contactmessage__body--wrapper'>
                        <FaPhoneSquareAlt className='contactmessage__icon' />
                        <p className='contactmessage__body' style={{ width: '92%' }}>Phone: +852 37523347</p>
                    </div>
                    <div className='contactmessage__body--wrapper'>
                        <ImLocation2 className='contactmessage__icon' />
                        <p className='contactmessage__body' style={{ width: '92%' }}>Address: 49 Li Lo Lang Street, Kowloon, Hong Kong</p>
                    </div>
                    <div className='contactmessage__icon--wrapper'>
                        <FaYoutubeSquare className='contactmessage__icon contactmessage__icon--inline' />
                        <FaFacebookSquare className='contactmessage__icon contactmessage__icon--inline' />
                        <FaGooglePlusSquare className='contactmessage__icon contactmessage__icon--inline' />
                        <FaTwitterSquare className='contactmessage__icon contactmessage__icon--inline' />
                        <FaInstagramSquare className='contactmessage__icon contactmessage__icon--inline' />
                        <FaLinkedin className='contactmessage__icon contactmessage__icon--inline' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactMessage;