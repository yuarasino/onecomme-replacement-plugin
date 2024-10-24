import { copySync, removeSync } from "fs-extra"

removeSync("dist")
copySync("packages/config/dist", "dist")
copySync("packages/plugin/dist", "dist")
