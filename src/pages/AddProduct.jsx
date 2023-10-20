import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import toast from 'react-hot-toast'

const imageHostKey = import.meta.env.VITE_imgbb_key

const AddProduct = () => {
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

    const [selectedBrand, setSelectedBrand] = useState('Select brand')

    const handleAddMovie = (event) => {
        event.preventDefault()
        setLoading(true)
        const form = event.target
        const photo = form.photo.files[0]
        const url = `https://api.imgbb.com/1/upload?key=${ imageHostKey }`
        const formData = new FormData() // Create a new FormData object
        formData.append('image', photo) // Append the photo file to the FormData object
        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then((res) => res.json())
            .then((imgData) => {
                if (imgData.success) {
                    const movieDetails = {
                        name: form.name.value,
                        image: imgData.data.display_url,
                        brand: selectedBrand,
                        type: form.type.value,
                        details: form.details.value,
                        ticketPrice: form.ticketPrice.value,
                        rating: form.rating.value,
                    }
                    fetch(`${ import.meta.env.VITE_SERVER_URL }/add_movie`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(movieDetails),
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            console.log(data)
                            if (data.data.acknowledged) {
                                toast.success('Movie added Successfully 🎉', {
                                    autoClose: 1000,
                                })
                                setLoading(false)
                                form.reset()
                            }
                        })
                }
            })
    }

    return (
        <section className='w-11/12 mx-auto py-10'>
            <Link
                to={ '/' }
                className='btn btn-link no-underline capitalize text-2xl text-primary'
            >
                <AiOutlineArrowLeft />
                <span className='ml-2'>Back to home</span>
            </Link>
            <div className='bg-[#F4F3F0] p-10 rounded-md shadow-md'>
                <div className='text-center'>
                    <h3 className='text-3xl mb-5'>
                        <strong>Add New Movie</strong>
                    </h3>
                </div>
                <form
                    onSubmit={ handleAddMovie }
                    className='grid md:grid-cols-2 grid-cols-1 gap-5'
                >
                    <div className='form-control w-full'>
                        <label className='label font-poppins font-semibold'>Name</label>
                        <input
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
                            defaultValue={ selectedBrand }
                        >
                            <option disabled>Select brand</option>
                            { brands &&
                                brands.map((brand) => {
                                    const { brandName } = brand
                                    return (
                                        <option key={ brandName } value={ brandName }>
                                            { brandName }
                                        </option>
                                    )
                                }) }
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
                        />
                    </div>
                    <div className='form-control w-full'>
                        <label className='label font-poppins font-semibold'>type</label>
                        <input
                            type='text'
                            name='type'
                            placeholder='Enter Movie type'
                            className='input input-bordered w-full input-primary'
                        />
                    </div>
                    <div className='form-control w-full'>
                        <label className='label font-poppins font-semibold'>Ratings</label>
                        <input
                            type='text'
                            name='rating'
                            placeholder='Enter rating'
                            className='input input-bordered w-full input-primary'
                        />
                    </div>
                    <div className='form-control w-full'>
                        <label className='label font-poppins font-semibold'>
                            Movie Poster
                        </label>
                        <input
                            type='file'
                            name='photo'
                            className='file-input file-input-bordered file-input-primary w-full'
                        />
                    </div>
                    <div className='form-control w-full md:col-span-2'>
                        <label className='label font-poppins font-semibold'>Details</label>
                        <textarea
                            className='textarea textarea-primary h-40'
                            name='details'
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
        </section>
    )
}

export default AddProduct
