import React, {useState} from 'react'
import "./macrosCalc.css"
import Divider from '@mui/material/Divider'


function MacrosCalc() {
    const [proteinHigh, setProteinHigh] = useState(0);
    const [proteinLow, setProteinLow] = useState(0);
    const [carbs, setCarbs] = useState(0);
    const [carbsHigh, setCarbsHigh] = useState(0);
    const [carbsLow, setCarbsLow] = useState(0);
    const [fat, setFat] = useState(0);
    const [fatHigh, setFatHigh] = useState(0);
    const [fatLow, setFatLow] = useState(0);
    
    function getMacros(event) {
        event.preventDefault(); 
    
        let proteinHigh = 0;
        let carbsHigh = 0;
        let fatHigh = 0;
        let proteinLow = 0;
        let carbsLow = 0;
        let fatLow = 0;
        let carbs = 0;
        let fat = 0;
    
        const selectCalories = document.querySelector('#calorieInput');
        const selectWeight2 = document.querySelector('#weightInput2')
        const selectGoal = document.querySelector('#goal');
    
        const calGoal = Number(selectCalories.value);
        const weight = Number(selectWeight2.value);
        const goal = Number(selectGoal.value);
    
        //Bulk goal = 3 
        if (goal === 3) {
            proteinHigh = weight * 1.5;
            proteinLow = weight * 1.5;
        } else {
            proteinHigh = weight;
            proteinLow = weight * 1.25;
        }

        carbs = (calGoal) * .5 /4;
        fat = (calGoal - (proteinHigh *4) - (carbs *4)) / 9;
        carbsHigh = (calGoal * .6) / 4;
        fatHigh = (calGoal - (proteinHigh * 4) - (carbsHigh * 4)) / 9;
        carbsLow = (calGoal * .15) / 4;
        fatLow = (calGoal - (proteinLow * 4) - (carbsLow * 4)) / 9;

        setProteinHigh(proteinHigh); 
        setProteinLow(proteinLow);
        setCarbs(carbs);
        setCarbsHigh(carbsHigh);
        setCarbsLow(carbsLow);
        setFat(fat);
        setFatHigh(fatHigh);
        setFatLow(fatLow);
    }

  return (
    <section id='macro'>
            <div id='disclaimer'>
                <p>This calculator is used to give you a starting point for a Macro-Nutrient focused diet.</p>
                <p>Macro-Nutrients, or macros, in this context are protein, fat, and carbs. This is one step further than just counting calories. Protein and carbs are 4 calories per gram, while fat is 9 calories per gram.</p>
                <p>I believe that a macros based diet is not only effective, but it is fairly easy to keep up with. I recommend using an app like MyFitnessPal or similar to track your food intake.</p>
                <p>In my calculations, protein is set based off your body weight. If bulking, 1.5 x body weight = protein(grams) is used. If on a low-carb diet and your goal is to maintain or cut, 1.25 x body weight = protein(grams) is used. Otherwise 1 gram of protein per pound of body weight is used. </p>
                <p>The carbs for the high-carb diets are set at 60% of your total calories. In a low carb diet, 15% is used.</p>
                <p>Fats are determined by taking the left over calories after deducting protein and carbs, ensuring that we are within 9 calories of the correct calorie goal everytime.</p>
                <p>This is just for information purposes. When starting any diet, you should consult with your physician.</p>
            </div>
            <div id='formContainer'>
                <h2>Macro-Nutrient Calculator</h2>
                <form onSubmit={getMacros} id='macros'>
                    <div id='goalWeightDiv'>
                        <div id='calorieGoal'>
                            <label>Calorie Goal:</label>
                            <input type='number' id='calorieInput' />
                        </div>
                        <div id='weight'>  
                                <label>Weight(lbs)</label>
                                <input type="number" id='weightInput2' />
                        </div>
                    </div>
                    <div id='goalDiv'>
                        <label>Goal:</label>
                        <select id='goal'>
                            <option value='1'>Maintain</option>
                            <option value='2'>Weight Loss</option>
                            <option value='3'>Weight Gain</option>
                        </select>
                    </div>
                    <div id='button'>
                        <input type="submit" value="Calculate" />
                    </div>
                    <div id='results'>
                        <p>
                            Normal Diet:
                            <br></br>
                            P: {proteinHigh.toFixed(0)} g
                            <br></br>
                            C: {carbs.toFixed(0)} g
                            <br></br>
                            F: {fat.toFixed(0)} g
                        </p>
                        <Divider aria-hidden="true" sx={{bgcolor: "beige"}} orientation="vertical" flexItem />
                        <p>
                            High-Carb Diet:
                            <br></br>
                            P: {proteinHigh.toFixed(0)} g
                            <br></br>
                            C: {carbsHigh.toFixed(0)} g
                            <br></br>
                            F: {fatHigh.toFixed(0)} g
                        </p>
                        <Divider aria-hidden="true" sx={{bgcolor: "beige"}} orientation="vertical" flexItem />
                        <p>
                            Low-Carb Diet:
                            <br></br>
                            P: {proteinLow.toFixed(0)} g
                            <br></br>
                            C: {carbsLow.toFixed(0)} g
                            <br></br>
                            F: {fatLow.toFixed(0)} g
                        </p>
                    </div>
                </form>
            </div>
        </section>
  ) 
}

export default MacrosCalc
