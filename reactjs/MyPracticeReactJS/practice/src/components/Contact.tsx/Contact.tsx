import { useState } from 'react'
import './Contact.css'

const initialData = [
    { id: 0, img: 'https://cdn-icons-png.flaticon.com/512/3062/3062634.png' },
    { id: 1, img: 'https://cdn-icons-png.flaticon.com/512/724/724715.png' },
    { id: 2, img: 'https://cdn-icons-png.flaticon.com/512/4457/4457168.png' },
    { id: 3, img: 'https://cdn-icons-png.flaticon.com/512/4059/4059257.png' }
]

export default function Contact() {
    const [data] = useState(initialData)
    return (
        <>
            <section className='six__section'>
                <article>
                    <div className='contact__us'>
                        <h2>Our Contact US</h2>
                        <h1>Easy to contact us</h1>
                        <p>
                            We always ready to help by providijng the best services for you. We beleive a good blace to
                            live can make your life better
                        </p>
                        <div className='card__contact'>
                            {data.map((item) => (
                                <div className='card' key={item.id}>
                                    <div className='phone__img'>
                                        <div className='img'>
                                            <img src={item.img} alt='' />
                                        </div>
                                        <div>
                                            <p>Call</p>
                                            <span>021 123 145 14</span>
                                        </div>
                                    </div>
                                    <button>Call now</button>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='image__contact'>
                        <img src='https://real-estate-web.pages.dev/contact.jpg' alt='' />
                    </div>
                </article>
            </section>
        </>
    )
}
