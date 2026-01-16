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
       <div className="container">
            <div className="row">
                <p>© {date} copyright by Hoang Van Sang.</p>
            </div>
       </div>
    )
}

export default Footer;