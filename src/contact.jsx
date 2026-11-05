import { Link } from 'react-router-dom'

export default function Contact() {
    return (
        <div className="container mt-5">
            <h2>Contact Me</h2>

            <div className="card p-4 mt-3">
                <p>Email: your-email@gmail.com</p>
                <p>GitHub: github.com/Yahdihessaad</p>

                <div>
                    <a
                        href="mailto:your-email@gmail.com"
                        className="btn btn-primary me-2"
                    >
                        Send Email
                    </a>

                    <Link to="/" className="btn btn-outline-dark">
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    )
}