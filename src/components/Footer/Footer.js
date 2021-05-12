import React from 'react';
import './Footer.css'



const Footer = () => {
    return (
        // <div className="container-fluid">
      <div className="footer">
       
        {/* <div className="social"> */}
          <div className="icons">
        <ul className="socials">
          <li className="icon"><a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a></li>
          <li className="icon"><a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a></li>
          <li className="icon"><a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a></li>
          <li className="icon"><a href="https://www.pinterest.com/"><i className="fab fa-pinterest-p"></i></a></li>
          <li className="icon"><a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
        </ul>
        </div>
        {/* </div> */}
        <hr/>
        <div className="copyright">Copyright &copy; 2020 Tech</div>
        
      </div>
      // </div> 
    )
}

export default Footer
