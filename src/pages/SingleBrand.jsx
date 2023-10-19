import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const SingleBrand = () => {
    const { name } = useParams();
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            const res = await fetch(`${ import.meta.env.VITE_SERVER_URL }/movies/${ name }`);
            const data = await res.json();
            const allMovies = data.data;
            setLoading(false);
            setMovies(allMovies);
        }
        fetchData()
    }, [])

    return (
        <section className='w-11/12 mx-auto'>

        </section>
    );
};

export default SingleBrand;
