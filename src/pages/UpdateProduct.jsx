import { useState } from 'react'
import toast from 'react-hot-toast'
import useBrands from '../hooks/useBrands'
import useMovieDetails from '../hooks/useMovieDetails'
import useNavigateUser from '../hooks/useNavigateUser'
import { useNavigate } from 'react-router-dom'

const UpdateProduct = () => {
    const { singleMovie } = useMovieDetails()
    const [loading, setLoading] = useState(false)
    const { brands } = useBrands()
    const { name, image, brand, type, details, ticketPrice, rating, _id } = singleMovie || {};
    const [selectedBrand, setSelectedBrand] = useState(brand);
    const navigate = useNavigate();



    const handleUpdateMovie = (event) => {
        event.preventDefault()
        setLoading(true)
        const form = event.target
        const movieDetails = {
            name: form.name.value,
            brand: selectedBrand,
            type: form.type.value,
            details: form.details.value,
            ticketPrice: form.ticketPrice.value,
            rating: form.rating.value,
            image
        }
        fetch(`${ import.meta.env.VITE_SERVER_URL }/update_movie/${ _id }`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(movieDetails),
        })
            .then((res) => res.json())
            .then((data) => {

                if (data.data.acknowledged) {
                    toast.success('Movie Info Updated Successfully 🎉', {
                        autoClose: 1000,
                        position: "top-center"

                    })
                    setLoading(false)
                    form.reset()
                    navigate("/products")
                }
            })
    }

    return (
        <section className='w-11/12 mx-auto py-10'>
            <div className='p-10'>
                <div className='text-center'>
                    <h3 className='text-3xl mb-5'>
                        <strong>
                            Update Movie Information:{ ' ' }
                            <span className='font-black text-primary'> { name }</span>
                        </strong>
                    </h3>
                </div>
                <div className='grid grid-cols-2'>
                    <div
                        className='w-[90%] border-8 border-primary rounded-xl shadow-lg bg-no-repeat bg-cover'
                        style={ { backgroundImage: `url(${ image })` } }
                    ></div>
                    <form
                        onSubmit={ handleUpdateMovie }
                        className='grid md:grid-cols-2 grid-cols-1 gap-5'
                    >
                        <div className='form-control w-full'>
                            <label className='label font-poppins font-semibold'>Name</label>
                            <input
                                defaultValue={ name }
                                type='text'
                                placeholder='Enter Movie Name'
                                name='name'
                                className='input input-bordered input-primary w-full'
                            />
                        </div>
                        <div className='form-control w-full'>
                            <label className='label'>Brand</label>
                            <select
                                onChange={ (e) => setSelectedBrand(e.target.value) }
                                className='select select-primary w-full text-base'
                                value={ selectedBrand } // Use value instead of defaultValue
                            >
                                <option disabled>Select brand</option>
                                { brands && brands.length > 0 ? (
                                    brands.map((brand) => {
                                        const { brandName } = brand;
                                        return (
                                            <option key={ brandName } value={ brandName }>
                                                { brandName }
                                            </option>
                                        );
                                    })
                                ) : (
                                    <option value={ brand || '' }>{ brand || 'No Brands Found' }</option>
                                ) }
                            </select>
                        </div>
                        <div className='form-control w-full'>
                            <label className='label font-poppins font-semibold'>
                                ticket Price
                            </label>
                            <input
                                type='number'
                                name='ticketPrice'
                                placeholder='Enter price'
                                className='input input-bordered w-full input-primary'
                                defaultValue={ ticketPrice }
                            />
                        </div>
                        <div className='form-control w-full'>
                            <label className='label font-poppins font-semibold'>type</label>
                            <input
                                type='text'
                                name='type'
                                defaultValue={ type }
                                placeholder='Enter Movie type'
                                className='input input-bordered w-full input-primary'
                            />
                        </div>
                        <div className='form-control w-full'>
                            <label className='label font-poppins font-semibold'>
                                Ratings
                            </label>
                            <input
                                type='text'
                                name='rating'
                                defaultValue={ rating }
                                placeholder='Enter rating'
                                className='input input-bordered w-full input-primary'
                            />
                        </div>
                        <div className='form-control w-full'>
                            <label className='label font-poppins font-semibold'>
                                Movie Poster
                            </label>
                            <input
                                readOnly
                                disabled
                                defaultValue={ image }
                                placeholder='Enter rating'
                                className='input input-bordered w-full input-primary'
                            />
                        </div>
                        <div className='form-control w-full md:col-span-2'>
                            <label className='label font-poppins font-semibold'>
                                Details
                            </label>
                            <textarea
                                className='textarea textarea-primary h-40'
                                name='details'
                                defaultValue={ details }
                                placeholder='Details'
                                style={ { resize: 'none', overflow: 'auto' } }
                            ></textarea>
                        </div>

                        <div className='form-control w-full mt-10 md:col-span-2 md:flex justify-end items-end'>
                            { loading ? (
                                <button className='btn btn-primary'>
                                    <span>Processing</span>
                                    <span className='relative only:-mx-5'>
                                        <svg
                                            className='w-5 h-5 text-white animate-spin'
                                            xmlns='http://www.w3.org/2000/svg'
                                            fill='none'
                                            viewBox='0 0 24 24'
                                            role='graphics-symbol'
                                            aria-labelledby='title-41 desc-41'
                                        >
                                            <title id='title-41'>Icon title</title>
                                            <desc id='desc-41'>
                                                A more detailed description of the icon
                                            </desc>
                                            <circle
                                                className='opacity-25'
                                                cx='12'
                                                cy='12'
                                                r='10'
                                                stroke='currentColor'
                                                strokeWidth='4'
                                            ></circle>
                                            <path
                                                className='opacity-75'
                                                fill='currentColor'
                                                d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                                            ></path>
                                        </svg>
                                    </span>
                                </button>
                            ) : (
                                <button
                                    disabled={ loading }
                                    type='submit'
                                    className='btn btn-primary'
                                >
                                    Add Movie
                                </button>
                            ) }
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default UpdateProduct
