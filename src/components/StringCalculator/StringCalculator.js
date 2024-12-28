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
      setInput("")
    } catch (e) {
      setError(e.message) // Set error message if an error occurs
      setResult(null) // Clear the result if there's an error
      setInput("")
    }
  }

  return (
    <div className="calculator">
      <h1>String Calculator</h1>

      {/* Input box */}
      <input type="text" value={input} onChange={handleInputChange} placeholder="Enter numbers here" />

      {/* Calculate button */}
      <button onClick={handleCalculate}>
        <img src="/logo.png" alt="Logo" className="logo" />
        Calculate
      </button>

      {/* Display the result */}
      {result !== null && <div className="result">Result: {result}</div>}

      {/* Display any errors */}
      {error && (
        <div className="error">
          <b>Error:</b> {error}
        </div>
      )}
    </div>
  )
}

export default StringCalculator
