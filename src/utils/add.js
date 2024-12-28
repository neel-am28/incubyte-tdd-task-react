export const add = (numString) => {
  if (numString.trim() == "") {
    return 0
  }
  let numbersArray = []
  numbersArray = numString.split(/[\n,]/).map((nums) => Number(nums))
  if (numbersArray.length == 1) {
    return numbersArray[0]
  } else {
    const result = numbersArray.reduce((acc, item) => acc + item, 0)
    return result
  }
}
