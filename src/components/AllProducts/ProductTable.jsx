import { BsFillTrashFill } from 'react-icons/bs'
import { BiEdit } from 'react-icons/bi'
import { Link } from 'react-router-dom'


const ProductTable = ({ movie, handleDeleteMovie }) => {
    const { _id, name, image, brand, type, ticketPrice, email } = movie || {}

    return (
        <tr>
            <td className='px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap'>
                <div className='inline-flex items-center gap-x-3'>
                    <div className='flex items-center gap-x-2'>
                        <img className='w-20 h-20 rounded' src={ image } alt='' />
                    </div>
                </div>
            </td>
            <td className='px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap'>
                <div className='inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 '>
                    <span className='h-1.5 w-1.5 rounded-full bg-emerald-500'></span>

                    <h2 className='text-sm font-normal text-emerald-500'>{ name }</h2>
                </div>
            </td>
            <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                { brand }
            </td>
            <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                { type }
            </td>

            <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                { email }
            </td>
            <td className='px-4 py-4 text-base text-primary font-bold  whitespace-nowrap'>
                ${ ticketPrice }
            </td>

            <td className='px-4 py-4 text-sm whitespace-nowrap'>
                <div className='flex items-center gap-x-6'>
                    <button onClick={ () => handleDeleteMovie(_id) } className='text-gray-500 transition-colors duration-200   hover:text-red-500 focus:outline-none'>
                        <BsFillTrashFill className='w-5 h-5 text-primary' />
                    </button>

                    <Link to={ `/update_product/${ _id }` } className='text-gray-500 transition-colors duration-200 hover:text-yellow-500 focus:outline-none'>
                        <BiEdit className='w-5 h-5 text-warning'></BiEdit>
                    </Link>
                </div>
            </td>
        </tr>
    )
}

export default ProductTable
