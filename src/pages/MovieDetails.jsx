import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
    const { id } = useParams();
    const [details, setDetails] = useState(null);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            const res = await fetch(`${ import.meta.env.VITE_SERVER_URL }/singleMovie/${ id }`);
            const data = await res.json();
            const singleMovie = data.data;
            setLoading(false);
            setDetails(singleMovie);
        }
        fetchData()
    }, [])

    const { name, image, brand, type, details: description, ticketPrice, rating, _id } = details || {}

    return (
        <div className='w-11/12 mx-auto my-10'>

            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-col-reverse lg:flex-row">
                    <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">MOVIE NAME</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">{ name }</h1>
                        <p className="leading-relaxed mb-4">{ description }</p>
                        <div className="flex border-t border-gray-200 py-2">
                            <span className="text-gray-500">Brand</span>
                            <span className="ml-auto text-primary font-bold">{ brand }</span>
                        </div>
                        <div className="flex border-t border-gray-200 py-2">
                            <span className="text-gray-500">Type</span>
                            <span className="ml-auto text-primary font-bold">{ type }</span>
                        </div>
                        <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                            <span className="text-gray-500">Rating</span>
                            <span className="ml-auto text-cyan-600 font-bold">{ rating }</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="title-font font-medium text-2xl text-gray-900">Price: ${ ticketPrice }</p>
                            <button className="btn btn-primary rounded hover:scale-105 text-white transition-all duration-300 hover:bg-secondary hover:border-secondary">Book Now</button>
                        </div>
                    </div>
                    <img className='lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded lg:mb-0 mb-5' src={ image } alt="" />
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;
