import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/urbanist/700.css'; 
import './main13.scss';

export const Main13 = () =>{
    return(
        <div className='card mt-4' style={{border:'none'}}>
            <div className="card-body d-flex flex-row flex-wrap justify-content-center align-items-center gap-10">
                <div className='d-flex justify-content-between align-items-center mb-20' style={{width:'100%', }}>
                    <h4 className='h1_text_card2'>Top Courses Pick for You</h4>
                    <p className='p_text'>See All</p>
                      </div>
                      <div className='d-flex flex-row justify-content-center align-items-center  cards_3 mt-2'>
                        {/*1 карта*/}
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

                        {/*2 карта*/}
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

                          {/*3 карта*/}
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
    )   </div>   
}