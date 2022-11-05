import User from "./companents/User";

//BİR OBJEYİ, PROERTY OLARAK GONDERME
const user = {
  name: "ozgur",
  city: "Izmir",
  age: 22,
}

function App() {
  return (
    <div>

      {/*veriyi dizi olarak gönderme */}
      <User data={user} />
    </div>
  );
}
export default App;
