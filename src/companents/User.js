import React from 'react';

//PROPS YAPISI

function User({ data, friends }) {
    return (
        <div>
            User
            <div>İsim: {data.name}</div>
            <div>Yaş: {data.age}</div>
            <div>Şehir: {data.city}</div>

            <h3>Arkadaşları</h3>
            {
                friends.map((friends, i) => (
                    <div key={i}>{friends}</div>
                ))
            }
            <hr />
        </div>
    );
}

export default User;