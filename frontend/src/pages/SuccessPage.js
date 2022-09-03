import './SuccessPage.css';
import SuccessMessage from '../common/component/successpage/SuccessMessage';
import { useRef } from 'react';

const SuccessPage = () => {

    const pageRef = useRef();

    return (
        <div ref={pageRef} className='successpage'>
            <SuccessMessage 
                pageRef={pageRef}
            />
        </div>
    )
}

export default SuccessPage;