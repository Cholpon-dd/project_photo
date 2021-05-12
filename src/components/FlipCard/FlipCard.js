import React from 'react'
import albo from '../../assets/images/albo.jpg'
import calen from '../../assets/images/calen.jpg'
import etsy from '../../assets/images/etsy.jpg'
import newww from '../../assets/images/newww.jpg'
import newcards from '../../assets/images/newcards.jpg'
import './FlipCard.css'
const FlipCard = () => {
    return (
        <>
           <div className="contain">
               <div className="flip">
                   <div className="imgBox">
                       <img className="img" src={albo} />
                   </div>
                   <div className="detail"><h2 style={{textAlign:"center",color:"#0d5168"}}>Фото-книга</h2>
                   <p className="detaill-desc">Фотокнига - это лучшие мгновения,
                        собранные в одном месте,
                        к которым можно прикоснуться в любую минуту. Важно сохранить воспоминания о всех трогательных моментах - это может быть милая улыбка, первый маленький шажок и лучшие школьные друзья. </p></div>
               </div>
              
               <div className="flip">
                   <div className="imgBox">
                       <img className="img" src={etsy} />
                   </div>
                   <div className="detail"><h2 style={{textAlign:"center", color:"#0d5168"}}>Брелок</h2>
                   <p className="detaill-desc">Брелок с фото – это оригинальный недорогой подарок, который с легкостью
                   поместиться в любой карман. А фото близкого человека будет всегда рядом. Брелок изготавливается из натуральной кожи или дерева.</p></div>
               </div>
               <div className="flip">
                   <div className="imgBox">
                       <img className="img" src={calen} />
                   </div>
                   <div className="detail"><h2 style={{textAlign:"center",color:"#0d5168"}}>Календарь</h2>
                   <p className="detaill-desc">Календарь на любой вкус- перекидной, настольный, раскладной, карманный,
                   плакатный. Можно на каждый месяц сделать отдельные фотографии или один плакатный календарь со всеми членами семьи.</p></div>
               </div>
               <div className="flip">
                   <div className="imgBox">
                       <img className="img" src={newww} />
                   </div>
                   <div className="detail"><h2 style={{textAlign:"center", color:"#0d5168"}}>Открытка</h2>
                   <p className="detaill-desc">Открытки можно подарить бабушке и дедушке. Или отправить родственникам, которые живут вдали.</p></div>
               </div>
               <div className="flip">
                   <div className="imgBox">
                       <img className="img" src={newcards}/>
                   </div>
                   <div className="detail"><h2 style={{textAlign:"center",color:"#0d5168"}}>Открытка</h2>
                   <p className="detaill-desc">Открытки можно подарить бабушке и дедушке. Или отправить родственникам, которые живут вдали.</p></div>
               </div>
               </div> 
        </>
    )
}

export default FlipCard
