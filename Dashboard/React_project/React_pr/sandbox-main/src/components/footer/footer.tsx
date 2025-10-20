import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/urbanist/700.css'; 

import './footer.scss';

export const Footer = () =>{
    return(
      <div className='down-board card'>
        <div className='card-body d-flex justify-content-between align-items-center'>
          <p>© Copyright Edmate 2024, All Right Reserverd</p>
          <div className='link'>
            <button>License</button>
            <button>More Themes</button>
            <button>Documentation</button>
            <button>Support</button>
          </div>
        </div>
      </div>
    )
}