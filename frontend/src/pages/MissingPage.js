import './MissingPage.css';
import MissingMessage from '../common/component/missingpage/MissingMessage';
import { useRef } from 'react';

const MissingPage = () => {

    const pageRef = useRef();

    return (
        <div ref={pageRef} className='missingpage'>
            <MissingMessage 
                pageRef={pageRef}
            />
        </div>
    );
}

export default MissingPage;