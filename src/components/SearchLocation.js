import React from 'react';

const SearchLocation = ({page}) => {
    return(
        <div className='srch-loc flex aic anim'>
            <div className='feild flex aic anim'>
                <input 
                    type="text"
                    placeholder="Enter delivery address"
                    className='cleanbtn iput font s15 b6 c333'
                />
                <butto className='cleanbtn icon s22 color icon-gps_fixed'/>
            </div>
            {page != 'header' && <button className='button font s15 cfff anim'>Delivery</button>}
        </div>
    )
}

export default SearchLocation