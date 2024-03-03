import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'
import data from '../../utils/slider.json'
import './Residencies.css'

export default function Residencies() {
    // Othe way: using hook state number
    return (
        <>
            <section className='four__section'>
                <article>
                    <div className='title'>
                        <h3>Best Choices</h3>
                        <h3>Popular Residencies</h3>
                    </div>
                    <Swiper
                        spaceBetween={50}
                        // slidesPerView={4}
                        breakpoints={{
                            1200: {
                                slidesPerView: 4
                            },
                            768: {
                                slidesPerView: 2
                            },
                            600: {
                                slidesPerView: 1
                            }
                        }}
                        navigation
                    >
                        <SliderButtons />
                        <SliderButtonWhenResponsive />
                        {data.map((item, i) => (
                            <SwiperSlide key={i}>
                                <div className='card'>
                                    <div className='card__image'>
                                        <img src={item.image} alt={item.name} />
                                    </div>

                                    <div className='card__information'>
                                        <div className='price'>
                                            <span>$</span>
                                            <span>{item.price}</span>
                                        </div>
                                        <span>{item.name}</span>
                                        <span>{item.detail}</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </article>
            </section>
        </>
    )
}
function SliderButtons() {
    const swiper = useSwiper()
    return (
        <>
            <div className='btn'>
                <button onClick={() => swiper.slidePrev()}>Previous</button>
                <button onClick={() => swiper.slideNext()}>Next</button>
            </div>
        </>
    )
}
function SliderButtonWhenResponsive() {
    const swiper = useSwiper()
    return (
        <>
            <div className='btn-small'>
                <button onClick={() => swiper.slidePrev()}>
                    <img src='https://cdn-icons-png.flaticon.com/512/2879/2879564.png' alt='' />
                </button>
                <button onClick={() => swiper.slideNext()}>
                    {' '}
                    <img src='https://cdn-icons-png.flaticon.com/512/2879/2879593.png' alt='' />
                </button>
            </div>
        </>
    )
}
