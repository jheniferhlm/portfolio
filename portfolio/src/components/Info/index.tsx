import "./index.css";

function Info() {
    return (
        <main className="info">
            <header className="info-header">
                <a href="/" className="info-back">
                    ⤶ BACK
                </a>
                <span className="info-title">
                    INFO
                </span>
            </header>

            <section className="info-grid">
                <div className="info-category">
                    <h2>EXPERIENCE</h2>
                </div>
                <div className="info-column experience-column">
                    <div className="info-item">
                        <h3>
                            FULL-STACK SOFTWARE DEVELOPER
                        </h3>
                        <p className="info-role">
                            Bosch Brasil
                        </p>
                        <span className="info-date">
                            10/2026..ongoing
                        </span>
                    </div>
                    <div className="info-item">
                        <h3>
                            TRAINEE SYSTEMS DEVELOPER
                        </h3>
                        <p className="info-role">
                            Bosch Brasil
                        </p>
                        <span className="info-date">
                            08/2026..10/2026
                        </span>
                    </div>
                    <div className="info-item">
                        <h3>
                            APPRENTICE SYSTEMS DEVELOPER
                        </h3>
                        <p className="info-role">
                            Bosch Brasil
                        </p>
                        <span className="info-date">
                            02/2025..08/2025
                        </span>
                    </div>
                </div>

                <div className="info-category">
                    <h2>EDUCATION</h2>
                </div>
                <div className="info-column">
                    <div className="info-item">
                        <h3>
                            UNIVERSIDADE TUIUTI DO PARANÁ (UTP)
                        </h3>
                        <p className="info-role">
                            Bachelor's degree in Software Engineering
                        </p>
                        <span className="info-date">
                            2026..ongoing
                        </span>
                    </div>
                    <div className="info-item">
                        <h3>
                            PONTIFÍCIA UNIVERSIDADE CATÓLICA DO PARANÁ (PUCPR)
                        </h3>
                        <p className="info-role">
                            Technologist's degree in Systems Analysis and Development
                        </p>
                        <span className="info-date">
                            2024..2026
                        </span>
                    </div>
                    <div className="info-item">
                        <h3>
                            SENAI PR + Bosch Brasil
                        </h3>
                        <p className="info-role">
                            Technician in Systems Development
                        </p>
                        <span className="info-date">    
                            2024..2026
                        </span>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Info;
