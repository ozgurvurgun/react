import React from 'react';

//PROPS YAPISI

// function User({ data:{name, age, city} }) {
//     return (
//         <div>
//             User
//             <div>İsim: {name}</div>
//             <div>Yaş: {age}</div>
//             <div>Şehir: {city}</div>
//             <hr />
//         </div>
//     );
// }


//en çok bu kullanımı sevdim. kısaca app.js ten data={user} geliyor. bunu {data} bu şekilde parametre alıp data.name, data.age şeklinde değerlerle erişiyoruz
//diğer kullanımlarda aynı işi yapıyor. sevdiğini seç
function User({data}) {
    return (
        <div>
            User
            <div>İsim: {data.name}</div>
            <div>Yaş: {data.age}</div>
            <div>Şehir: {data.city}</div>
            <hr />
        </div>
    );
}

// function User(props) {
//     const data = props.data;
//     return (
//         <div>
//             User
//             <div>İsim: {data.name}</div>
//             <div>Yaş: {data.age}</div>
//             <div>Şehir: {data.city}</div>
//             <hr />
//         </div>
//     );
// }
export default User;