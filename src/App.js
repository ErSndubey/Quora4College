
import Header from "./componants/Header";
import Profile from "./componants/Profile";
import EditProfile from "./componants/EditProfile";
import SignIn from "./componants/SignIn";
import SignUp from "./componants/SignUp";
import LeftSideBar from "./componants/LeftSideBar";
import MiddleScrolableBar from "./componants/MiddleScrolableBar";
import RightSideBar from "./componants/RightSideBar";



function App() {
  return (
    <>
      <Header />
      <SignIn />
      <div className="container">
        <div className="row row-fluid">
          <div className="col-2 ">
            <LeftSideBar />
          </div>
          <div className="col-md-7 ">
            <MiddleScrolableBar />
          </div>
          <div className="col-3 ">
            <RightSideBar />
          </div>
        </div>
      </div>
      <SignUp />
      <Profile />
      <EditProfile />
    </>
  );
}

export default App;
