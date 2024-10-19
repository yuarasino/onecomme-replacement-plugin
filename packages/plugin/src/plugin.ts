import type { OnePlugin } from "@onecomme.com/onesdk/types/Plugin"

import * as consts from "@onecomme-replacement-plugin/common/src/consts"

export default {
  name: consts.PLUGIN_NAME,
  uid: consts.PLUGIN_UID,
  version: consts.PLUGIN_VERSION,
  author: consts.PLUGIN_AUTHOR,
  url: `${consts.WEB_ENDPOINT}/index.html`,
  permissions: ["filter.comment"],
  defaultState: {},
  filterComment: async (comment) => {
    return comment
  },
} satisfies OnePlugin
