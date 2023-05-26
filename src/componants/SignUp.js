import React from 'react'

export default function () {

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
                                <a className="nav-link" id="tab-register" data-mdb-toggle="pill" href="#pills-register" data-toggle="tab" role="tab"
                                    aria-controls="pills-register" aria-selected="false" style={ColorStyle}>Login</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link active bg-success" id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab"
                                    aria-controls="pills-login" aria-selected="true">Register</a>
                            </li>
                        </ul>



                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="pills-login" data-toggle="tab" role="tabpanel" aria-labelledby="tab-login">
                                <form>
                                    <div className="text-center mb-3">
                                        <p>Sign Up with:</p>
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
                                        <input type="text" id="registerName" className="form-control" required/>
                                        <label className="form-label" htmlFor="registerName" >Name</label>
                                    </div>


                                    <div className="form-outline mb-4">
                                        <input type="text" id="registerUsername" className="form-control" required/>
                                        <label className="form-label" htmlFor="registerUsername">Username</label>
                                    </div>


                                    <div className="form-outline mb-4">
                                        <input type="email" id="registerEmail" className="form-control" required/>
                                        <label className="form-label" htmlFor="registerEmail">Email</label>
                                    </div>


                                    <div className="form-outline mb-4">
                                        <input type="password" id="registerPassword" className="form-control" required/>
                                        <label className="form-label" htmlFor="registerPassword">Password</label>
                                    </div>


                                    <div className="form-outline mb-4">
                                        <input type="password" id="registerRepeatPassword" className="form-control" required/>
                                        <label className="form-label" htmlFor="registerRepeatPassword">Confirm password</label>
                                    </div>


                                    <div className="form-check d-flex justify-content-center mb-4">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="registerCheck" checked
                                            aria-describedby="registerCheckHelpText" />
                                        <label className="form-check-label" htmlFor="registerCheck">
                                            I have read and agree to the terms
                                        </label>
                                    </div>





                                    <button type="submit" className="btn btn-success btn-block mb-4">Sign Up</button>


                                    <div className="text-center">
                                        <p>Already a member ? <a href="#!" style={ColorStyle}>Sign In</a></p>
                                    </div>
                                </form>
                            </div>

                        </div>

                    </div>
                    <div className="col-3 d-none d-lg-block order-first">

                    </div>
                </div>
            </div >
        </div >
    )
}
