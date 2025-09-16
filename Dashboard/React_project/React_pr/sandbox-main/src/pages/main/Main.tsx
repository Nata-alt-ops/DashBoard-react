import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Main.scss';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const Main = () => {
  const navigate = useNavigate();

  const trendData = [
    { day: 'Mon', courses: 18 },
    { day: 'Tue', courses: 25 },
    { day: 'Wed', courses: 22 },
    { day: 'Thu', courses: 40 },
    { day: 'Fri', courses: 34 },
    { day: 'Sat', courses: 55 },
    { day: 'Sun', courses: 50 },
    { day: 'Mon', courses: 60 },
    { day: 'Tue', courses: 55 },
    { day: 'Wed', courses: 65 }
  ];

  return (
    <div className='site_con'>
      <div className='conatainer col-lg-9'>
        <div className='card_group1'>

          {/* Карточка 1 */}
          <div className="card w-25">
            <div className="card-body">
              <h5 className="card-title">155+</h5>
              <p className="card-text">Completed Courses</p>
              <div className='icon_card_graphic'>
                <div className='icon_img' style={{backgroundColor:'#3e80f9'}}>
                  <img src='/book-open-fill.svg' alt=' ' className='flex-shrink-0 w-48 h-48 flex-center rounded-circle bg-main-600 text-white text-2xl'/>
                </div>
                <div style={{ width: '80px', height: '42px', marginTop: '10px' }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={trendData}>
                      <defs>
                        <linearGradient id="gradientBlue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#3fb8b2" stopOpacity={0.8}/>
                          <stop offset="20%" stopColor="#3fb8b2" stopOpacity={0.1}/>
                        </linearGradient>
                      </defs>
                      <Area 
                        type="monotone" 
                        dataKey="courses" 
                        stroke="#3fb8b2" 
                        strokeWidth={1}
                        fill="url(#gradientBlue)"
                        fillOpacity={1}
                      />
                      <XAxis dataKey="day" hide={true} />
                      <YAxis hide={true} domain={['dataMin - 10', 'dataMax + 10']} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>

          {/* Карточка 2 */}
          <div className="card w-25">
            <div className="card-body">
              <h5 className="card-title">39+</h5>
              <p className="card-text">Earned Certificate</p>
              <div className='icon_card_graphic'>
                <div className='icon_img' style={{backgroundColor:'#27cea7'}}>
                  <img src='/certificate-fill.svg' alt=' ' className='flex-shrink-0 w-48 h-48 flex-center rounded-circle bg-main-600 text-white text-2xl'/>
                </div>
                <div style={{ width: '80px', height: '42px', marginTop: '10px' }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={trendData}>
                      <defs>
                        <linearGradient id="gradientGreen" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#30d1ab" stopOpacity={0.8}/>
                          <stop offset="20%" stopColor="#30d1ab" stopOpacity={0.1}/>
                        </linearGradient>
                      </defs>
                      <Area 
                        type="monotone" 
                        dataKey="courses" 
                        stroke="#30d1ab" 
                        strokeWidth={1}
                        fill="url(#gradientGreen)"
                        fillOpacity={1}
                      />
                      <XAxis dataKey="day" hide={true} />
                      <YAxis hide={true} domain={['dataMin - 10', 'dataMax + 10']} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>

          {/* Карточка 3 */}
          <div className="card w-25">
            <div className="card-body">
              <h5 className="card-title">25+</h5>
              <p className="card-text">Course in Progress</p>
              <div className='icon_card_graphic'>
                <div className='icon_img' style={{backgroundColor:'#6142ff'}}>
                  <img src='/graduation-cap-fill.svg' alt=' ' className='flex-shrink-0 w-48 h-48 flex-center rounded-circle bg-main-600 text-white text-2xl'/>
                </div>
                <div style={{ width: '80px', height: '42px', marginTop: '10px' }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={trendData}>
                      <defs>
                        <linearGradient id="gradientPurple" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#6d51ff" stopOpacity={0.8}/>
                          <stop offset="20%" stopColor="#6d51ff" stopOpacity={0.1}/>
                        </linearGradient>
                      </defs>
                      <Area 
                        type="monotone" 
                        dataKey="courses" 
                        stroke="#6d51ff" 
                        strokeWidth={1}
                        fill="url(#gradientPurple)"
                        fillOpacity={1}
                      />
                      <XAxis dataKey="day" hide={true} />
                      <YAxis hide={true} domain={['dataMin - 10', 'dataMax + 10']} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>

          {/* Карточка 4 */}
          <div className="card w-25">
            <div className="card-body">
              <h5 className="card-title">18k+</h5>
              <p className="card-text">Community Support</p>
              <div className='icon_card_graphic'>
                <div className='icon_img' style={{backgroundColor:'#ff9f43'}}>
                  <img src='/users-three-fill.svg' alt=' ' className='flex-shrink-0 w-48 h-48 flex-center rounded-circle bg-main-600 text-white text-2xl'/>
                </div>
                <div style={{ width: '80px', height: '42px', marginTop: '10px' }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={trendData}>
                      <defs>
                        <linearGradient id="gradientOrange" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#fba95d" stopOpacity={0.8}/>
                          <stop offset="20%" stopColor="#fba95d" stopOpacity={0.1}/>
                        </linearGradient>
                      </defs>
                      <Area 
                        type="monotone" 
                        dataKey="courses" 
                        stroke="#fba95d" 
                        strokeWidth={1}
                        fill="url(#gradientOrange)"
                        fillOpacity={1}
                      />
                      <XAxis dataKey="day" hide={true} />
                      <YAxis hide={true} domain={['dataMin - 10', 'dataMax + 10']} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className='card_group2 card mt-24'>
            <div className='card-body'>
              <div className='h1_text_buttons d-flex bd-highlight'>
                <h1 className='flex-grow-1 bd-highlight'>Study Statistics</h1>
                <div className='circle_text '>
                  <div className='circle' style={{backgroundColor: '#3e80f9'}}></div>
                  <p>Study</p>
                </div>
                <div className='circle_text'>
                  <div className='circle' style={{backgroundColor: '#27cea7'}}></div>
                  <p>Test</p>
                </div>
               
                {/*<button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                 <p className='e'>Yearly</p>
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item active" href="#">Yearly</a></li>
                  <li><a className="dropdown-item" href="#">Monthly</a></li>
                  <li><a className="dropdown-item" href="#">Weekly</a></li>
                  <li><a className="dropdown-item" href="#">Today</a></li>
                
                </ul>*/}

                <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
    <p>Yearly</p>
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
    <li><button className="dropdown-item active " type="button">Yearly</button></li>
    <li><button className="dropdown-item" type="button">Monthly</button></li>
    <li><button className="dropdown-item" type="button">Weekly</button></li>
    <li><button className="dropdown-item" type="button">Today</button></li>
  </ul>
</div>
            
                
              
            </div>
        </div>
      </div>
    </div>
     </div>
  )
};