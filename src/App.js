import User from "./companents/User";

//BİR ARRAYİ, PROERTY OLARAK GONDERME
const user = {
  name: "ozgur",
  city: "Izmir",
  age: 22,
}

function App() {
  return (
    <div>

      {/*veriyi dizi olarak gönderme */}
      <User data={user} friends={["ahmet","ece","irem"]} />
    </div>
  );
}
export default App;
