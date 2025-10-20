import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fontsource/roboto/400.css';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid
} from 'recharts';

import './main12.scss';

export const Main12 = () => {

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
  
  const formatYAxis = (value: number) => `${value}Hr`;
  
  const [timePeriod, setTimePeriod] = useState('Yearly');

  const handlePeriodChange = (e: any) => {
    setTimePeriod(e.target.value);
  };

  return(
    <div className='graph'>
      <div className="card mt-4" style={{ border: 'none', borderRadius:'16px' }}>
        <div className="card-body p-0"> 
          <div className="d-flex justify-content-between align-items-center mb-3" style={{padding:'20px 20px'}}>
            <h4 className="mb-0" >Study Statistics</h4>
            <div className="d-flex align-items-center gap-3">
              <div className="d-flex align-items-center">
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#3e80f9',
                  marginRight: '6px',
                }}></div>
                <span style={{ fontSize: '13px', color: '#0c1018', fontFamily: 'Roboto, sans-serif' }}>
                  Study
                </span>
              </div>
              <div className="d-flex align-items-center">
                <div
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#27cea7',
                    marginRight: '6px',
                  }}></div>
                <span style={{ fontSize: '13px', color: '#0c1018', fontFamily: 'Roboto, sans-serif' }}>
                  Test
                </span>
              </div>
              <div className="dropdown">
                <select
                  value={timePeriod}
                  onChange={handlePeriodChange}
                  className="form-select form-select-sm select-dropdown"
                  style={{ width: '80px', borderRadius: '8px' }}>
                  <option value="Yearly">Yearly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Today">Today</option>
                </select>
              </div>
            </div>
          </div>
          <div style={{ width: '100%', height: '300px', position: 'relative' }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={data}
                margin={{ top: 10, right: 30, left: 10, bottom: 30 }} 
                syncId="anyId"
              >
                <defs>
                  <linearGradient id="studyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="10%" stopColor="#3e80f9" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
                  </linearGradient>
                  <linearGradient id="testGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="10%" stopColor="#27cea7" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#e9ecef"
                  horizontal={true}
                  vertical={false}
                  strokeWidth={1}
                />
                
                <XAxis
                  dataKey="month"
                  tick={{ fill: '#667797', fontSize: 14, fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}
                  tickLine={false}
                  axisLine={false}
                  interval={0}
                  padding={{ left: 10, right: 10 }}
                />
                
                {/* Ось Y справа с отступом */}
                <YAxis
                  orientation="left" 
                  tickFormatter={formatYAxis}
                  tick={{ fill: '#667797', fontSize: 14, fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}
                  tickLine={false}
                  axisLine={false}
                  domain={[0, 50]}
                  tickCount={6}
                  width={50} /* Ширина для отступа */
                />
                
                <Tooltip
                  formatter={(value) => `${value}Hr`}
                  labelFormatter={(label) => label}
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    padding: '8px',
                    fontSize: '12px',
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
  )
}