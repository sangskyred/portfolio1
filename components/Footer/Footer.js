'use client'
import React, { useEffect, useState } from "react";

const Footer = () => {
    const [date, setDate] = useState()
    useEffect(() => {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        setDate(currentYear)
    }, [])
    return (
        <div className="row footer" style={{ height: '100px' }}>
            <div className="col-md-12 pt-5">
                <div className="bg-primary text-white text-center">
                    <p>© {date} copyright by Hoang Van Sang. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;