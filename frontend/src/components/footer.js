const Footer = () => {
    return ( 
        <footer className="mainfooter center">  
  <div className="footer-middle">  
  <div className="container">  
    <div className="row">  
      <div className="col-md-3 col-sm-6">  
        <div className="footer-pad">  
          <h4 className="white"> Quick Links</h4>  
          <ul className="list-unstyled">  
            <li> <a href="#" className ="white1"> </a> </li>  
            <li> <a href="https://www.google.com" className ="white1">About Us</a></li>  
            <li> <a href="#" className ="white1"> Terms and Conditions </a></li>  
            <li> <a href="#" className ="white1">Have a Query ? Ask here</a></li>  
          </ul>
          <ul className="social-network social-circle">
              <p className ="white1">Social Media links: </p>
            <li> <a href="#" className="icoFacebook" title="Facebook"> <i className="fa fa-facebook"> </i> </a> </li> 
            <li> <a href="#"> <i className="fa fa-youtube" title="YouTube" aria-hidden="true"></i></a></li>
            </ul>  
        </div>
        <br />
      </div>
      <div className="col-md-3 col-sm-6">  
        <div className="footer-pad">  
          <h4 className="white"> Important Links</h4>  
          <ul className="list-unstyled">  
            <li ><a href="#" className ="white1"> CBSE Official site</a> </li> 
            <li><a href="#" className ="white1"> CBSE Results Official site</a> </li>
            <li><a href="#" className ="white1">CUET official site</a> </li>  
            <li><a href="#" className ="white1">CLAT official site</a></li> 
            <li><a href="#" className ="white1">AILET official site</a></li>   
            <li><a href="#" className ="white1">UPSC official site</a></li>    
          </ul>  
        </div>  
      </div>  
      <div className="col-md-3">  
        <div className="footer-pad">  
          <h4 className="white">Contact Us </h4>  
          <ul className="list-unstyled">  
            <li> <p className ="white1">Address: <br />MMM Hall, IIT Kharagpur, Kharagpur<br /> West Bengal, Pincode: 721302</p></li> 
            <li> <p className ="white1">Phone Number: <br />+91 1234567890</p></li>
            <li> <p className ="white1">Email ID : hello@123.com</p></li>
          </ul>  
        </div>  
      </div>  
        <div className="col-md-3">  
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.8544526388023!2d87.2999663650785!3d22.321343635312672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1d44078e32a45f%3A0xcb2833f7389434a6!2sMMM%20Hall%20Garden%2C%20IIT%20Kharagpur%2C%20Kharagpur%2C%20West%20Bengal%20721302!5e0!3m2!1sen!2sin!4v1657561865922!5m2!1sen!2sin" width="300" height="200" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>                
    </div>  
    </div> 
    <br /> 
    <div className="row">  
    <div className="col-md-12 copy">  
    <p className="text-center white2"> Website designed for OCMS by Shiladitya De and Sourabh Soumyakanta Das </p>  
    </div>  
    </div>  
  </div>  
  </div>  
</footer>  
     );
}
 
export default Footer;