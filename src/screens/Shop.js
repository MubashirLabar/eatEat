import React, { useEffect, useRef } from 'react'

function Shop() {
    const holderRef = useRef(null)

    useEffect(() => {
        const holder = holderRef.current
        if (!holder) return

        // MythOS product store widget. This one script renders the whole store
        // (items, prices, availability and payment) by itself. Do not wrap,
        // restyle or add any form/cart of our own.
        const script = document.createElement('script')
        script.src = 'http://localhost:4000/widget/checkout.js'
        script.setAttribute('data-link', 'longevitypeptides-store')
        script.setAttribute('data-app', 'http://localhost:3000')
        // Match the site theme (accent, font, radius) - the only styling it takes.
        script.setAttribute('data-accent', '#0eb44c')
        script.setAttribute('data-font', 'Montserrat')
        script.setAttribute('data-radius', '3px')
        script.async = true

        holder.appendChild(script)

        return () => {
            holder.innerHTML = ''
        }
    }, [])

    return (
        <div className="booking-p">
            <div className="wrapWidth">
                <div className="head t-c">
                    <div className="title font s36 b6 c000">Shop</div>
                    <div className="txt font s15 c333">Research-grade peptides you can trust, ready to order below.</div>
                </div>
                <div className="widget-holder" ref={holderRef} />
            </div>
        </div>
    )
}

export default Shop;
