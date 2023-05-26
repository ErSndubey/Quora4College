import React from 'react'
import "./Home.css";

export default function LeftSideBar() {
    return (
    <div>
        
            <div className="border rounded mt-3 d-none d-lg-block " style={{backgroundColor: "#f0f1f1" }}>
                    <img src="dev.jpg" width="70vw" height="70vw" className=" rounded-circle mx-auto d-block mt-3" alt="..."/>
                    <div>
                        <h5 className="mt-1 ms-2 mx-auto " style={{fontSize: "1vw"}}>Sachchidanand Dubey 
                        <i className="fa-sharp fa-solid fa-circle-check" style={{color: "#198754"}}></i></h5>
                    </div>



                    <ul className="list-group  mt-3">
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold"><i className="fa-solid fa-house me-2"></i>Home</div>

                            </div>

                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">

                                <div className="fw-bold"><i className="fa-solid fa-hat-cowboy me-2"></i>Questions</div>

                                

                                <ul >
                                    <li>New</li>
                                    <li>Trending</li>
                                    <li>For You</li>
                                </ul>
                            </div>


                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold"><i className="fa-solid fa-square-poll-horizontal me-2"></i>Polls</div>

                            </div>

                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-start mt-3">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold"><i className="fa-solid fa-square-poll-horizontal me-2"></i>Groups</div>
                                <ul id='symbol'>
                                    <li>New</li>
                                    <li>Trending</li>
                                    <li>For You</li>
                                </ul>
                            </div>

                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold"><i className="fa-solid fa-square-poll-horizontal me-2"></i>Tags</div>

                            </div>

                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold"><i className="fa-solid fa-square-poll-horizontal me-2"></i>Badges</div>

                            </div>

                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold"><i className="fa-solid fa-square-poll-horizontal me-2"></i>Help</div>

                            </div>

                        </li>

                    </ul >
            </div >
        
    </div >
  )
}
