import React from 'react'
import ReactDom from 'react-dom'
//  ReactDom.render(<div><h1>Hello world </h1><p>This is paragraph</p></div>, document.getElementById("app"))
function MyApp(){
    return
     <ul>
    <li>1 </li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
</ul>
}
ReactDom.render(
    <MyApp/>,
    document.getElementById('app')
)