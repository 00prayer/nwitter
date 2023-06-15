import { HashRouter as Router, /*Redirect,*/ Routes, Route, Navigate } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Profile from "routes/Profile";
import Navigation from "components/Navigation";

const AppRouter = ({ isLoggedIn, userObj, refreshUser }) => {
    return (
        <Router>
            {isLoggedIn && <Navigation userObj={userObj} />}
            <Routes>
                <Route>
                {
                    isLoggedIn ? (
                        <Route exact path="/" >
                            <Route index element={ <Home userObj={userObj} /> } />
                            <Route path="profile" element={ <Profile userObj={userObj} refreshUser={refreshUser} /> } />
                        </Route>
                    ) 
                    : (
                        <Route exact path="/">
                            <Route index element={ <Auth /> } />
                            {/* <Route path="*" element={ <Navigate replace to="/" /> } /> */}
                        </Route>
                    )
                }
                </Route>
            </Routes>
        </Router>
    );  
};

export default AppRouter;