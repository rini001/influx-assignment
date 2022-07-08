import React from 'react'
import style from "./Exercise.module.css"
import { Navbar } from './Navbar'
import { Task } from './Task'
export const Exercise = () => {
  return (
    <div>
    <Navbar/>
    <div>
        <div className={style.dashboard}>
            <div className={style.heading}>
                <img className={style.img1} src="https://www.logolynx.com/images/logolynx/f5/f583ca473dd98c5290a419f218213ffe.jpeg" alt="" width="100px" height="70px"/>
                <div>
                    <div className={style.analytic}>Analytic Dashboard</div>
                    <div>Dashboard is an online report where your website data from ecommerce to web analytics is displayed</div>
                </div>
            </div>
            <div className={style.btns}>
                <button className={style.button1}>Star</button>
                <button className={style.button2}>Create New</button>
            </div>
        </div>
    </div>
    <Task/>
    </div>
  )
}
