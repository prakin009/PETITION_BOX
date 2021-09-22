import  React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {useLocation} from 'react-router-dom';
import {useHistory}from 'react-router-dom';
import axios from 'axios';
import  './verifyOTP.css'
const VerifyOTP=props=>{
    const  history=useHistory();
    const location=useLocation();
    const [state, setState] = useState({
        phon: "",
        has: "",
      });
      const [verify,setVerify]=useState('');
      useEffect(() => {
        setState(state => ({ ...state, phon: location.state.det.phone }));
        console.log(state.phon);
      }, [state.phon,location]);
      useEffect(() => {
        setState(state => ({ ...state, has: location.state.det.hash }));
        console.log(state.has);
      }, [state.has,location]);
      /*useEffect(() => {
        setState(state => ({ ...state, ot: location.state.det.otp }));
        console.log(state.ot);
      }, [state.ot,location]);*/

    /*useEffect(()=>{
       setphone({phone:location.state.det.phone})
       console.log(phone);
       console.log(hash);
       console.log(otp);
    },[location,phone,hash,otp]);*/
    const onss=(e)=>{
     e.preventDefault();
     const check={
         phone:state.phon,
         hash:state.has,
         otp:verify,
     }
     axios.post('http://localhost:3002/verifyOTP',check).then(response=>{
       if((JSON.stringify(response.data.msg))==='"user confirmed"')
       {
         alert("user confirmed");
         history.push('/Mail');
       }
        else 
        {
        alert("incorrect OTP");
        console.log(JSON.stringify(response.data.msg));
        history.push('/Login'); 
        }}).catch(e=>console.log(e));
    }
    return(
        <div>
           <h1> verify</h1>
           <div className="verify">
           <form onSubmit={onss}>
           <input type='text' placeholder='enter the otp' minLength="6" maxLength="6" value={verify} onChange={e=>setVerify(e.target.value)} className="inputs"/>
           <input type="submit" value="Verify" className="btns"/>
           </form>
           </div>
            </div>
    

    )
}

export  default VerifyOTP;