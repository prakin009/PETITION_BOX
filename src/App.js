import React from 'react';
import Login from './Login.js';
import Home from './Home.js';
import VerifyOTP from './verifyOTP';
import Mail from './Mail';
import{ BrowserRouter as Router,Switch, Route}  from  'react-router-dom';

const App=()=>{
  return(
    <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Login" component={Login}/>
        <Route exact path="/verifyOTP" component={VerifyOTP}/>
        <Route exact path="/Mail" component={Mail}/>
      </Switch>
    </div>
    </Router>
  )
}
export default App;