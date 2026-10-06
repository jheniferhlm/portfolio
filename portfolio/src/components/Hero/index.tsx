import "./index.css";

function Hero() {
    return (
        <main className="hero">
            <header className="hero-header">
                <a href="mailto:halmajhenifer@gmail.com" className="email">
                    HALMAJHENIFER@GMAIL.COM
                </a>

                <div className="location">
                    <span>
                        JUNIOR SOFTWARE DEVELOPER<br />
                        BASED IN CURITIBA, BRAZIL
                    </span>
                </div>
            </header>

            <div className="hero-content">
                <div className="hero-description">
                    <span className="section-label">ABOUT</span>
                    <p>
                        I'M A FULLSTACK SOFTWARE DEVELOPER,
                        CURRENTLY BUILDING DIGITAL SYSTEMS WITH
                        A FOCUS ON PRODUCTIVITY, DIGITIZING PROCESSES,
                        AND SUPPORTING MANUFACTURE.
                    </p>
                </div>

                <div className="hero-technologies">
                    <span className="section-label">TECHNOLOGIES</span>
                    <div className="technology-list">
                        <span>C#</span>
                        <span>.NET Core</span>
                        <span>TYPESCRIPT</span>
                        <span>REACT.JS</span>
                        <span>.NET Framework</span>
                        <span>MSSQL</span>
                    </div>
                </div>
            </div>

            <section className="hero-name">
                <span>jh</span>
                <span className="special-letter">3</span>
                <span>niferhalma</span>
            </section>
        </main>
    );
};

export default Hero;
