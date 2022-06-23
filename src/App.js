import './App.css';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import Header from "./Header";
import Homee from "./Homee";
import Checkoutt from './Checkoutt';
import Loginn from './Loginn';
import {auth} from './firebasee'
import {useStateValue} from "./StateProvider"; 
import {useEffect} from 'react';
import Paymentt from './Paymentt';
 
function Home(){
    return (
    <>
     <Header/>
     <Homee/>
    </>
    ) 
}
function Login()
{
  return (
    <>
      <Loginn/>
    </>
  )
}
function Checkout(){
  return (
    <>
      <Header/>
      <Checkoutt/>
    </>
  )
}
function Payment(){
  return (
    <>
      <Header/>
      <Paymentt/>
    </>
  )
}
function App() {
  const  [{},dispatch] = useStateValue();

  useEffect(() =>{
    //will only run once when the app compoents load
    auth.onAuthStateChanged(authUser =>{
      console.log('THE USER IS >>>',authUser);
      if(authUser){
        //the user just logged in / the user  was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else{
        // the user is logged out  

        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/payment" element={<Payment/>}/>
        </Routes>
      </div>
    </Router>
  );
} 
export default App;
