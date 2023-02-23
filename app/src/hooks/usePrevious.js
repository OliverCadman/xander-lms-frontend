import {useRef, useEffect} from 'react';


export const usePrevious = (value) => {
    console.log(value)
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    })

    return ref.current;
}
