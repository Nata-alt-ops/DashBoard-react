import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
  Tooltip,
  CartesianGrid,
} from 'recharts';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './Main.scss';

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
    { day: 'Wed', courses: 65 },
  ];

  const data = [
    { month: 'Jan', study: 8, test: 8 },
    { month: 'Feb', study: 15, test: 24 },
    { month: 'Mar', study: 9, test: 18 },
    { month: 'Apr', study: 20, test: 40 },
    { month: 'May', study: 10, test: 18 },
    { month: 'Jun', study: 33, test: 48 },
    { month: 'Jul', study: 13, test: 22 },
    { month: 'Aug', study: 22, test: 38 },
    { month: 'Sep', study: 8, test: 18 },
    { month: 'Oct', study: 17, test: 30 },
    { month: 'Nov', study: 10, test: 20 },
    { month: 'Dec', study: 15, test: 28 },
  ];

  // Функция для форматирования оси Y
  const formatYAxis = (value: number) => `${value}Hr`;

  // Состояние для периода
  const [timePeriod, setTimePeriod] = useState('Yearly');

  const handlePeriodChange = (e: any) => {
    setTimePeriod(e.target.value);
  };

  
  return (
    <div className="site_con">
       <div className="scrollable-container">
      <div className='o'>
      <div className="conatainer col-lg-9">
        <div className="card_group1">
          {/* Карточка 1 */}
          <div className="card w-25">
            <div className="card-body">
              <h5 className="card-title">155+</h5>
              <p className="card-text">Completed Courses</p>
              <div className="icon_card_graphic">
                <div className="icon_img" style={{ backgroundColor: '#3e80f9' }}>
                  <img
                    src="/book-open-fill.svg"
                    alt=" "
                    className="flex-shrink-0 w-48 h-48 flex-center rounded-circle bg-main-600 text-white text-2xl"
                  />
                </div>
                <div style={{ width: '80px', height: '42px', marginTop: '10px' }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={trendData}>
                      <defs>
                        <linearGradient id="gradientBlue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#3fb8b2" stopOpacity={0.8} />
                          <stop offset="20%" stopColor="#3fb8b2" stopOpacity={0.1} />
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
              <div className="icon_card_graphic">
                <div className="icon_img" style={{ backgroundColor: '#27cea7' }}>
                  <img
                    src="/certificate-fill.svg"
                    alt=" "
                    className="flex-shrink-0 w-48 h-48 flex-center rounded-circle bg-main-600 text-white text-2xl"
                  />
                </div>
                <div style={{ width: '80px', height: '42px', marginTop: '10px' }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={trendData}>
                      <defs>
                        <linearGradient id="gradientGreen" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#30d1ab" stopOpacity={0.8} />
                          <stop offset="20%" stopColor="#30d1ab" stopOpacity={0.1} />
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
              <div className="icon_card_graphic">
                <div className="icon_img" style={{ backgroundColor: '#6142ff' }}>
                  <img
                    src="/graduation-cap-fill.svg"
                    alt=" "
                    className="flex-shrink-0 w-48 h-48 flex-center rounded-circle bg-main-600 text-white text-2xl"
                  />
                </div>
                <div style={{ width: '80px', height: '42px', marginTop: '10px' }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={trendData}>
                      <defs>
                        <linearGradient id="gradientPurple" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#6d51ff" stopOpacity={0.8} />
                          <stop offset="20%" stopColor="#6d51ff" stopOpacity={0.1} />
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
              <div className="icon_card_graphic">
                <div className="icon_img" style={{ backgroundColor: '#ff9f43' }}>
                  <img
                    src="/users-three-fill.svg"
                    alt=" "
                    className="flex-shrink-0 w-48 h-48 flex-center rounded-circle bg-main-600 text-white text-2xl"
                  />
                </div>
                <div style={{ width: '80px', height: '42px', marginTop: '10px' }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={trendData}>
                      <defs>
                        <linearGradient id="gradientOrange" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#fba95d" stopOpacity={0.8} />
                          <stop offset="20%" stopColor="#fba95d" stopOpacity={0.1} />
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

        {/* ➡️ Большой график */}
        <div className="card mt-4">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h3 className="mb-0">Study Statistics</h3>
              <div className="d-flex align-items-center gap-3">
               
                <div className="d-flex align-items-center">
                  <div
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: '#3e80f9',
                      marginRight: '6px',
                    }}
                  ></div>
                  <span style={{ fontSize: '14px', color: '#6c757d' }}>Study</span>
                </div>

                
                <div className="d-flex align-items-center">
                  <div
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: '#27cea7',
                      marginRight: '6px',
                    }}
                  ></div>
                  <span style={{ fontSize: '14px', color: '#6c757d' }}>Test</span>
                </div>

              
                <div className="dropdown">
                  <select
                    value={timePeriod}
                    onChange={handlePeriodChange}
                    className="form-select form-select-sm"
                    style={{ width: 'auto' }}
                  >
                    <option value="Yearly">Yearly</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Weekly">Weekly</option>
                    <option value="Today">Today</option>
                  </select>
                </div>
              </div>
            </div>

                        <div style={{ width: '100%', height: 300 }}>
                          <ResponsiveContainer width="100%" height="100%">
                          
                            <AreaChart
                            data={data}
                            margin={{ top: 20, right: 0, left: 0, bottom: 20 }}
                            syncId="anyId"
                          >
                             
                              <defs>
                                <linearGradient id="studyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                  <stop offset="10%" stopColor="#3e80f9" stopOpacity="0.7" />
                                  <stop offset="100%" stopColor="#ffffffff" stopOpacity="0.1" />
                                </linearGradient>
                                <linearGradient id="testGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                  <stop offset="10%" stopColor="#27cea7" stopOpacity="0.7" />
                                  <stop offset="100%" stopColor="#ffffffff" stopOpacity="0.1" />
                                </linearGradient>
                              </defs>

                             <CartesianGrid
                              strokeDasharray="3 3"
                              stroke="#e9ecef"
                              horizontal={true}
                              vertical={false}
                            />
                             <XAxis
  dataKey="month"
  tick={{ fill: '#6c757d', fontSize: 12 }}
  tickLine={false}      
  axisLine={false}        
/>

<YAxis
  tickFormatter={formatYAxis}
  tick={{ fill: '#6c757d', fontSize: 12 }}
  tickLine={false}       
  axisLine={false}        
  domain={[0, 50]}
  tickCount={6}         
/>
                              <Tooltip
                                formatter={(value) => `${value}Hr`}
                                labelFormatter={(label) => label}
                                contentStyle={{
                                  backgroundColor: '#fff',
                                  border: '1px solid #ddd',
                                  borderRadius: '4px',
                                  padding: '8px',
                                  fontSize: '12px'
                                }}
                                cursor={{ stroke: '#ccc', strokeWidth: 1, strokeDasharray: '3 3' }}
                              />

                          
                              <Area
                                type="monotone"
                                dataKey="study"
                                stroke="#3e80f9"
                                strokeWidth={1}
                                fill="url(#studyGradient)"
                                fillOpacity={1}
                                name="Study"
                                dot={false}
                                activeDot={{ r: 6 }}
                              />

                          
                              <Area
                                type="monotone"
                                dataKey="test"
                                stroke="#27cea7"
                                strokeWidth={1}
                                fill="url(#testGradient)"
                                fillOpacity={1}
                                name="Test"
                                dot={false}
                                activeDot={{ r: 6 }}
                              />
                            </AreaChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                    </div>
                  
                  </div>
                  <div className='col-lg-3'>
                      <div className='card r' style={{marginTop: '24px', marginLeft: '24px', borderRadius: '18px', border:'none'}}>
                        <div className='card-body'>
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
                            <div className='days'></div>
                        </div>
                      </div>

                  </div>
                  </div>


        </div>
    </div>
  );
};