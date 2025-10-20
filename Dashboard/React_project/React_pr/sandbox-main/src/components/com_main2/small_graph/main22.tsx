import React, { useState } from 'react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer
} from 'recharts';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/urbanist/700.css'; 
import './main22.scss';

export const Main22 = () => {
    const [hoveredPercent, setHoveredPercent] = useState<number | null>(null);
    const [hoveredSegment, setHoveredSegment] = useState<string | null>(null);
    const [activeSegment, setActiveSegment] = useState<string | null>(null);

   const handleBlueEnter = () => {
    setHoveredPercent(100);
    setHoveredSegment('blue');
    setActiveSegment('blue');
};

const handleGreenEnter = () => {
    setHoveredPercent(60);
    setHoveredSegment('green');
    setActiveSegment('green');
};

const handleOrangeEnter = () => {
    setHoveredPercent(25);
    setHoveredSegment('grey');
    setActiveSegment('grey');
};

const handleMouseLeave = () => {
    setHoveredPercent(null);
    setHoveredSegment(null);
    setActiveSegment(null);
};

    const getSegmentColor = (segment: string) => {
    if (activeSegment === segment) {
        switch(segment) {
            case 'blue': return '#7ba2e0ff'; 
            case 'green': return '#00ffc3ff'; 
            case 'grey': return '#504e4eff'; 
            default: return '';
        }
    } else {
        // Обычные цвета
        switch(segment) {
            case 'blue': return '#3e80f9';
            case 'green': return '#27cea7';
            case 'grey': return '#000000ff';
            default: return '';
        }
    }
};

    return(
         <div className='card_grah'>
  <div className='card '>
    <div className='card-header'>
      <h5>My Progress</h5>
    </div>
    <div className="card-body">
      <div className="progress-chart-container">
        {/* Круговой график прогресса */}
        <ResponsiveContainer width={150} height={150}>
          <PieChart>
            
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
              <Cell 
                 fill={getSegmentColor('blue')} 
                onMouseEnter={handleBlueEnter}
                onMouseLeave={handleMouseLeave}
              />
              <Cell fill="#f0f0f0" />
            </Pie>
            
            
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
              <Cell 
                fill={getSegmentColor('green')}
                onMouseEnter={handleGreenEnter}
                onMouseLeave={handleMouseLeave}
              />
              <Cell fill="#f0f0f0" />
            </Pie>
            
            
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
              <Cell 
                fill={getSegmentColor('grey')}
                onMouseEnter={handleOrangeEnter}
                onMouseLeave={handleMouseLeave}
              />
              <Cell fill="#f0f0f0" />
            </Pie>
            
          
            <text 
              x="50%" 
              y="50%" 
              textAnchor="middle" 
              dominantBaseline="central" 
              fontSize={15}
              fontWeight={400}
              fill={"#0f141f"}
              fontFamily="Roboto, sans-serif"
            >
              {hoveredPercent !== null ? `${hoveredPercent}%` : '82%'}
            </text>
          </PieChart>
        </ResponsiveContainer>
      </div>
      
    
      <div className="total-time">
        <p style={{color:'#3b465e'}}>Total hour:</p>
        <p style={{color:'#0f141f'}}>6h 32 min</p>
      </div>
      
     
      <div className="course-status">
        <div 
          className="status-item"
        >
          <p className="progress-numbers">60/60</p>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ 
                width: '30px', 
                backgroundColor:'#3e80f9'
              }}
            ></div>
          </div>
          <p className="progress-label">Completed</p>
        </div>
        
        <div 
          className="status-item"
        >
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
        
        <div 
          className="status-item"
        >
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
    )
}