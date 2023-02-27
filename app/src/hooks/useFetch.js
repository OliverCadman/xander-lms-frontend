import {useState, useEffect, useMemo} from 'react';
import { get } from '../api/request';
import axios from 'axios';

const useFetch = (url, headers, normalRequest=null, postMade=null) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);

    useEffect(() => {
        setLoading(true);
        const source = axios.CancelToken.source();
        
        if (postMade || normalRequest) {
            console.log('CALLING ENDPOINT')
            axios.get(url, headers)
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => setError(true));
        } else {
            console.log('not calling endpoint')
        }

        

        return () => {
            source.cancel()
        }
    }, [postMade])

    return {data, loading, error}
}

export default useFetch;