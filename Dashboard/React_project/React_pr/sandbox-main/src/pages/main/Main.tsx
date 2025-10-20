import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Main.scss';
import { Main1 } from '../../components/com_main/4card';
import { Main2 } from '../../components/com_main2/calendar';
import { Main12 } from '../../components/com_main/big_graph/main12';
import { Main21 } from '../../components/com_main2/button_option';
import { Main22 } from '../../components/com_main2/small_graph/main22';
import { Main13 } from '../../components/com_main/3_card_/main13';
import { Footer } from '../../components/footer';


export const Main = () => {
   return (
    <div className="site_con">
      <div className="scrollable-container">
        <div className='container-fluid'>
          <div className="row g-3">
          
            <div className="col-xxl-9 col-xl-9 col-lg-8" >
              <div className="main-content">
                <Main1 />
                <Main12 /> 
                <Main13 />
             
              </div>
            </div>

           
            <div className="col-xxl-3 col-xl-3 col-lg-4">
              <div className="sidebar-content">
                <Main2 />
                <Main21 />
                <Main22 />
              </div>
            </div>
          </div>
        </div>
          <div className='footer'>
            <Footer />
          </div>
      </div>
    </div>
  );
};