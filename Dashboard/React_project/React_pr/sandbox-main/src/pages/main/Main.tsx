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
  Cell
} from 'recharts';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/urbanist/700.css'; 
import './Main.scss';

export const Main = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  const [hoveredPercent, setHoveredPercent] = useState<number | null>(null);

  const data1 = [
    { name: 'Blue', value: 82, color: '#45a9e1' },
    { name: 'Green', value: 75, color: '#2ecc71' },
    { name: 'Black', value: 90, color: '#000000' },
  ];

  // Обработчики событий
  const handleMouseEnter = (entry: any) => {
    setHoveredPercent(entry.percent * 100);
  };

  const handleMouseLeave = () => {
    setHoveredPercent(null);
  };

  

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

  const data_1 = [
    {
    name: '18-24',
    uv: 31.47,
    pv: 2400,
    fill: '#8884d8',
  },
  {
    name: '25-29',
    uv: 26.69,
    pv: 4567,
    fill: '#83a6ed',
  },
  {
    name: '30-34',
    uv: 15.69,
    pv: 1398,
    fill: '#8dd1e1',
  }
  ]

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
                    
                  <div className='card mt-4'>
                    <div className="card-body d-flex  flex-colum ">


                      <div className='d-flex justify-content-between align-items-center mb-20'
                      style={{width:'100%', }}
                      
                      >
                        <h1>Top Courses Pick for You</h1>
                        <p>See All</p>
                      </div>
                     


                    </div>
                  </div>

                  
                  </div>
                  {/*боковая панель*/}
                  <div className='col-lg-3'>
                      <div className='card r' style={{marginTop: '24px', marginLeft: '24px', borderRadius: '18px', border:'none'}}>
                        <div className='card-body'>
                          {/*Календарь*/}
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
  <div className='card'>
    <div className='card-header'>
      <h5>My Progress</h5>
    </div>
    <div className="card-body">
      <ResponsiveContainer width="100%" height={160}>
        <PieChart>
          {/* Внешнее синее кольцо */}
          <Pie
            data={[{ name: 'Blue', value: 82 }]}
            cx="50%"
            cy="50%"
            innerRadius={65}
            outerRadius={75}
            fill="#fff"
            dataKey="value"
            stroke="none"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Cell fill="#45a9e1" />
          </Pie>

          {/* Среднее зелёное кольцо */}
          <Pie
            data={[{ name: 'Green', value: 75 }]}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={65}
            fill="#fff"
            dataKey="value"
            stroke="none"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Cell fill="#2ecc71" />
          </Pie>

          {/* Внутреннее чёрное кольцо */}
          <Pie
            data={[{ name: 'Black', value: 90 }]}
            cx="50%"
            cy="50%"
            innerRadius={35}
            outerRadius={50}
            fill="#fff"
            dataKey="value"
            stroke="none"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Cell fill="#000000" />
          </Pie>

          {/* Текст в центре */}
          <text x="50%" y="50%" textAnchor="middle" dominantBaseline="central" fontSize="16" fontWeight="bold">
            {hoveredPercent !== null ? `${hoveredPercent}%` : '82%'}
          </text>
        </PieChart>
      </ResponsiveContainer>
        

      {/* Общее время */}
      <div className="total-time" style={{ textAlign: 'center', margin: '10px 0' }}>
        <p style={{ color: '#0c1018', fontSize: '14px', fontWeight: 500 }}>Total hour: 6h 32 min</p>
      </div>

      {/* Статусы курсов */}
      <div className="course-status" style={{ display: 'flex', justifyContent: 'space-around', marginTop: '16px' }}>
        {[
          { label: 'Completed', value: 60, total: 60, color: '#3e80f9' },
          { label: 'Completed', value: 60, total: 60, color: '#27cea7' },
          { label: 'Completed', value: 60, total: 60, color: '#ff9f43' },
        ].map((item, index) => (
          <div key={index} style={{ textAlign: 'center' }}>
            <div
              style={{
                width: '100%',
                height: '8px',
                backgroundColor: '#e0e0e0',
                borderRadius: '4px',
                overflow: 'hidden',
                marginBottom: '4px',
              }}
            >
              <div
                style={{
                  width: `${(item.value / item.total) * 100}%`,
                  height: '100%',
                  backgroundColor: item.color,
                  transition: 'width 0.3s ease',
                }}
              ></div>
            </div>
            <p style={{ fontSize: '12px', color: '#6c757d', margin: '0' }}>{item.value}/{item.total}</p>
            <p style={{ fontSize: '12px', color: '#6c757d', margin: '0' }}>{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>   




                  </div>
                  </div>


        </div>
    </div>
  );
};