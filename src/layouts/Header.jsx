import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const Header = () => {
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
                    to='/cart'
                >
                    My Cart
                </NavLink>
            </li>
            <li>
                <NavLink
                    className='hover:btn-secondary rounded-md hover:text-white active:bg-primary active:text-white'
                    to='/Login'
                >
                    Login
                </NavLink>
            </li>
            <li>
                <button
                    className='hover:btn-secondary rounded-md hover:text-white active:bg-primary active:text-white'
                >
                    Log Out
                </button>
            </li>
            <li>
                <div
                    className='relative hover:bg-transparent'
                    to='/Login'
                >
                    <img className="object-cover w-10 h-10 rounded-full ring ring-primary" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=100" alt="" />
                </div>
            </li>
        </>
    )

    return (
        <header className='border-b-2'>
            <div className='navbar font-semibold lg:w-11/12 mx-auto'>
                <div className='navbar-start'>
                    <Link className='text-2xl font-bold uppercase text-primary' to='/'>
                        E&M Media
                    </Link>
                </div>
                <div className='navbar-end'>
                    <div className='navbar-center hidden lg:flex'>
                        <ul className='menu menu-horizontal p-0 gap-3 items-center'>{ menuItems }</ul>
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
