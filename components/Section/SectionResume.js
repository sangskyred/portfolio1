import React from "react";

const SectionResum = () => {
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
        <section id="resume" className="resum row g-0">
            <div className="section-title">
                <h2>Resume</h2>
            </div>
            <div className="row g-0">
                <div className="col-md-4 col-lg-3">
                    <div className="tab-lists">
                        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist">
                            <button className="nav-link resume-nav-link active" id="v-pills-work-tab" data-bs-toggle="pill" data-bs-target="#v-pills-work" type="button" role="tab" aria-controls="v-pills-work" aria-selected="true">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5m1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0M1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5"></path></svg>
                                Work Experience
                            </button>
                            <button className="nav-link resume-nav-link" id="v-pills-edu-tab" data-bs-toggle="pill" data-bs-target="#v-pills-edu" type="button" role="tab" aria-controls="v-pills-edu" aria-selected="false">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917zM8 8.46 1.758 5.965 8 3.052l6.242 2.913z"></path><path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46z"></path></svg>
                                Education
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-8 col-lg-9">
                    <div className="tab-content" id="v-pills-tabContent">
                        {/* <!-- Work Experience Tab --> */}
                        <div className="tab-pane fade show active" id="v-pills-work" role="tabpanel" aria-labelledby="v-pills-work-tab">
                            {/* <div className="accordion accordion-flush" id="accordionWorkExperience">
                                {listExperience.map((item, key) =>
                                    <div className="accordion-item" key={key}>
                                        <h2 className="accordion-header" id={`panelsStayOpen-${key}`}>
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#panelsStayOpen-collapse${key}`} aria-expanded="false" aria-controls={`panelsStayOpen-collapse${key}`}>
                                                {item.company + " | " + item.time}
                                            </button>
                                        </h2>
                                        <div id={`panelsStayOpen-collapse${key}`} className={`accordion-collapse collapse ${key === 0 ? 'show' : ''}`} aria-labelledby={`panelsStayOpen-${key}`}>
                                            <div className="accordion-body">
                                                <ul>
                                                    {item.listResponsibility.map((item2, key2) =>
                                                        <li key={key2}>
                                                            {item2}
                                                        </li>
                                                    )}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )}

                            </div> */}

                            <div className="accordion" id="accordionPanelsStayOpenExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                            Accordion Item #1
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                        <div className="accordion-body">
                                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                            Accordion Item #2
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                        <div className="accordion-body">
                                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                            Accordion Item #3
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                        <div className="accordion-body">
                                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Education Tab --> */}
                        <div className="tab-pane fade" id="v-pills-edu" role="tabpanel" aria-labelledby="v-pills-edu-tab">
                            <div className="content-education">
                                <h2 className="h4 fw-bold text-primary">Ho Chi Minh City University of Industry</h2>
                                <p className="fw-bold fs-5">Bachelor of Information Technology</p>
                                <p className="text-muted">09/2015 - 06/2019</p>
                                <p><span className="px-2 bg-light text-muted border">GPA: 3.0/4</span></p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default SectionResum;