import axios from 'axios';
import { useEffect } from 'react';
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';


// create axiosSecure
const axiosSecure = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true,
})

const useAxiosSecure = () => {
    const { userLogout } = useAuth();
    const navigate = useNavigate()


    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res;
        },
            (error) => {
                if (error.response.status === 401 || error.response.status === 403) {
                    userLogout()
                    navigate('/login');
                }

            }
        )

    }, [])




    return axiosSecure;
};

export default useAxiosSecure;

/*
what is interceptor: it's something like middleware.

*/
