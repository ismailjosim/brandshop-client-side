import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import useAuth from '../hooks/useAuth'
import { useState } from 'react';
import { GoogleAuthProvider } from 'firebase/auth';
import useNavigateUser from '../hooks/useNavigateUser';
import toast from 'react-hot-toast';
import axios from 'axios';

//node require('crypto').randomBytes(64).toString('hex')

const Login = () => {
    const { userLogin, googleProviderLogin } = useAuth();
    const [error, setError] = useState('');
    const [navigateNow] = useNavigateUser();

    const handleLogin = (e) => {
        setError("")
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        userLogin(email, password)
            .then(res => {
                if (res.user) {

                    // get access token
                    const user = { email }
                    axios.post(`${ import.meta.env.VITE_SERVER_URL }/jwt`, user, { withCredentials: true }) // with withCredentials: true will save token in cookie
                        .then(res => {
                            if (res.data.status) {
                                // console.log(res.data.status)
                                toast.success("User Login Successfully", { autoClose: 1000 });
                                navigateNow()
                            }
                        })

                }
            })
            .catch(err => setError(err.message))
    }

    const googleProvider = new GoogleAuthProvider();
    const handleGoogleLogin = () => {
        googleProviderLogin(googleProvider)
            .then(res => {
                if (res.user) {
                    toast.success("User Login Successfully", { autoClose: 1000, position: "top-left" });
                    navigateNow()
                }
            })
            .catch(err => setError(err.message))
    }




    return (
        <section>
            <div className='flex items-center justify-center px-6 mx-auto lg:my-20 my-10'>
                <div className='w-full max-w-md'>
                    <div className='flex justify-center mx-auto'>
                        <h3 className='text-2xl font-bold uppercase text-primary'>
                            sign In Here
                        </h3>
                    </div>

                    <div className='flex items-center justify-center mt-6'>
                        <button className='w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500'>
                            Sign In
                        </button>
                        <Link
                            to={ '/register' }
                            className='w-1/3 pb-4 font-medium text-center text-gray-500 capitalize border-b'
                        >
                            sign Up
                        </Link>
                    </div>
                    <form onSubmit={ handleLogin } className='w-full max-w-md'>
                        <div className='relative flex items-center mt-8'>
                            <span className='absolute'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='w-6 h-6 mx-3 text-gray-300'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                    strokeWidth='2'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                                    />
                                </svg>
                            </span>

                            <input
                                required
                                type='email'
                                name='email'
                                className='block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40'
                                placeholder='Email address'
                            />
                        </div>

                        <div className='relative flex items-center mt-4'>
                            <span className='absolute'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='w-6 h-6 mx-3 text-gray-300'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                    strokeWidth='2'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
                                    />
                                </svg>
                            </span>

                            <input
                                required
                                type='password'
                                name='password'
                                className='block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40'
                                placeholder='Password'
                            />
                        </div>
                        <div className='mt-6'>
                            <button
                                type='submit'
                                className='w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50'
                            >
                                Sign in
                            </button>
                        </div>
                    </form>
                    <div className='mt-6'>
                        { error && <p className='mt-4 text-error font-semibold'>{ error }</p> }
                        <p className='mt-4 text-center text-gray-600'>or sign in with</p>

                        <button onClick={ handleGoogleLogin } className='flex items-center justify-center px-6 py-3 mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg  hover:bg-gray-50 w-full '>
                            <FcGoogle className='w-6 h-6 mx-2'></FcGoogle>
                            <span className='mx-2'>Sign in with Google</span>
                        </button>

                        <div className='mt-6 text-center '>
                            <Link
                                to={ '/register' }
                                className='text-sm text-blue-500 hover:underline '
                            >
                                Don’t have an account yet? Sign up
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login
