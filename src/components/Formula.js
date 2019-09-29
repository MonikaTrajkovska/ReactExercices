import React from 'react'

function Formula (){
    const date= new Date()
    const hours = date.getHours()
    let timeOfDay
    const styles= {
        fontSize:30
    }
    if (hours <12){
        timeOfDay="good morning"
        styles.color="red"
    }else if (hours >=12 && hours <17){
        timeOfDay="Good afternoon"
        styles.color='yellow'
    }else {
        timeOfDay="Good night"
        styles.color='green'
    }
    return (
        <h1>time of the day is {timeOfDay}</h1>
    )
}

export default Formula