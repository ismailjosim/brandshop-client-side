import SectionHeading from '../../utils/SectionHeading';

const heading = { primary: "Our Top Brands", secondary: "" };


const Brands = () => {


    return (
        <section>
            <SectionHeading heading={ heading } />
            <div className="w-11/12 mx-auto grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-5">

            </div>
        </section>
    );
};

export default Brands;
