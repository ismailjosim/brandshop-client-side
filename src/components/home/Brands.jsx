import { Link } from 'react-router-dom';
import SectionHeading from '../../utils/SectionHeading';

const heading = { primary: "Our Top Brands", secondary: "" };


const Brands = () => {
    // to={ `/brands/${ "item.name" }` }

    return (
        <section>
            <SectionHeading heading={ heading } />
            <div className="w-11/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {/* Single Brand */ }
                { [1, 2, 3, 4, 5, 6].map((item, idx) => {

                    return (
                        <Link key={ idx } className="w-full text-center">
                            <img className="object-cover object-center w-full h-60 mx-auto rounded-lg" src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=739&q=80" alt="avatar" />
                        </Link>
                    )
                })

                }
            </div>


        </section>
    );
};

export default Brands;
