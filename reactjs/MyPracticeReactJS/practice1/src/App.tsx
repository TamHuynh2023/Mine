import Header from 'components/Header'
import './App.css'
import BodyOfHeader from 'components/BodyOfHeader'
import Services from 'components/Servicess'
import Experience from 'components/Experience'
import Works from 'components/Works'
import Portfolio from 'components/Portfolio'
import Person from 'components/Person'
import Contact from 'components/Contact'

export default function App() {
    return (
        <>
            <div className='App'>
                <Header />
                <BodyOfHeader />
                <Services />
                <Experience />
                <Works />
                <Portfolio />
                <Person />
                <Contact />
            </div>
        </>
    )
}
