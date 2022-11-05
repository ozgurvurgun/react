//import Header from "./companents/Header";
import Login from "./companents/Login";

const isloggedIn = false;
const fullname = "Ozgur VURGUN";

//KOŞULLU RENDER İŞLEMİ

function App() {
  //YONTEM 1
  //KISA İF ELSE İFADESİ

  // return (
  //   <div className="test">
  //     {isloggedIn ? <div>Hoşgeldin {fullname}</div> : <a href="#/">Giriş Yapın</a>}
  //   </div>
  // );


  //YONTEM 2
  //isloggedIn varsa ismi basıyoruz ,isloggedIn yoksa giriş yap linkini basıyoruz.

  // return (
  //   <div className="test">
  //     {isloggedIn && <div>Hoşgeldin {fullname}</div>}

  //     {!isloggedIn && <a href="#/">Giriş Yapın</a>}
  //   </div>
  // );


  //YONTEM 3
  //isloggedIn varsa ismi bas, yoksa Login göster

   return (
     <div className="test">
       {isloggedIn ? <div>Hoşgeldin {fullname}</div> : <Login/>}
     </div>
   );
}
export default App;
