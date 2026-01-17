"use client";
import React, { useState, useCallback } from "react"; // 1. Import useCallback
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from "next/link";
import listInfor from "../IconsList/ListInfor";
import { validationContact } from "../../validation/validationContact";

const SectionContact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }, []);

    const handleBlur = useCallback((e) => {
        const { name, value } = e.target;
        const error = validationContact(name, value);
        setErrors(prev => ({ ...prev, [name]: error }));
    }, []);

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();

        const newErrors = {
            name: validationContact('name', formData.name),
            email: validationContact('email', formData.email),
            message: validationContact('message', formData.message),
        };

        setErrors(newErrors);

        if (Object.values(newErrors).every(err => !err)) {
            setLoading(true);

            try {
                await fetch('https://script.google.com/macros/s/AKfycbysO_54jifXYW89CcqqHACaGbgSpj3b0fPduXdtqvIElFjV2lZu07hLhsVxTqXG6jGH/exec', {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                });

                toast.success("Sent successfully.");
                setFormData({ name: '', email: '', message: '' });
                setErrors({});

            } catch (error) {
                console.error(error);
                toast.error("Something went wrong.");
            } finally {
                setLoading(false);
            }
        }
    }, [formData]);

    return (
        <section id="contact" className="contact">

            <div className="container">
                <ToastContainer />

                <div className="section-title">
                    <h2>Contact</h2>
                </div>
                <div className="row g-0 gx-4">
                    <div className="col-sm-12 col-md-12 col-lg-4">
                        <div className="contact-info">
                            {listInfor.map((item, key) => (
                                <div key={key} className="info-item">
                                    <div className="icon"><span>{item.icon}</span></div>
                                    <div className="detail">
                                        <h3>{item.title}</h3>
                                        <p>{item.detail}</p>
                                    </div>
                                </div>
                            ))}
                            <div className="social-links">
                                <Link href="#" title="Linkedin" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                                    </svg>
                                </Link>
                                <Link href="#" title="Telegram" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-telegram" viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                    </div>

                    {/* Phần Form */}
                    <div className="col-sm-12 col-md-12 col-lg-8">
                        <div className="form-data">
                            <form method="POST" autoComplete="off" onSubmit={handleSubmit}>
                                <div className="form-group mb-2">
                                    <label htmlFor="inputName">Your Name</label>
                                    <input
                                        type="text"
                                        className={`form-control mt-1 ${errors.name ? 'is-invalid' : ''}`}
                                        id="inputName"
                                        name="name"
                                        placeholder="Enter your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.name && <div className="invalid-feedback d-block">{errors.name}</div>}
                                </div>

                                <div className="form-group mb-2">
                                    <label htmlFor="inputEmail">Your Email</label>
                                    <input
                                        type="text"
                                        className={`form-control mt-1 ${errors.email ? 'is-invalid' : ''}`}
                                        id="inputEmail"
                                        name="email"
                                        placeholder="Enter your email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.email && <div className="invalid-feedback d-block">{errors.email}</div>}
                                </div>

                                <div className="form-group mb-2">
                                    <label htmlFor="inputMessage">Message</label>
                                    <textarea
                                        className={`form-control mt-1 ${errors.message ? 'is-invalid' : ''}`}
                                        id="inputMessage"
                                        name="message"
                                        rows="4"
                                        placeholder="Enter your message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.message && <div className="invalid-feedback d-block">{errors.message}</div>}
                                </div>

                                <button type="submit" className="btn btn-primary mt-3" disabled={loading}>
                                    {loading ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm me-1" aria-hidden="true"></span>
                                            <span role="status">Sending...</span>
                                        </>
                                    ) : (
                                        <span>Send Message</span>
                                    )}

                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default SectionContact;
