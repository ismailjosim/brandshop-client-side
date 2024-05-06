import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes'
import useNavigateTop from './hooks/useNavigateTop'

function App() {
	useNavigateTop()
	return (
		<>
			<RouterProvider router={routes} />
		</>
	)
}

export default App
