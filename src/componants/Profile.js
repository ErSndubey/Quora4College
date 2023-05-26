import React from 'react'
import './Profile.css'

export default function Profile() {
    return (
        <div>
            <div className="container">
                <div className="container mt-5 mb-5">
                    <div className="row no-gutters">
                        <div className="col-md-4 col-lg-4 pe-0"><img id="devProfileImg" src="dev.jpg"/></div>
                        <div className="col-md-8 col-lg-8 ps-0">
                            <div className="d-flex flex-column">
                                <div className="d-flex flex-column  justify-content-between align-items-center p-5 bg-success text-white">
                                    <h3 className="display-5">Sachchidanand Dubey</h3><div><i className="fa fa-facebook me-3"></i><i className="fa fa-google me-3"></i><i className="fa fa-youtube-play me-3"></i><i className="fa fa-github me-3"></i><i className="fa fa-linkedin me-3"></i></div></div>
                                <div className="p-3 bg-black text-white">
                                    <h6>Web designer &amp; Developer</h6>
                                </div>
                                <div className="d-flex flex-row text-white">
                                    <div className="p-4 bg-primary text-center skill-block">
                                        <h4>18</h4>
                                        <h6>Questions</h6>
                                    </div>
                                    <div className="p-3 bg-success text-center skill-block">
                                        <h4>87</h4>
                                        <h6>Answers</h6>
                                    </div>
                                    <div className="p-3 bg-warning text-center skill-block">
                                        <h4>700</h4>
                                        <h6>up votes</h6>
                                    </div>
                                    <div className="p-3 bg-danger text-center skill-block">
                                        <h4>1.3k</h4>
                                        <h6>views</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <ul className="nav nav-tabs mb-3" id="ex-with-icons" role="tablist">
                    <li className="nav-item" role="presentation">
                        <a className="nav-link active bg-success" id="questionTab" data-mdb-toggle="tab" href="#questionTab" role="tab"
                            aria-controls="ex-with-icons-tabs-1" aria-selected="true"><i className="fa-solid fa-hat-cowboy me-2"></i>Questions</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" id="answerTab" data-mdb-toggle="tab" href="#answerTab" role="tab"
                            aria-controls="ex-with-icons-tabs-2" aria-selected="false"><i className="fa-solid fa-pen-to-square"></i>Answers</a>
                    </li>

                </ul>



                <div className="tab-content" id="questionTab">
                    <div className="tab-pane fade show active" id="ex-with-icons-tabs-1" role="tabpanel" aria-labelledby="ex-with-icons-tab-1">
                        Tab 1 content
                    </div>
                    <div className="tab-pane fade" id="ex-with-icons-tabs-2" role="tabpanel" aria-labelledby="answerTab">
                        Tab 2 content
                    </div>
                    <div className="tab-pane fade" id="ex-with-icons-tabs-3" role="tabpanel" aria-labelledby="ex-with-icons-tab-3">
                        Tab 3 content
                    </div>
                </div>
            </div>
        </div>
        )
}
