import React, { useEffect, useState } from 'react'
import { BsFillTrashFill } from 'react-icons/bs'
import { BiEdit } from 'react-icons/bi'
import useAuth from '../hooks/useAuth'

const Cart = () => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const { user } = useAuth()

    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            const res = await fetch(
                `${ import.meta.env.VITE_SERVER_URL }/cart?email=${ user?.email }`,
            )
            const data = await res.json()
            const allMovies = data.data
            setLoading(false)
            setMovies(allMovies)
        }
        fetchData()
    }, [])

    return (
        <section className='w-11/12 mx-auto'>
            <div className='flex items-center justify-end my-10'>
                <h2 className='text-lg font-medium text-gray-800 flex items-center gap-1'>
                    <span>Total Booking:</span>
                    <span className='mt-1 font-bold text-primary'>
                        { movies && movies?.length }
                    </span>
                    <span>{ movies?.length >= 0 ? 'items' : 'item' }</span>
                </h2>
            </div>

            <div className='flex flex-col my-6'>
                <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                    <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                        <div className='overflow-hidden border border-gray-200 md:rounded-lg'>
                            <table className='min-w-full divide-y divide-gray-200 '>
                                <thead className='bg-gray-50 '>
                                    <tr>
                                        <th className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 '>
                                            <div className='flex items-center gap-x-3'></div>
                                        </th>

                                        <th className='px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                                            <button className='flex items-center gap-x-2'>
                                                <span>Name</span>
                                            </button>
                                        </th>

                                        <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 '>
                                            <button className='flex items-center gap-x-2'>
                                                <span>Brand</span>
                                            </button>
                                        </th>
                                        <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 '>
                                            Type
                                        </th>
                                        <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 '>
                                            Email address
                                        </th>

                                        <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 '>
                                            ticket Price
                                        </th>

                                        <th className='relative py-3.5 px-4'>
                                            <span className='sr-only'>Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className='bg-white divide-y divide-gray-200  '>
                                    { movies &&
                                        movies.map((movie, idx) => {
                                            const { name, image, brand, type, ticketPrice, email } =
                                                movie
                                            return (
                                                <tr key={ idx }>
                                                    <td className='px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap'>
                                                        <div className='inline-flex items-center gap-x-3'>
                                                            <div className='flex items-center gap-x-2'>
                                                                <img
                                                                    className='w-20 h-20 rounded'
                                                                    src={ image }
                                                                    alt=''
                                                                />
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className='px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap'>
                                                        <div className='inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 '>
                                                            <span className='h-1.5 w-1.5 rounded-full bg-emerald-500'></span>

                                                            <h2 className='text-sm font-normal text-emerald-500'>
                                                                { name }
                                                            </h2>
                                                        </div>
                                                    </td>
                                                    <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                        { brand }
                                                    </td>
                                                    <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                        { type }
                                                    </td>

                                                    <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                        { email }
                                                    </td>
                                                    <td className='px-4 py-4 text-base text-primary font-bold  whitespace-nowrap'>
                                                        ${ ticketPrice }
                                                    </td>

                                                    <td className='px-4 py-4 text-sm whitespace-nowrap'>
                                                        <div className='flex items-center gap-x-6'>
                                                            <button className='text-gray-500 transition-colors duration-200   hover:text-red-500 focus:outline-none'>
                                                                <BsFillTrashFill className='w-5 h-5 text-primary' />
                                                            </button>

                                                            <button className='text-gray-500 transition-colors duration-200 hover:text-yellow-500 focus:outline-none'>
                                                                <BiEdit className='w-5 h-5 text-warning'></BiEdit>
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        }) }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cart
