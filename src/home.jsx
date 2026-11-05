import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className="container text-center mt-5">
            <h1>Hi, I'm Yahdih Essaad</h1>
            <h3 className="text-primary">Full Stack Developer</h3>

            <p>
                I'm interested in web development and modern technologies.
            </p>

            <Link to="/projects" className="btn btn-primary me-2">
                My Projects
            </Link>

            <Link to="/contact" className="btn btn-outline-dark">
                Contact Me
            </Link>
        </div>
    )
}