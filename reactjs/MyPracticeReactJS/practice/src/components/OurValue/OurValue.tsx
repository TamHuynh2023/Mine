import { useReducer, useState } from 'react'
import './OurValue.css'

const initialData = [
    {
        isOpen: true,
        text: 'Best interest rates on the market',
        id: 0,
        img: 'https://cdn-icons-png.flaticon.com/512/1161/1161388.png'
    },
    {
        isOpen: false,
        text: 'Prevent unstable prices',
        id: 1,
        img: 'https://cdn-icons-png.flaticon.com/512/5058/5058343.png'
    },
    {
        isOpen: false,
        text: 'Best price on the market',
        id: 2,
        img: 'https://cdn-icons-png.flaticon.com/512/4256/4256900.png'
    }
]

function reducer(state: typeof initialData, action: { type: string; payload: any }): typeof initialData {
    switch (action.type) {
        case 'handleclick':
            const id = action.payload

            return state.map((item) => (item.id === id ? { ...item, isOpen: true } : { ...item, isOpen: false }))
        default:
            throw new Error('Unhandled action type')
    }
}
export default function OurValue() {
    const [state, dispatch] = useReducer(reducer, initialData)

    function handleShow(id: number) {
        dispatch({ type: 'handleclick', payload: id })
    }

    return (
        <>
            <section className='fifth__section'>
                <article>
                    <div className='image__container'>
                        <img src='https://real-estate-web.pages.dev/value.png' alt='' />
                    </div>

                    <div className='title'>
                        <h2>Our Value</h2>
                        <h1>Value We Give To You</h1>
                        <p>
                            We are always ready to help by providing the best services for you. <br /> We believe a good
                            place to live can make your life better.
                        </p>

                        {state.map((item) => (
                            <div
                                key={item.id}
                                className={`drop__down ${item.isOpen ? 'styleShadow' : ''}`}
                                onClick={() => {
                                    handleShow(item.id)
                                }}
                            >
                                <div className='describe'>
                                    <div className='icon'>
                                        <img src={item.img} alt='' />
                                    </div>
                                    <div className='text'>{item.text}</div>
                                    <div className='icon'>
                                        <img src='https://cdn-icons-png.flaticon.com/512/9347/9347217.png' alt='' />
                                    </div>
                                </div>

                                {item.isOpen && (
                                    <span>
                                        Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut
                                        occaecat consequat est minim minim esse tempor laborum consequat esse
                                        adipisicing eu reprehenderit enim.
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </article>
            </section>
        </>
    )
}
