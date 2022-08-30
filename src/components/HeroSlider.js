import React from 'react';
import $ from 'jquery';
import { useNavigate } from 'react-router-dom';

// Assets
import levelUp from "../assets/level_up_logo.png";
import banner1 from "../assets/banner_image_1.png";
import banner2 from "../assets/banner_image_2.png";

const HeroSlider = ({ setDisplayModal, isParentPortal }) => {

    let images = [banner1, banner2];
    let nextimage = 0;

    const doSlideshow = () => {
        if(nextimage >= images.length){
            nextimage = 0;
        }
        console.log('test')
        $('.hero-image')
        .css('background-image','url("'+images[nextimage++]+'")')
        .fadeIn(5000, () => {
            setTimeout(doSlideshow, 5000);
        });
    }

    doSlideshow();

    const navigate = useNavigate();
    const navHome = () => navigate('/');

    return (
        <>
            <div className="hero-image">
                <div className="container" style={{ height: '60vh' }}>
                    <div className="row text-center">
                        <div className="col-sm-4 col-md-4" style={{ padding: "20px"}}>
                            <img src={levelUp} alt={levelUp} onClick={navHome}/>
                        </div>
                        <div className="col-sm-4 col-md-4" style={{ padding: "20px"}}> </div>
                        <div className="col-sm-4 col-md-4" style={{ padding: "40px" }}>
                            {isParentPortal ?
                                <></>: 
                                <button onClick={() => setDisplayModal('block') } className="hero-button">{'Parent Portal >'}</button>
                            }   
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSlider