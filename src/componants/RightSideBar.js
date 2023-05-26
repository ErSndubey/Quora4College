import React from 'react'
import "./Home.css";

export default function RightSideBar() {

    const ColorStyle = {
        color: "rgb(148, 12, 12)"
    }

  return (
    <div>
        
            <div className=" mt-3 d-none d-lg-block border rounded"  style={{backgroundColor: "#f0f1f1" }}>
                

                    <div className="container text-center mt-3 ">
                        <div className="row row-cols-2 bg-light border border-success">
                            <div className="col d-flex flex-column justify-content-center border border-success ">
                                <h6 className="mb-0 mt-2">18</h6>
                                <p className="mb-1">Questions</p>
                            </div>
                            <div className="col d-flex flex-column justify-content-center border border-success ">
                                <h6 className="mb-0 mt-2">87</h6>
                                <p className="mb-1">Answers</p>
                            </div>
                            <div className="col d-flex flex-column justify-content-center border border-success">
                                <h6 className="mb-0 mt-2">700</h6>
                                <p className="mb-1">up votes</p>
                            </div>
                            <div className="col d-flex flex-column justify-content-center border border-success">
                                <h6 className="mb-0 mt-2 primary">1.3k</h6>
                                <p className="mb-1">views</p>
                            </div>


                        </div>
                    </div>

                    
                    <div className="resources mt-3">
                        <h4><i className="fa-solid fa-flask me-2 " style={{color: "#198754"}}></i><span>For You</span></h4>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <div className="card mt-2">
                                    <img src="time_table.webp" className="card-img-top " alt="..."/>
                                    <div className="card-body">
                                        <p className="card-text">AKTU Date Sheet 2023 Odd/Even Semester PDF UPTU BTech BArch
                                            Exam Date @ aktu.ac.in.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <h6><i className="fa-solid fa-file-pdf me-2 " style={ColorStyle}></i>Download
                                    Thomas calculs
                                </h6>
                            </li>
                            
                            <li className="list-group-item">
                                <h6><i className="fa-solid fa-file-pdf me-2 " style={ColorStyle}></i>Download
                                    Quntum Series of all branches.
                                </h6>   
                            </li>
                            
                            <li className="list-group-item">
                                <h6><i className="fa-solid fa-briefcase me-2" style={ColorStyle}></i>Job openings
                                    for
                                    freshers
                                </h6>
                            </li>
                            
                            <li className="list-group-item">
                                <h6><i className="fa-solid fa-file-pdf me-2 " style={ColorStyle}></i>Web
                                    Technology : A Computer Science Perspective by Jeffrey Jackson.<span
                                        className="badge badge-sm text-bg-warning">new</span>
                                </h6>
                            </li>
                            
                            <li className="list-group-item">
                                <h6><i className="fa-solid fa-briefcase me-2" style={ColorStyle}></i>Summer Internship
                                    For CS/IT Students.
                                </h6>
                            </li>
                            
                            <li className="list-group-item">
                                <h6><i className="fa-solid fa-file-pdf me-2 " style={ColorStyle}></i>Download
                                    Thomas calculs
                                </h6>
                            </li>
                            

                        </ul>
                    </div>

            </div>
    </div>
  )
}
