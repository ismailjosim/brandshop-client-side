import React, { useEffect, useState } from 'react';

const Cart = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            const res = await fetch(`${ import.meta.env.VITE_SERVER_URL }/cart?email=ismailjosim@gmail.com`);
            const data = await res.json();
            const allMovies = data.data;
            setLoading(false);
            setMovies(allMovies);
        }
        fetchData()
    }, [])


    return (
        <div>

        </div>
    );
};

export default Cart;
