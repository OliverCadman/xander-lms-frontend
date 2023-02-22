import {useCallback, useState, useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

export const useScriptUnload = () => {
    const location = useLocation();
    const [scriptUnloaded, setScriptUnloaded] = useState(false);
    const [lastLocation, setLastLocation] = useState(null);

    const handleScriptUnload = useCallback((nextLocation) => {
        console.log(nextLocation)
        if (nextLocation.location.pathname !== location.pathname) {

        }
    })

    return [handleScriptUnload]
}