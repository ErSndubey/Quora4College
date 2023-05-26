import React from 'react'
import "./Home.css";

export default function MiddleScrolableBar() {
    
    const BackgroundColorStyle={
      backgroundColor: "#f0f1f1"
    }

    const ColorStyle = {
        color: "#198754"
    }
    
    return (

        

        <div>




            <form className="form-floating mt-3">
                <input type="email" className="form-control" id="floatingInputValue" style={BackgroundColorStyle}/>
                <label htmlFor="floatingInputValue text-center">Ask anything ?</label>
            </form>



            <div className="container mt-3 border rounded " style={BackgroundColorStyle} >



                <div className="row">

                    <div className='voting'>
                        <a href="">
                            <img src="dev.jpg" width="45" height="45" className="rounded-circle mt-3 mb-4  " />
                        </a>
                        <span className="fa fa-caret-up"></span>
                        <span>12</span>
                        <span className="fa fa-caret-down"></span>
                    </div>

                    <div className="col-xl-8 text-sm contentsize" >
                        <h5 className="mt-3 ">Sachchidanand Dubey <i className="fa-sharp fa-solid fa-circle-check" style={ColorStyle}></i>
                        </h5>

                        <h5 className=" text-sm mt-1">What is the difference between null and undefined in Java Script?
                        </h5>

                        <p className='parastyle'>The difference can be explained with toilet tissue
                            holder:

                            A non-zero value is like a holder with roll of toilet tissue and there's tissue still on
                            the tube.

                            A zero value is like a holder with an empty toilet tissue tube.

                            A null value is like a holder that doesn't even have a tissue tube.

                            An undefined value is similar to the holder itself being missing.
                        </p>
                    </div>

                    <div className=" gap-2 d-flex justify-content-end mb-2" style={BackgroundColorStyle}>


                        <button type="button" className="btn btn-sm btn-outline-success"><i
                            className="fa-solid fa-message "></i><span className="ms-2">comment</span>
                        </button>


                        <button type="button" className="btn btn-sm btn-outline-success">
                            <i className="fa-solid fa-square-share-nodes"></i>
                            <span>Share</span>
                        </button>


                        <button type="button" className="btn btn-sm btn-outline-success">
                            <i className="fa-solid fa-pen-to-square"></i>
                            <span>Answer</span>
                        </button>
                    </div>


                </div>
                <hr />

                <div className="row">

                    <div className="voting">
                        <a href="">
                            <img src="shiva.png" width="45" height="45" className="rounded-circle mt-3 mb-4  " />
                        </a>
                        <span className="fa fa-caret-up"></span>
                        <span>12</span>
                        <span className="fa fa-caret-down"></span>
                    </div>

                    <div className="col-xl-8 text-sm contentsize" >
                        <h5 className="mt-3 ">Shiva Sahu <i className="fa-sharp fa-solid fa-circle-check" style={ColorStyle}
                        ></i></h5>

                        <h5 className=" text-sm mt-1">What is the difference between null and undefined in Java Script?
                        </h5>

                        <p className='parastyle'>The difference can be explained with toilet tissue
                            holder:

                            A non-zero value is like a holder with roll of toilet tissue and there's tissue still on
                            the tube.

                            A zero value is like a holder with an empty toilet tissue tube.

                            A null value is like a holder that doesn't even have a tissue tube.

                            An undefined value is similar to the holder itself being missing.</p>
                    </div>

                    <div className=" gap-2 d-flex justify-content-end mb-2" style={BackgroundColorStyle}>


                        <button type="button" className="btn btn-sm btn-outline-success">
                            <i className="fa-solid fa-message "></i><span className="ms-2">comment</span>
                        </button>


                        <button type="button" className="btn btn-sm btn-outline-success">
                            <i className="fa-solid fa-square-share-nodes"></i>
                            <span>Share</span>
                        </button>


                        <button type="button" className="btn btn-sm btn-outline-success">
                            <i className="fa-solid fa-pen-to-square"></i>
                            <span>Answer</span>
                        </button>
                    </div>


                </div>
                <hr />


                <div className="row">

                    <div className="voting">
                        <a href="">
                            <img src="dev.jpg" width="45" height="45" className="rounded-circle mt-3 mb-4  " />
                        </a>
                        <span className="fa fa-caret-up"></span>
                        <span>12</span>
                        <span className="fa fa-caret-down"></span>
                    </div>

                    <div className="col-xl-8 text-sm contentsize" >
                        <h5 className="mt-3 ">Sachchidanand Dubey <i className="fa-sharp fa-solid fa-circle-check" style={ColorStyle}
                        ></i></h5>

                        <h5 className=" text-sm mt-1">What is the difference between null and undefined in Java Script?
                        </h5>

                        <p className='parastyle'>The difference can be explained with toilet tissue
                            holder:

                            A non-zero value is like a holder with roll of toilet tissue and there's tissue still on
                            the tube.

                            A zero value is like a holder with an empty toilet tissue tube.

                            A null value is like a holder that doesn't even have a tissue tube.

                            An undefined value is similar to the holder itself being missing.</p>
                    </div>

                    <div className=" gap-2 d-flex justify-content-end mb-2" style={BackgroundColorStyle}>


                        <button type="button" className="btn btn-sm btn-outline-success">
                            <i className="fa-solid fa-message "></i><span className="ms-2">comment</span>
                        </button>


                        <button type="button" className="btn btn-sm btn-outline-success">
                            <i className="fa-solid fa-square-share-nodes"></i>
                            <span>Share</span> </button>


                        <button type="button" className="btn btn-sm btn-outline-success">
                            <i className="fa-solid fa-pen-to-square"></i>
                            <span>Answer</span> </button>
                    </div>


                </div>

                <hr />

            </div>
        
        </div >
  )
}
