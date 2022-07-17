import './App.css';
import icon_cart from './img/icon_cart.png';
import icon_phone from './img/icon_phone.png';
import icon_plate from './img/icon_plate.png';
import Carousel from "react-elastic-carousel";
import Item from "./item.js";
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
              <li><a>Contact</a>
              <img src={icon_cart}/></li>
              <li><button class="btn warning">
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
           <a>Phasellus a ex accumsan, sollicitudin </a>
         </div>
         <div>
           <h1>Today Special</h1>
         </div>
       </div>
     </div>
      </div>
      <div className='reserve'>

      </div>
      <div className='clients'>

      </div>
      <div className='gallery'>
        <h1> Our Gallery</h1>
      <Carousel breakPoints={breakPoints}>
          <Item><img src={icon_cart}/></Item>
          <Item><img src={icon_cart}/></Item>
          <Item><img src={icon_cart}/></Item>
          <Item><img src={icon_cart}/></Item>
          <Item><img src={icon_cart}/></Item>
          <Item><img src={icon_cart}/></Item>
          <Item><img src={icon_cart}/></Item>
          <Item><img src={icon_cart}/></Item>
        </Carousel>
      </div>
      <div className='hours'>

      </div>
      
    </body>

  );
}

export default App;