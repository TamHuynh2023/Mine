import './Footer.css'

export default function Footer() {
    return (
        <>
            <section className='eight__section'>
                <article>
                    <div className='first__div'>
                        <div className='img'>
                            <img src='https://real-estate-web.pages.dev/logo2.png' alt='' />
                        </div>
                        <p>
                            Our vision is to make all people <br />
                            the best place to live for them.
                        </p>
                    </div>
                    <div className='second__div'>
                        <h2>Information</h2>
                        <span>145 New York, FL 5467, USA</span>
                        <ul>
                            <li>Property</li>
                            <li>Services</li>
                            <li>Product</li>
                            <li>About Us</li>
                        </ul>
                    </div>
                </article>
            </section>
        </>
    )
}
