import React from 'react';
import '../../App.css';
import icon_plate from '../../img/icon_plate.png';
import icon_cart from '../../img/icon_cart.png';

export class Header extends React.Component {


    render() {

        
        return(
            <header>
            <div className='navbar'>
              <div className='logo'>
                <div className='resultContainer'>
                    <div className='wrapper'>
                        <span className='logoLuxury'>
                        <a> LUXURY </a><br/>
                        <span className='logoRestaurant'>
                            RESTAURANT
                        </span>
                        </span>
                    </div>
                </div>
              </div>
                <ul className='logoLinki'>
                    <li><a>Home</a></li>
                    <li><a>Menu</a></li>
                    <li><a>Reservation</a></li>
                    <li><a>Recipe</a></li>
                    <li><a>Blog</a></li>
                    <li><a>Pages</a></li>
                    <li><a>Contact</a></li>
                    <li><img src={icon_cart} alt='icon cart'/></li>
                    <li><button>
                    <img src={icon_plate} alt='icon plate'/>Book your table</button></li>
                </ul>
            </div>
          </header>
        );

    }
}

export default Header;