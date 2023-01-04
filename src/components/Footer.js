import React from 'react';
import { Link } from 'react-router-dom'

function Footer(props) {

    const company = [
        {label: "About Us", slug: "/about"},
        {label: "Blog", slug: "/"},
        {label: "Contact Us", slug: "/"}, 
        {label: "Pricing", slug: "/"},
        {label: "Testimonials", slug: "/"},
    ]
    const support = [
        {label: "Help center", slug: "/"},
        {label: "Terms of service", slug: "/terms"},
        {label: "Legal", slug: "/"},
        {label: "Privacy Policy", slug: "/"},
        {label: "FAQ's", slug: "/faq"},
    ]
  
    const date = new Date()

    return ( 
        <div className="footer">
            <div className="wrap wrapWidth flex">
                <div className="col flex flex-col">
                    <div className='logo font s34 b6 color'>eat<span className='cfff'>Eat</span></div>
                    {/*<div className="lin font s14">Coypright &copy; <span>{date.getFullYear()}</span> SuperMen</div>*/}
                    {/*<div className="lin font s14">All rights reserved</div>*/}
                    <div className="social flex aic">
                        <Link to="/" className="item flex aic anim"><div className="ico icon-facebook" /></Link>
                        <Link to="/" className="item flex aic anim"><div className="ico icon-instagram" /></Link>
                        <Link to="/" className="item flex aic anim"><div className="ico icon-twitter" /></Link>
                        <Link to="/" className="item flex aic anim"><div className="ico icon-youtube-play" /></Link>
                    </div>
                </div>
                <div className="col flex flex-col">
                    {
                        company.map( (item, index) => (
                            <Link key={index} to={item.slug} className="lin font s15 b5 flex aic anim">{item.label}</Link>
                        ))
                    }
                </div>
                <div className="col flex flex-col">
                    {
                        support.map( (item, index) => (
                            <Link key={index} to={item.slug} className="lin font s15 b5 flex aic anim">{item.label}</Link>
                        ))
                    }
                </div>
            </div>
            <div className="cpy-rit">
                <div className='txt wrapWidth font s15 cfff'>© <span>{global.siteName}</span>&nbsp;<span>{date.getFullYear()}</span> All rights reserved.</div>
            </div>
        </div>
    );
}

export default Footer;