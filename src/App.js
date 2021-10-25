import React ,{useState}from 'react'
function App() {

const [data,setData]=useState(null)
const [arr,setArr]=useState(null)

  function getData(val)
  {
    let arr = [];
    setData(val.target.value)
    for (let i = 0; i < val.target.value; i++) {
      arr.push("h ")
    }
    setArr(arr)
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