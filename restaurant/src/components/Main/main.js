import React from 'react';
import '../../App.css';
import Carousel from "react-elastic-carousel";
import Item from "../../item.js";
import icon_phone from '../../img/icon_phone.png';
import fff from '../../img/fff.png';
import fff2 from '../../img/fff2.png';
import fff3 from '../../img/fff3.png';
import fff4 from '../../img/fff4.png';
import fff5 from '../../img/fff5.png';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
    { width: 1500, itemsToShow: 5 }
    ,
  ];

export class Main extends React.Component {


    render() {

        
        return(
            <><div className='teast'>
                <h1> Teast your fav dish </h1>
                <h2> from luxury restaurent.</h2>
                <img src={icon_phone} alt='icon phone' />
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
                                <div className='row'>
                                    <div className='overlap'>
                                        <div className='cardColumn'>
                                            <div className='card'>  
                                                <img src={fff4}></img>
                                                <div className='cardContainer'>
                                                    <h4><b>Pizza Marinara</b></h4>
                                                    <p>$89.00</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='cardColumn'>
                                            <div className='card2'>  
                                                <img src={fff5}></img>
                                                <div className='cardContainer'>
                                                    <h4><b>Chicken Noodles</b></h4>
                                                    <p>$89.00</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='reserve'>
                    <img className='zdj1' src={fff} alt='example'></img>
                    <img className='zdj2' src={fff} alt='example'></img>
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
                    <img src={fff2} alt='example'></img>
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
                    <Item><img src={fff} alt='example'/></Item>
                    <Item><img src={fff} alt='example'/></Item>
                    <Item><img src={fff} alt='example'/></Item>
                    <Item><img src={fff} alt='example'/></Item>
                    <Item><img src={fff} alt='example'/></Item>
                    <Item><img src={fff} alt='example'/></Item>
                    <Item><img src={fff} alt='example'/></Item>
                    <Item><img src={fff} alt='example'/></Item>
                    </Carousel>
                </div>
                <div className='openingHours'>
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
                    <img className='zdj3' src={fff3} alt='example' ></img>
                </div>
                </>
        );

    }
}

export default Main;