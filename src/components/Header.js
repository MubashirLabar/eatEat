import React,{useState, useEffect} from 'react'
import SearchLocation from './SearchLocation'

function Header() {

    const [isTop, setTop] = useState(true)
    const [showSrch, setShowSrch] = useState(false)

    useEffect(() => {
        window.onscroll = () =>{
            //console.log(window.scrollY)
            if(window.scrollY > 190){setTop(false)} 
            else {setTop(true)}
            if(window.scrollY > 300){setShowSrch(true)} 
            else {setShowSrch(false)}
        }
    }) 

    return (
        <div className={`header flex aic anim ${isTop ? 'fixed' : 'fixed bg'}`}>
            <div className='wrapWidth'>
                <div className='lit flex aic'>
                    <div className='logo font s34 b6 color'>eat<span className='c000'>Eat</span></div>
                    <div className={`srch anim ${showSrch ? 'display' : 'hide'}`}><SearchLocation page='header' /></div>
                </div>
            </div>
        </div> 
    )
}

export default Header;