import { useEffect, useState } from 'react'
import './Header.css'

export default function Header() {
    const [zIndex, setZIndex] = useState(1)
    const [isSmallScreen, setIsSmallScreen] = useState(false)

    function handleNavBar() {
        if (document.documentElement.clientWidth <= 1100) {
            return { right: !isSmallScreen ? '10%' : "-50%" } as React.CSSProperties
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY

            if (scrollTop > 1) {
                setZIndex(10)
            } else {
                setZIndex(1)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <>
            <section className='first__section' style={{ zIndex }}>
                <article>
                    <a>
                        <img src='https://real-estate-web.pages.dev/logo.png' style={{ width: '100%' }} alt='' />
                    </a>
                    <ul style={handleNavBar()}>
                        <li>Residences</li>
                        <li>Our Value</li>
                        <li>Contact us</li>
                        <li>Get Started</li>
                        <li>Contact</li>
                    </ul>
                    <div className='bar' onClick={() => setIsSmallScreen(!isSmallScreen)}>
                        <img src='https://cdn-icons-png.flaticon.com/512/8106/8106985.png' alt='' />
                    </div>
                </article>
            </section>
        </>
    )
}
