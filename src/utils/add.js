export const add = (numString) => {
  let numbersArray = []
  if (numString.trim() == "") {
    return 0
  }
  if (numbersArray.length == 1) {
    return numbersArray[0]
  } else {
    if (numString.startsWith("//")) {
      // eg: //;\n1;2
      const delimiterString = numString.split("\n")[0].slice(2)
      numbersArray = numString
        .split("\n")[1] // Get the numbers part
        .split(delimiterString) // Split by custom delimiter
        .map((num) => Number(num)) // Convert to numbers
    } else {
      // Handle case for default delimiter (comma)
      numbersArray = numString.split(/[\n,]/).map((num) => Number(num))
    }
    const result = numbersArray.reduce((acc, item) => acc + item, 0)
    return result
  }
}
