import { Link } from 'react-router-dom'

export default function Experience() {
    return (
        <div className="container mt-5">
            <h2>My Experience</h2>

            <div className="card p-3 mt-3">
                <h4>Full Stack Development</h4>
                <h6>OFPPT - Développement Digital</h6>
                <p>2025 - Present</p>

                <p>
                    Learning programming, databases and web development.
                </p>

                <p>
                    HTML, CSS, JavaScript, PHP, React, Laravel, MySQL.
                </p>

                <div>
                    <Link to="/projects" className="btn btn-primary">
                        See My Projects
                    </Link>
                </div>
            </div>
        </div>
    )
}