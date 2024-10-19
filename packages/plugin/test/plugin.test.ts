import { describe, test, expect } from "bun:test"

import plugin from "../src/plugin"

describe("plugin", () => {
  test("名前が設定されていること", () => {
    expect(plugin.name).toBeTruthy()
  })
})
