import React from "react";

const SectionSkills = () => {
    let listSkill = [
        {
            icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" stroke="currentColor" strokeWidth="0.5"
                fill="currentColor" className="bi bi-code-slash" viewBox="0 0 16 16">
                <path
                    d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0" />
            </svg>
            ),
            title: 'Front-end Development',
            detail: 'React, Next.js, HTML/CSS, Javascript'
        },
        {
            icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" stroke="currentColor"
                strokeWidth="0.5" className="bi bi-hdd-rack" viewBox="0 0 16 16">
                <path
                    d="M4.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M3 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m2 7a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-2.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" />
                <path
                    d="M2 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1v2H2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2h-1V7h1a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm13 2v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1m0 7v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1m-3-4v2H4V7z" />
            </svg>),
            title: 'Back-end Development',
            detail: 'Java, Spring Boot, Node.js, PostgreSQL'
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" stroke="currentColor" strokeWidth="0.5" className="bi bi-bounding-box-circles" viewBox="0 0 16 16">
                    <path d="M2 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2M0 2a2 2 0 0 1 3.937-.5h8.126A2 2 0 1 1 14.5 3.937v8.126a2 2 0 1 1-2.437 2.437H3.937A2 2 0 1 1 1.5 12.063V3.937A2 2 0 0 1 0 2m2.5 1.937v8.126c.703.18 1.256.734 1.437 1.437h8.126a2 2 0 0 1 1.437-1.437V3.937A2 2 0 0 1 12.063 2.5H3.937A2 2 0 0 1 2.5 3.937M14 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2M2 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m12 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
                </svg>
            ),
            title: 'DevOps & Infrastructure',
            detail: 'Redis, Kafka, Docker, CI/CD'
        }
    ]

    return (
        <section id="skills" className="skills row g-0">
            <div className="section-title">
                <h2>Skills</h2>
            </div>
            {listSkill.map((item, key) => (
                <div className="col-md-6 col-lg-4" key={key}>
                    <article className="skill-item">
                        <div className="icon">
                            <span>{item.icon}</span>
                        </div>
                        <div className="detail">
                            <h3>{item.title}</h3>
                            <p className="text-muted">{item.detail}</p>
                        </div>
                    </article>
                </div>
            ))}
        </section>
    )
}

export default SectionSkills;