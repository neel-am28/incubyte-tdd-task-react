# String Calculator

This is a simple **String Calculator** project implemented in JavaScript, accompanied by a user-friendly web interface. It supports addition of numbers provided in a string format, with the ability to handle custom delimiters and newlines as separators.

---

## Features

1. **Basic Addition**: Calculates the sum of numbers in a string separated by commas or newlines.
2. **Custom Delimiters**: Supports custom delimiters specified in the format `//[delimiter]\n[numbers...]`.
3. **Negative Number Validation**: Throws an error if negative numbers are provided, displaying them in a comma separated string.
4. **Web Interface**: A simple HTML interface allows users to input a string and see the calculated result.

---

## Code Overview

### `add(numbers)`

The `add` function is the core logic for the calculator:

- **Handles Empty Input**: Returns `0` for empty strings.
- **Custom Delimiters**: Detects custom delimiters using the prefix `//` and splits the string accordingly.
- **Default Delimiters**: Uses commas and newlines for splitting if no custom delimiter is provided.
- **Negative Numbers**: Checks for and rejects negative numbers with a clear error message.
- **Sum Calculation**: Converts the string to an array of numbers, filters out negatives, and calculates the sum.

### UI Interaction

- Users enter a string into an input field.
- On clicking the **Calculate** button:
  - Input is validated (e.g., cannot be empty or contain invalid characters).
  - The result is displayed, or an error message is shown if the input is invalid.
  - Error messages automatically disappears after 5 seconds.

### Unit Tests

Test cases have been implemented using Jest:

1. Empty string input returns `0`.
2. Single number input returns the number itself.
3. Multiple numbers separated by commas return their sum.
4. Handles both commas and newlines as separators.
5. Custom delimiters are supported as specified.
6. Throws an error for negative numbers, displaying them in a comma separated string.

## How to Run

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the React development server using `npm start`.
4. Open the app in your web browser at http://localhost:3000.
5. Enter a string in the input field and click **Calculate** to see the result.

---

## Example Inputs and Outputs

| Input        | Output | Notes                              |
| ------------ | ------ | ---------------------------------- |
| `""`         | `0`    | Empty string returns `0`.          |
| `"1,2,3"`    | `6`    | Default delimiter (comma).         |
| `"1\n2,3"`   | `6`    | Supports newlines as separators.   |
| `"//;\n1;2"` | `3`    | Custom delimiter `;`.              |
| `"1,-2,3"`   | `0`    | Throws error for negative numbers. |
