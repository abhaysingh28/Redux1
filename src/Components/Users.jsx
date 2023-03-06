import React, { useState } from 'react';
import "./users.css"
import fakeUserData from "../api"
import { useDispatch } from 'react-redux';
import { addUser } from '../store/slices/UserSlice';

const Listofusers = () => {
    const dispatch = useDispatch();

    const addNewUser = (payload) => {
        dispatch(addUser(payload))
    }

    return (
        <>
            <div className="listofusers">
                <h1> Lists of users </h1>
                <button onClick={() => addNewUser(fakeUserData())}>add new users</button>
            </div>
           
        </>
    );
}

export default Listofusers;
