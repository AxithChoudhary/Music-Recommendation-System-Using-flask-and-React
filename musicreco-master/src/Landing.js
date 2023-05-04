import './App.css';
import Hero1 from './hero';
import Nav from './navbar';
import Foot from './foot';

function Landing(){
    return(
        <div className='App'>
          <body>
            <div class="herohold">
              <Hero1/>
            </div>
          </body>
        </div>
      );
}

export default Landing;