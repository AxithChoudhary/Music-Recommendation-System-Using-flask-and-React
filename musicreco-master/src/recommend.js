import "./recom.css";
import hero from './hero.svg';

function Recommend(){
 return(
    
    <div className="recohead">
    <p className="head">Unleash The</p>&nbsp;<p className="headhigh">Unexpected!!</p><br/>
    <p className="subhead">A</p>&nbsp;<p className="subhigh">Suprise</p>&nbsp;<p className="subhead">Is Waiting For You...</p><br/>
    <div>
        <button className="recobtn">Lets's Get Vibin'</button>
        <img src={hero} alt='hero' class="hero"/>
    </div>
    </div>
 );
}

export default Recommend;