import {fireEvent, render, screen} from "@testing-library/react"
import StringCalculator from "./StringCalculator"
import {add} from "../../utils/add"

describe("add function", () => {
  test("returns 0 for an empty string", () => {
    expect(add("")).toBe(0)
  })

  test("returns first number if string length is 1", () => {
    expect(add("1")).toBe(1)
  })

  test("returns sum of first two numbers if string length is 2", () => {
    expect(add("1,5")).toBe(6)
  })

  test("returns sum of all numbers in the string", () => {
    expect(add("1,5,2")).toBe(8)
  })

  test("returns sum of numbers separated by new line character or a comma", () => {
    expect(add("1\n2,3")).toBe(6)
  })

  test("returns sum of numbers starting with a custom delimiter", () => {
    expect(add("//;\n1;2")).toBe(3)
  })

  test("throws error if function called with negative numbers", () => {
    expect(() => add("1,-2,3,-5")).toThrowError("negative numbers not allowed -2,-5")
  })
})

describe("String Calculator Component", () => {
  test("renders input field and button", () => {
    render(<StringCalculator />)
    expect(screen.getByPlaceholderText(/enter numbers here/i)).toBeInTheDocument()
    expect(screen.getByText(/calculate/i)).toBeInTheDocument()
  })

  test("updates user input when user types", () => {
    render(<StringCalculator />)
    const input = screen.getByPlaceholderText(/enter numbers here/i)
    fireEvent.change(input, {target: {value: "1,2,3"}})
    expect(input.value).toBe("1,2,3")
  })
})
