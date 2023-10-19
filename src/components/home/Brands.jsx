import { Link } from 'react-router-dom';
import SectionHeading from '../../utils/SectionHeading';
import { useEffect, useState } from 'react';

const heading = { primary: "Our Top Brands", secondary: "" };


const Brands = () => {
    //
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            const res = await fetch("https://moviedb-sigma-bice.vercel.app/brands");
            const data = await res.json();
            const allBrands = data.data;
            setLoading(false);
            setItems(allBrands);
        }
        fetchData()
    }, [])


    return (
        <section>
            <SectionHeading heading={ heading } />
            <div className="w-11/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {/* Single Brand */ }
                { items && items.map((item, idx) => {
                    return (
                        <Link to={ `/brands/${ item.brandName }` } key={ idx } className="w-full text-center">
                            <img className="w-full h-60 mx-auto rounded-lg border-2 p-5 hover:shadow-md transition-all ease-in-out duration-300 shadow-lg border-primary" src={ item.brandLogo } alt="avatar" />
                        </Link>
                    )
                })

                }
            </div>


        </section>
    );
};

export default Brands;
