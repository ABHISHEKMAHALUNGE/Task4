import React ,{useState} from 'react';
import './App.css';

function App() {
  const [weights ,setWeights] = useState([]);
  const [capacityOne,setCapacityOne] = useState(0);
  const [capacityTwo,setCapacityTwo] = useState(0);
  const [winner,setWinner] = useState("None");

  let [submitted,setSubmitted] = useState(false);
  const handleSubmit =(e)=>{
    e.preventDefault();
    setSubmitted(true);
    let a = [...weights];

let one = 0;
let two = 0;
let i = 0;
let j = a.length - 1;

while (i < j) {
if(j-i===1){
    break;
}
  if (a[i] <= capacityOne && a[j] <= capacityTwo) {
    one += a[i];
    a[i] = 0;
    i++;
    two += a[j];
    a[j] = 0;
    j--;
    if (i === j) {
    if (capacityOne > capacityTwo) {
      one +=a[i];
      a[i]=0;
    } else {
      
       two +=a[j];
       a[j]=0
    }
  }
  } else if (a[i] > capacityOne && a[j] <= capacityTwo) {
    one += capacityOne;
    a[i] -= capacityOne;
    two += a[j];
    a[j] = 0;
    j--;
  } else if (a[i] <= capacityOne && a[j] > capacityTwo) {
    one += a[i];
    a[i] = 0;
    i++;
    two += capacityTwo;
    a[j] -= capacityTwo;
  } else if (a[i] > capacityOne && a[j] > capacityTwo) {
    one += capacityOne;
    a[i] -= capacityOne;
    two += capacityTwo;
    a[j] -= capacityTwo;
  }
}
// if (i == j) {
//     if (capacityOne > capacityTwo) {
//       if (a[i] <= capacityOne) {
//         one += a[i];
//         a[i] = 0;
//         i++;
//       } else {
//         one += capacityOne;
//         a[i] -= capacityOne;
//       }
//     } else {
//       if (a[j] <= capacityTwo) {
//         two += a[j];
//         a[j] = 0;
//         j--;
//       } else {
//         two += capacityTwo;
//         a[j] -= capacityTwo;
//       }
//     }
//   }
one += a[i];
 two += a[j];
console.log(one, two);
if(one>two){
  setWinner("Player 1");
}
if(two>one){
  setWinner("Player 2");
}
if(one === two){
  setWinner("Match is drawn");
}

setSubmitted(false);

  }
  const onCapOne=(e) => {
    setCapacityOne(parseInt(e.target.value));
  }
  const onCapTwo=(e) => {
    setCapacityTwo(parseInt(e.target.value));
  }
  const onWeights = (e)=>{
    let a = e.target.value;
    let arr = a.split('#');
    let w = []
    for(var i=0;i<arr.length;i++){
     w.push(parseInt(arr[i]));
    }
  setWeights(w);
   
  }
  return (
    <div className="App">
    <form onSubmit ={handleSubmit} action="">
      <div className="Wts"><label htmlFor="">Input Weights</label>
      <input onChange={onWeights} type="text" /></div>
      <div className="cap1"> <label htmlFor="">Capacity 1</label>
      <input onChange ={onCapOne} type="text" /></div>
     <div className="cap2">
     <label htmlFor="">Capacity 2</label>
      <input onChange = {onCapTwo} type="text" />
     </div>
     
      <button type="submit">Result</button>
    </form>
    <h1>Winner : {winner}</h1>
    </div>
  );
}

export default App;
