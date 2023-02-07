import React, { useEffect, useState } from "react";
import Zamikanie from "./reactTsSobes/zamikanie";
import { say } from "./tsSobes/clases";


function App() {
  const [counter, setCounter] = useState<number>(0)

  // let inter: any

  // const start = () => {
  //   console.log("hello")
  //   inter = setInterval(() => {
  //     setCounter(prev => ++prev)
  //   }, 2000)

  //   if (counter === 4) {
  //     clearInterval(inter)
  //     console.log('finish')
  //   }
  // }
  let inter: any
  useEffect(() => {
    if (inter) {
      console.log("clear")
      clearInterval(inter)
    }
    inter = setInterval(() => {
      setCounter(prev => ++prev)
      console.log(counter)
    }, 1000)
  }, [])

  return (
    <React.StrictMode>
      <div className="App">
        {/* <Zamikanie></Zamikanie> */}
        {counter}
      </div>
    </React.StrictMode>
  );
}

export default App;
