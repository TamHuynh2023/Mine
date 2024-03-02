import './BodyOfHeader.css'
import CountUp from 'react-countup'

export default function BodyOfHeader() {
    return (
        <>
            <section className='second__section'>
                <article>
                    <div className='title'>
                        <div className='orange__circle'></div>
                        <h2>
                            Discover <br />
                            Most Suitable <br /> Property
                        </h2>
                        <span style={{color: "rgba(140, 139, 139)"}}>
                            Find a variety of properties that suit you very easilty Forget all difficulties in finding a
                            residence for you
                        </span>
                        <form>
                            <svg
                                width='20'
                                height='20'
                                fill='none'
                                stroke='#0602f2'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                stroke-width='2'
                                viewBox='0 0 24 24'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'></path>
                                <path d='M12 7a3 3 0 1 0 0 6 3 3 0 1 0 0-6z'></path>
                            </svg>
                            <input type='text' />
                            <button>Search</button>
                        </form>
                        <div className='count'>
                            <div className='count__item'>
                                <span>
                                    <CountUp start={8000} end={9000} duration={5} />
                                    <span>+</span>
                                </span>
                                <span>Premium Product</span>
                            </div>
                            <div className='count__item'>
                                <span>
                                    <CountUp start={1500} end={2005} duration={3} />

                                    <span>+</span>
                                </span>
                                <span>Happy Customer</span>
                            </div>
                            <div className='count__item'>
                                <span>
                                    <CountUp start={27} end={50} duration={3} />

                                    <span>+</span>
                                </span>
                                <span>Awards Winning</span>
                            </div>
                        </div>
                    </div>
                    <div className='image__container'>
                        <div className='image'>
                            <img src='https://real-estate-web.pages.dev/hero-image.png' alt='' />
                        </div>
                    </div>
                </article>
            </section>
        </>
    )
}
