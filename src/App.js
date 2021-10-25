import logo from './logo.svg';
import React ,{useState}from 'react'
function App() {

const [data,setData]=useState(null)
const [arr,setArr]=useState(null)

  function getData(val)
  {
    let arr = [];
    setData(val.target.value)
    for (let i = 0; i < val.targe.value; i++) {
      arr.push("h ")
    }
  }
  return (
    <div className="App">
    <input type="number" onChange={getData} />
    {data}
    <div>{arr}</div>
    </div>
  );
}

export default App;