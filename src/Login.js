import React from 'react';
import './App.css';
import axios from 'axios';

class Login extends React.Component{
  constructor(){
    super();
    this.state={phone:''}
    this.changeValue=this.changeValue.bind(this);
    this.onssubmit=this.onssubmit.bind(this);
  }
 
  changeValue(e){
    this.setState({
      phone:e.target.value
    })
  }
  onssubmit(e){
  e.preventDefault()
  const phon={phone:this.state.phone}
  axios.post('http://localhost:3002/sendOTP',phon).then(
      (response)=>{
          console.log(response.data);
          this.props.history.push({pathname:"/verifyOTP",
        state:{
        det:response.data,
        }})
      })
  this.setState({
    phone:''
  })
  }

  render(){
    return(
      <div>
       <h1>Login page</h1>
    <div className="box1">
       <form onSubmit={this.onssubmit}>
        <label className="l1">Enter your phone Number</label><br></br><br></br>
        <input type="tel" placeholder="phone Number" className="input" value={this.state.phone} onChange={this.changeValue} /><br></br><br></br>
        <input type="submit" className="btn"  value="Get OTP" />
       </form>
    </div>
    </div>
    )
  }
}
export default Login;
