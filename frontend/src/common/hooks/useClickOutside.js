import { useEffect, useRef } from 'react';

export const useClickOutside = (handlerFunction, closeMenuRef) => {

    const node = useRef();

    useEffect(() => {
        const handler = (event) => {
            if (!node.current.contains(event.target) && !closeMenuRef.current.contains(event.target)) {
                handlerFunction();
            }
        }
        window.addEventListener('mousedown', handler);
        
        return () => {
            window.removeEventListener('mousedown', handler);
        }
    });

    return node;
}