import { login ,logout } from "@/features/User"
import { useState } from "react";

// To update the global state.
import { useDispatch } from "react-redux"

// To fetch the global state.
import { useSelector } from "react-redux";


export default function Login(){
    const dispatch = useDispatch();
    const [name,setname] = useState("");
    const [age,setage] = useState("");
    const [email,setemail] = useState("");
    const user = useSelector(state => state.user.value)
    return(
        <form>
            {!user.name && (
                <div>
                    <div>
                    <input placeholder="Enter Your Name" type="text" value={name} onChange={(e)=>setname(e.target.value)} required />
                    </div>
                    <input placeholder="Enter Your Age" type="number" value={age} onChange={(e)=>setage(e.target.value)} />
                    <div>
                    <input placeholder="Enter Your Email" type="email" value={email} onChange={(e)=>setemail(e.target.value)} />
                    </div>
                </div>
            )}
            {!user.name ?(
                    <div onClick={() => dispatch(login({name,age,email}))}>
                        <button>Login</button>
                    </div>
                ):(
                    <div onClick={() => dispatch(logout())}>
                        <button>Logout</button>
                    </div>
                )
                }
        </form>
    )
}