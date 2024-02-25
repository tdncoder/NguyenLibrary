import { useOktaAuth } from "@okta/okta-react";
import { Link } from "react-router-dom";

export const LibraryServices = () =>{

    const {authState} = useOktaAuth();


    return(
        <div className="container my-5">
            <div className="row p-4 align-items-center border shadow-lg">
                <div className="col-lg-7 p-3">
                    <h1 className="display-4 fw-bold">
                        Can't find what you're looking for?
                    </h1>
                    <p className="lead">
                        If you cannot find what you're looking for,
                        send our library admin's a personal message!
                    </p>
                    <div className="d-grid gap-2 justify-content-md-start mb-4 mb-lg-3">
                        {authState?.isAuthenticated ?
                        <Link to='/messages' type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold text-white">
                            Library Services
                        </Link>
                        :
                        <Link className="btn btn-primary btn-lg text-white" to="/login">
                            Sign Up
                        </Link>
                    }
                        
                    </div>
                </div>
                <div className="col-lg-4 offset-lg01 shadow-lg lost-image"></div>
            </div>
        </div>
    );
}