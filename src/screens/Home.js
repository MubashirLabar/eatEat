import React from 'react'
import {Link} from 'react-router-dom'
import Lottie from 'react-lottie';
import * as chooseResturant from "../lottie/chooseResturant.json"
import * as cookDeliver from "../lottie/cookDeliver.json"
import * as heatEm from "../lottie/heatEm.json"
import * as chooseMenu from "../lottie/chooseMenu.json"

// Screens || Components
import SearchLocation from '../components/SearchLocation';
import ResturantCard from '../components/ResturantCard';
import DownloadCard from '../components/DownloadCard';

function Home() {

    const resturants = [
        {name: 'The Mixed Grill', img: "/images/rest-9.jpg", rating: 4.1, delivery: '15-25', ridingFee: '59'},
        {name: 'The Mixed Grill', img: "/images/rest-8.jpg", rating: 4.2, delivery: '15-25', ridingFee: '59'},
        {name: 'The Mixed Grill', img: "/images/rest-3.jpg", rating: 4.3, delivery: '15-25', ridingFee: '59'},
        {name: 'The Mixed Grill', img: "/images/rest-4.jpg", rating: 3.2, delivery: '15-25', ridingFee: '59'},
        {name: 'The Mixed Grill', img: "/images/rest-5.jpg", rating: 1.2, delivery: '15-25', ridingFee: '59'},
        {name: 'The Mixed Grill', img: "/images/rest-1.jpg", rating: 3.3, delivery: '15-25', ridingFee: '59'},
        {name: 'The Mixed Grill', img: "/images/rest-6.jpg", rating: 3.2, delivery: '15-25', ridingFee: '59'},
        {name: 'The Mixed Grill', img: "/images/rest-2.jpg", rating: 1.6, delivery: '15-25', ridingFee: '59'},
        {name: 'The Mixed Grill', img: "/images/rest-9.jpg", rating: 0.9, delivery: '15-25', ridingFee: '59'},
        {name: 'The Mixed Grill', img: "/images/rest-10.jpeg", rating: 4.7, delivery: '15-25', ridingFee: '59'},
        {name: 'The Mixed Grill', img: "/images/rest-3.jpg", rating: 2.8, delivery: '15-25', ridingFee: '59'},
        {name: 'The Mixed Grill', img: "/images/rest-4.jpg", rating: 3.6, delivery: '15-25', ridingFee: '59'}
    ]
    const cities = [
        {label: "Multan", slug: '/'},
        {label: "Lahore", slug: '/'},
        {label: "Karachi", slug: '/'},
        {label: "Rahim yar Khan", slug: '/'},
        {label: "Islamabad", slug: '/'},
        {label: "Rawalpindi", slug: '/'},
        {label: "Faisalabad", slug: '/'},
        {label: "Dera Ghazi Khan", slug: '/'},
        {label: "Sahiwal", slug: '/'},
        {label: "Okara", slug: '/'},
        {label: "Sargodha", slug: '/'},
        {label: "Sheikhupura", slug: '/'},
        {label: "Peshawar", slug: '/'},
        {label: "Sukkur", slug: '/'},
        {label: "Sadiqabad", slug: '/'},
        {label: "Pano Aqil", slug: '/'},
        {label: "Wah Cantt", slug: '/'},
        {label: "Larkana", slug: '/'},
        {label: "Qutta", slug: '/'},
        {label: "Bahawalpur", slug: '/'},
        {label: "Mardan", slug: '/'},
        {label: "Gujrat", slug: '/'},
        {label: "Mardan", slug: '/'},
        {label: "Sahiwal", slug: '/'},
    ]
    const _chooseResturant_ = {
        loop: true,
        autoplay: true, 
        animationData: chooseResturant.default,
        rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
        }
    };    
    const _chooseMenu_ = {
        loop: true,
        autoplay: true, 
        animationData: chooseMenu.default,
        rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const _heatEm_ = {
        loop: true,
        autoplay: true, 
        animationData: heatEm.default,
        rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const _cookDeliver_ = {
        loop: true,
        autoplay: true, 
        animationData: cookDeliver.default,
        rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
        }
    };


return (
    <div className="home-p">
        {/* Section A */}
        <div className='sect-a rel'>
            <div className="cvr flex aic">
                {/*<img src='/images/sect-a-l.svg'  className='img-l'/>*/}
                <div className='empty'/>
                <img src='/images/sect-a-r.svg'  className='img-r'/> 
            </div>
            <div className='meta flex flex-col abs fill wrapWidth'>
                <div className='slogn fontub s34 c000'>Order Resturant or Delivery Food Online</div>
                <div className='srch'><SearchLocation/></div>
                <div className='msg flex aic'>
                    <Link to='/' className='lin font s15 b5 color'>Sign In&nbsp;</Link>
                    <div className='fontmon s15 c333'>for your recent address</div>
                </div> 
            </div>
        </div>
    
        {/* Section B */}
        <div className='sect-b flex flex-col wrapWidth'>
            <div className="meta">
                <div className='title font s36 b6 c000'>How it works</div>
            </div>
            <div className='wrap flex aic'>
                <div className='item flex flex-col aic'>
                    <div className='vector'><Lottie options={_chooseResturant_} /></div>
                    <div className='lbl font s18 b6 c000'>Find nearby Resturants</div>
                    <div className='txt font s14 c333'>{`1200+ resturants registered on ${global.siteName}.`}</div>
                </div>
                <div className='item flex flex-col aic'>
                    <div className='vector'><Lottie options={_chooseMenu_ } /></div>
                    <div className='lbl font s18 b6 c000'>Choose Your Meals</div>
                    <div className='txt font s14 c333'>Easy way to find online food.</div>
                </div>
                <div className='item flex flex-col aic'>
                    <div className='vector'><Lottie options={_heatEm_} /></div>
                    <div className='lbl font s18 b6 c000'>Make your order</div>
                    <div className='txt font s14 c333'>Your food is prapering.</div>
                </div>
                <div className='item flex flex-col aic'>
                    <div className='vector'><Lottie options={_cookDeliver_} /></div>
                    <div className='lbl font s18 b6 c000'>Food on the way</div>
                    <div className='txt font s14 c333'>Your Delivery is on the way.</div>
                </div>
            </div>
        </div>
    
        {/* Section C */}
        <div className='sect-c flex flex-col wrapWidth'>
            <div className='meta'>
                <div className='title font s32 b6 c000'>Most Wanted Resturants</div>
                <div className='txt font s15 c333'>More then easy way to order online food.</div>
            </div>
            <div className='wrap'>
                {
                    resturants.map((item, index) => (
                        <ResturantCard data={item} />
                    ))
                }
            </div>
        </div>
    
        {/* section D*/}    
        <div className='sect-d wrapWidth'><DownloadCard /></div>
    
        {/* section F */}
        <div className='sect-f'>
            <div className='wrapWidth flex flex-col'>
                <div className='title font s32 b6 c000'>{`Cities with ${global.siteName}`}</div>
                <div className='content'>
                    {
                        cities.map((item, index) => (
                            <Link key={index} to={item.slug} className='font s15 b5 c333'>{item.label}</Link>
                        ))
                    }
                </div>
            </div>
        </div>
    </div> 
    );
}


export default Home;

