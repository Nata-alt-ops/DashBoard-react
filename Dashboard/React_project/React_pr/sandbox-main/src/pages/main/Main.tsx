import React, { useState } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  Label,
  RadialBar,
  RadialBarChart,
  Legend
} from 'recharts';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/urbanist/700.css'; 
import './Main.scss';
import { Main1 } from '../../components/com_main/4card';
import { Main2 } from '../../components/com_main2/calendar';
import { Main12 } from '../../components/com_main/big_graph/main12';
import { Main21 } from '../../components/com_main2/button_option';
import { Main22 } from '../../components/com_main2/small_graph/main22';
import { Main13 } from '../../components/com_main/3_card_/main13';



export const Main = () => {
  const [hoveredPercent, setHoveredPercent] = useState<number | null>(null);
  const [hovered, setHovered] = useState(false);
    
 
  const handleMouseEnter = (data: any) => {
    if (data && data.name && data.name.includes('completed')) {
      setHoveredPercent(data.value);
    }
  };

  const handleMouseLeave = () => {
    setHoveredPercent(null);
  };

   return (
    <div className="site_con">
      <div className="scrollable-container">
        <div className='container-fluid'>
          <div className="row g-3">
          
            <div className="col-xxl-9 col-xl-9 col-lg-8" >
              <div className="main-content">
                <Main1 />
                <Main12 /> 
                <Main13 />
             
              </div>
            </div>

           
            <div className="col-xxl-3 col-xl-3 col-lg-4">
              <div className="sidebar-content">
                <Main2 />
                <Main21 />
                <Main22 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
        
      {/*

    
        
                  <div className='card mt-4' style={{border:'none'}}>
                    <div className="card-body d-flex flex-row flex-wrap justify-content-center align-items-center gap-10">
                      <div className='d-flex justify-content-between align-items-center mb-20' style={{width:'100%', }}>
                        <h4 className='h1_text_card2'>Top Courses Pick for You</h4>
                        <p className='p_text'>See All</p>
                      </div>
                      <div className='d-flex flex-row justify-content-center align-items-center  cards_3 mt-2'>
                        {/*1 карта
                        <div className='col-lg-4 col-sm-6' style={{paddingLeft: '5px', paddingRight:'5px'}}>

                          <div className='card d-flex justify-content-center align-items-center' style={{padding:'8px 8px'}}>
                            <div className='card_img d-flex justify-content-center align-items-center' >
                             <img src="/course-img1.png" className="card-img" alt="..."/>
                            </div>
                              <div className="card-body" style={{width:'100%'}}>
                                <div className='vacantion rounded-pill d-flex justify-content-center align-items-center '>
                                  <p style={{color:'#16a34a'}}>Development</p>
                                </div>
                                <h5>Full Stack Web Development</h5>

                                <div className="d-flex justify-content-start align-items-center  flex-wrap prof-people ">
                                      <img src="/user-img1.png" className="rounded-circle object-fit-cover" alt=""/>
                                      <div>
                                          <span className="text-gray-600 text-13">Created by <a href="profile.html" className="fw-semibold text-gray-700 hover-text-main-600 ">Albert James</a> </span>
                                      </div>
                                  </div>

                                <div className='line_prof' style={{width:'100%', height:'1px', backgroundColor:'#d5dbe7', marginTop:'10px'}}></div>
                                <div className="d-flex justify-content-start align-items-center  flex-row prof-hour ">
                                  <div className='d-flex justify-content-center align-items-center flex-row'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#3e80f9" viewBox="0 0 256 256">
                                    <path d="M251.77,73a8,8,0,0,0-8.21.39L208,97.05V72a16,16,0,0,0-16-16H32A16,16,0,0,0,16,72V184a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V159l35.56,23.71A8,8,0,0,0,248,184a8,8,0,0,0,8-8V80A8,8,0,0,0,251.77,73ZM192,184H32V72H192V184Zm48-22.95-32-21.33V116.28L240,95Z"></path>
                                    </svg>
                                    <p>24 Lessons</p>
                                  </div>
                                  <div className='d-flex justify-content-center align-items-center flex-row' style={{marginLeft:'10px'}}>
                                   <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#3e80f9" viewBox="0 0 256 256">
                                   <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"></path>
                                   </svg>
                                    <p>40 Hours</p>
                                  </div> 
                                </div>

                                <div className='star_number_buttons_view d-flex justify-content-between align-items-center'>
                                  <div className='star_number d-flex justify-content-start align-items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#ff9f43" viewBox="0 0 256 256">
                                    <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path>
                                    </svg>
                                    <p>4.9 (12k)</p>
                                  </div>
                                  <button className='btn btn-outline-main rounded-pill py-9 buttons_view d-flex d-flex justify-content-center align-items-center'> View Details</button>
                                  
                                </div>
                                
                                
                              </div>
                          </div>
                        </div>

                        {/*2 карта
                        <div className='col-lg-4 col-sm-6' style={{paddingLeft: '5px', paddingRight:'5px'}}>

                          <div className='card d-flex justify-content-center align-items-center' style={{padding:'8px 8px'}}>
                            <div className='card_img d-flex justify-content-center align-items-center' >
                             <img src="/course-img5.png" className="card-img" alt="..." style={{width:'121px', height:'101px'}}/>
                            </div>
                              <div className="card-body" style={{width:'100%'}}>
                                <div className='vacantion rounded-pill d-flex justify-content-center align-items-center ' style={{width:'60px', backgroundColor:'#fff5ed'}}>
                                  <p style={{color:'#ff9f43'}}>Design</p>
                                </div>
                                <h5>Design System</h5>

                                <div className="d-flex justify-content-start align-items-center  flex-wrap prof-people ">
                                      <img src="/user-img5.png" className="rounded-circle object-fit-cover" alt=""/>
                                      <div>
                                          <span className="text-gray-600 text-13">Created by <a href="profile.html" className="fw-semibold text-gray-700 hover-text-main-600 ">Albert James</a> </span>
                                      </div>
                                  </div>

                                <div className='line_prof' style={{width:'100%', height:'1px', backgroundColor:'#d5dbe7', marginTop:'10px'}}></div>
                                <div className="d-flex justify-content-start align-items-center  flex-row prof-hour ">
                                  <div className='d-flex justify-content-center align-items-center flex-row'>
                                    <svg xmlns="httpS://www.w3.org/2000/svg" width="14" height="14" fill="#3e80f9" viewBox="0 0 256 256">
                                    <path d="M251.77,73a8,8,0,0,0-8.21.39L208,97.05V72a16,16,0,0,0-16-16H32A16,16,0,0,0,16,72V184a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V159l35.56,23.71A8,8,0,0,0,248,184a8,8,0,0,0,8-8V80A8,8,0,0,0,251.77,73ZM192,184H32V72H192V184Zm48-22.95-32-21.33V116.28L240,95Z"></path>
                                    </svg>
                                    <p>24 Lessons</p>
                                  </div>
                                  <div className='d-flex justify-content-center align-items-center flex-row' style={{marginLeft:'10px'}}>
                                   <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#3e80f9" viewBox="0 0 256 256">
                                   <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"></path>
                                   </svg>
                                    <p>40 Hours</p>
                                  </div> 
                                </div>

                                <div className='star_number_buttons_view d-flex justify-content-between align-items-center'>
                                  <div className='star_number d-flex justify-content-start align-items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#ff9f43" viewBox="0 0 256 256">
                                    <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path>
                                    </svg>
                                    <p>4.9 (12k)</p>
                                  </div>
                                  <button className='btn btn-outline-main rounded-pill py-9 buttons_view d-flex d-flex justify-content-center align-items-center'> View Details</button>
                                  
                                </div>
                                
                                
                              </div>
                          </div>
                        </div>

                          {/*3 карта
                        <div className='col-lg-4 col-sm-6' style={{paddingLeft: '5px', paddingRight:'5px'}}>

                          <div className='card d-flex justify-content-center align-items-center' style={{padding:'8px 8px'}}>
                            <div className='card_img d-flex justify-content-center align-items-center' >
                             <img src="/course-img6.png" className="card-img" alt="..." style={{width:'173px', height:'116px'}}/>
                            </div>
                              <div className="card-body" style={{width:'100%'}}>
                                <div className='vacantion rounded-pill d-flex justify-content-center align-items-center ' style={{width:'71px', backgroundColor:'#fef2f2'}}>
                                  <p style={{color:'#ea5455'}}>Frontend</p>
                                </div>
                                <h5>React Native Courese</h5>

                                <div className="d-flex justify-content-start align-items-center  flex-wrap prof-people ">
                                      <img src="/user-img6.png" className="rounded-circle object-fit-cover" alt=""/>
                                      <div>
                                          <span className="text-gray-600 text-13">Created by <a href="profile.html" className="fw-semibold text-gray-700 hover-text-main-600 ">Albert James</a> </span>
                                      </div>
                                  </div>

                                <div className='line_prof' style={{width:'100%', height:'1px', backgroundColor:'#d5dbe7', marginTop:'10px'}}></div>
                                <div className="d-flex justify-content-start align-items-center  flex-row prof-hour ">
                                  <div className='d-flex justify-content-center align-items-center flex-row'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#3e80f9" viewBox="0 0 256 256">
                                    <path d="M251.77,73a8,8,0,0,0-8.21.39L208,97.05V72a16,16,0,0,0-16-16H32A16,16,0,0,0,16,72V184a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V159l35.56,23.71A8,8,0,0,0,248,184a8,8,0,0,0,8-8V80A8,8,0,0,0,251.77,73ZM192,184H32V72H192V184Zm48-22.95-32-21.33V116.28L240,95Z"></path>
                                    </svg>
                                    <p>24 Lessons</p>
                                  </div>
                                  <div className='d-flex justify-content-center align-items-center flex-row' style={{marginLeft:'10px'}}>
                                   <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#3e80f9" viewBox="0 0 256 256">
                                   <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"></path>
                                   </svg>
                                    <p>40 Hours</p>
                                  </div> 
                                </div>

                                <div className='star_number_buttons_view d-flex justify-content-between align-items-center'>
                                  <div className='star_number d-flex justify-content-start align-items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#ff9f43" viewBox="0 0 256 256">
                                    <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path>
                                    </svg>
                                    <p>4.9 (12k)</p>
                                  </div>
                                  <button className='btn btn-outline-main rounded-pill py-9 buttons_view d-flex d-flex justify-content-center align-items-center'> View Details</button>
                                  
                                </div>
                                
                                
                              </div>
                          </div>
                        </div>


                      </div>

                     


                    </div>
                  </div>

                  
                  </div>
                  {/*боковая панель
                  <div className='col-lg-3'>
                      <div className='card r' style={{marginTop: '24px', marginLeft: '24px', borderRadius: '18px', border:'none'}}>
                        <div className='card-body'>
                          {/*Календарь*
                            <div className='calendar_header'>
                            <div className='a d-flex justify-content-between align-items-center'>
                              <div className='circle_svg rounded-circle d-flex justify-content-center align-items-center '>
                              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3536 1.64645C11.5488 1.84171 11.5488 2.15829 11.3536 2.35355L5.70711 8L11.3536 13.6464C11.5488 13.8417 11.5488 14.1583 11.3536 14.3536C11.1583 14.5488 10.8417 14.5488 10.6464 14.3536L4.64645 8.35355C4.45118 8.15829 4.45118 7.84171 4.64645 7.64645L10.6464 1.64645C10.8417 1.45118 11.1583 1.45118 11.3536 1.64645Z" />
                              </svg>
                              </div>
                              <p>September 2025</p>
                              <div className='circle_svg rounded-circle d-flex justify-content-center align-items-center '>
                              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M4.64645 1.64645C4.84171 1.45118 5.15829 1.45118 5.35355 1.64645L11.3536 7.64645C11.5488 7.84171 11.5488 8.15829 11.3536 8.35355L5.35355 14.3536C5.15829 14.5488 4.84171 14.5488 4.64645 14.3536C4.45118 14.1583 4.45118 13.8417 4.64645 13.6464L10.2929 8L4.64645 2.35355C4.45118 2.15829 4.45118 1.84171 4.64645 1.64645Z" />
                              </svg>
                              </div>
                            </div>
                            </div>
                            <div className='calendar_week'>
                              <div className='week'>
                                <p>Su</p>
                                <p>Mo</p>
                                <p>Tu</p>
                                <p>We</p>
                                <p>Th</p>
                                <p>Fr</p>
                                <p>Sa</p>
                              </div>
                            </div>
                            <div className="days">
                              <div></div>
                              <div>1</div>
                              <div>2</div>
                              <div>3</div>
                              <div>4</div>
                              <div>5</div>
                              <div>6</div>
                              <div>7</div>
                              <div>8</div>
                              <div >9</div>
                              <div >10</div>
                              <div >11</div>
                              <div >12</div>
                              <div >13</div>
                              <div >14</div>
                              <div >15</div>
                              <div >16</div>
                              <div >17</div>
                              <div className="current-date">18</div>
                              <div >19</div>
                              <div >20</div>
                              <div >21</div>
                              <div >22</div>
                              <div >23</div>
                              <div>24</div>
                              <div >25</div>
                              <div >26</div>
                              <div >27</div>
                              <div >28</div>
                              <div >29</div>
                              <div >30</div>
                            </div>
                        </div>
                      </div>

                  <div className='card mt-24 h d-flex justify-content-center align-items-center '>
                    <div className='card-body d-flex justify-content-center '>
                      <div className='k d-flex justify-content-between '>
                      <h1>Assignments</h1>
                      <p>See All</p>
                      </div>
                      <button className='d-flex justify-content-start align-items-center '>
                        <div className='l d-flex justify-content-center align-items-center'>
                        <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="#3e80f9" viewBox="0 0 256 256">
                        <path  className='l' d="M176,207.24a119,119,0,0,0,16-7.73V240a8,8,0,0,1-16,0Zm11.76-88.43-56-29.87a8,8,0,0,0-7.52,14.12L171,128l17-9.06Zm64-29.87-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V130.67L171,128l-43,22.93L43.83,106l0,0L25,96,128,41.07,231,96l-18.78,10-.06,0L188,118.94a8,8,0,0,1,4,6.93v73.64a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12Z"></path>
                        </svg>
                        </div>
                       
                        <div className='d-flex z justify-content-start align-items-start '>
                          <p className='text_button1'>Do The Research</p>
                          <p className='text_button2'>Due in 9 days</p>
                        </div>

                        <svg className='c' width="13" height="13" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M4.64645 1.64645C4.84171 1.45118 5.15829 1.45118 5.35355 1.64645L11.3536 7.64645C11.5488 7.84171 11.5488 8.15829 11.3536 8.35355L5.35355 14.3536C5.15829 14.5488 4.84171 14.5488 4.64645 14.3536C4.45118 14.1583 4.45118 13.8417 4.64645 13.6464L10.2929 8L4.64645 2.35355C4.45118 2.15829 4.45118 1.84171 4.64645 1.64645Z" />
                        </svg>
                      </button>

                       <button className='d-flex justify-content-start align-items-center '>
                        <div className='l d-flex justify-content-center align-items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="#3e80f9" viewBox="0 0 256 256"><path d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"></path></svg>
                        </div>
                       
                        <div className='d-flex z justify-content-start align-items-start '>
                          <p className='text_button1'>PHP Dvelopment</p>
                          <p className='text_button2'>Due in 2 days</p>
                        </div>
                        <svg className='c' width="13" height="13" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M4.64645 1.64645C4.84171 1.45118 5.15829 1.45118 5.35355 1.64645L11.3536 7.64645C11.5488 7.84171 11.5488 8.15829 11.3536 8.35355L5.35355 14.3536C5.15829 14.5488 4.84171 14.5488 4.64645 14.3536C4.45118 14.1583 4.45118 13.8417 4.64645 13.6464L10.2929 8L4.64645 2.35355C4.45118 2.15829 4.45118 1.84171 4.64645 1.64645Z" />
                        </svg>
                      </button>
                      <button className='d-flex justify-content-start align-items-center '>
                        <div className='l d-flex justify-content-center align-items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="#3e80f9" viewBox="0 0 256 256"><path d="M221.07,144.41A96.68,96.68,0,0,0,181,88h59a8,8,0,0,0,0-16H159a32,32,0,0,0-62,0H16a8,8,0,0,0,0,16H75a96.68,96.68,0,0,0-40.07,56.41A32,32,0,1,0,51.08,146,80.6,80.6,0,0,1,99,93.44a32,32,0,0,0,58.06,0A80.6,80.6,0,0,1,204.92,146a32,32,0,1,0,16.15-1.57ZM56,176a16,16,0,1,1-16-16A16,16,0,0,1,56,176Zm72-80a16,16,0,1,1,16-16A16,16,0,0,1,128,96Zm88,96a16,16,0,1,1,16-16A16,16,0,0,1,216,192Z"></path></svg>
                        </div>
                       
                        <div className='d-flex z justify-content-start align-items-start '>
                          <p className='text_button1'>Graphic Design</p>
                          <p className='text_button2'>Due in 5 days</p>
                        </div>
                        <svg className='c1' width="13" height="13" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M4.64645 1.64645C4.84171 1.45118 5.15829 1.45118 5.35355 1.64645L11.3536 7.64645C11.5488 7.84171 11.5488 8.15829 11.3536 8.35355L5.35355 14.3536C5.15829 14.5488 4.84171 14.5488 4.64645 14.3536C4.45118 14.1583 4.45118 13.8417 4.64645 13.6464L10.2929 8L4.64645 2.35355C4.45118 2.15829 4.45118 1.84171 4.64645 1.64645Z" />
                        </svg>
                      </button>
                    </div>
                  </div>

                 <div className='card_grah'>
  <div className='card '>
    <div className='card-header'>
      <h5>My Progress</h5>
    </div>
    <div className="card-body">
      <div className="progress-chart-container">
        {/* Круговой график прогресса 
        <ResponsiveContainer width={150} height={150}>
          <PieChart>
            {/* Внешний круг (синий) 
            <Pie
              data={[
                { name: 'blue-completed', value: 100 },
                { name: 'blue-remaining', value: 0 }
              ]}
              cx="50%"
              cy="50%"
              innerRadius={53}
              outerRadius={60}
              dataKey="value"
              stroke="none"
              startAngle={180}  
              endAngle={-180}  
              cornerRadius={8}
            >
              <Cell fill="#3e80f9" />
              <Cell fill="#f0f0f0" />
            </Pie>
            
            {/* Средний круг (зеленый) 
            <Pie
              data={[
                { name: 'green-completed', value: 60 },
                { name: 'green-remaining', value: 40 }
              ]}
              cx="50%"
              cy="50%"
              innerRadius={40}   
              outerRadius={48}   
              dataKey="value"
              stroke="none"
              startAngle={100}  
              endAngle={-260} 
              cornerRadius={8}   
            >
              <Cell fill="#27cea7" />
              <Cell fill="#f0f0f0" />
            </Pie>
            
            {/* Внутренний круг (оранжевый) 
            <Pie
              data={[
                { name: 'orange-completed', value: 25 },
                { name: 'orange-remaining', value: 75 }
              ]}
              cx="50%"
              cy="50%"
              innerRadius={25}   
              outerRadius={35}   
              dataKey="value"
              stroke="none"
              startAngle={100}   
              endAngle={-260} 
              cornerRadius={8}
            >
              <Cell fill="#000000ff" />
              <Cell fill="#f0f0f0" />
            </Pie>
            
            {/* Центральный текст 
            <text 
              x="50%" 
              y="50%" 
              textAnchor="middle" 
              dominantBaseline="central" 
              fontSize="15" 
              fontWeight="400"
              fill="#0f141f"
              fontFamily="Roboto, sans-serif"
            >
              82%
            </text>
          </PieChart>
        </ResponsiveContainer>
      </div>
      
      {/* Общее время 
      <div className="total-time">
        <p style={{color:'#3b465e'}}>Total hour:</p>
        <p style={{color:'#0f141f'}}>6h 32 min</p>
      </div>
      
      {/* Статусы курсов 
      <div className="course-status">
        <div className="status-item">
          <p className="progress-numbers">60/60</p>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ 
                width: '30px', 
                backgroundColor: '#3e80f9' 
              }}
            ></div>
          </div>
          <p className="progress-label">Completed</p>
        </div>
        
        <div className="status-item">
          <p className="progress-numbers">60/60</p>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ 
                width: '100%', 
                backgroundColor: '#27cea7' 
              }}
            ></div>
          </div>
          <p className="progress-label">Completed</p>
        </div>
        
        <div className="status-item">
          <p className="progress-numbers">60/60</p>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ 
                width: '100%', 
                backgroundColor: '#000000ff' 
              }}
            ></div>
          </div>
          <p className="progress-label">Completed</p>
        </div>
      </div>




    </div>
  </div>
</div>



                  </div>
                  </div>

                 <div className='card down-board mt-4 ms-4 '>
                    <div className='card-body d-flex justify-content-between align-items-center px-20 py-20'>
                      <p>© Copyright Edmate 2024, All Right Reserverd</p>
                      <div className='link'>
                        <button>License</button>
                        <button>More Themes</button>
                        <button>Documentation</button>
                        <button>Support</button>
                      </div>
                    </div>
                 </div>*/}



























