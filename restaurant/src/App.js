import './App.css';
import icon_cart from './img/icon_cart.png';
import icon_phone from './img/icon_phone.png';
import icon_plate from './img/icon_plate.png';
import fff from './img/fff.png';
import fff2 from './img/fff2.png';
import fff3 from './img/fff3.png';
import icon_apple from './img/icon_apple.png';
import icon_Google_Play from './img/icon_Google_Play.png';
import Carousel from "react-elastic-carousel";
import Item from "./item.js";
import React from 'react';
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
  { width: 1500, itemsToShow: 5 }
  ,
];

function App() {
  return (
  
    <body>
      <header>
        <div className='navbar'>
          <div className='logo'>
          <div className='resultContainer'>
            <div className='wrapper'>
              <span className='napis1'>
               <a> LUXURY </a><br/>
              <span className='napis2'>
                RESTAURANT
              </span>
    </span>
  </div>
</div>
          </div>
            <ul className='linki'>
              <li><a>Home</a></li>
              <li><a>Menu</a></li>
              <li><a>Reservation</a></li>
              <li><a>Recipe</a></li>
              <li><a>Blog</a></li>
              <li><a>Pages</a></li>
              <li><a>Contact</a></li>
              <li><img src={icon_cart}/></li>
              <li><button>
              <img src={icon_plate}/>Book your table</button></li>
            </ul>
        </div>
      </header>
      <div className='teast'>
        <h1> Teast your fav dish </h1>
        <h2> from luxury restaurent. </h2>
        <img src={icon_phone}/>
        <a>CALL US AND BOOK YOUR TABLE</a>
        <p>1-008 005 006</p>
      </div>
      <div className='menu'>
      <div className='container'>
       <div className='split'>
         <div>
           <h1>Food Menu</h1>
           <h4> ULTIMATE ORGANIC FRUIT SALAD </h4>
           <a> survived not only five centuries but the leap</a>
           <h4>PLAIN PANCAKES </h4>
           <a> Donec eget augue at diam euismod viverra</a>
           <h4>TOASTED JAM </h4>
           <a> Phasellus a ex accumsan, sollicitudin</a>
           <h4>TOASTED JAM </h4>
           <a>Phasellus a ex accumsan, sollicitudin </a> <br></br>
           <button>EXPLORE FOOD MENU</button>
         </div>
         <div>
           <h1>Today Special</h1>
         </div>
       </div>
     </div>
      </div>
      <div className='reserve'>
      <img className='zdj1' src={fff}></img>
      <img className='zdj2' src={fff}></img>
        <div className='container'>
        <h1>Reserve your table</h1>
          <div className='split2'>
            <div>
              <input type='text' placeholder='Name'></input><br></br>
              <input type='text' placeholder='Time'></input><br></br>
              <input type='text' placeholder='Guests'></input><br></br>
              <div className='wrapper2'>
              <button> MAKE RESERVATION</button>
              <div className='np'>
              <span className='napisr'>
               <a> YOU CAN ALSO CALL </a><br/>
              <span className='napisr2'>
                FOR A RESERVATION
              </span>
    </span>
    </div>
  </div>
            </div>
            <div>
              <input type='text' placeholder='Email address'></input><br></br>
              <input type='text' placeholder='Date'></input><br></br>
              <input type='text' placeholder='Phone'></input><br></br>
              <p>1-007 000 005</p>
            </div>
          </div>
        </div>
      </div>
      <div className='happy'> 
        <div className='happyzdj'> 
          <img src={fff2}></img>
        </div>
          <div className='clients'> 
            <h1 >Happy Clients</h1> 
            <h2 >Best atmosphere and food</h2> 
            <h3 >Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident.</h3>
            <h4 >DR. PRABAKARAN JOHN</h4>
          </div>
      </div>
      <div className='gallery'>
        <h1> Our Gallery</h1>
      <Carousel itemPadding={[0, 50]} breakPoints={breakPoints}>
          <Item><img src={fff}/></Item>
          <Item><img src={fff}/></Item>
          <Item><img src={fff}/></Item>
          <Item><img src={fff}/></Item>
          <Item><img src={fff}/></Item>
          <Item><img src={fff}/></Item>
          <Item><img src={fff}/></Item>
          <Item><img src={fff}/></Item>
        </Carousel>
      </div>
      <div className='hours'>
          <div className='row'>
            <div className='column'>
            <h1> Opening Hours</h1>
            </div>
            <div className='column'>
            <h3> Monday to Friday</h3>
            <p> 10am - 10pm</p>
            </div>
            <div className='column'>
            <h3> Saturday to Sunday</h3>
            <p> 09am - 11pm</p>
            </div>
            <div className='column'>
            </div>
        </div>
        <img className='zdj3' src={fff3}></img>
      </div>
    <footer>
      <div className='container'>
      <div className='row'>
        <div className='fcolumn left'>
          <h1> Navigation</h1>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Menu</li>
            <li>Reservation</li>
            <li>Recipe</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className='fcolumn middle'>
          <ul>
          <h1> News letter</h1>
         <li> <a> Enter your email address and subscribe daily newsletter</a> </li>
         <li><input type="text" placeholder='Email Address'></input>
          <button className='sub'>SUBSCRIBE</button> </li>
          <li>
            <button className='b1'></button>
            <button className='b2'></button>
            <button className='b3'></button>
          </li>
          </ul>
        </div>
        <div className='fcolumn right'>
          <h1> Our app avilable</h1>
          <ul>
            <li><button className='get'> <img src={icon_apple}></img>Avilable on the <br></br>
            <span>App Store </span>
            </button></li>
            <li><button className='get'> <img src={icon_Google_Play}></img> Get it on <br></br>
            <span>Google Play </span>
            </button></li>
          </ul>
        </div>
      </div>
      </div>
      <p className='copyright'> 2018 © LUXURY RESTAURANT, ALL RIGHTS RESERVED</p>
    </footer>
    </body>

  );
}

export default App;