'use client'

import React, { useState } from "react";

const Accordion = () => {
    const [openIndices, setOpenIndices] = useState([]);

    const handleToggle = (index) => {
        setOpenIndices(prev =>
            prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
        );
    };

    let listExperience = [
        {
            position: 'Senior Developer',
            time: 'August 2022 - November 2025',
            company: 'Transcosmos Technology Vietnam',
            listResponsibility: [
                'Developed and maintained web applications using Java, Spring Boot, and Hibernate.',
                'Handle assigned tasks to ensure progress and participate in Agile methodologies, daily meetings and sprint planning sessions.',
                'Implemented RESTful APIs and integrated third-party services utilizing PostgreSQL for relational data ensuring efficient data handling and storage.',
                'Optimized system performance using Redis caching, asynchronous processing, and load balancing to handle high traffic and data volumes.',
                'Ensured code quality with JUnit, Mockito for unit/integration testing, integrated into CI/CD pipelines with Jenkins.',
                'Lead code reviews and mentor junior developers, making architectural decisions or providing technical direction for the team.',
                'Build an API Gateway architecture that integrates with Kafka to optimize service management, improve system performance, and ensure high availability.'
            ]
        },
        {
            position: 'Junior Web Developer',
            time: 'May 2020 - August 2022',
            company: 'Viet Tinh Anh Company',
            listResponsibility: [
                "Built a scalable e-commerce platform using Spring Boot microservices, optimizing user authentication, product catalog, payment systems, and inventory management.",
                'Enhanced product search by integrating Elasticsearch, significantly improving response times and product discoverability.',
                'Implemented a responsive ReactJS frontend with RESTful API integration, enabling real-time interactions and a seamless user experience.',
                'Performed integration testing and resolved bugs in staging, ensuring system stability and reliability.',
                'Integrated Viettel Post and GrabExpress APIs, automating logistics and improving order fulfillment.'
            ]
        },
        {
            position: 'Software Developer',
            time: 'June 2019 - May 2020',
            company: 'Viet Vui Travel Company',
            listResponsibility: [
                "Maintenance and develop of the company's website system.",
                'Developed new features under the guidance of the team leader, aligning with project goals and deadlines.',
                "Modify the user interface based on the design team's mockups.",
                "Implemented a Customer Reviews feature, allowing authenticated users to rate and review tours, with moderation and reporting tools available for administrators.",
                "Integrated Google Maps and a weather API to enhance the overall user experience."
            ]
        }
    ];
    return (
        <div className="accordion-container">
            {listExperience.map((item, index) => {
                const isOpen = openIndices.includes(index);
                return (
                    <div key={index} className="accordion-item" aria-label={item.company}>
                        <div className="accordion-header">
                            <button
                                onClick={() => handleToggle(index)}
                                className={isOpen ? "active" : ""}
                                aria-expanded= {isOpen ? true : false}
                            >
                                <div className="header-info">
                                    <span className="title">{item.company}</span>
                                </div>
                                <span className="icon-toggle"></span>
                            </button>
                        </div>

                        {/* Lớp bọc này cực kỳ quan trọng để tạo hiệu ứng mượt */}
                        <div className={`accordion-collapse ${isOpen ? "show" : ""}`}>
                            <div className="accordion-content-inner">
                                <p className="time">{item.time}</p>
                                <ul>
                                    {item.listResponsibility.map((res, idx) => (
                                        <li key={idx}>{res}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default Accordion;