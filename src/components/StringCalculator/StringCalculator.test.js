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

  test("calculates the sum of number string correctly", () => {
    render(<StringCalculator />)

    const input = screen.getByPlaceholderText(/enter numbers here/i)
    const button = screen.getByText(/calculate/i)
    // input 1
    fireEvent.change(input, {target: {value: "1"}})
    fireEvent.click(button)
    expect(screen.getByText(/result:/i)).toHaveTextContent("Result: 1")

    // input 2
    fireEvent.change(input, {target: {value: "1,5"}})
    fireEvent.click(button)
    expect(screen.getByText(/result:/i)).toHaveTextContent("Result: 6")

    // input 3
    fireEvent.change(input, {target: {value: "1,5,2"}})
    fireEvent.click(button)
    expect(screen.getByText(/result:/i)).toHaveTextContent("Result: 8")

    // input 4
    fireEvent.change(input, {target: {value: "1\n2,3"}})
    fireEvent.click(button)
    expect(screen.getByText(/result:/i)).toHaveTextContent("Result: 6")

    // input 5
    fireEvent.change(input, {target: {value: "//;\n1;2"}})
    fireEvent.click(button)
    expect(screen.getByText(/result:/i)).toHaveTextContent("Result: 3")
  })

  test("clears input and result after calculation", () => {
    render(<StringCalculator />)

    const input = screen.getByPlaceholderText(/enter numbers here/i)
    const button = screen.getByText(/calculate/i)

    fireEvent.change(input, {target: {value: "1,2,3"}})
    fireEvent.click(button)

    expect(screen.getByText(/result:/i)).toHaveTextContent("Result: 6")

    expect(input.value).toBe("")

    expect(screen.getByText(/result:/i)).toHaveTextContent("Result: 6")
  })
})
