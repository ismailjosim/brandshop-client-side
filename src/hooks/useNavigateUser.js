import { useLocation, useNavigate } from 'react-router-dom';


const useNavigateUser = () => {
    // setup navigator After Register/login
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';

    const navigateNow = () => {
        setTimeout(() => { navigate(from, { replace: true }) }, 1);
    }

    return navigateNow;
};

export default useNavigateUser;
