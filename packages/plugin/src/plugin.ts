import type { OnePlugin, PluginAPI } from "@onecomme.com/onesdk/types/Plugin"

import * as consts from "@onecomme-replacement-plugin/common/src/consts"
import type { Config } from "@onecomme-replacement-plugin/common/src/types"

let _store: PluginAPI["store"]

export default {
  name: consts.PLUGIN_NAME,
  uid: consts.PLUGIN_UID,
  version: consts.PLUGIN_VERSION,
  author: consts.PLUGIN_AUTHOR,
  url: `${consts.WEB_ENDPOINT}/index.html`,
  permissions: ["filter.comment"],
  defaultState: {},

  init: ({ store }) => {
    _store = store
  },

  request: async ({ method, body }) => {
    if (method === "GET") {
      const data = { ..._store.store } as Config
      return { code: 200, response: JSON.stringify(data) }
    }
    if (method === "POST") {
      const data = JSON.parse(body) as Config
      _store.store = data
      return { code: 200, response: JSON.stringify(data) }
    }
    return { code: 404, response: JSON.stringify({}) }
  },

  filterComment: async (comment) => {
    return comment
  },
} satisfies OnePlugin
