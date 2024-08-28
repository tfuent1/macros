import './App.css';
import Navbar from './components/navbar/navbar';
import CalorieCalc from './containers/calorieCalc/calorieCalc';
import MacrosCalc from './containers/macrosCalc/macrosCalc';
import Divider from '@mui/material/Divider'

function App() {
  return (
    <div className="App">
      <Navbar />
      <header />
      <CalorieCalc />
      <Divider aria-hidden="true" sx={{bgcolor: "beige"}} flexItem />
      <MacrosCalc />
    </div>
  );
}

export default App;
