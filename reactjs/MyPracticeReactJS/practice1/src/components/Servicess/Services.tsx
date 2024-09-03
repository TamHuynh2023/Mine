import './Services.css'

export default function Services() {
    return (
        <>
            <section className='third__section'>
                <article>
                    <div className='CV'>
                        <h2>My project</h2>
                        <p>Services</p>
                        <span>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, culpa eveniet adipisci,
                            temporibus odit architecto quo aperiam molestias rerum dolore sunt atque voluptatibus quos
                            esse perspiciatis modi, laborum mollitia in.
                        </span>
                        <button>Dowload CV</button>
                    </div>

                    <div className='cards'>
                        <div className='card first'>
                            <div className='image__card'>
                                <img
                                    src='https://github.com/ZainRk/Personal-Portfolio-React/blob/master/src/img/humble.png?raw=true'
                                    alt=''
                                />
                            </div>
                            <h3>Data Analysis</h3>
                            <span>Python, Pandas, Plotly, Seaborn, Matplotlib, Sklearn</span>
                            <a href='#'>LEARN MORE</a>
                        </div>
                        <div className='card second'>
                            <div className='image__card'>
                                <img
                                    src='https://github.com/ZainRk/Personal-Portfolio-React/blob/master/src/img/glasses.png?raw=true'
                                    alt=''
                                />
                            </div>
                            <h3>Front End</h3>
                            <span>React, HTML5, CSS, Javascript, SwiperJS</span>
                            <a href='#'>LEARN MORE</a>
                        </div>
                        <div className='card third'>
                            <div className='image__card'>
                                <img
                                    src='https://github.com/ZainRk/Personal-Portfolio-React/blob/master/src/img/heartemoji.png?raw=true'
                                    alt=''
                                />
                            </div>
                            <h3>AI</h3>
                            <span>Python, Machine learning, Deep learning, Sklearn</span>
                            <a href='#'>LEARN MORE</a>
                        </div>
                    </div>

                    <div className="blur__center__cards"></div>
                    <div className="blur__left"></div>
                </article>
            </section>
        </>
    )
}
