import React from 'react'
// import foodcardimg from '../components/foodcard.png'; image is not rendered when displaying a Dynamic list
import logowhite from'../components/logowhite.png';
import "./Food.css";
const obj = {
    0: {
        url: require('../components/foodcard.png'),
        hname: "Adyar Anandha Bavan",
        dishName: "Vegitarian, Chinese, Thandoori...",
        km       :"4.3km"
      },
    1: {
        url: require('../components/images 2.jpg'),
        hname: "Adyar Anandha Bavan",
        dishName: "Vegitarian, Chinese, Thandoori...",
        km       :"4.3km"
      },
    2: {
        url: require('../components/images 3.jpg'),
        hname : "Adyar Anandha Bhavan",
        dishName: "Vegitarian, Chinese, Thandoori...",
        km       :"4.3km"

    },
    3: {
        url: require('../components/images 4.jpg'),
        hname : "Adyar Anandha Bhavan",
        dishName: "Vegitarian, Chinese, Thandoori...",
        km       :"4.3km"
    }
  };
  
const DynamicFood = ()=> {  
  
  const { url, hname, dishName,km } = obj[0];
  return (
    <div>
        {/*--START--*/}
       
            <div className="Title_Bar">
                <img src={logowhite} alt='logo'/>  
                <p>Hello, Vikas</p>
            </div>
        {/* logo Display Ends */}
        {/* --------------------------------------- */}
        {/* Food list display dynammically*/}
            <div className='Content'> 
                <div className='Content_Info'>
                    <img className='fooddispimg' src={url} alt='food-images'/>
                    <p className='hotelname'>{hname}</p>
                    <p className='types'>{dishName}</p>
                    <p className='km'>{km}</p>
                </div>
            </div>
         {/* Food list display dynammically Ends*/}
      </div>      
  )
}

export default DynamicFood