import  React, { useState , useEffect } from 'react'
import '../App.css'



export const DateTime = () => {

    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
        <div>
            <div className="date"> {date.toLocaleDateString()}</div>
            <div className="time"> {date.toLocaleTimeString()} CEST</div>
        </div>
    )
}

export default DateTime