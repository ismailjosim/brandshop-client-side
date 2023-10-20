import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const useMovieDetails = () => {
    const { id } = useParams()
    const [singleMovie, setSingleMovie] = useState(null)
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            const res = await fetch(
                `${ import.meta.env.VITE_SERVER_URL }/singleMovie/${ id }`,
            )
            const data = await res.json()
            const singleMovie = data.data
            setLoading(false)
            setSingleMovie(singleMovie)
        }
        fetchData()
    }, [id])

    return { singleMovie, loading }

};

export default useMovieDetails;
