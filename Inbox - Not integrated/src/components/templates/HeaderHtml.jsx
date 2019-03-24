import React from "react";

export const HeaderHtml = () => {
  return (
    <header className="bg-primary">
      <div className="container">
        <div className="row">
          <div className="col-12 mx-auto py-2">
            <div className="card border-0 bg-transparent">
              <div className="card-body">
                <div className="row">
                  <div className="col-lg text-center text-lg-left">
                    <v1>
                      <h1 className="font-weight-light d-inline">
                        <span className="text-dark">Admin Homepage</span>
                      </h1>
                      <h6>Eric Gen</h6>
                      <h7>
                        <v1>
                          <button
                            type="button"
                            className="btn btn-outline-secondary text-uppercase"
                            >
                            Edit Profile
                          </button>
                        </v1>
                        <v2>
                          <button
                            type="button"
                            className="btn btn-outline-secondary text-uppercase"
                            >
                            Logout
                          </button>
                        </v2>
                      </h7>
                    </v1>
                  </div>
                  <div className="col-lg-3 text-lg-right text-center d-flex flex-lg-column flex-row justify-content-center">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderHtml;
