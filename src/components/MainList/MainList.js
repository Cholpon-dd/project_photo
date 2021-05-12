import React from 'react'
import SimpleSlider from '../SimpleSlider/SimpleSlider'
import girlphoto from '../../assets/images/girlphoto.jpg' 
import Family from '../../assets/images/Family.jpg'
import brothers from '../../assets/images/brothers.jpg'
import babes from '../../assets/images/babes.jpg'
import newborn from '../../assets/images/newborn.jpg'
import fly from '../../assets/images/fly.jpg'
import Sale from '../../assets/images/Sale.jpg'
import './MainList.css'
import FlipCard from '../FlipCard/FlipCard'
import {Link} from 'react-router-dom'

import Gallery from '../Gallery/Gallery'
export const MainList = () => {
    return (
        <>
            <SimpleSlider/>
           <div className="container">
            <div className="about-me">
                
                <div className="about-me-img">
                    <img src={girlphoto} />
                </div>
                <div>
                     <h6 className="about-me-title">Добро пожаловать на мою страницу!!
                 Меня зовут Эльвира и я фотограф. 
                 Хороший детский и семейный фотограф — это не просто
                  «человек, который может сфотографировать всю семью». 
                  Совершенно особыми членами семьи являются дети.<br/> 
                  Они на наших глазах учатся улыбаться, ползать, ходить, говорить, ездить на велосипеде.
                   И все это очень важно и значительно – потому что в первый раз.
                    Поймать «самый-самый» момент – это труд, это талант и сочетание множества навыков профессионального детского фотографа.
                     Профессиональный семейный/детский фотограф знает, как расположить к себе героев съемки, 
                     как найти наиболее естественную для ребенка среду, как показать в кадре не просто лица, но и взаимоотношения, чувства, нежность, любовь. А еще лучшие семейные фотографы непременно предлагают создать на основе фотосессии фотокнигу – самый долговечный формат для семейных фотографий.
                     </h6>
                      </div>
            </div>
            </div>
            {/* <hr/> */}
            {/* <br/> */}
           {/* <div className="family-photo">
           <img className="fam-photo" src={Family} />
           </div> */}
           <Gallery/>
           <div className="wrap">
           <div className="box">
                <img className="vert-photo" src={babes} /> 
           </div>
           <div className="box">
                <img className="vert-photo" src={brothers}/> 
           </div>
           <div className="box">
                <img className="vert-photo" src={newborn} /> 
           </div>
           <div className="box">
                <img className="vert-photo" src={fly} /> 
           </div>
           <div className="box">
                <img className="vert-photo" src={Sale} /> 
           </div>
           </div>
         <div className="gifts-desc">
              <h5 className="gift-title">Также вы можете заказать фотокниги, календари, брелоки, открытки</h5>
              <br/>
              <h5 className="gift-title">Для этого пройдите пожалуйста на вкладку
               <strong> Gifts </strong> </h5>
         </div>
          
        <FlipCard/>

        
        </>
    )
}
