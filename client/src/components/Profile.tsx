// To fetch global states in child.
import { useSelector } from "react-redux"


export default function Profile(){
    const user = useSelector(state => state.user.value);
    if(!user.name){
        return <h1>DETAILS</h1>
    }
    return(
        <div>
            <h1>DETAILS</h1>
            <p>Name : {user.name}</p>
            <p>Age : {user.age} </p>
            <p>Email : {user.email} </p>
        </div>
    )
}