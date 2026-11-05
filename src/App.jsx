import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Home from './home.jsx'
import Experience from './Experience.jsx'
import Projects from './project.jsx'
import Contact from './contact.jsx'

export default function App() {
    return (
        <BrowserRouter>

            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div className="container">

                    <Link className="navbar-brand" to="/">
                        Yahdih
                    </Link>

                    <div className="navbar-nav ms-auto">
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/experience">Experience</Link>
                        <Link className="nav-link" to="/projects">Projects</Link>
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </div>

                </div>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<h2 className="text-center mt-5">Page Not Found</h2>} />
            </Routes>

        </BrowserRouter>
    )
}