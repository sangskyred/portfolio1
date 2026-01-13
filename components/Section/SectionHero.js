import React from "react";
import Image from "next/image";
import Link from "next/link";

const SectionHero = () => {
    return (
        <section className="hero row mt-5">
            <div className="col-sm-12 col-lg-6 order-lg-1 order-2 mt-5 mt-lg-0">
                <div className="hero-content pe-4 pe-lg-5">
                    <h1 className="hero-title">Hi, I'm <span className='highlight'>Hoang Van Sang</span></h1>
                    <h2 className="hero-subtitle">I'm a Senior Full Stack Developer</h2>
                    <p className="hero-description">
                        I am a Senior Full-Stack Developer with 6+ years of experience building scalable web applications using Java
                        Spring Boot, NodeJS, PostgreSQL, and frontend frameworks such as ReactJS and NextJS. I excel in designing
                        microservices, securing APIs, and optimizing backend and frontend performance.
                    </p>
                    <div className="cta-group d-flex gap-3">
                        <Link role="button" className="btn btn-gradient-blue btn-lg px-4 shadow-sm" href="#contact">Let's Connect</Link>
                        <Link role="button" className="btn btn-outline-info btn-lg px-4 shadow-sm" data-bs-toggle="modal" data-bs-target="#downloadCV" href="#">Download CV</Link>
                    </div>
                    {/*<!-- Modal -->*/}
                    <div className="modal fade" id="downloadCV" tabIndex="-1" aria-labelledby="downloadCVLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="downloadCVLabel">Download CV</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <p>Are you sure download CV?</p>
                                </div>
                                <div className="modal-footer d-flex align-items-center gap-2">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <Link href="/assets/image/resume.pdf" download="resume.pdf"><button type="button" className="btn btn-primary">Save</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-sm-12 col-lg-6 order-lg-2 order-1 text-center">
                <div className="image-wrapper">
                    <Image
                        src="/assets/desktop/bg_1.jpg"
                        alt="a profile Hoang Van Sang"
                        width={500}
                        height={500}
                        loading="eager"
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                    />
                </div>
            </div>
        </section>
    )
}

export default SectionHero;