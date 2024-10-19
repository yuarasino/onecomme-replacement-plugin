import { describe, expect, test } from "bun:test"
import { render, screen } from "@testing-library/react"

import App from "../src/App"

describe("App.tsx", () => {
  test("名前が設定されていること", () => {
    render(<App />)
    expect(screen.getByRole("heading").textContent).toBeTruthy()
  })
})
