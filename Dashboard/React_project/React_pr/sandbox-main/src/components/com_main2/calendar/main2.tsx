import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/urbanist/700.css'; 
import './main2.scss';
export const Main2 = () =>{
    return(
        <div className='col'>
            <div className='r'>
            <div className='card' style={{borderRadius: '16px', border:'none'}}>
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
            </div>
        </div>
    )
}