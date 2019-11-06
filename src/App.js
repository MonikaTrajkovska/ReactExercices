 import React from 'react'
 import Footer from './components/Footer'
 import MyInfo from './components/MyInfo'
 import Box from './components/Box'
 import Moni from './components/Moni'
 import Joke from './components/Joke'
//  import Products from './components/Products'
import todosData from './components/todosData'
import Igor from './components/Igor'
// import Conditional from './components/Conditional'
import Api from './components/Api'
import Form from './components/Form'
import Post from './component/Post'


 function App(){

    return(
     <div>
       <MyInfo/>
       <Footer/> 
    <Box/>
    <Moni/>
    {/* <Conditional/> */}
    <Igor/>
    <Api/>
    <Form/>
    <Post/>
   
    <Joke question="Kako si" answer="Dobro"/>
    {/* <Products/> */}
         
         </div>
     )
 }

export default App
