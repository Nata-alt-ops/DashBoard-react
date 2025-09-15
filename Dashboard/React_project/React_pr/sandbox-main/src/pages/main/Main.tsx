import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './Main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';




export const Main = () => {
  const navigate = useNavigate();
 
 

  
  return (
    <div className='site_con'>
      <div className='conatainer col-lg-9'>
        <div className=' card_group1  '>

          <div className="card w-25">
          <div className="card-body">
            <h5 className="card-title">155+</h5>
            <p className="card-text">Completed Courses</p>
           <div className='icon_card_graphic'>
                <img src='/book-open.svg' alt=' ' className='icon_img'></img>
            </div>
          </div>
        </div>
          <div className='card1'>
            <div className='card_all_item'>
              <div className='static_text'><h1>155+</h1></div>
              <div className='text_card'><p>Completed Courses</p></div>
              <div className='icon_card'>
                <img src='/book-open.svg' alt=' ' className='icon_img'></img>
              </div>
            </div>
          </div>
          <div className='card1'>
            <p>card1</p>
          </div>
          <div className='card1'>
            <p>card1</p>
          </div>
          <div className='card1'>
            <p>card1</p>
          </div>
        </div>
      </div>
    </div>
 
  )
  
};


