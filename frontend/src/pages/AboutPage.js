import './AboutPage.css';
import AboutMessage from '../common/component/aboutpage/AboutMessage';
import { useRef } from 'react';

const AboutPage = () => {

    const pageRef = useRef();

    return (
        <div ref={pageRef} className='aboutpage'>
            <AboutMessage 
                pageRef={pageRef} 
            />
        </div>
    );
}

export default AboutPage;