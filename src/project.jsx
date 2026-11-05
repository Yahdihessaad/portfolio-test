import { Link } from 'react-router-dom'

export default function Projects() {

    const projects = [
        {
            title: "Book Management",
            description: "Display, filter and search books.",
            tech: "React JS"
        },
        {
            title: "Medical Sihati",
            description: "Medical appointment management.",
            tech: "React, Laravel, MySQL"
        }
    ]

    return (
        <div className="container mt-5">
            <h2>My Projects</h2>

            <div className="row mt-3">
                {projects.map((p, i) => (
                    <div className="col-md-6 mb-3" key={i}>
                        <div className="card p-3">
                            <h4>{p.title}</h4>
                            <p>{p.description}</p>
                            <p className="text-primary">{p.tech}</p>
                        </div>
                    </div>
                ))}
            </div>

            <Link to="/contact" className="btn btn-primary">
                Contact Me
            </Link>
        </div>
    )
}