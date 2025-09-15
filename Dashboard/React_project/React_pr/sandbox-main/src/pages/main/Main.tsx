import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './Main.scss';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
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
        <div className=' card_group1  '>

          <div className="card w-25">
          <div className="card-body">
            <h5 className="card-title">155+</h5>
            <p className="card-text">Completed Courses</p>
           <div className='icon_card_graphic'>
            <div className='icon_img' style={{backgroundColor:'#3e80f9'}}>
                <img src='/book-open-fill.svg' alt=' ' className='flex-shrink-0 w-48 h-48 flex-center rounded-circle bg-main-600 text-white text-2xl'></img>
                </div>
                 <div style={{ width: '80px', height: '42px', marginTop: '10px' }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={trendData}>
                       {/* Добавляем градиент */}
                      <defs>
                        <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#5cc3bd" stopOpacity={0.8}/>
                          <stop offset="100%" stopColor="#5cc3bd" stopOpacity={0.1}/>
                        </linearGradient>
                      </defs>
                      <Line 
                        type="monotone" 
                        dataKey="courses" 
                        stroke="#5cc3bd" 
                        strokeWidth={2}
                        dot={false}
                        fill="url(#gradient)"
                      />
                      {/* Скрываем оси но оставляем для масштабирования */}
                      <XAxis dataKey="day" hide={true} />
                      <YAxis hide={true} domain={['dataMin - 10', 'dataMax + 10']} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
            </div>
          </div>
        </div>

        <div className="card w-25">
          <div className="card-body">
            <h5 className="card-title">39+</h5>
            <p className="card-text">Earned Certificate</p>
           <div className='icon_card_graphic'>
            <div className='icon_img' style={{backgroundColor:'#27cea7'}}>
                <img src='/certificate-fill.svg' alt=' ' className='flex-shrink-0 w-48 h-48 flex-center rounded-circle bg-main-600 text-white text-2xl'></img>
                </div>
                 <div style={{ width: '80px', height: '42px', marginTop: '10px' }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={trendData}>
                       {/* Добавляем градиент */}
                      <defs>
                        <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#30d1ab" stopOpacity={0.8}/>
                          <stop offset="100%" stopColor="#30d1ab" stopOpacity={0.1}/>
                        </linearGradient>
                      </defs>
                      <Line 
                        type="monotone" 
                        dataKey="courses" 
                        stroke="#30d1ab" 
                        strokeWidth={2}
                        dot={false}
                        fill="url(#gradient)"
                      />
                      {/* Скрываем оси но оставляем для масштабирования */}
                      <XAxis dataKey="day" hide={true} />
                      <YAxis hide={true} domain={['dataMin - 10', 'dataMax + 10']} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
            </div>
          </div>
        </div>

        <div className="card w-25">
          <div className="card-body">
            <h5 className="card-title">25+</h5>
            <p className="card-text">Course in Progress</p>
           <div className='icon_card_graphic'>
            <div className='icon_img'  style={{backgroundColor:'#6142ff'}}>
                <img src='/graduation-cap-fill.svg' alt=' ' className='flex-shrink-0 w-48 h-48 flex-center rounded-circle bg-main-600 text-white text-2xl'></img>
                </div>
                 <div style={{ width: '80px', height: '42px', marginTop: '10px' }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={trendData}>
                       {/* Добавляем градиент */}
                      <defs>
                        <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#6d51ff" stopOpacity={0.8}/>
                          <stop offset="100%" stopColor="#6d51ff" stopOpacity={0.1}/>
                        </linearGradient>
                      </defs>
                      <Line 
                        type="monotone" 
                        dataKey="courses" 
                        stroke="#6d51ff" 
                        strokeWidth={2}
                        dot={false}
                        fill="url(#gradient)"
                      />
                      {/* Скрываем оси но оставляем для масштабирования */}
                      <XAxis dataKey="day" hide={true} />
                      <YAxis hide={true} domain={['dataMin - 10', 'dataMax + 10']} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
            </div>
          </div>
        </div>

        <div className="card w-25">
          <div className="card-body">
            <h5 className="card-title">18k+</h5>
            <p className="card-text">Community Support</p>
           <div className='icon_card_graphic'>
            <div className='icon_img' style={{backgroundColor:'#ff9f43'}}>
                <img src='/users-three-fill.svg' alt=' ' className='flex-shrink-0 w-48 h-48 flex-center rounded-circle bg-main-600 text-white text-2xl'></img>
                </div>
                 <div style={{ width: '80px', height: '42px', marginTop: '10px' }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={trendData}>
                       {/* Добавляем градиент */}
                      <defs>
                        <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#fba95d" stopOpacity={0.8}/>
                          <stop offset="100%" stopColor="#fba95d" stopOpacity={0.1}/>
                        </linearGradient>
                      </defs>
                      <Line 
                        type="monotone" 
                        dataKey="courses" 
                        stroke="#fba95d" 
                        strokeWidth={2}
                        dot={false}
                        fill="url(#gradient)"
                      />
                      {/* Скрываем оси но оставляем для масштабирования */}
                      <XAxis dataKey="day" hide={true} />
                      <YAxis hide={true} domain={['dataMin - 10', 'dataMax + 10']} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
            </div>
          </div>
        </div>
          
      </div>
    </div>
     </div>
 
  )
  
};


