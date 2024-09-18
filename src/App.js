import { useState } from 'react';
import './App.css';

function App() {

  const [weight, SetWeight] = useState(0);
  const [height, SetHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");
  
  let calcBmi = (event) => {
    event.preventDefault();
    
    if (weight === 0 || height === 0) {
      alert("please enter a valid weight amd height")
    }
    else {
      let bmi = (weight / (height * height) * 703)
      setBmi(bmi.toFixed(1))



      if (bmi < 25) {
        setMessage("you are underweight")
      }
      else if (bmi >= 25 && bmi < 30) {
        setMessage("you are a healthy weight")

      }
      else {
        setMessage("you  are ovberweight")
      }
    }
  }


  let reload = () => {
    window.location.reload()
  }


  return (
    <div className="App">
      <div className="container">
        <h1>BMI Calculator</h1>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (ibs)</label>
            <input type="text" placeholder="Enter Weight Value" value={weight}
              onChange={(e) => SetWeight(e.target.value)} />
          </div>
          <div>
            <label>Height(ibs)</label>
            <input type="text" placeholder="Enter height Value" value={height}
              onChange={(e) => SetHeight(e.target.value)} />
          </div>
          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
          </div>
          <div className='center'>
            <h1>Your BMI is:{bmi}</h1>
            <p>{message}</p>
          </div>
        </form>
      </div>


    </div>
  );
}

export default App;
