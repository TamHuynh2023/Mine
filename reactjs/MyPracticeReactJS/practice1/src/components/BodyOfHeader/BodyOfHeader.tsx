import './BodyOfHeader.css'

const imgData = 'https://github.com/ZainRk/Personal-Portfolio-React/blob/master/src/img/crown.png?raw=true'
const imgStart = 'https://github.com/ZainRk/Personal-Portfolio-React/blob/master/src/img/thumbup.png?raw=true'
const imgEmoji = 'https://github.com/ZainRk/Personal-Portfolio-React/blob/master/src/img/glassesimoji.png?raw=true'

export default function BodyOfHeader() {
    return (
        <>
            <section className='second__section'>
                <article>
                    <div className='n__left'>
                        <h2>HI!</h2>
                        <h2>HUYNH MINH TAM</h2>
                        <p>
                            I am a Data Science and Front End programmer. Working with data and websites is my passion,{' '}
                            and I can code all day without getting tired.
                        </p>
                        <button>I am a shining gem, hiring me is a priceless investment.</button>
                        <ul>
                            <li>
                                <img src='https://cdn-icons-png.flaticon.com/512/15047/15047410.png' alt='' />
                            </li>
                            <li>
                                <img src='https://cdn-icons-png.flaticon.com/512/1409/1409946.png' alt='' />
                            </li>
                            <li>
                                <img src='https://cdn-icons-png.flaticon.com/512/733/733547.png' alt='' />
                            </li>
                            <li>
                                <img src='https://cdn-icons-png.flaticon.com/512/11104/11104255.png' alt='' />
                            </li>
                            <li>
                                <img src='https://cdn-icons-png.flaticon.com/512/3536/3536505.png' alt='' />
                            </li>
                        </ul>
                    </div>
                    <div className='n__right'>
                        <div className='image'>
                            <div className='image__wrapper'>
                                <img
                                    src='https://github.com/ZainRk/Personal-Portfolio-React/blob/master/src/img/Vector1.png?raw=true'
                                    alt=''
                                />
                            </div>
                            <div className='image__wrapper'>
                                <img
                                    src='https://github.com/ZainRk/Personal-Portfolio-React/blob/master/src/img/Vector2.png?raw=true'
                                    alt=''
                                />
                            </div>
                            <div className='boy'>
                                <img
                                    src='https://github.com/ZainRk/Personal-Portfolio-React/blob/master/src/img/boy.png?raw=true'
                                    alt=''
                                />
                            </div>
                            <Crown img={imgData} text={'Data Science'} data={"data"} />
                            <Crown img={imgStart} right={'10%'} top={'33px'} />
                            <Crown img={imgEmoji} bottom={'0'} />
                        </div>
                    </div>
                </article>
            </section>
        </>
    )
}

interface ImgProps {
    img: string
    right?: string
    top?: string
    text?: string
    bottom?: string
    paddingInlineEnd?:string
    data?: string
}
function Crown({ img, right, text, top, bottom, paddingInlineEnd, data }: ImgProps) {
    return (
        <>
            <div className="crown" style={{ right, top, bottom, paddingInlineEnd }}>
                <img src={img} alt='' />
                <span>{text}</span>
            </div>
        </>
    )
}
