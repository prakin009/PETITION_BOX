import emailjs from "emailjs-com";

import './Mail.css';

function Mail() {

  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_06e0q98', 'template_yq1mt17', e.target, 'user_Hd8vnzQiTNiTKOrKTUkFz')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  return (
   <body>
   <center>
    <p>
    <div className="container">
      <form onSubmit={sendEmail}>
       <div>
        <br></br>
        <div>&nbsp;&nbsp;&nbsp;Name*</div>
        <div>
        &nbsp;&nbsp;&nbsp;<input type="text" className="poz" placeholder="Enter your Name/ Anonymous" name="name" required/>
        </div>
        <div>&nbsp;&nbsp;&nbsp;Department*</div>
        <div>
        &nbsp;&nbsp;&nbsp;<select className="poz2" defaultValue="General" required><option value="Electricity">Electricity</option><option value="Water">Water</option><option value="General">General</option></select>
        </div>
        <div>&nbsp;&nbsp;&nbsp;Petition content*</div> <div className="redding">&nbsp;&nbsp;&nbsp;(!! Do not use abusive words. Serious action will be taken in case &nbsp;&nbsp;&nbsp;the petition content provided here is fake !!)</div>
        <div>
        &nbsp;&nbsp;&nbsp;<textarea className="poz3" id="" cols="68" rows="15" placeholder="Petition content" name="message" required></textarea>
        </div>
        <div>
        <center><input type="submit" className="poz1" value="Send Petition"/></center> 
        </div>
       </div>
      </form>
    </div>
    <div className="last"></div>
    </p>
    </center>
    </body>
  );
}

export default Mail;