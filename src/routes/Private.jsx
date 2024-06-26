import { Navigate, useLocation } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const Private = ({ children }) => {
	const { user, loading } = useAuth()
	const location = useLocation()

	if (loading) {
		return (
			<div className='flex justify-center my-20'>
				<div className='w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-primary'></div>
			</div>
		)
	}

	if (!user) {
		return <Navigate to='/login' state={{ from: location }} replace></Navigate>
	}
	return children
}

export default Private
