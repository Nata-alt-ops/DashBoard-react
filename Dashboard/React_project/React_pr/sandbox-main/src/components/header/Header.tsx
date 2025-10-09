import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './Header.scss';

export const Header = () => {

    const handleDropdownClick = (e: any) => {
        if (e.target.closest('.close-dropdown')){
            return
        }
  e.stopPropagation();
};
    
   
    const [isDashboardOpen, setIsDashboardOpen] = useState(false);
    const [isCoursesOpen, setIsCoursesOpen] = useState(false);
    const [isAutheticationOpen, setIsAutheticationOpen] = useState(false);

    const [searchValue, setSearchValue] = useState("Search..."); 
    const [isFocused, setIsFocused] = useState(false); 

     const handleFocus = () => {
        if (searchValue === "Search...") {
            setSearchValue("");
        }
        setIsFocused(true);
    };

    const handleBlur = () => {
        if (searchValue === "") {
            setSearchValue("Search...");
        }
        setIsFocused(false);
    };


   
    const [coursesEverClicked, setCoursesEverClicked] = useState(false);
    const [autheticationEverClicked, setAutheticationEverClicked] = useState(false);

    
    const toggleCourses = () => {
        if (!coursesEverClicked) {
            setCoursesEverClicked(true);
        }
        setIsCoursesOpen(!isCoursesOpen);
    };

    const toggleAuthetication = () => {
        if (!autheticationEverClicked) {
            setAutheticationEverClicked(true);
        }
        setIsAutheticationOpen(!isAutheticationOpen);
    };

    const toggleDashboard = () => {
        setIsDashboardOpen(!isDashboardOpen);
    };

    return (
        <header className="d-flex flex-column">
            <div className="sidebar">
                <div className="left_header">
                    <div className="p-2">
                        <div className="logo_img sidebar__logo text-center p-20 position-sticky inset-block-start-0 bg-white w-100 z-1 pb-10">
                            <img src="/logo2.png" alt="" className="logo" />
                        </div>
                    </div>
                    <div className="scrollable-container">
                        <div className="p-20 pt-10">
                            <div className="dropdown_con">
                                <button
                                    className="btn btn-primary"
                                    type="button"
                                    onClick={toggleDashboard}
                                    aria-expanded={isDashboardOpen}
                                >
                                    <div className="element_button">
                                        <img src="/squares-four-bold.svg" alt="" className="button_svg" />
                                        <span className="text_button">Dashboard</span>
                                        <div className="u">
                                            <span className="badge bg-light rounded-circle me-0 number_button">3</span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="22"
                                                height="15"
                                                fill="currentColor"
                                                viewBox="0 0 17 16"
                                                style={{
                                                    transform: isDashboardOpen ? 'rotate(0deg)' : 'rotate(270deg)',
                                                    transition: 'transform 0.3s ease',
                                                    marginTop: '3px'
                                                }}
                                            >
                                                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                            </svg>
                                        </div>
                                    </div>
                                </button>
                                {isDashboardOpen && (
                                    <div className="dropdown-menu-in-flow mt-1">
                                        <button className="dropdown-item" type="button">Dashboard One</button>
                                        <button className="dropdown-item" type="button">Dashboard Two</button>
                                        <button className="dropdown-item" type="button">Dashboard Three</button>
                                    </div>
                                )}
                            </div>

                            <div className="button_couses_container position-relative">
                                <button
                                    className={`btn ${isCoursesOpen ? 'active_button' : 'normal_button'}`}
                                    type="button"
                                    onClick={toggleCourses}
                                    aria-expanded={isCoursesOpen}
                                >
                                    <div className="element_button_courses">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="none" viewBox="0 0 256 256">
                                            <path className='button_svg1' d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z" />
                                        </svg>
                                        <span className="text_button1">Courses</span>
                                    </div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="22"
                                        height="15"
                                        fill='none'
                                        viewBox="0 0 17 16"
                                        style={{
                                            transform: isCoursesOpen ? 'rotate(0deg)' : 'rotate(270deg)',
                                            transition: 'transform 0.3s ease',
                                        }}
                                    >
                                        <path className='color_down' fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </button>

                                {isCoursesOpen && (
                                    <div className="dropdown-menu-in-flow ">
                                        <button className="dropdown-item" type="button">Student Courses</button>
                                        <button className="dropdown-item" type="button">Mentor Courses</button>
                                        <button className="dropdown-item" type="button">Create Course</button>
                                    </div>
                                )}
                            </div>

                            <div className="p-20 pt-10">
                                <div className="w">
                                    <button>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="none" viewBox="0 0 256 256">
                                            <path d="M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1-7.37-4.89,8,8,0,0,1,0-6.22A8,8,0,0,1,192,112a24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.84,8,57,57,0,0,0-98.16,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z"></path>
                                        </svg>
                                        <p>Students</p>
                                    </button>
                                </div>

                                <div className="p">
                                    <div className="w">
                                        <button>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="none" viewBox="0 0 256 256">
                                                <path className="t" d="M168,152a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,152Zm-8-40H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Zm56-64V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V48A16,16,0,0,1,56,32H92.26a47.92,47.92,0,0,1,71.48,0H200A16,16,0,0,1,216,48ZM96,64h64a32,32,0,0,0-64,0ZM200,48H173.25A47.93,47.93,0,0,1,176,64v8a8,8,0,0,1-8,8H88a8,8,0,0,1-8-8V64a47.93,47.93,0,0,1,2.75-16H56V216H200Z"></path>
                                            </svg>
                                            <p>Assignments</p>
                                        </button>
                                    </div>
                                </div>

                                <div className="p-0">
                                    <div className="w">
                                        <button>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="#667797" viewBox="0 0 256 256">
                                                <path className="t" d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path>
                                            </svg>
                                            <p>Mentors</p>
                                        </button>
                                    </div>
                                </div>

                                <div className="p-0">
                                    <div className="w">
                                        <button>
                                            <svg width="20" height="20" viewBox="0 0 16 16" fill="#667797" xmlns="http://www.w3.org/2000/svg">
                                                <path className="t" d="M2 4C2 2.89543 2.89543 2 4 2H10C11.1046 2 12 2.89543 12 4V15.5C12 15.6844 11.8985 15.8538 11.7359 15.9408C11.5733 16.0278 11.3761 16.0183 11.2226 15.916L7 13.1009L2.77735 15.916C2.62392 16.0183 2.42665 16.0278 2.26407 15.9408C2.10149 15.8538 2 15.6844 2 15.5V4ZM4 3C3.44772 3 3 3.44772 3 4V14.5657L6.72265 12.084C6.8906 11.972 7.1094 11.972 7.27735 12.084L11 14.5657V4C11 3.44772 10.5523 3 10 3H4Z" />
                                                <path className="t" d="M4.26758 1H12C12.069 1 12.1365 1.007 12.2015 1.02032C12.6572 1.11356 13 1.51675 13 2V13.7676L13.2227 13.916C13.3761 14.0183 13.5734 14.0278 13.7359 13.9408C13.8985 13.8538 14 13.6844 14 13.5V2C14 0.89543 13.1046 0 12 0H6.00001C5.25973 0 4.61339 0.402199 4.26758 1Z" />
                                            </svg>
                                            <p>Resourses</p>
                                        </button>
                                    </div>
                                </div>

                                <div className="p-0">
                                    <div className="w">
                                        <button>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="#667797" viewBox="0 0 256 256">
                                                <path className="t" d="M169.57,72.59A80,80,0,0,0,16,104v64a16,16,0,0,0,16,16H86.67A80.15,80.15,0,0,0,160,232h64a16,16,0,0,0,16-16V152A80,80,0,0,0,169.57,72.59ZM32,104a64,64,0,1,1,64,64H32ZM224,216H160a64.14,64.14,0,0,1-55.68-32.43A79.93,79.93,0,0,0,174.7,89.71,64,64,0,0,1,224,152Z"></path>
                                            </svg>
                                            <p>Messages</p>
                                        </button>
                                    </div>
                                </div>

                                <div className="p-0">
                                    <div className="w">
                                        <button>
                                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="#667797" viewBox="0 0 256 256"><path d="M224,200h-8V40a8,8,0,0,0-8-8H152a8,8,0,0,0-8,8V80H96a8,8,0,0,0-8,8v40H48a8,8,0,0,0-8,8v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16ZM160,48h40V200H160ZM104,96h40V200H104ZM56,144H88v56H56Z">
                                            </path></svg>
                                            <p>Analytics</p>
                                        </button>
                                    </div>
                                </div>

                                <div className="p-0">
                                    <div className="w">
                                        <button>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="#667797" viewBox="0 0 256 256">
                                                <path className="t" d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-68-76a12,12,0,1,1-12-12A12,12,0,0,1,140,132Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,184,132ZM96,172a12,12,0,1,1-12-12A12,12,0,0,1,96,172Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,140,172Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,184,172Z"></path>
                                            </svg>
                                            <p>Event</p>
                                        </button>
                                    </div>
                                </div>

                                <div className="p-0">
                                    <div className="w">
                                        <button>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="#667797" viewBox="0 0 256 256">
                                                <path className="t" d="M231.65,194.55,198.46,36.75a16,16,0,0,0-19-12.39L132.65,34.42a16.08,16.08,0,0,0-12.3,19l33.19,157.8A16,16,0,0,0,169.16,224a16.25,16.25,0,0,0,3.38-.36l46.81-10.06A16.09,16.09,0,0,0,231.65,194.55ZM136,50.15c0-.06,0-.09,0-.09l46.8-10,3.33,15.87L139.33,66Zm6.62,31.47,46.82-10.05,3.34,15.9L146,97.53Zm6.64,31.57,46.82-10.06,13.3,63.24-46.82,10.06ZM216,197.94l-46.8,10-3.33-15.87L212.67,182,216,197.85C216,197.91,216,197.94,216,197.94ZM104,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V48A16,16,0,0,0,104,32ZM56,48h48V64H56Zm0,32h48v96H56Zm48,128H56V192h48v16Z"></path>
                                            </svg>
                                            <p>Library</p>
                                        </button>
                                    </div>
                                </div>

                                <div className="p-0">
                                    <div className="w">
                                        <button>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="#667797" viewBox="0 0 256 256">
                                                <path d="M184,89.57V84c0-25.08-37.83-44-88-44S8,58.92,8,84v40c0,20.89,26.25,37.49,64,42.46V172c0,25.08,37.83,44,88,44s88-18.92,88-44V132C248,111.3,222.58,94.68,184,89.57ZM232,132c0,13.22-30.79,28-72,28-3.73,0-7.43-.13-11.08-.37C170.49,151.77,184,139,184,124V105.74C213.87,110.19,232,122.27,232,132ZM72,150.25V126.46A183.74,183.74,0,0,0,96,128a183.74,183.74,0,0,0,24-1.54v23.79A163,163,0,0,1,96,152,163,163,0,0,1,72,150.25Zm96-40.32V124c0,8.39-12.41,17.4-32,22.87V123.5C148.91,120.37,159.84,115.71,168,109.93ZM96,56c41.21,0,72,14.78,72,28s-30.79,28-72,28S24,97.22,24,84,54.79,56,96,56ZM24,124V109.93c8.16,5.78,19.09,10.44,32,13.57v23.37C36.41,141.4,24,132.39,24,124Zm64,48v-4.17c2.63.1,5.29.17,8,.17,3.88,0,7.67-.13,11.39-.35A121.92,121.92,0,0,0,120,171.41v23.46C100.41,189.4,88,180.39,88,172Zm48,26.25V174.4a179.48,179.48,0,0,0,24,1.6,183.74,183.74,0,0,0,24-1.54v23.79a165.45,165.45,0,0,1-48,0Zm64-3.38V171.5c12.91-3.13,23.84-7.79,32-13.57V172C232,180.39,219.59,189.4,200,194.87Z"></path>
                                            </svg>
                                            <p>Pricing</p>
                                        </button>
                                    </div>
                                </div>

                                <div className="line"></div>
                                <h1 className="text_h1">SETTINGS</h1>

                                <div className="p-20 pt-10 y">
                                    <div className="w">
                                        <button>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="#667797" viewBox="0 0 256 256"><path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8,8,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8,8,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z"></path>
                                            </svg>
                                            <p>Account Settings</p>
                                        </button>
                                    </div>

                                    <div className="button_authetication_container">
                                        <button
                                            className={`btn ${isAutheticationOpen ? 'active_button' : 'normal_button'}`}
                                            type="button"
                                            onClick={toggleAuthetication}
                                            aria-expanded={isAutheticationOpen}
                                        >
                                            <div className="element_button_courses">
                                                <svg className='button_svg1' xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="none" viewBox="0 0 256 256">
                                                    <path d="M208,40H48A16,16,0,0,0,32,56v56c0,52.72,25.52,84.67,46.93,102.19,23.06,18.86,46,25.26,47,25.53a8,8,0,0,0,4.2,0c1-.27,23.91-6.67,47-25.53C198.48,196.67,224,164.72,224,112V56A16,16,0,0,0,208,40Zm0,72c0,37.07-13.66,67.16-40.6,89.42A129.3,129.3,0,0,1,128,223.62a128.25,128.25,0,0,1-38.92-21.81C61.82,179.51,48,149.3,48,112l0-56,160,0ZM82.34,141.66a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32l-56,56a8,8,0,0,1-11.32,0Z"></path>
                                                </svg>
                                                <span className="text_button1">Authetication</span>
                                            </div>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="22"
                                                height="15"
                                                fill='none'
                                                viewBox="0 0 17 16"
                                                style={{
                                                    transform: isAutheticationOpen ? 'rotate(0deg)' : 'rotate(270deg)',
                                                    transition: 'transform 0.3s ease',
                                                }}
                                            >
                                                <path className='color_down' fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                            </svg>
                                        </button>

                                        {isAutheticationOpen && (
                                            <div className="dropdown-menu-in-flow mt-1">
                                                <button className="dropdown-item" type="button">Sign In</button>
                                                <button className="dropdown-item" type="button">Sing Up</button>
                                                <button className="dropdown-item" type="button">Forgot Password</button>
                                                <button className="dropdown-item" type="button">Reset Password</button>
                                                <button className="dropdown-item" type="button">Verify Email</button>
                                                <button className="dropdown-item" type="button">Two Step Verification</button>
                                            </div>
                                        )}
                                    </div>

                                    <div className="p-20 pt-80 certificate">
                                        <div className="k">
                                            <div className="square">
                                                <div
                                                    style={{ backgroundImage: "url('/certificate.png')", border: '5px solid #ecf2fe' }}
                                                    className="circle custom-border mx-auto border-primary-50 rounded-circle flex-center text-success-600 text-2xl translate-n74"
                                                ></div>
                                                <div className="k">
                                                    <div className="text_card">
                                                        <h1>Get Pro Certificate</h1>
                                                        <p>Explore 400+ courses with lifetime members</p>
                                                    </div>
                                                    <div className="button_card">
                                                        <button className="btn btn-primary">Get Access</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        <div className="top-navbar d-flex justify-content-between gap-16 align-items-center">

    <div className={`d-flex justify-content-start search ${isFocused ? 'search-focused' : ''}`}>
        <button type="submit" className="input-icon border-0 bg-transparent">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 256 256">
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
            </svg>
        </button>
        <input
            type="text"
            className="form-control ps-40 h-40 border-none rounded-pill placeholder-15 border-0 bg-transparent"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
        />
    </div>

    <div className="user d-flex justify-content-center align-items-center gap-2">
        
      
        {/* Уведомления */}
        <div className="dropdown" data-bs-auto-close="outside">
            <button className="dropdown-btn shaking-animation text-gray-500 w-40 h-40 bg-main-50 hover-bg-main-100 transition-2 rounded-circle text-xl flex-center border-0" 
                type="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
                >
                <span className="position-relative d-flex align-items-center justify-content-center" style={{ width: '20px', height: '20px' }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.3281 13.7453C16.8945 12.9984 16.25 10.8852 16.25 8.125C16.25 6.4674 15.5915 4.87769 14.4194 3.70558C13.2473 2.53348 11.6576 1.875 9.99999 1.875C8.34239 1.875 6.75268 2.53348 5.58058 3.70558C4.40848 4.87769 3.74999 6.4674 3.74999 8.125C3.74999 10.8859 3.10468 12.9984 2.67109 13.7453C2.56036 13.9352 2.50166 14.1509 2.50091 14.3707C2.50015 14.5905 2.55737 14.8066 2.66679 14.9973C2.77621 15.1879 2.93396 15.346 3.12414 15.4565C3.31432 15.5667 3.53019 15.6248 3.74999 15.625H6.93828C7.08247 16.3306 7.46595 16.9647 8.02385 17.4201C8.58175 17.8756 9.27982 18.1243 9.99999 18.1243C10.7202 18.1243 11.4182 17.8756 11.9761 17.4201C12.534 16.9647 12.9175 16.3306 13.0617 15.625H16.25C16.4697 15.6247 16.6855 15.5665 16.8756 15.4562C17.0656 15.346 17.2233 15.1875 17.3326 14.9969C17.4419 14.8063 17.4991 14.5903 17.4983 14.3705C17.4975 14.1508 17.4388 13.9351 17.3281 13.7453ZM9.99999 16.875C9.61235 16.8749 9.23428 16.7546 8.91781 16.5308C8.60133 16.3069 8.36202 15.9905 8.23281 15.625H11.7672C11.638 15.9905 11.3987 16.3069 11.0822 16.5308C10.7657 16.7546 10.3876 16.8749 9.99999 16.875ZM3.74999 14.375C4.35156 13.3406 4.99999 10.9438 4.99999 8.125C4.99999 6.79892 5.52678 5.52715 6.46446 4.58947C7.40214 3.65178 8.67391 3.125 9.99999 3.125C11.3261 3.125 12.5978 3.65178 13.5355 4.58947C14.4732 5.52715 15 6.79892 15 8.125C15 10.9414 15.6469 13.3383 16.25 14.375H3.74999Z" fill="black"/>
                    </svg>
                    <span className="alarm-notify position-absolute"></span>
                </span>
            </button>
            {/*всплывающее окно*/}
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" onClick={handleDropdownClick} style={{border:'none', boxShadow:'0px 12px 15px #0000001a'}}  >
                <div className="card" style={{borderRadius:'12px', width:'330px', height:'369px'}}>
                    <div className="card-header" >
                <div className="element d-flex bd-highlight mb-3">
                <h5 className="p-2 flex-grow-1 bd-highlight text-xl fw-semibold text-white mb-0">Notifications</h5>
                <button className="bg-white v border-0">New</button>
                <button type="button" className="close-dropdown border-0 bg-transparent">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 256 256">
                    <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
                    </svg>
                </button>
                </div>
            </div>
                <div className="card-body" style={{padding:'24px 24px'}}>
                     <div className="b">
              
                <div className="d-flex justify-content-between align-items-start mb-3 flex-row gap-12">
                    <div className="photo_profile rounded-circle" style={{ width: '48px', height: '48px' }}>
                    <img src="/notification-img1.png" alt=""></img>
                    </div>
                    <div className="info_profile d-flex flex-column">
                    <div className="d-flex flex-grow-1 flex-row justify-content-start">
                        <p className="fw-medium text-15 mb-0 text-gray-300 hover-text-main-600 text-line-2">
                        Ashwin Bose is requesting access to Design File - Final Project.
                        </p>

                       <div className="dropdown flex-shrink-0">
                            <button 
                                className=" dropdown-dots border-0 " 
                                type="button" 
                                data-bs-toggle="dropdown" 
                                aria-expanded="false"
                            >
                                <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                </svg>
                            </button>
                            <ul className="dropdown-menu" 
                                style={{
                                width: '196px', 
                                height: '129.500px', 
                                boxShadow: '4px 4px 12px #0000001a',
                                border: '1px solid #d5dbe7'
                                }}>
                                <li><div className="dropdown-item">Mark as read</div></li>
                                <li><div className="dropdown-item">Delete Notification</div></li>
                                <li><div className="dropdown-item">Report</div></li>
                            </ul>
                            </div>

                    </div>
                    <div className="d-flex info_app flex-row justify-content-center align-items-center">
                        <div className="d-flex mb-3 justify-content-start a">
                        <img src="/google-drive.png" alt="" className=""></img>
                        <div className="d-flex justify-content-between m">
                            <p className="text-gray-900 text-sm text-line-1">Design brief and ideas.txt</p>
                            <span className="">2.2 MB</span>
                        </div>
                        </div>
                    </div>
                    <div className="d-flex info_button flex-row justify-content-start align-items-center">
                        <button className="d-flex justify-content-center align-items-center me-2 button-1"
                        style={{backgroundColor: '#3e80f9', color:'#ffffff'}}>Accept</button>
                        <button className="d-flex justify-content-center align-items-center button-2">Decline</button>
                    </div>
                    <div className="d-flex info_time flex-row justify-content-start align-items-center">
                        <span>2 mins ago</span>
                    </div>
                    <div className="d-flex info_line flex-row justify-content-start align-items-center"></div>
                    </div>  
                </div>

             
                <div className="d-flex justify-content-between align-items-start mb-3 flex-row gap-12">
                    <div className="photo_profile rounded-circle" style={{ width: '48px', height: '48px' }}>
                    <img src="/notification-img2.png" alt=""></img>
                    </div>
                    <div className="info_profile d-flex flex-column">
                    <div className="d-flex flex-grow-1 flex-row justify-content-start">
                        <p className="fw-medium text-15 mb-0 text-gray-300 hover-text-main-600 text-line-2">
                        Patrick added a comment on Design Assets - Smart Tags file:
                        </p>
                    </div>
                    <div className="d-flex flex-row justify-content-start align-items-center">
                        <span style={{marginTop:'0px'}} className="info_time">2 mins ago</span>
                    </div>
                    </div>
                </div>
                </div>

  
                </div>
                 <div className="card-down-button ">
                <button className="button-view-all">View All</button>
            </div>
                </div>
            </ul>
            </div>

        {/* Радиокнопки */}
<div className="dropdown" data-bs-auto-close="outside" >
    <button className="dropdown-btn text-gray-500 w-40 h-40 bg-main-50 hover-bg-main-100 rounded-circle text-xl flex-center border-0" 
        type="button" 
        data-bs-toggle="dropdown" 
        aria-expanded="false">
        <span className="position-relative d-flex align-items-center justify-content-center" style={{ width: '20px', height: '20px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256">
                <path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm81.57,64H169.19a132.58,132.58,0,0,0-25.73-50.67A90.29,90.29,0,0,1,209.57,90ZM218,128a89.7,89.7,0,0,1-3.83,26H171.81a155.43,155.43,0,0,0,0-52h42.36A89.7,89.7,0,0,1,218,128Zm-90,87.83a110,110,0,0,1-15.19-19.45A124.24,124.24,0,0,1,99.35,166h57.3a124.24,124.24,0,0,1-13.46,30.38A110,110,0,0,1,128,215.83ZM96.45,154a139.18,139.18,0,0,1,0-52h63.1a139.18,139.18,0,0,1,0,52ZM38,128a89.7,89.7,0,0,1,3.83-26H84.19a155.43,155.43,0,0,0,0,52H41.83A89.7,89.7,0,0,1,38,128Zm90-87.83a110,110,0,0,1,15.19,19.45A124.24,124.24,0,0,1,156.65,90H99.35a124.24,124.24,0,0,1,13.46-30.38A110,110,0,0,1,128,40.17Zm-15.46-.84A132.58,132.58,0,0,0,86.81,90H46.43A90.29,90.29,0,0,1,112.54,39.33ZM46.43,166H86.81a132.58,132.58,0,0,0,25.73,50.67A90.29,90.29,0,0,1,46.43,166Zm97,50.67A132.58,132.58,0,0,0,169.19,166h40.38A90.29,90.29,0,0,1,143.46,216.67Z"></path>
            </svg>
        </span>
    </button>
    
    {/*всплывающее окно*/}
    <ul className="dropdown-menu radio-menu" aria-labelledby="dropdownMenuButton2" style={{width:'194px', height:'224px'}} onClick={handleDropdownClick}>
        <div className="card-body-radio-button">
            {/* Первый язык */}
            <div className="logo_label_radiobutton d-flex justify-content-between align-items-center  ">
                <div className="logo_label d-flex align-items-center">
                    <div className="rounded-circle logo" style={{marginRight:'8px'}}>
                        <img src="/flag1.png" alt="Arabic flag"/>
                    </div>
                </div>
                <div className="radiobutton d-flex justify-content-between align-items-center w-100">
                    <label htmlFor="Arabic" className="mb-0 cursor-pointer" style={{cursor: 'pointer'}}>
                        Arabic
                    </label>
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="languageRadio" 
                        id="Arabic"
                        value="arabic"
                    />
                </div>
            </div>
             {/* Второй язык */}
            <div className="logo_label_radiobutton d-flex justify-content-between align-items-center  ">
                <div className="logo_label d-flex align-items-center">
                    <div className="rounded-circle logo" style={{marginRight:'8px'}}>
                        <img src="/flag2.png" alt="Arabic flag"  />
                    </div>
                </div>
                <div className="radiobutton d-flex justify-content-between align-items-center w-100">
                    <label htmlFor="Germany" className="mb-0 cursor-pointer" style={{cursor: 'pointer'}}>
                        Germany
                    </label>
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="languageRadio" 
                        id="Germany"
                        value="germany"
                    />
                </div>
            </div>

             {/* Третий язык */}
            <div className="logo_label_radiobutton d-flex justify-content-between align-items-center  ">
                <div className="logo_label d-flex align-items-center">
                    <div className="rounded-circle logo" style={{marginRight:'8px'}}>
                        <img src="/flag3.png" alt="Arabic flag"/>
                    </div>
                </div>
                <div className="radiobutton d-flex justify-content-between align-items-center w-100">
                    <label htmlFor="English" className="mb-0 cursor-pointer" style={{cursor: 'pointer'}}>
                        English
                    </label>
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="languageRadio" 
                        id="English"
                        value="english"
                    />
                </div>
            </div>

              {/* Четвертый язык */}
            <div className="logo_label_radiobutton d-flex justify-content-between align-items-center  ">
                <div className="d-flex align-items-center">
                    <div className="rounded-circle" style={{marginRight:'8px'}}>
                        <img src="/image.png" alt="Arabic flag"/>
                    </div>
                </div>
                <div className="radiobutton d-flex justify-content-between align-items-center w-100">
                    <label htmlFor="Spanish" className="mb-0 cursor-pointer" style={{cursor: 'pointer'}}>
                        Spanish
                    </label>
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="languageRadio" 
                        id="Spanish"
                        value="spanish"
                    />
                </div>
            </div>

           

           
        </div>
    </ul>
</div>

    {/* Аккаунт */}
<div className="dropdown" data-bs-auto-close="outside" >
    <button className="dropdown-btn button_account d-flex justify-content-between align-items-center" 
    style={{background:'#ffffff'}} 
        type="button" 
        data-bs-toggle="dropdown" 
        aria-expanded="false">
       <div className="img_profile ">
            <img src="/user-img.png" alt=""></img>
            <div className="user_point rounded-circle"></div>
        </div>
        <div className="down_button rounded-circle d-flex justify-content-center align-items-center ">
            <i className="ph-bold ph-caret-down"></i>
        </div>
    </button>
        
    {/*всплывающее окно*/}
    <ul className="dropdown-menu" onClick={handleDropdownClick} style={{width:'330px', maxHeight:'407px', height:'auto', boxShadow:'0px 5px 12px rgba(0, 0, 0, 0.1)', border:'1px solid #d5dbe7'}}>
        <div className="card" style={{borderRadius:'12px', border:'none', padding:'20px 20px', width:'328px', height:'405px'}}>
                <div className="profile_header">
                    <div className="d-flex justify-content-start align-items-start flex-row  ">
                        <img src="/user-img.png" alt=""></img>
                        <div className="d-flex  name_email">
                            <h1>Michel John</h1>
                            <p style={{width:'100%'}}>examplemail@mail.com</p>
                        </div>
                    </div>
                </div>
            <div className="card-body" style={{width:'auto', height:'auto', padding:'0'}}>

                <div className="sroll-button max-h-270 overflow-y-auto scroll-sm ">
                    <button className="d-flex justify-content-start align-items-center flex-row">
                        <div className="scroll_button_logo d-flex justify-content-center align-items-center ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="#487fff" viewBox="0 0 256 256">
                            <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8,8,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8,8,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z"></path>
                            </svg>
                        <p>Account Settings</p>
                        </div>
                    </button>

             <button className="d-flex justify-content-start align-items-center flex-row">
                <div className="scroll_button_logo d-flex justify-content-center align-items-center ">
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="#487fff" viewBox="0 0 256 256">
                   <path d="M224,200h-8V40a8,8,0,0,0-8-8H152a8,8,0,0,0-8,8V80H96a8,8,0,0,0-8,8v40H48a8,8,0,0,0-8,8v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16ZM160,48h40V200H160ZM104,96h40V200H104ZM56,144H88v56H56Z"></path>
                   </svg>
                <p>Upgrade Plan</p>
                </div>
            </button>

            <button className="d-flex justify-content-start align-items-center flex-row">
                <div className="scroll_button_logo d-flex justify-content-center align-items-center ">
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="#487fff" viewBox="0 0 256 256"><path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0V156.69l50.34-50.35a8,8,0,0,1,11.32,0L128,132.69,180.69,80H160a8,8,0,0,1,0-16h40a8,8,0,0,1,8,8v40a8,8,0,0,1-16,0V91.31l-58.34,58.35a8,8,0,0,1-11.32,0L96,123.31l-56,56V200H224A8,8,0,0,1,232,208Z"></path></svg>
                <p>Daily Activity</p>
                </div>
            </button>

            <button className="d-flex justify-content-start align-items-center flex-row">
                <div className="scroll_button_logo d-flex justify-content-center align-items-center ">
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="#487fff" viewBox="0 0 256 256">
                   <path d="M169.57,72.59A80,80,0,0,0,16,104v64a16,16,0,0,0,16,16H86.67A80.15,80.15,0,0,0,160,232h64a16,16,0,0,0,16-16V152A80,80,0,0,0,169.57,72.59ZM32,104a64,64,0,1,1,64,64H32ZM224,216H160a64.14,64.14,0,0,1-55.68-32.43A79.93,79.93,0,0,0,174.7,89.71,64,64,0,0,1,224,152Z"></path>
                   </svg>
                <p>Inbox</p>
                </div>
            </button>

            <button className="d-flex justify-content-start align-items-center flex-row">
                <div className="scroll_button_logo d-flex justify-content-center align-items-center ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="#487fff" viewBox="0 0 256 256">
                  <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"></path>
                  </svg>
                <p>Email</p>
                </div>
            </button>

            <div className="line_scroll"></div>

            <button className="d-flex justify-content-start align-items-center  flex-row log-out-button">
                <div className="scroll_button_logo d-flex justify-content-center align-items-center ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="#ea5455" viewBox="0 0 256 256">
                  <path d="M120,216a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H56V208h56A8,8,0,0,1,120,216Zm109.66-93.66-40-40a8,8,0,0,0-11.32,11.32L204.69,120H112a8,8,0,0,0,0,16h92.69l-26.35,26.34a8,8,0,0,0,11.32,11.32l40-40A8,8,0,0,0,229.66,122.34Z"></path>
                  </svg>
                <p>log Out</p>
                </div>
            </button>
        </div>
            </div>
        </div>







          
            
     





        {/*
             <div className="sroll-button max-h-270 overflow-y-auto scroll-sm ">
            <button className="d-flex justify-content-start align-items-center flex-row">
                <div className="scroll_button_logo d-flex justify-content-center align-items-center ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="#487fff" viewBox="0 0 256 256">
                    <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8,8,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8,8,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z"></path>
                    </svg>
                <p>Account Settings</p>
                </div>
            </button>

             <button className="d-flex justify-content-start align-items-center flex-row">
                <div className="scroll_button_logo d-flex justify-content-center align-items-center ">
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="#487fff" viewBox="0 0 256 256">
                   <path d="M224,200h-8V40a8,8,0,0,0-8-8H152a8,8,0,0,0-8,8V80H96a8,8,0,0,0-8,8v40H48a8,8,0,0,0-8,8v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16ZM160,48h40V200H160ZM104,96h40V200H104ZM56,144H88v56H56Z"></path>
                   </svg>
                <p>Upgrade Plan</p>
                </div>
            </button>

            <button className="d-flex justify-content-start align-items-center flex-row">
                <div className="scroll_button_logo d-flex justify-content-center align-items-center ">
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="#487fff" viewBox="0 0 256 256"><path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0V156.69l50.34-50.35a8,8,0,0,1,11.32,0L128,132.69,180.69,80H160a8,8,0,0,1,0-16h40a8,8,0,0,1,8,8v40a8,8,0,0,1-16,0V91.31l-58.34,58.35a8,8,0,0,1-11.32,0L96,123.31l-56,56V200H224A8,8,0,0,1,232,208Z"></path></svg>
                <p>Daily Activity</p>
                </div>
            </button>

            <button className="d-flex justify-content-start align-items-center flex-row">
                <div className="scroll_button_logo d-flex justify-content-center align-items-center ">
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="#487fff" viewBox="0 0 256 256">
                   <path d="M169.57,72.59A80,80,0,0,0,16,104v64a16,16,0,0,0,16,16H86.67A80.15,80.15,0,0,0,160,232h64a16,16,0,0,0,16-16V152A80,80,0,0,0,169.57,72.59ZM32,104a64,64,0,1,1,64,64H32ZM224,216H160a64.14,64.14,0,0,1-55.68-32.43A79.93,79.93,0,0,0,174.7,89.71,64,64,0,0,1,224,152Z"></path>
                   </svg>
                <p>Inbox</p>
                </div>
            </button>

            <button className="d-flex justify-content-start align-items-center flex-row">
                <div className="scroll_button_logo d-flex justify-content-center align-items-center ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="#487fff" viewBox="0 0 256 256">
                  <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"></path>
                  </svg>
                <p>Email</p>
                </div>
            </button>

            <div className="line_scroll"></div>

            <button className="d-flex justify-content-start align-items-center  flex-row log-out-button  ">
                <div className="scroll_button_logo d-flex justify-content-center align-items-center ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="#ea5455" viewBox="0 0 256 256">
                  <path d="M120,216a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H56V208h56A8,8,0,0,1,120,216Zm109.66-93.66-40-40a8,8,0,0,0-11.32,11.32L204.69,120H112a8,8,0,0,0,0,16h92.69l-26.35,26.34a8,8,0,0,0,11.32,11.32l40-40A8,8,0,0,0,229.66,122.34Z"></path>
                  </svg>
                <p>log Out</p>
                </div>
            </button>
        </div>
            </div>
        </div>*/}

    </ul>
    
</div>






       
            
























    </div>
</div>

        </header>
    );
};