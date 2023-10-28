import React, { useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth'
import ProductTable from '../components/AllProducts/ProductTable'
import toast from 'react-hot-toast'
import axios from 'axios'

const Cart = () => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const { user } = useAuth()

    useEffect(() => {
        setLoading(true)
        const url = `${ import.meta.env.VITE_SERVER_URL }/cart?email=${ user?.email }`
        axios.get(url, { withCredentials: true })
            .then(res => {
                const allMovies = res.data.data
                setLoading(false)
                setMovies(allMovies)
            })


        // const fetchData = async () => {
        //     const res = await fetch(
        //         `${ import.meta.env.VITE_SERVER_URL }/cart?email=${ user?.email }`,
        //         {
        //             credentials: 'include', // Include cookies with the request
        //         }
        //     );
        //     const data = await res.json();
        //     const allMovies = data.data;
        //     setLoading(false);
        //     setMovies(allMovies);
        // };

        // fetchData();

    }, [])

    const handleDeleteMovie = (id) => {
        fetch(`${ import.meta.env.VITE_SERVER_URL }/delete_cart/${ id }`, {
            method: 'DELETE',
            'content-type': 'application/json',
        })
            .then((res) => res.json())
            .then((deleteResult) => {
                if (deleteResult.data.deletedCount > 0) {
                    toast.success('Movie Delete From Database Successfully ❤️')
                    const restMovies = movies.filter((mv) => mv._id !== id)
                    setMovies(restMovies)
                }
            })
    }

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
                                        movies.map((movie, idx) => (
                                            <ProductTable
                                                handleDeleteMovie={ handleDeleteMovie }
                                                movie={ movie }
                                                key={ idx }
                                            ></ProductTable>
                                        )) }
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
