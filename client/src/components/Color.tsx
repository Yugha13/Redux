import { useState } from "react"
import {changeColor} from "../features/Color"

import { useDispatch } from "react-redux";

export default function Theme(){
    const [color,setcolor] = useState("black");
    const dispatch =useDispatch()
    return(
        <div>
            <div style={{marginTop:"1rem" ,marginBottom:".3rem"}}>            
                <input 
                    type="color" 
                    value={color} 
                    onChange={(e)=>setcolor(e.target.value)} 
                    style={{width:'10%'}}
                />
            </div>
            <button 
                onClick={()=>dispatch(changeColor(color))}
            >
                Change Color
            </button>
        </div>
    )
}