export const add = (numString) => {
  let numbersArray = []
  if (numString.trim() == "") {
    return 0
  }
  if (numString.startsWith("//")) {
    // eg: //;\n1;2
    const delimiterString = numString.split("\n")[0].slice(2)
    numbersArray = numString
      .split("\n")[1] // Get the numbers part
      .split(delimiterString) // Split by custom delimiter
      .map((num) => Number(num)) // Convert to numbers
      .filter((num) => !isNaN(num)) // Filter out NaN values
  } else {
    // Handle case for default delimiter (comma)
    numbersArray = numString
      .split(/[\n,]/) // Split by new line or comma delimiter
      .map((num) => Number(num)) // Convert to numbers
      .filter((num) => !isNaN(num)) // Filter out NaN values
  }
  const negativeNumbers = numbersArray.filter((num) => num < 0)

  if (negativeNumbers.length > 0) {
    throw new Error(`negative numbers not allowed ${negativeNumbers.join(",")}`)
  }

  const result = numbersArray.reduce((acc, item) => acc + item, 0)
  return result
}
