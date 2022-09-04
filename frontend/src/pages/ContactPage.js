import './ContactPage.css';
import ContactMessage from '../common/component/contactpage/ContactMessage';
import { useRef } from 'react';

const ContactPage = () => {

    const pageRef = useRef();

    return (
        <div ref={pageRef} className='contactpage'>
            <ContactMessage 
                pageRef={pageRef}
            />
        </div>
    );
}

export default ContactPage;