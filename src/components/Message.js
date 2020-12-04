import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import axios from 'axios'

const Message = () => {
    const [formData, setFormData] = useState({
        message: '',
        mobile: '',
    });

    const [showSuccessMsg,setShowSuccessMsg] = useState({success:false,message:'',color:'red'})
    const [checked,setChecked] = useState(false)
    const [otp, setOtp] = useState(0);
    
    let { id } = useParams();

    const otpGenerator = () => { 
          
      var digits = '0123456789'; 
      let OTP = ''; 
      for (let i = 0; i < 6; i++ ) { 
          OTP += digits[Math.floor(Math.random() * 10)]; 
      } 
      return OTP; 
    } 

    useEffect(() => {
        const contactList = JSON.parse(localStorage.getItem('contactList'))

        const {mobile, name} = contactList.find(contact => contact.id === parseInt(id))

        setFormData({...formData,mobile,name})
        setOtp(otpGenerator())

    }, [id])


  const { message } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendMessage = async (formData) => {

    try {
        const res = await axios.post('http://localhost:5000/api/message',
        {message: checked ? formData.message : `Hi, Your OTP is : ${otp}`, mobile: formData.mobile}, {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache',
          });

        if(res.data.success){
            const prevData = JSON.parse(localStorage.getItem('messageHistory'));
            const previousData = prevData || [];
        
            const data =  {
                id: uuid(),
                message: checked ? formData.message : `Hi, Your OTP is : ${otp}`,
                mobile: formData.mobile,
                name: formData.name,
                time: new Date()
            }
        
            const newData = [data,...previousData]
        
            localStorage.setItem('messageHistory',JSON.stringify(newData))
            setFormData({...formData, message:''})
            setShowSuccessMsg({success:true,message:'Message sent successfully!',color:'green'})
            setTimeout(()=>{setShowSuccessMsg({success:false,message:''})},3000)
            setChecked(true)
        }else{
            console.log("error",res.data);
            setShowSuccessMsg({success:true,message:res.data.errors[0],color:'red'})
            setTimeout(()=>{setShowSuccessMsg({success:false,message:''})},3000)
        }
    } catch (err) {
        setShowSuccessMsg({success:true,message:'Something went wrong, message not sent!',color:'red'})
        setTimeout(()=>{setShowSuccessMsg({success:false,message:''})},3000)
    }
  }

  return (
    <div className='container'>
      <h1 className='large text-primary'>Type message</h1>
      <form
        className='form'
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage(formData);
        }}
      >
        <div className='form-group'>
        <label>
          <input type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
         {' '} Send Custom Message
        </label>
        </div>
        <div className='form-group'>
          <textarea
            name='message'
            cols='30'
            rows='4'
            placeholder='Type message...'
            value={!checked ? `Hi, Your OTP is ${otp}` : message}
            disabled={!checked}
            onChange={(e) => onChange(e)}
          ></textarea>
          {
            showSuccessMsg.success && <span style={{color:showSuccessMsg.color}}>{showSuccessMsg.message}</span>
          }
        </div>
        <input type='submit' value='Send' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/'>
          Go Back To Dashboard
        </Link>
      </form>
    </div>
  );
};

export default Message;
