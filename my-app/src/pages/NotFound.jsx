
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <>
      <h2>404</h2>
      <p>Page not found.</p>
      <Link to="/">Go back home</Link>
    </>
  )
}

export default NotFound
