import { useEffect, useState } from 'react';


const useBrands = () => {
    const [loading, setLoading] = useState(false)
    const [brands, setBrands] = useState([])

    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            const res = await fetch(`${ import.meta.env.VITE_SERVER_URL }/brands`)
            const data = await res.json()
            const allBrands = data.data
            setLoading(false)
            setBrands(allBrands)
        }
        fetchData()
    }, [])

    return { loading, brands }
};

export default useBrands;
