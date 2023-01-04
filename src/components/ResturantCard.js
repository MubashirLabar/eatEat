import React from 'react'

const ResturantCard = ({data}) => {

    const {name, img, rating, delivery, ridingFee} = data

    return(
        <div className='rst-crd flex flex-col'>
            <div className='media'>
                <div className='img anim' style={{background: `url(${img})`}}/>
            </div>
            <div className='blk'>
                <div className='nam font s16 b6 c000'>{name}</div>
                <div className='row flex aic'>
                    <div className='item flex aic'>
                        <div className='ico icon-star s14 color'/>
                        <div className='font s13 b6 c333'>{rating}</div>
                    </div>
                    <div className='item flex aic'>
                        <div className='ico icon-clock s14 c333'/>
                        <div className='font s13 c333'>{delivery}</div>
                    </div>
                    <div className='item flex aic'>
                        <div className='ico icon-bicycle-riding s14 c333'/>
                        <div className='font s13 c333'>{`PKR ${ridingFee}`}</div>
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default ResturantCard