import React from 'react'
import "./Homee.css"
import Product from './Product'
function Homee() {
  return (
   <div className='home'>
     <img
        className='home__image'
        src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
        alt=""
     />
     <div className='home__row'>
     <Product 
       id = "123123"
       title = "IPHONE 13 Pro Max"
       price ={999.99} 
       rating = {5}
       image ="https://m.media-amazon.com/images/I/61D84NtVgVL.jpg"
      />
       <Product 
       id = "1231213"
       title = "The Lean Startup: How constant Innovation Creates Radically Business Succesfull Paperback"
       price ={19.96} 
       rating = {5}
       image ="https://www.rd.com/wp-content/uploads/2020/01/57_The-Book-Thief-by-Markus-Zusak-via-amazon.jpg?fit=700,700"
      />
     </div>
     <div className='home__row'>
     <Product 
       id = "123121423"
       title = "IQOO Neo 6 5G"
       price ={500.00} 
       rating = {5}
       image ="https://m.media-amazon.com/images/I/71WS-0ITj7L._SL1200_.jpg"
      />
      <Product 
       id = "123121423"
       title = "Guitar"
       price ={100} 
       rating = {5}
       image ="https://m.media-amazon.com/images/I/61+fz+3k-ZL._SL1280_.jpg"
      />
     <Product 
       id = "122143123"
       title = "Arpit Tiwari | IIT BHU Student || photugraper"
       price ={-10} 
       rating = {5}
       image ="https://media-exp2.licdn.com/dms/image/C5603AQGLY9H4tunZtQ/profile-displayphoto-shrink_800_800/0/1630955811895?e=1660176000&v=beta&t=TkVIn3Ja5dbbNk65KUM0aIGL2Ofi6RQbh8-czbw6T5Q"
      />
     </div>
     <div className='home__row'>
    
       <Product 
       id = "123142123"
       title = "Old Antique TV || High quality ever (2nd Gen)"
       price ={200} 
       rating = {5}
       image ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWYqVxTbKM1gq4p4Kq1fzrj4jzzk1sim4nyA&usqp=CAU"
      />
     </div>
      {/*Product*/}
   </div>
  )  
}

export default Homee