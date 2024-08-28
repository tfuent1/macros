import React, { useState } from 'react';
import "./calorieCalc.css"

const CalorieCalc = () => {
    const [cals, setCals] = useState(0);
    const [cutHigh, setCutHigh] = useState(0);
    const [cutLow, setCutLow] = useState(0);
    const [bulkHigh, setBulkHigh] = useState(0);
    const [bulkLow, setBulkLow] = useState(0);

    function getOptions(event) {
        event.preventDefault(); 
    
        let cals = 0;
        let cutHigh = 0;
        let cutLow = 0;
        let bulkHigh = 0;
        let bulkLow = 0;
    
        const selectSex = document.querySelector('#sex');
        const selectWeight = document.querySelector('#weightInput1'); 
        const selectHeightFeet = document.querySelector('#heightFeet');
        const selectHeightInches = document.querySelector('#heightInches');
        const selectAge = document.querySelector('#ageInput'); 
        const selectActivityLevel = document.querySelector('#activityLevel');
    
        const sex = selectSex.value;
        const weight = Number(selectWeight.value);
        const height = (Number(selectHeightFeet.value) * 12) + Number(selectHeightInches.value);
        const age = Number(selectAge.value);
        const activityLevel = Number(selectActivityLevel.value);
        
        if (sex === "Male") {
            cals = ((10 * (weight * 0.453592)) + (6.25 * (height * 2.54)) - (5 * age) + 5) * activityLevel;
        } else {
            cals = ((10 * (weight * 0.453592)) + (6.25 * (height * 2.54)) - (5 * age) - 161) * activityLevel;
        }

        cutHigh = cals - 1000;
        cutLow = cals - 500;
        bulkHigh = cals + 1000;
        bulkLow = cals + 500;

        setCals(cals); 
        setCutHigh(cutHigh);
        setCutLow(cutLow);
        setBulkHigh(bulkHigh);
        setBulkLow(bulkLow);
    }

    return (
        <section id='page'>
            <div id='disclaimer'>
                <p>This calculator uses the Mifflin-St Jeor equation to determine your maintenance calories.</p>
                <p>Maintenance calories are essentially an estimate of how many calories you burn per day. Theoretically, if we consume this many calories per day, our weight will remain the same.</p>
                <p>To determine how many calories you should be consuming for a cut, reduce your maintenance calories by 500-1000. I recommend to start slow and increase the amount you take off a little every month or two until you feel you are losing 1-2 lbs per week.</p>
                <p>To determine how many calories you should be consuming for a bulk, raise your maintenance calories by 500-1000. I recommend starting low (500) and increasing after a month or two until you reach your desired results.</p>
                <p>Note: It takes 30-60 days on average to see results. Make sure you give this amount of time before making drastic changes to calories. After consistently dieting for 30-60 days, you can start tweaking calories on a weekly or biweekly basis. At this point you should strive to see 1-2 lbs per week difference.</p>
                <p>This is just for information purposes. When starting any diet, you should consult with your physician.</p>
            </div>
            <div id='formContainer'>
                <h2>Calorie Calculator</h2>
                <form onSubmit={getOptions} id='macros'>
                    <div id='genderWeight'>
                        <div id='gender'>
                            <label>Gender:</label>
                            <select id='sex'>
                                <option value='Male'>Male</option>
                                <option value='Female'>Female</option>
                            </select>
                        </div> 
                        <div id='weight'>  
                            <label>Weight(lbs)</label>
                            <input type="number" id='weightInput1' />
                        </div> 
                    </div>
                    <div id='heightAge'>
                        <div id='height'>
                            <label>Height</label>
                            <div id='heightCombo'>
                                <div id='feet'>
                                    <select id='heightFeet'>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                    </select>
                                    <label>(ft)</label>
                                </div>
                                <div id='inches'>
                                    <select id='heightInches'>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                    </select>
                                    <label>(in)</label>
                                </div>
                            </div>
                        </div>
                        <div id='age'>
                            <label>Age(years)</label>
                            <input type='number' id="ageInput" />
                        </div> 
                    </div>
                        <div id='activity'>
                        <label>Activity Level</label>
                        <select id='activityLevel'>
                            <option value="1.2">Sedentary (little to no exercise)</option>
                            <option value="1.375">Lightly Active (light exercise 1-3 days/week)</option>
                            <option value="1.55">Moderately Active (light to moderate exercise 4 to 5 days/week)</option>
                            <option value="1.725">Active (moderate exercise 6 to 7 days/week OR intense exercise 3 to 4 times/week)</option>
                            <option value="1.9">Very Active (intense exercise 6 to 7 times/week, sports training, or physical job)</option>
                        </select>
                        </div>
                        <div id='button'>
                            <input type="submit" value="Calculate" />
                        </div>
                        <p id='result'>Maintenance Calories: {cals.toFixed(0)} cal
                            <br></br>
                            Cut Calories: {cutHigh.toFixed(0)} cal - {cutLow.toFixed(0)} cal
                            <br></br>
                            Bulk Calories: {bulkLow.toFixed(0)} cal - {bulkHigh.toFixed(0)} cal
                        </p>
                </form>
            </div>
        </section>
    );
}

export default CalorieCalc;
