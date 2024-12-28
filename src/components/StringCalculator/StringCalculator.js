import React, {useEffect, useState} from "react"

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
    } catch (err) {
      setError(err.message) // Set error message if an error occurs
      setResult(null) // Clear the result if there's an error
      setInput("")
      console.log(error)
    }
  }

  return (
    <div className="calculator">
      <img id="logo" src="https://cdn.prod.website-files.com/6626410e05635d300b393781/66276107ea573b37e95a1225_Incubyte%20Logo.svg" alt="Incubyte Logo" />
      <h1>String Calculator</h1>

      {/* Input box */}
      <textarea rows="1" type="text" value={input} onChange={handleInputChange} placeholder="Enter numbers here" />

      {/* Calculate button */}
      <button onClick={handleCalculate}>
        <img src="https://cdn.prod.website-files.com/6626410e05635d300b393781/6631f1e4bd9216c711361936_5f34c7167f3d24e36b7bab35_Favicon%2032x32.png" alt="Logo" className="logo" />
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
      <h5 style={{color: "lightblue"}}>Created by ~ Neelam Chaubey</h5>
    </div>
  )
}

export default StringCalculator
