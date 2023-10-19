const BrandProducts = ({ movie }) => {
    const { name, image, brand, type, details, ticketPrice, rating } = movie || {}
    return (

        <>
            {/*<!-- Component: Horizontal card--> */ }
            <div className="flex flex-col overflow-hidden my-10 bg-white rounded shadow-md text-slate-500 shadow-slate-200 sm:flex-row">
                {/*  <!-- Image --> */ }
                <figure className="flex-1">
                    <img
                        src={ image }
                        alt="card image"
                        className="h-full w-full"
                    />
                </figure>
                {/*  <!-- Body--> */ }
                <div className="flex-1 flex flex-col justify-center p-6 sm:mx-6 sm:px-0">

                    <header className="flex items-center gap-4 mb-4">
                        <div
                            className="relative inline-flex items-center justify-center w-12 h-12 text-white rounded-full"
                        >
                            <img
                                src={ image }
                                className="rounded-full w-10 h-10"
                            />
                        </div>
                        <div>
                            <h3 className="text-xl font-medium text-slate-700">
                                { name }
                            </h3>
                            <p className="text-sm text-slate-400">Produced By: <span className='font-bold text-primary'>{ brand }</span> </p>
                        </div>
                    </header>
                    <p>
                        { details }
                    </p>
                    <div className='flex justify-between items-center mt-10'>
                        <button className='btn btn-primary text-white'>Update</button>
                        <button className='btn btn-primary text-white'>Details</button>
                    </div>

                </div>
            </div>
            {/*<!-- End Horizontal card--> */ }
        </>
    )
}



export default BrandProducts;


