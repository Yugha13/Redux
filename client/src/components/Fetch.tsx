import { fetchUser } from "../features/FetchUser";

import { useDispatch } from "react-redux";

export default function FetchedUsers(){
    const dispatch = useDispatch();
    return(
        <div>
            <button onClick={() => dispatch(fetchUser() as any)}>Click Here</button>
        </div>
    )
}