import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {User} from "../models/user";

const Header = (props: { user: User }) => {
    const [title, setTitle] = useState('Welcome');
    const [description, setDescription] = useState('Share links to earn money');

    useEffect(() => {
        if (props.user?.id) {
            setTitle(`$${props.user.revenue}`);
            setDescription('You have earned this far');
        } else {
            setTitle('Welcome to Ink Ambassadors');
            setDescription('Sell digital art and earn real money!');
        }
    }, [props.user]);

    let buttons;

    if (!props.user?.id) {
        buttons = (
            <p>
            <Link to={'/login'} className="btn btn-primary border-white bg-transparent my-2 mr-3" style={{display: 'inline-block', marginRight: '10px'}}>Sign in</Link>
            <Link to={'/register'} className="btn btn-primary my-2" style={{display: 'inline-block'}}>Create account</Link>
            </p>
        )
    }

    return (
        <div className="video-bg">
            <section className="py-5 text-center container">
            
                <div className="row py-lg-5 hero">
                    <div className="col-lg-8 col-md-12 mx-auto text-white">
                        <h1 className="fw-light herofont">{title}</h1>
                        <p className="lead text-white">{description}</p>
                        {buttons}
                    </div>
                </div>

            </section>

            <video playsInline autoPlay muted loop>
                <source src="https://static.ambassadors.ink/videos/hero-bg.mp4" type="video/mp4" />
            </video>
        </div>
    );
};

export default connect(
    (state: { user: User }) => ({
        user: state.user
    })
)(Header);
