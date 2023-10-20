import { useEffect } from 'react';

const useNavigateTop = () => {
    useEffect(() => { window.scrollTo(0, 0) }, [])
};

export default useNavigateTop;
