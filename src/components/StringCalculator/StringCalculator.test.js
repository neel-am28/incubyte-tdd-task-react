import {render, screen} from "@testing-library/react"
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
})
