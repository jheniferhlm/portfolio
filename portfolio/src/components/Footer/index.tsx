import "./index.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-main">
                <div className="footer-title">
                    <span>© 2026 Jhenifer Halma</span>
                </div>
                <nav className="footer-links">
                    <a
                        href="https://www.linkedin.com/in/jheniferhalma/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        LINKEDIN
                    </a>
                    <a
                        href="https://github.com/jheniferhlm"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GITHUB
                    </a>
                    <a href="mailto:halmajhenifer@gmail.com">
                        EMAIL
                    </a>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;