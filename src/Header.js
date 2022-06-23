import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.css"; 
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {useStateValue} from './StateProvider'
import { auth } from './firebasee';


function Header() {
 const [{basket,user}] = useStateValue();

 const handleAuthentication  = () => {
   if(user){
    auth.signOut(); 
   }
 }
 
  return (
    <nav className="header">

        {/*logo on the left ->image */}
        <Link to="/"> 
          <img className = "header__logo" 
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" 
          alt=" "/>
        </Link>
         {/*logo*/}



        {/*search bar*/}
        <div className='header__search'>
           <input type="text" className = "header__searchInput"/>
           <SearchIcon className='header__searchIcon'/>
        </div>
        {/*search bar*/}



        {/* 3 links */}
        <div className='header__nav'>

          {/*1st link*/}
          <Link to={!user && '/login'}  className='header__link'>
            <div onClick={handleAuthentication} className='header__option'>
              <span  className='header__optionLineOne'>Hello {!user ? 'Guest':user.email}</span>
              <span className='header__optionLineTwo'>{user ? 'Sign Out':'Sign In'}</span>
            </div>
          </Link>
          {/*1st link*/}


          {/*2nd link*/}
          <Link to= "/"  className='header__link'>
            <div className='header__option'>
              <span className='header__optionLineOne'>Returns</span>
              <span className='header__optionLineTwo'>& Orders</span>
            </div>
          </Link>
          {/*2nd link*/}


          {/*3rd link*/}
          <Link to= "/"  className='header__link'>
            <div className='header__option'>
              <span className='header__optionLineOne'>Your</span>
              <span className='header__optionLineTwo'>Prime</span>
            </div>
          </Link>
          {/*3rd link*/}


          {/*4th link*/}
          <Link to="/checkout" className='header__link'>
            <div className='header__optionBasket'>
              <ShoppingBasketIcon />
              <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
            </div>
          </Link>
          {/*4th link*/} 
        </div>
    </nav>
  )
}

export default Header