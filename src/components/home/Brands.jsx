import { Link } from 'react-router-dom';
import SectionHeading from '../../utils/SectionHeading';
import useBrands from '../../hooks/useBrands';
import "../../styles/index.css"
const heading = { primary: "Our Top Brands", secondary: "" };


const Brands = () => {
    const { brands } = useBrands();
    return (
        <section>
            <SectionHeading heading={ heading } />
            <div className="w-11/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {/* Single Brand */ }
                { brands && brands.map((item, idx) => {
                    return (
                        <Link to={ `/brands/${ item.brandName }` } key={ idx } className="w-full text-center brand_link">
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
