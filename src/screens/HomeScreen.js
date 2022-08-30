import React, { useState, useEffect } from 'react';

// Components
import Modal from '../components/Modal';
import Footer from '../components/Footer';
import HeroSlider from '../components/HeroSlider';

// Assets
import levelUp from "../assets/level_up_logo.png";
import levelUpStar from "../assets/level_up_star_logo.png";

const HomeScreen = () => {

    const [displayModal, setDisplayModal] = useState('none');

    useEffect(() => {
        setTimeout(setDisplayModal('block'), 5000);
    }, [])

    const closeModal = () => {
        setDisplayModal('none');
    }

    return (
        <>
           <HeroSlider closeModal={closeModal} setDisplayModal={setDisplayModal}/>

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

            <div className="info-section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-4" style={{ padding: "80px 80px 0px 80px" }}>
                            <div className="row">
                                <div className="info-title col-12">
                                    Home of
                                </div>
                            </div>
                            <div className="row">
                                <div className="info-title col-12">
                                    Team LevelUp
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-8" style={{ padding: "80px" }}>
                            <div className="info-subtitle">
                                Play to learn, play to practice, and you will win when you 
                                play in games. Remember how much fun you had growing up when 
                                you used to just go outside and play with your friends? We 
                                advocate using the "compete to learn" approach to practice--it 
                                lets kids play and have fun while competing. This type of practice, 
                                using competitive drills, does a better job of preparing players 
                                to compete in real games. Technically, this is called transference. 
                                What you do in practice carries over into what you do in games.
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="container">
                    <div className="row center">
                        <div className="seperator col-md-12"></div>
                    </div>    
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-4" style={{ padding: "80px 80px 0px 80px" }}>
                            <div className="row">
                                <div className="col-sm-6 col-md-12 info-title">
                                    Program
                                </div>
                                <div className="col-sm-6 col-md-12 info-title">
                                    Misson & Goals
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-8" style={{ padding: "80px" }}>
                            <div className="info-subtitle">
                                Want to improve your team's ball handling? Games like dribble knockout 
                                are very popular. Every player must have his or her own basketball. 
                                Coach starts the game. Every player must dribble constantly, stay 
                                in-bounds and try to knock the ball away from all other players in 
                                the game. Lose control of your basketball or go out-of-bounds, and you're 
                                eliminated. Boundaries for 10-12 players could start as half the court. 
                                After several players are eliminated, the boundary is reduced to only 
                                inside the 3-point area. Boundary is reduced again to the free-throw 
                                lane. Finally, when there are just two players left, they play the "finals" 
                                in the free throw half circle.
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row center">
                            <div className="seperator col-md-12"></div>
                        </div>    
                    </div>

                    <div className="container">
                        <div className="row" style={{ padding: "40px" }}>
                            <div className="col-md-12 start info-title">
                                Coaching Staff & Personnel
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="info-section">
                <div className="container info-section">
                    <div className="row">
                        <div className="col-sm-12 col-md-6" style={{ padding: "10px 40px 10px 80px" }}>
                            <div className="col-md-12">
                                <div className="container card" style={{ padding: "40px" }}>
                                    <div className="row">
                                        <div className="col-md-12 director-title">Damon</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 director-title" style={{ paddingBottom: "5px" }}>Samper</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 director-subtitle" style={{ paddingBottom: "10px" }}>Program Director</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 director-passage">
                                            Coach Samper has more than a decade of experience coaching 
                                            youth as a developmental skills and team coach.  He grew 
                                            up playing in Cleveland at a Div I school during the same 
                                            time as Lebron James and played collegiately and professionally 
                                            in the ABA and UBA.  He has run training camps for the Cleveland 
                                            Cavaliers and Utah Jazz and, most recently, was Director of the 
                                            LA Clippers Youth Basketball Program.  He has trained with the 
                                            likes of Kyrie Irving, Al Jefferson, Kyle Korver, and many more 
                                            top NBA talent.  Coach Samper works and resides in Santa Barbara, 
                                            CA as a teacher at a local private school for elementary through 
                                            middle school and is a 1:1 coach to many of the local kids across 
                                            the city.  His forte is utilizing innovative tools for practical 
                                            skills development while making every session, practice, and game 
                                            a fun and rewarding experience.  Most importantly, his demeanor and 
                                            positivity working with kids is completely in line with our Program 
                                            Goals and Mission.  We are fortunate to have someone of his caliber 
                                            in our small locale.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6" style={{ padding: "10px 40px 80px 80px" }}>
                            <div className="col-md-12">
                                <div className="container card" style={{ padding: "40px", paddingBottom: "170px" }}>
                                    <div className="row">
                                        <div className="col-md-12 director-title" style={{ paddingBottom: "5px" }}>Bill Doer</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 director-subtitle" style={{ paddingBottom: "10px" }}>Program Director</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 director-passage">
                                            Bill has been working with youth of all ages for many years across 
                                            a multitude of sports.  He currently runs all youth programs for 
                                            the Montecito YMCA and after-school sports programs at the local 
                                            elementary school.  Bill was one of the founders of Team LevelUp 
                                            due to his desire to provide the local basketball youth with a club 
                                            team that would allow a more competitive, traveling option for the 
                                            community.  
                                        </div>
                                    </div>
                                    <div></div>
                                    <div className="row">
                                        <div className="col-md-12 director-passage">
                                            Team LevelUp is under the YMCA umbrella and as Program Director, 
                                            Bill oversees all registration, scheduling, and communication 
                                            (among many other hats) for the Team.
                                        </div>
                                    </div>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
            <Modal setDisplayModal={setDisplayModal} closeModal={closeModal} display={displayModal}/>
            <Footer />
        </>
    )
}

export default HomeScreen