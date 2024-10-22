import { Button, List, Toolbar, Typography, colors } from "@mui/material"

import useReplacementStore from "../stores/useReplacementStore"
import ReplacementListItem from "./ReplacementListItem"

export default function ReplacementList() {
  const { items, addItem } = useReplacementStore()

  return (
    <>
      <Toolbar
        variant="dense"
        sx={{ backgroundColor: colors.grey[50], boxShadow: 1, zIndex: 1 }}
      >
        <Typography variant="subtitle1" component="div" sx={{ flexGrow: 1 }}>
          テキスト置換設定
        </Typography>
        <Button variant="outlined" size="small" onClick={() => addItem()}>
          追加
        </Button>
      </Toolbar>
      <List dense disablePadding sx={{ overflow: "auto" }}>
        {items.toReversed().map((item) => (
          <ReplacementListItem key={item.id} item={item} />
        ))}
      </List>
    </>
  )
}
