import React from 'react';

// Assets
import levelUp from "../assets/level_up_logo.png";
import levelUpStar from "../assets/level_up_star_logo.png";

// Components
import HeroSlider from '../components/HeroSlider';
import Footer from '../components/Footer';

const ParentPortalScreen = () => {

  return (
    <>
      <HeroSlider isParentPortal={true}/>
        <div className="container">
          <div className="row main-subtitle text-center">
              <div className="col-12">
                  In partnership with
                </div>
              </div>
              <div className="row text-center" style={{ marginBottom: "50px"}}>
                <div className="col-6">
                  <img src={levelUp} alt={levelUp}/>
                </div>
                <div className="col-6">
                    <img src={levelUpStar} alt={levelUpStar}/>
                </div>
              </div>
          </div>
      <Footer isParentPortal={true}/>
    </>
  )
}

export default ParentPortalScreen