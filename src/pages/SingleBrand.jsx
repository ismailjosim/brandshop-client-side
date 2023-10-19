import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SectionHeading from '../utils/SectionHeading';
import BrandProducts from '../components/SingleBrand/BrandProducts';
const heading = { primary: "Top Movies", secondary: "Movies that viewers like most" };



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


    let content;
    if (loading) {
        content = <div className='text-center'>loading</div>;
    }
    if (!loading && movies.length === 0) {
        content = <h3 className='text-center'>No Movies Available Right Now!</h3>
    }

    if (!loading && movies.length > 0) {
        content = <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5'>
            { movies.map((movie, idx) => <BrandProducts movie={ movie } key={ idx } />) }
        </div>

    }

    return (
        <section className='w-11/12 mx-auto'>
            <SectionHeading heading={ heading } />
            { content }
        </section>
    );
};

export default SingleBrand;
