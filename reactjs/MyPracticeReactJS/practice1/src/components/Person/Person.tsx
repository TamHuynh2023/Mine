import './Person.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Pagination } from 'swiper/modules' // Sửa ở đây
import 'swiper/css/pagination' // Sửa ở đây

export default function Person() {
    return (
        <>
            <section className='seven__section'>
                <article>
                    <h2>Client always get Exceptional work from me...</h2>

                    <Swiper slidesPerView={1} modules={[Pagination]} pagination={{ clickable: true }}>
                        <div className='container'>
                            <SwiperSlide>
                                <div className='child'>
                                    <img
                                        src='https://github.com/ZainRk/Personal-Portfolio-React/blob/master/src/img/profile6.jpg?raw=true'
                                        alt=''
                                    />
                                    <span>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt doloremque
                                        provident architecto eveniet nesciunt repellat laboriosam officia quas quia
                                        quasi cum minima exercitationem deserunt vitae, earum iste? Excepturi, assumenda
                                        mollitia?
                                    </span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='child'>
                                    <img
                                        src='https://github.com/ZainRk/Personal-Portfolio-React/blob/master/src/img/profile5.jpg?raw=true'
                                        alt=''
                                    />
                                    <span>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt doloremque
                                        provident architecto eveniet nesciunt repellat laboriosam officia quas quia
                                        quasi cum minima exercitationem deserunt vitae, earum iste? Excepturi, assumenda
                                        mollitia?
                                    </span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='child'>
                                    <img
                                        src='https://github.com/ZainRk/Personal-Portfolio-React/blob/master/src/img/profile4.jpg?raw=true'
                                        alt=''
                                    />
                                    <span>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt doloremque
                                        provident architecto eveniet nesciunt repellat laboriosam officia quas quia
                                        quasi cum minima exercitationem deserunt vitae, earum iste? Excepturi, assumenda
                                        mollitia?
                                    </span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='child'>
                                    <img
                                        src='https://github.com/ZainRk/Personal-Portfolio-React/blob/master/src/img/profile3.jpg?raw=true'
                                        alt=''
                                    />
                                    <span>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt doloremque
                                        provident architecto eveniet nesciunt repellat laboriosam officia quas quia
                                        quasi cum minima exercitationem deserunt vitae, earum iste? Excepturi, assumenda
                                        mollitia?
                                    </span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='child'>
                                    <img
                                        src='https://github.com/ZainRk/Personal-Portfolio-React/blob/master/src/img/profile2.jpg?raw=true'
                                        alt=''
                                    />
                                    <span>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt doloremque
                                        provident architecto eveniet nesciunt repellat laboriosam officia quas quia
                                        quasi cum minima exercitationem deserunt vitae, earum iste? Excepturi, assumenda
                                        mollitia?
                                    </span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='child'>
                                    <img
                                        src='https://github.com/ZainRk/Personal-Portfolio-React/blob/master/src/img/profile1.jpg?raw=true'
                                        alt=''
                                    />
                                    <span>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt doloremque
                                        provident architecto eveniet nesciunt repellat laboriosam officia quas quia
                                        quasi cum minima exercitationem deserunt vitae, earum iste? Excepturi, assumenda
                                        mollitia?
                                    </span>
                                </div>
                            </SwiperSlide>
                        </div>
                    </Swiper>
                </article>
            </section>
        </>
    )
}
