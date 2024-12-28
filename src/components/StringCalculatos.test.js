import {render, screen} from "@testing-library/react"
import StringCalculator from "./StringCalculator"

test("renders StringCalculator component with correct label", () => {
  render(<StringCalculator />)
  const headingElement = screen.getByText(/Hi there!/i)
  expect(headingElement).toBeInTheDocument()
})
