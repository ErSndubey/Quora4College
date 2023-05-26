import React from 'react'
import SignUp from './SignUp'

export default function Login() {

  const ColorStyle = {
    color: "#198754"
  }

  return (
    <div>
      <div className="container mt-5 " style={{ backgroundColor: '#e2f5e8' }}>
        <div className="row d-flex justify-content-center">
          <div className="col-2 d-none d-lg-block order-last">

          </div>
          <div id="my-element" className="col-7 pt-4">

            <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
              <li className="nav-item" role="presentation">
                <a className="nav-link active bg-success" id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab"
                  aria-controls="pills-login" aria-selected="true">Login</a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" id="tab-register" data-mdb-toggle="pill" href="#pills-register" data-toggle="tab" role="tab"
                  aria-controls="pills-register" aria-selected="false" style={ColorStyle}>Register</a>
              </li>
            </ul>



            <div className="tab-content">
              <div className="tab-pane fade show active" id="pills-login" data-toggle="tab" role="tabpanel" aria-labelledby="tab-login">
                <form>
                  <div className="text-center mb-3">
                    <p>Sign in with:</p>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fa-brands fa-facebook" style={ColorStyle}></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fa-brands fa-google" style={ColorStyle}></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fa-brands fa-twitter" style={ColorStyle}></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fa-brands fa-github" style={ColorStyle}></i>
                    </button>
                  </div>

                  <p className="text-center">or:</p>

                  

                  <div className="form-outline mb-4">
                    <input type="email" id="loginName" className="form-control" required/>
                    <label className="form-label" htmlFor="loginName">Email or username</label>
                  </div>


                  <div className="form-outline mb-4">
                    <input type="password" id="loginPassword" className="form-control" required/>
                    <label className="form-label" htmlFor="loginPassword">Password</label>
                  </div>


                  <div className="row mb-4">
                    <div className="col-md-6 d-flex justify-content-start">

                      <div className="form-check d-flex justify-content-start">
                        <input className="form-check-input bg-success" type="checkbox" value="" id="loginCheck" checked />
                        <label className="form-check-label ms-1" htmlFor="loginCheck"> Remember me </label>
                      </div>
                    </div>

                    <div className="col-md-6 d-flex justify-content-end">

                      <a href="#!" style={ColorStyle}>Forgot password?</a>
                    </div>
                  </div>


                  <button type="submit" className="btn btn-success btn-block mb-4 ">Sign in</button>


                  <div className="text-center">
                    <p>Not a member ? <a href="#!" style={ColorStyle} onClick={SignUp}>Register</a></p>
                  </div>
                </form>
              </div>

            </div>

          </div>
          <div className="col-3 d-none d-lg-block order-first">

          </div>
        </div>
      </div>



    </div>
  )
}
