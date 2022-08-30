import React from 'react'

// Assets
import twoLeaf from '../assets/2_leaf_logo.svg';
import levelUp from '../assets/level_up_logo.png';
import levelUpStar from '../assets/level_up_star_logo.png';

const Footer = () => {
  return (
    <footer className="info-section">
        <div className="thank-you-image">
            <div className="container">
                <div className="row text-center thank-you-title" style={{ paddingTop: "100px" }}>
                    <div className="col-md-12">
                        Thank You to Our
                    </div>
                </div>
                <div className="row text-center thank-you-title" style={{ paddingBottom: "80px" }}>
                    <div className="col-md-12">
                        Generous Sponsors
                    </div>
                </div>
                <div className="row text-center" style={{ paddingBottom: "100px" }}>
                    <div className="col-sm-12 col-md-4" style={{ padding: "20px" }}>
                        <img src={ twoLeaf }/>
                    </div>
                    <div className="col-sm-12 col-md-4" style={{ padding: "20px" }}>
                        <img src={ levelUp }/>
                    </div>
                    <div className="col-sm-12 col-md-4" style={{ padding: "20px" }}>
                        <img src={ levelUpStar }/>
                    </div>
                </div>
            </div>
        </div>
        <div className="stay-updated-form-container container">
            <div className="row text-center">
                <div className="col-12" style={{ paddingBottom: "100px" }}>
                    <div className="thank-you-title" style={{ padding: "40px" }}>Stay Updated</div>
                    <form action="">
                        <div className="row">
                            <div className="col-12" style={{ paddingBottom: "15px" }}>
                                <input id="nameInput" className="form-input" placeholder="Your name" style={{ width: "40%" }}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12" style={{ paddingBottom: "30px" }}>
                                <input id="emailInput" className="form-input" placeholder="Your email" style={{ width: "40%" }}/>
                            </div>
                        </div>
                        <div className="row center">
                            <div className="col-12">
                                <button id="emailBtn" className="sign-up-button" style={{ width: "40%" }}>Sign Up</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer