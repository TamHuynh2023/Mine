import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import './Portfolio.css'

export default function Portfolio() {
    return (
        <>
            <section className='six__section'>
                <article>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={3}
                        navigation
                        // centeredSlides={true}
                        grabCursor={true}
                        className='portfolio__image'
                    >
                        <SwiperSlide>
                            <div className='img'>
                                <img
                                    src='https://github.com/ZainRk/Personal-Portfolio-React/blob/master/src/img/sidebar.png?raw=true'
                                    alt=''
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='img'>
                                <img
                                    src='https://github.com/ZainRk/Personal-Portfolio-React/blob/master/src/img/musicapp.png?raw=true'
                                    alt=''
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='img'>
                                <img
                                    src='https://github.com/ZainRk/Personal-Portfolio-React/blob/master/src/img/hoc.png?raw=true'
                                    alt=''
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='img'>
                                <img
                                    src='https://github.com/ZainRk/Personal-Portfolio-React/blob/master/src/img/ecommerce.png?raw=true'
                                    alt=''
                                />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </article>
            </section>
        </>
    )
}
