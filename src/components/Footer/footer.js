import React from "react";
//css stylesheet
import "../style.css";

function Footer() {
    return (
  
        <div id="footer" className="container-fluid text-center text-md-center">
                        
                <div id="snsContainer" className="col-lg-4">
                    <p id="snstext">Connect with us here:</p>
                    <a href="https://www.tiffolin.com"><span><i className="sns fa fa-facebook-square"></i></span></a>
                    <a href="https://www.tiffolin.com"><span><i className="sns fa fa-instagram"></i></span></a>
                    <a href="https://www.tiffolin.com"><span><i className="sns fa fa-envelope"></i></span></a>
                </div>  
      
                <div id="snsContainer" className="col-lg-4">
                    <p className="footerNotes">loreum ipsom</p>
                    <p className="footerNotes">loreum ipsom</p>
                    <p className="footerNotes">loreum ipsom</p>
                </div>  

                <div id="snsContainer" className="col-lg-4">
                    <p className="footerNotes">loreum ipsom</p>
                    <p className="footerNotes">loreum ipsom</p>
                    <p className="footerNotes">loreum ipsom</p>
                </div>  

            <div class="footer-copyright text-center">
            <a href="https://www.tiffolin.com"><div id="developer">© 2020, images & web designed by TiffoLin</div></a>
            </div>
        </div>
 



    )
}

export default Footer;