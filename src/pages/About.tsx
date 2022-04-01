import { Link, Outlet } from 'react-router-dom'

const About = () => {
  return (
    <>
      <div style={{ display: 'flex', gap: '8px' }}>
        <Link to="a">AboutA</Link>
        <Link to="b">AboutB</Link>
      </div>
      <Outlet />
    </>
  )
}

export default About
