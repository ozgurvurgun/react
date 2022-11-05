import React from "react";
// import Header from "./companents/Header"; 

const name="Ozgur";
let surname="VURGUN";

function App() {
  return (  // kapasayıcı divi kullanmak istemiyorsan div yerine bu "<>.. </>" fragment ifadesini ya da " <React.Fragment>...</React.Fragment>" ifadesini kullanabilirsin bu iki kullanım da aynı amaca hizmet eder
    <div className="test">
     <h1>{name} {surname}</h1>   

      <div>
        <p>Test</p>
      </div>
      <label htmlFor="test">Test</label>

      <div>Selam</div>
    </div>
  );
}
export default App;
//jsx ifadesi için de class tanımlaması ' className="blabla" ' şeklinde yapılır.
//label için de for ifadesi kullanırız. bunun jsx de ki karşılığı htmlFor="blabla" dır.
//component içinde bir değişken "{name}" bu şekilde süslü parantez ile render edilir
