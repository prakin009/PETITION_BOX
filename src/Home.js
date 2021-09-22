import {Link} from 'react-router-dom';
import './Home.css';
import background from './MP.jpeg'
const Home=()=>{
    return(
        <div>
        <div className="parent">
         <div className="div1">

        <img src={background} height={820} width={735} />
            </div>
        <div className="div2">
        <div className="div3">
        <h3 className="heading">Petition</h3>
            <h3 className="heading">  Box</h3>
            <Link to='/Login' className="link">Book now</Link>
        </div>
        </div>
        </div>
        </div>
    )
}
export default Home;
