import React from 'react'
import { Link } from 'react-router-dom' 

const Home = () => {
    return (
        <div className='home-container'>
            <header>
                <div>
                    <div>展示</div>
                    <ul>
                        <li><Link to="/">首页</Link></li>
                        <li><Link to="/counter">计数器</Link></li>
                        <li><Link to="/todos">计划</Link></li>
                    </ul>
                </div>
            </header>

            <main>
                <section>
                    <h3>首页</h3>
                </section>
                <section>
                    <h3>计数器</h3>
                </section>
                <section>
                    <h3>其他</h3>
                </section>
            </main>

            <footer>
                <div>
                    <div>
                        footer
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Home
