import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import toast from 'react-hot-toast'
import ThemeSwitcher from './ThemeSwitcher'

const Header = () => {
    const { user, userLogout } = useAuth()

    const handleLogOut = () => {
        userLogout()
            .then((res) => {
                toast.success('User Logged Out!', { position: "top-center" })
            })
            .catch((err) => { })
    }

    const menuItems = (
        <>
            <li>
                <NavLink
                    className='hover:btn-secondary rounded-md hover:text-white active:bg-primary active:text-white'
                    to='/'
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    className='hover:btn-secondary rounded-md hover:text-white active:bg-primary active:text-white'
                    to='/add_product'
                >
                    Add Product
                </NavLink>
            </li>
            <li>
                <NavLink
                    className='hover:btn-secondary rounded-md hover:text-white active:bg-primary active:text-white'
                    to='/products'
                >
                    All Product
                </NavLink>
            </li>
            <li>
                <NavLink
                    className='hover:btn-secondary rounded-md hover:text-white active:bg-primary active:text-white'
                    to='/cart'
                >
                    My Cart
                </NavLink>
            </li>
            { user ? (
                <>
                    <li>
                        <div className='relative hover:bg-transparent' to='/Login'>
                            <img
                                className='object-cover w-10 h-10 rounded-full ring ring-primary'
                                src={ user?.photoURL }
                                alt=''
                            />
                        </div>
                    </li>
                    <li>
                        <button
                            onClick={ handleLogOut }
                            className='hover:btn-secondary rounded-md hover:text-white active:bg-primary active:text-white'
                        >
                            Log Out
                        </button>
                    </li>
                </>
            ) : (
                <li>
                    <NavLink
                        className='hover:btn-secondary rounded-md hover:text-white active:bg-primary active:text-white'
                        to='/Login'
                    >
                        Login
                    </NavLink>
                </li>
            ) }
            <li><span className='h-10 bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent'><ThemeSwitcher /></span></li>
        </>
    )

    return (
        <header className='border-b-2 dark:bg-gray-800 dark:border-gray-700 text-gray-900 dark:text-white'>
            <div className='navbar font-semibold lg:w-11/12 mx-auto'>
                <div className='navbar-start'>
                    <Link className='text-2xl font-bold uppercase text-primary' to='/'>
                        E&M Media
                    </Link>
                </div>
                <div className='navbar-end'>
                    <div className='navbar-center hidden lg:flex'>
                        <ul className='menu menu-horizontal p-0 gap-3 items-center'>
                            { menuItems }
                        </ul>
                    </div>
                    <div className='dropdown dropdown-bottom dropdown-end'>
                        <label tabIndex={ 0 } className='btn btn-ghost lg:hidden'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth='1.5'
                                stroke='currentColor'
                                className='w-6 h-6'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                                />
                            </svg>
                        </label>
                        <ul className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'>
                            { menuItems }
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
