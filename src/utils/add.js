export const add = (rawInput) => {
  let numbersArray = []

  let numString = rawInput.replace(/\\n/g, "\n") // Replace literal '\n' with actual newline

  // If input is empty, return 0
  if (numString.trim() === "") {
    return 0
  }

  // Check if a custom delimiter is provided (e.g., `//;`)
  if (numString.startsWith("//")) {
    const indexAfterDoubleSlash = numString.indexOf("//") + 2 // 2 to move after the '//'
    const afterSlash = numString.substring(indexAfterDoubleSlash)
    const delimiterString = afterSlash[0]
    numString = afterSlash.substring(1) // Remove empty strings from split

    numbersArray = formatNumberString(numString, delimiterString) // Split by custom delimiter
  } else {
    // Handle case for default delimiters (comma and newline)
    numbersArray = formatNumberString(numString, /[\n,]/) // Split by newline or comma
  }

  // Filter out negative numbers
  const negativeNumbers = numbersArray.filter((num) => num < 0)
  if (negativeNumbers.length > 0) {
    throw new Error(`negative numbers not allowed ${negativeNumbers.join(",")}`)
  }

  // Sum the numbers
  const result = numbersArray.reduce((acc, item) => acc + item, 0)
  return result
}

// Utility function to format and filter number strings
const formatNumberString = (str, delimiter) => {
  return str
    .split(delimiter) // Split using the delimiter (either newline or comma)
    .map((num) => Number(num)) // Convert strings to numbers
    .filter((num) => !isNaN(num)) // Filter out NaN values
}
