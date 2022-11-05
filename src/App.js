import User from "./companents/User";

//PROPS YAPISI
//companente anahtar değer çiftleriyle veriyi gönderip orada fonksiyonun parametresi olarak verileri yakalıyoruz.
//veriler dizi olarak gidiyor yani aldığımız veriyi örneğin props.name, props.surname, props.age şeklinde yakalıyoruz.
function App() {
  return (
    <div>
      <User name="Ozgur VURGUN" city="Izmir" age={22} />
      <User name="Ece Sensoz" city="Izmir" age={22} />
      <User name="Irem Keskin" city="Istanbul" age={25} />
    </div>
  );
}
export default App;
