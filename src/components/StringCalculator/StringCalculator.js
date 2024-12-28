import React, {useState} from "react"

import {add} from "../../utils/add"

const StringCalculator = () => {
  const [input, setInput] = useState("") // State to hold user input
  const [result, setResult] = useState(null) // State to hold the result
  const [error, setError] = useState("") // State to hold error messages

  // Handle change in the input box
  const handleInputChange = (event) => {
    setInput(event.target.value)
  }

  // Handle the calculation when the button is clicked
  const handleCalculate = () => {
    try {
      const calcResult = add(input)
      setResult(calcResult) // Set the result if no error occurs
      setError("") // Clear any previous error
    } catch (e) {
      setError(e.message) // Set error message if an error occurs
      setResult(null) // Clear the result if there's an error
    }
  }

  return (
    <div className="calculator">
      <h1>String Calculator</h1>

      {/* Input box */}
      <input type="text" value={input} onChange={handleInputChange} placeholder="Enter numbers here" />

      {/* Calculate button */}
      <button onClick={handleCalculate}>Calculate</button>
    </div>
  )
}

export default StringCalculator
