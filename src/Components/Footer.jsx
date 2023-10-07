import React from "react";
import myntra56 from '../Images/myntra56.png'
import myntra57 from '../Images/myntra57.png'
import myntra58 from '../Images/myntra58.png'
import myntra59 from '../Images/myntra59.png'
function Footer() {
  return (
    <>
      <div className="options  ">
        <div className="detail">
          <ul className="size">ONLINE SHOPPING</ul>
          <br />
          <br />
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
          <li>Home & Living</li>
          <li>Beauty</li>
          <li>Gift Cards</li>
          <li>Myntra Insider</li>
        </div>
        <div className="detail">
          <ul>USEFUL LINKS</ul>
          <br />
          <br />
          <li>Contact US</li>
          <li>FAQ</li>
          <li>T&C</li>
          <li>Terms Of Use</li>
          <li>Track Orders</li>
          <li>Shipping</li>
          <li>Cancellation</li>
          <li>Returns</li>
          <li>WhiteHat</li>
          <li>Blog</li>
          <li>Careers</li>
          <li>Privacy & Policy</li>
          <li>Side Map</li>
        </div>
        <div className="detail">
          <b> EXPERIENCE MYNTRA APP ON MOBILE</b>
          <br />
          <br />
          <br />
          <div className="im">
            <img src={myntra56} alt="" className="img56" />
            <img src={myntra57} alt="" className="img56" />
          </div>
          <br />
          <br />
          KEEP IN TOUCH
          <br />
          <div className="icon4">
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-instagram-square"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>
        <div className="detail">
          <img src={myntra58} alt="" style={{width:100}}/>
          <h4>100% ORIGINAL</h4>
          <br /> guarantee for all products at myntra.com <br />
          <img src={myntra59} alt="" style={{width:100}}/>
          <h4>Return within 30days</h4>
          <br /> of receiving your order
        </div>
      </div>

      <div className="popular">
        <h3>POPULAR SEARCHES</h3>
        <br />
        <br />
        <a>Makeup </a>|<a href="#">Dresses For Girls </a>|
        <a>T-Shirts </a>|<a href="#">Sandals </a>|
        <a>Headphones </a>|<a href="#">Babydolls </a>
        <a>Blazer For Men </a>|<a href="#">Handsbags </a>|
        <a>Watch </a>|<a href="#">Puma Shoes </a>|
        <a>Boxers </a>|<a href="#">Wallets </a>|<a href="#">Tops </a>|
        <a>Earrings </a>|<a href="#">Fastrack Watches </a>|
        <a>Kurtis </a>|<a href="#">Nike </a>|
        <a>Titan Watches </a>|<a href="#">Cricket Shoes </a>|
        <a>Forever 21 </a>|<a href="#">Eye Makeup </a>|
        <a>Photo Frames </a>|<a href="#">Punjabi Suits </a>|
        <a>Mintra Fashion Show </a>|<a href="#">Lipstick </a>|
        <a>Nike Shoes </a>|<a href="#">Goggles </a>|
        <a>Suits </a>|<a href="#">Chinos </a>|
        <a>Adidas Shoes </a>|<a href="#">Woodland Shoes </a>|
        <a>Jewellery </a>|<a href="#">Desiners </a>
      </div>
      <div className="contact">
        <div className="c1">
          In case of any concern,<h4> Contact Us</h4> <br />
        </div>
        <div className="c2">
          Copyright &copy; 2021 www.myntra.com. All rights reserved.
        </div>
      </div>
      <div className="con">
        <dfn title="WhatsApp Us">
          {" "}
          <a
            href="https://api.WhatsApp.com/send?phone=+917033728284"
            target="_blank"
          >
            <i className="fab fa-whatsapp-square"></i>
          </a>
        </dfn>
        <dfn title="Contact Us">
          {" "}
          <a href="tel: +919093456234">
            <i className="fas fa-phone-square-alt" id="p1"></i>
          </a>
        </dfn>
        <dfn title="Mail Us">
          {" "}
          <a href="mailto: sauravanand243@gmail.com">
            <i className="fas fa-envelope-open" id="p1"></i>
          </a>{" "}
        </dfn>
      </div>
      <hr />
    </>
  );
}

export default Footer;
