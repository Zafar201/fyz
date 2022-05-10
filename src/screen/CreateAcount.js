import React, { useState,useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { createAccount } from '../actions/generalAction';
import { Link } from 'react-router-dom';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

function CreateAcount() {
  const [name, setName] = useState("")
  const [name2, setName2] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const accountCreate= useSelector(state=>state.accountCreate)
  const {loading,error,success} = accountCreate
  const dispatch = useDispatch()

  const submitHandler=(e)=>{
    e.preventDefault()
    dispatch(createAccount(name,name2,email,phone,address))   
  }
  useEffect(()=>{
    if(success){
      alert("your account is created wait for admin approvel")
      // window.location.href('/register')
      // setName(e.target.value)== ''
      // setName2('')
      // setEmail('')
      // setPhone('')
      // setAddress('')
    }
    if(error){
      console.log(error)
    }

  },[success])
 
  return (
  
    <div>
         <div className='admin-nav'>
       <Container>
           <Row>
               <Col className='admin-logo'>
               <Link to="/">    
                <img src="../assets/image/log2.png" alt="" />
               </Link>
               </Col>
               {/* <Col md={2} className='lang d-flex'>
                 <img src="../assets/image/lang.png" alt="" />
                 <p>  English</p>
                 
                 <img style={{height:"10px",marginTop:"18px"}} src="../assets/image/down-2.png" alt="" />

               </Col> */}
           </Row>
       </Container>
       </div>
      
 
    
      <div className='register'>
       <Container className='register-body'>
           <Row >
              <h1>Create Account</h1>
              {loading && <LoadingBox> </LoadingBox> }
              {error && <MessageBox>{error}</MessageBox>}
           </Row>
           <form onSubmit={submitHandler}>
           <Row className='register-body-1' style={{marginTop:"60px"}}>
               <Col md={4} style={{paddingLeft:"0px"}}>
                  <p>First name</p>
                <input type="text" 
               
                required 
                id="name" 
                name="name" 
                onChange={(e)=>setName(e.target.value)} />
               </Col>
               <Col md={4}>
                    <p>Last name</p>
                    <input 
                    type="text" 
                    required
                    id="name2" 
                    name="name2" 
                    onChange={(e)=>setName2(e.target.value)}/>
               </Col>
           </Row>
           <Row className='register-body-2'>
                <p>Email Address</p>
               <input 
               type="email" 
               id="email" 
               required 
               ame="email" 
               onChange={(e)=>setEmail(e.target.value)}/>
           </Row>
           <Row className='register-body-2'>
                <p>Phone number</p>
               <input 
               type="number" 
               id="phone" 
               required 
               name="phone" 
               onChange={(e)=>setPhone(e.target.value)}/>
           </Row>
           <Row>
               <p>Address</p>
               <textarea
                  name="address"
                  id="address" 
                  cols="4"
                  rows="5"
                  required
                  onChange={(e)=>setAddress(e.target.value)}
                ></textarea>
           </Row>
           <Row>
              <button type='submit'>Submit</button> 
           </Row>
           </form>
       </Container>
       </div>
    </div>
  )
}

export default CreateAcount