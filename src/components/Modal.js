import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import $ from 'jquery';

const Modal = ({setDisplayModal, display, closeModal }) => {
    const [password, setPassword] = useState('');
    const [isMobile, setIsMobile] = useState(false);

    const navigate = useNavigate();

    const checkPassword = () => {
        if (password === 'password123') {
            navigate('/parent-portal');
        } else {
            alert('Incorrect password');
        }
    }

    const handleResize = () => {
        if (window.innerWidth < 720) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    useEffect(() => {
        handleResize();
    }, [])


    let modal = document.querySelector(".modal");

    $(window).on('click', (e) => {
        if(e.target === modal){
            setDisplayModal('none');
        }
    });

    return (
        <div className="modal" style={{ display: display }}>
            <div className="modal-content" style={isMobile ? { width: '80%' } : { width: '40%' }}>
                <span className="close-btn" onClick={closeModal}>&times;</span>
                <div className="container text-center">
                    <form>
                        <div className="row">
                            <div className="col-md-12 text-center">
                                Please enter your password
                            </div>
                        </div>
                        <div className="row" style={{ paddingBottom: "40px" }}>
                            <div className="col-sm-12" style={{ padding: "20px" }}>
                                <input onChange={(e) => setPassword(e.target.value)} className="form-input" placeholder="Password" style={{ width: "80%" }}/>
                            </div>
                            <div className="col-sm-12">
                                <button onClick={checkPassword} className="sign-up-button" style={{ width: "80%" }}>Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Modal