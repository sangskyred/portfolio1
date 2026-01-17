'use client'
import React, { useState } from "react";
import Tabs from "../Tabs/Tabs";
import Accordion from "../Accordion/Accordion";

const SectionResum = () => {
    
    return (
        <section id="resume" className="resume">
            <div className="container">
                <div className="section-title">
                    <h2>Resume</h2>
                </div>
                <Tabs />
                {/* <Accordion/> */}
            </div>
        </section>
    );
};

export default SectionResum;
