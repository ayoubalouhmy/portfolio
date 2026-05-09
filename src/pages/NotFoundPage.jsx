import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontFamily: '"Kadwa", serif',
      }}
    >
      <h1 style={{ fontSize: '8rem', color: '#4ACA99', margin: 0, lineHeight: 1 }}>404</h1>
      <h2 style={{ marginTop: '10px' }}>Page Not Found</h2>
      <p style={{ color: '#7E7E7E', maxWidth: '400px', marginTop: '10px' }}>
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        style={{
          marginTop: '24px',
          padding: '10px 28px',
          backgroundColor: '#4ACA99',
          color: 'white',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 'bold',
          transition: '0.3s ease',
        }}
      >
        ← Back to Home
      </Link>
    </div>
  )
}
