import './Header.css'

export default function Header() {
    return (
        <>
            <section className='first__section'>
                <article>
                    <div className='left'>
                        <h3>MINH TAM</h3>
                        <label className='switch'>
                            <input type='checkbox' id='darkModeToggle' />
                            <span className='slider'></span>
                        </label>
                    </div>
                    <div className='right'>
                        <ul>
                            <li>HOME</li>
                            <li>SERVICES</li>
                            <li>PORTFOLIO</li>
                            <li>EXPERIENCE</li>
                            <li>TESTIMONIAL</li>
                        </ul>
                        <button>CONTACT US</button>
                    </div>
                </article>
            </section>
        </>
    )
}
