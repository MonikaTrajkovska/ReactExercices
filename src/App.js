 import React from 'react'
 import Footer from './components/Footer'
 import MyInfo from './components/MyInfo'
 import Box from './components/Box'
 import Moni from './components/Moni'
 import Joke from './components/Joke'
 import Products from './components/Products'
 



 function App(){
    return(
     <div>
       <MyInfo/>
       <Footer/> 
    <Box/>
    <Moni/>
    <Joke question="Kako si" answer="Dobro"/>
    <Products/>
         
         </div>
     )
 }

export default App
