import { Footer, Nav, Box} from './component/Footer';
import Carousel3D from "./component/Carousel3D";
import CustomRadioButtons from "./component/test"
import LikertScale from "./component/LikertScale"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useRef } from 'react';

function App() {
  const carouseRef = useRef(null);
  const boxRef = useRef(null);
  
  return (
    <div className="d-flex flex-column min-vh-100 bg-light backweb">
      <Nav carouseRef={carouseRef} boxRef={boxRef}/>

      <div ref={carouseRef}>
        <Carousel3D />
      </div>

      {/* <div >
        <CustomRadioButtons/>
      </div> */}

      <div>
        <LikertScale/>
      </div>
      
      {/* ส่วนของเนื้อหา */}
      <div ref={boxRef}>
        <Box />
      </div>

      {/* Footer ติดล่างสุด */}
      <Footer />
    </div>
  );
}

export default App;
