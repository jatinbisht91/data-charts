import { useState, useEffect } from "react";
import { data } from "./Wine-Data";
import BarChart from "./Components/BarChart";
import ScatterPlot from "./Components/ScatterPlot";


function App() {
   //creating states 
  const [alcohol1, setAlcohol1] = useState([]);
  const [alcohol2, setAlcohol2] = useState([]);
  const [alcohol3, setAlcohol3] = useState([]);

  const getData = () => {
    setAlcohol1(data.filter(d => d.Alcohol === 1))
    setAlcohol2(data.filter(d => d.Alcohol === 2))
    setAlcohol3(data.filter(d => d.Alcohol === 3))
  }
  useEffect(() => {
    getData();
  }, [])


  return (
    <div className="container" >
    
      <BarChart alcohol1={alcohol1} alcohol2={alcohol2} alcohol3={alcohol3} />
      <ScatterPlot />
    </div>
  );
}

export default App;
