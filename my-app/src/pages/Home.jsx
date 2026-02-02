import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  return (
    <>
      <h2>Home</h2>
      <p className="subtitle">
        This is a modern Single Page Application built with Vite and React Router.
      </p>

      <button onClick={() => navigate('/about')}>
        Learn More →
      </button>
    </>
  )
}

export default Home
