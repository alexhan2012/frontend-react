import React from 'react'
import { Link } from 'react-router-dom' 
import { TimePicker, Input } from 'antd'
import moment from 'moment'

import 'antd/dist/antd.css'
import "./Home.scss"

const Home = () => {

    function onChange(time, timeString) {
        console.log(time, timeString);
    }

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

                <div className="antd-test">
                    <h1>添加学生信息</h1>

                    <h3>学生信息</h3>

                    <h3>监护人信息</h3>
                    <Input placeholder="Basic usage" />
                    <TimePicker onChange={onChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />

                    {moment().format('MMMM Do YYYY, h:mm:ss a')}
                </div>

                <div className="bg-gray-800 flex items-center justify-center">
                    <div className="bg-white rounded-lg p-4 shadow mt-24">
                        {/* <h1></h1> */}
                        <h1 className="font-bold text-gray-900">Your new tailwind css site</h1>
                        <p className="text-gray-700">Create something cool!</p>
                    </div>
                </div>

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
