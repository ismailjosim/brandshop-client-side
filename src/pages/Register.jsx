import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth';
import { useState } from 'react';
import useNavigateUser from '../hooks/useNavigateUser';
import toast from 'react-hot-toast';

const imageHostKey = import.meta.env.VITE_imgbb_key;

const Register = () => {
    const { createNewUser, updateUserProfile } = useAuth();
    const [error, setError] = useState('');
    const navigateNow = useNavigateUser();

    const handleRegister = e => {
        setError('');
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        const userInfo = {
            name, email, role: 'buyer'
        }


        const imageInput = form.photo;
        const imageFile = imageInput.files[0];

        const formData = new FormData();
        formData.append('image', imageFile);


        fetch(`https://api.imgbb.com/1/upload?key=${ imageHostKey }`, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {

                if (imgData.success) {
                    createNewUser(email, password)
                        .then(result => {
                            if (result.user) {
                                fetch(`${ import.meta.env.VITE_SERVER_URL }/users`, {
                                    method: 'POST',
                                    headers: {
                                        'content-type': 'application/json',
                                    },
                                    body: JSON.stringify(userInfo),
                                })
                                    .then(res => res.json())
                                    .then(data => {
                                        if (data) {
                                            toast.success("User Created Successfully", { autoClose: 1000 });
                                            const profile = {
                                                displayName: name,
                                                photoURL: imgData.data.display_url,
                                            }

                                            handleUpdateProfile(profile)
                                        }
                                    })
                            }
                        })
                }
            })
            .catch(error => setError(error.message))
    }

    const handleUpdateProfile = profile => {
        // Update New User
        updateUserProfile(profile)
            .then(() => {
                navigateNow()
            })
            .catch(error => setError(error.message))
    }

    return (
        <section>
            <div className='flex items-center justify-center px-6 mx-auto lg:my-20 my-10'>
                <form onSubmit={ handleRegister } className='w-full max-w-md'>
                    <div className='flex justify-center mx-auto'>
                        <h3 className='text-2xl font-bold uppercase text-primary'>
                            Register New User
                        </h3>
                    </div>

                    <div className='flex items-center justify-center mt-6'>
                        <Link
                            to={ '/login' }
                            className='w-1/3 pb-4 font-medium text-center text-gray-500 capitalize border-b  '
                        >
                            sign in
                        </Link>

                        <Link
                            to={ '/register' }
                            className='w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500  '
                        >
                            sign up
                        </Link>
                    </div>

                    <div className='relative flex items-center mt-8'>
                        <span className='absolute'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='w-6 h-6 mx-3 text-gray-300 '
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                                strokeWidth='2'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                                />
                            </svg>
                        </span>

                        <input
                            type='text'
                            name='name'
                            className='block w-full py-3 text-gray-700 bg-white border rounded-lg px-11    focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40'
                            placeholder='Username'
                        />
                    </div>

                    <label
                        htmlFor='dropzone-file'
                        className='flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer  '
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-6 h-6 text-gray-300 '
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                            strokeWidth='2'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12'
                            />
                        </svg>

                        <h2 className='mx-3 text-gray-400'>Profile Photo</h2>
                        <input name='photo' id='dropzone-file' type='file' className='hidden' />
                    </label>

                    <div className='relative flex items-center mt-6'>
                        <span className='absolute'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='w-6 h-6 mx-3 text-gray-300 '
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
                            type='email'
                            name='email'
                            className='block w-full py-3 text-gray-700 bg-white border rounded-lg px-11    focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40'
                            placeholder='Email address'
                        />
                    </div>

                    <div className='relative flex items-center mt-4'>
                        <span className='absolute'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='w-6 h-6 mx-3 text-gray-300 '
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
                            type='password'
                            name='password'
                            className='block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg    focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40'
                            placeholder='Password'
                        />
                    </div>

                    <div className='relative flex items-center mt-4'>
                        <span className='absolute'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='w-6 h-6 mx-3 text-gray-300 '
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
                            type='password'
                            name='confirmPassword'
                            className='block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg    focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40'
                            placeholder='Confirm Password'
                        />
                    </div>

                    <div className='mt-6'>
                        <button className='w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50'>
                            Sign Up
                        </button>
                        { error && <p className='mt-4 text-error font-semibold'>{ error }</p> }
                        <div className='mt-6 text-center '>
                            <Link
                                to={ '/login' }
                                className='text-sm text-blue-500 hover:underline'
                            >
                                Already have an account?
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Register
