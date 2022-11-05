import React from 'react';

//PROPS YAPISI

function User(props) {
    console.log(props);
    return (
        <div>
            User
            <div>İsim: {props.name}</div>
            <div>Yaş: {props.age}</div>
            <div>Şehir: {props.city}</div>
            <hr />
        </div>
    );
}
export default User;