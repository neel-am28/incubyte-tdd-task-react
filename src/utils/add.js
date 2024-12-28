export const add = (numString) => {
  let numbersArray = []
  if (numString.trim() == "") {
    return 0
  }
  if (numString.startsWith("//")) {
    // eg: //;\n1;2
    const delimiterString = numString.split("\n")[0].slice(2)
    numbersArray = formatNumberString(numString.split("\n")[1], delimiterString)
  } else {
    // Handle case for default delimiter (comma)
    numbersArray = formatNumberString(numString, /[\n,]/)
  }

  const negativeNumbers = numbersArray.filter((num) => num < 0)

  if (negativeNumbers.length > 0) {
    throw new Error(`negative numbers not allowed ${negativeNumbers.join(",")}`)
  }

  const result = numbersArray.reduce((acc, item) => acc + item, 0)
  return result
}

// Utility function to format and filter number strings
const formatNumberString = (str, delimiter) => {
  return str
    .split(delimiter)
    .map((num) => Number(num))
    .filter((num) => !isNaN(num)) // Filter out NaN values
}
