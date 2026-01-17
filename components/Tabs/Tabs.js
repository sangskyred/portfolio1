'use client'
import React, { useState } from "react";
import Accordion from "../Accordion/Accordion";

const Tabs = () => {
    const [active, setActive] = useState(0);

    const tabDatas = [
        {
            title: "Work Experience",
            slug: "work-experience",
            icon: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5m1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0M1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5"></path></svg>),
            content: <Accordion />
        },
        {
            title: "Education",
            slug: "education",
            icon: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917zM8 8.46 1.758 5.965 8 3.052l6.242 2.913z"></path><path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46z"></path></svg>),

            content: (
                <div className="content-education">
                    <h3>Ho Chi Minh City University of Industry</h3>
                    <p>Bachelor of Information Technology</p>
                    <p>09/2015 - 06/2019</p>
                    <p><span>GPA: 3.0/4</span></p>
                </div>
            )
        }
    ];

    return (
        <div className="tabs-container mt-5">
            <div className="row g-0 gy-3 gx-5">
                {/* Tab List */}
                <div className="col-md-4 col-lg-3">
                    <div className="tabs-list d-flex flex-column" role="tablist" aria-label="Experience Tabs">
                        {tabDatas.map((item, index) => (
                            <button
                                key={item.slug}
                                id={`tab-${item.slug}`}
                                onClick={() => setActive(index)}
                                role="tab"
                                type="button"
                                tabIndex={active === index ? 0 : -1}
                                className={`tab-trigger${active === index ? " active" : ""}`}
                                aria-selected={active === index}
                                aria-controls={`panel-${item.slug}`}
                            >
                                {item.icon}
                                <span>{item.title}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tab Panel */}
                <div className="col-md-8 col-lg-9">
                    <div
                        role="tabpanel"
                        id={`panel-${tabDatas[active].slug}`}
                        aria-labelledby={`tab-${tabDatas[active].slug}`}
                        className="tab-content"
                        tabIndex="0"
                    >
                        {tabDatas[active].content}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tabs;
