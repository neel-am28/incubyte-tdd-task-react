export const add = (numString) => {
  if (numString.trim() == "") {
    return 0
  }
  let numbersArray = []
  numbersArray = numString.split(",").map((nums) => Number(nums))
  if (numbersArray.length == 1) {
    return numbersArray[0]
  }
  if (numbersArray.length == 2) {
    return numbersArray[0] + numbersArray[1]
  }
}
