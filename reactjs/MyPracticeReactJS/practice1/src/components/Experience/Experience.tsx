import './Experience.css'
import CountUp from 'react-countup'

export default function Experience() {
    return (
        <>
            <section className='four__section'>
                <article>
                    <div className='experience__wrapper'>
                        <div className='information'>
                            <div className="circle">
                                <CountUp start={0} end={8} duration={2} />
                                <span>+</span>
                            </div>
                            <p>years experience</p>
                        </div>
                        <div className='information'>
                            <div className="circle">
                                <CountUp start={0} end={100} duration={2} />
                                <span>+</span>
                            </div>
                            <p>completely experience</p>
                        </div>
                        <div className='information'>
                            <div className="circle">
                                <CountUp start={0} end={5} duration={2} />
                                <span>+</span>
                            </div>
                            <p>companies</p>
                        </div>
                    </div>
                </article>
            </section>
        </>
    )
}
