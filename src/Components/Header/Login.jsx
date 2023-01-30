import React, { useState, useRef } from 'react';
import imglogin from '../../images/imglogin.webp'

const Login = (props) => {
  // const initialState={
  //   userName:'',
  //   passWord:''
  // }

  const ref = useRef(null)
  const onClick = () => {
    let value = ref.current.value
    alert(value)
  }


  const [formData, setData] = useState({})

  const handleChange = (e) =>{
    const {name, value} = e.target
    setData({...formData, [name]:value})
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(formData);
  }

  //c1
  const {userName, passWord}= formData
  return (
    <div id='main'>
        <div className='pt-2 pb-5'>
            <div className="container" style={{background :'#ffffff'}}>
                <div className='pt-2 pb-5'>
                  <div className='row'>
                    <div className='col-6'>
                      <form onSubmit={handleSubmit}>
                        <h3 className='text-center'>Sign In</h3>
                        <div className="mb-3">
                          <label>UserName</label>
                          <input
                            className="form-control"

                            type="text"
                            name='userName'
                            placeholder='User Name'
                            value={userName}

                            ref={ref}
                            // c2
                            //value={formData.userName || ""}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="mb-3">
                          <label>Password</label>
                          <input
                            className="form-control"

                            type='password'
                            name='passWord'
                            placeholder="Enter password"
                            value={passWord}
                            //c2
                            //value={formData.passWord || ""}
                            
                            onChange={handleChange}
                          />
                        </div>
                        <div className="mb-3">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck1"
                            />
                            <label className="custom-control-label" htmlFor="customCheck1">
                              Remember me
                            </label>
                          </div>
                        </div>
                        <div className="d-grid">
                          <button className="btn btn-primary" onClick={onClick}>
                            Submit
                          </button>

                          {/* <input type="submit" /> */}
                        </div>
                        <p className="forgot-password text-right">
                          Forgot <a href="#">password?</a>
                        </p>
                      </form>
                    </div>
                    <div className='col-6'>
                      <img className='img-fluid rounded' src={imglogin} height="100" />
                    </div>
                  </div>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Login
