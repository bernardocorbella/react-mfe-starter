import * as React from "react"
import { render } from "@testing-library/react"

import Root from "./root"

describe("Root", () => {
  it("renders", () => {
    const { getByText } = render(<Root />)
    getByText(/root/i)
  })
})
