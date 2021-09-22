require('dotenv').config()
const crypto=require('crypto')
const express=require('express')
const accountSid=process.env.ACCOUNT_SID
const authToken=process.env.AUTH_TOKEN
const client=require('twilio')(accountSid, authToken)
const JWT_AUTH_TOKEN=process.env.JWT_AUTH
const JWT_REFRESH_TOKEN=process.env.JWT_REFRESH_TOKEN
const cors=require('cors')
const smsKey=process.env.SMS_KEY
const app=express()
app.use(express.json())
app.use(cors({origin:true}))
app.post('/sendOTP',(req,res)=>{
    const phone=req.body.phone;//getting phone number
    const otp=Math.floor(100000 + Math.random()*900000);//random value otp
    const ttl=18000 //timeout for 30 seconds
    const expires=Date.now() + ttl //timeout for 30 seconds from real time
    const data=`${phone}.${otp}.${expires}` 
    const hash=crypto.createHmac('sha256',smsKey).update(data).digest('hex')//hash of the data
    const fullhash=`${hash}.${otp}.${expires}`
    client.messages.create({
        body: `Your one time password is ${otp}`,
        from: +12512734446,
        to: phone
    }).then((messages)=>{
        console.log(messages)
    }).catch((e)=>{
        console.error(e);
    })
    res.status(200).send({phone, hash:fullhash,otp})
})
app.post('/verifyOTP',(req,res)=>{
    const phone=req.body.phone;
    const hash=req.body.hash;
    const otp=req.body.otp;
    let [hashVal,newotp,expires]=hash.split('.');
    let now=Date.now();
    if(now>parseInt(expires)){ //checks for otp timeout
        return res.status(504).send({msg:'TimeOut pls try again'})
    }
    const data=`${phone}.${otp}.${expires}`
    const newHash=crypto.createHmac('sha256',smsKey).update(data).digest('hex')//new hash va;ue
    console.log(otp+""+newotp);
    if(otp===newotp)
    {
        return res.send({msg:"user confirmed"})
    }
    else
    {
        return res.send({verification:false,msg:'Incorrect OTP'})
    }

})
app.listen(3002,()=>{
    console.log('server is running');
})
