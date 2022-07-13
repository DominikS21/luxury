import './App.css';
import icon_cart from './img/icon_cart.png';
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
                LUXURY <br/>
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
              <li><button class="btn warning">Book your table</button></li>
            </ul>
        </div>
      </header>
      <div className='menu'>
      <div className='container'>
       <div className='split'>
         <div>
           <p>Food Menu</p>
         </div>
         <div>
           <p>Today Special</p>
         </div>
       </div>
     </div>
      </div>
      <div className='reserve'>

      </div>
      <div className='clients'>

      </div>
      <div className='gallery'>
      <Carousel breakPoints={breakPoints}>
          <Item><img src={icon_cart}/></Item>
          <Item><img src={icon_cart}/></Item>
          <Item><img src={icon_cart}/></Item>
          <Item><img src={icon_cart}/></Item>
          <Item>Five</Item>
          <Item>Six</Item>
          <Item>Seven</Item>
          <Item>Eight</Item>
        </Carousel>
      </div>
      <div className='hours'>

      </div>
      
    </body>

  );
}

export default App;