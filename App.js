import React from 'react';
import Select from 'react-select';
import './App.css';


const cityList = [
  { label: "New Delhi", value: 1 },
  { label: "Gurgaon", value: 2 },
  { label: "Hyderabad", value: 3 },
  { label: "Bengluru", value: 4 },
  { label: "Pune", value: 5 },
  { label: "Kolkata", value: 6 },
];

// const App = () => (
//   <div className="container">
//     <div className="row">
//       <div className="col-md-4 col-md-offset-4">
//         <Select placeholder="Select city..." options={ cityList } isMulti/>
//       </div>
//     </div>
//   </div>
// );

function App() {
  return (
    <div className="container">
         <div className="row">
           <div className="col-md-4 col-md-offset-4">
             <Select placeholder="Select city..." options={ cityList } isMulti/>
           </div>
         </div>
       </div>
  );
}

export default App