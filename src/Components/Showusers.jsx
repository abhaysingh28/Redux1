import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeUsers, deleteUser } from '../store/slices/UserSlice';


const Showusers = () => {

    const data = useSelector((state) => {
        return state.users;
    });

    const dispatch = useDispatch();

    const removeUser = (id) => {
        dispatch(deleteUser(id))
    }
    const removeall =()=>{
        dispatch(removeUsers())
    }

    console.log(data);
    return (
        <>
            <div className="listofuserscontainer">
                {
                    data.map((item, id) => (
                        <h2 key={id}>
                            <div className="listofusers">
                                <h1> {item}    </h1>
                                <button onClick={() => removeUser(id)}>delete</button>
                            </div>
                        </h2>
                    )
                    )
                }

            </div>
            <hr />
            <button onClick={()=>removeall()}>remove all users</button>
        </>
    );
}

export default Showusers;
