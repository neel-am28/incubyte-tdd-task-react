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
})
