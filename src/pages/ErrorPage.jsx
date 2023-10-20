import { Link } from 'react-router-dom';
import errorImg from '../assets/not-found.png'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'

const ErrorPage = () => {
    return (
        <section className="bg-white">
            <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
                <div className="wf-ull lg:w-1/2">
                    <p className="text-2xl font-semibold text-error ">404 error</p>
                    <h1 className="mt-3 text-2xl font-semibold text-gray-800  md:text-3xl">Page not found</h1>
                    <p className="mt-4 text-gray-500 ">Sorry, the page you are looking for doesn't exist.Here are some helpful links:</p>

                    <div className="flex items-center mt-6 gap-x-3">
                        <Link to={ '/' } className="btn btn-sm btn-primary text-white font-semibold">
                            <BsFillArrowLeftCircleFill />
                            <span> Take me home</span>
                        </Link>
                    </div>
                </div>

                <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
                    <img className="w-full max-w-lg lg:mx-auto" src={ errorImg } alt="" />
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;
