import './App.css'

import Header from 'components/Header'
import BodyOfHeader from 'components/BodyOfHeader'
import Companies from 'components/Companies'
import Residencies from 'components/Residencies'
import OurValue from 'components/OurValue'
import Contact from 'components/Contact.tsx'
import GetStart from 'components/GetStart'
import Footer from 'components/Footer'

export default function App() {
    return (
        <>
            <div className='App'>
                <div>
                    <div className='white__gradient'></div>
                    <Header />
                    <BodyOfHeader />
                </div>
                <Companies />

                <Residencies />
                <OurValue />
                <Contact />
                <GetStart />
                <Footer />
            </div>
        </>
    )
}
