<<<<<<< HEAD
import { useState, useEffect } from "react";
export const useDetectOutsideClick = (el, initialState) => {
    const [isActive, setIsActive] = useState(initialState);
    
    useEffect(() => {
        const pageClickEvent = (e) => {
            // if the current active element exists and is clicked outside of
            if (el.current != null && !el.current.contains(e.target)) {
                setIsActive(!isActive);
            }

        };
        // if the item is active (ie open) then listen for clicks 
        if (isActive) {
            window.addEventListener('click', pageClickEvent);
        }
        return () => {
            window.removeEventListener('click', pageClickEvent);
        }
    }, [isActive, el]);

    return [isActive, setIsActive]; 
}
=======
import { useState, useEffect } from "react";
export const useDetectOutsideClick = (el, initialState) => {
    const [isActive, setIsActive] = useState(initialState);
    
    useEffect(() => {
        const pageClickEvent = (e) => {
            // if the current active element exists and is clicked outside of
            if (el.current != null && !el.current.contains(e.target)) {
                setIsActive(!isActive);
            }

        };
        // if the item is active (ie open) then listen for clicks 
        if (isActive) {
            window.addEventListener('click', pageClickEvent);
        }
        return () => {
            window.removeEventListener('click', pageClickEvent);
        }
    }, [isActive, el]);

    return [isActive, setIsActive]; 
}
>>>>>>> 366853bd67ad535b99d0c76e6f710fbddfdee1d1
export default useDetectOutsideClick