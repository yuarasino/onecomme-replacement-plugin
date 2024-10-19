import { describe, expect, test } from "bun:test"

import plugin from "../src/plugin"

describe("plugin.ts", () => {
  test("名前が設定されていること", () => {
    expect(plugin.name).toBeTruthy()
  })
})
