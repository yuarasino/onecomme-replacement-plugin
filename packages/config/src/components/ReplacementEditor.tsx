import { Box, Stack, TextField, Typography } from "@mui/material"

import useReplacementStore from "../stores/useReplacementStore"

export default function ReplacementEditor() {
  const { editingItem } = useReplacementStore()

  return (
    <>
      {editingItem && (
        <Stack
          component="form"
          autoComplete="off"
          spacing={3}
          paddingBlock={2}
          paddingInline={3}
        >
          <Box>
            <Typography variant="caption">{`ID: ${editingItem.id}`}</Typography>
          </Box>
          <Box>
            <TextField
              required
              fullWidth
              label="名前"
              defaultValue={editingItem.name}
              slotProps={{
                htmlInput: { "data-1p-ignore": true },
              }}
            />
          </Box>
          <Box>
            <TextField
              required
              fullWidth
              multiline
              minRows={3}
              maxRows={3}
              label="パターン"
              helperText="1行につき1パターン記述できます。正規表現も使えます。"
              defaultValue={editingItem.pattern}
            />
          </Box>
          <Stack direction="row" spacing={3}>
            <Stack spacing={3} flex={1}>
              <Box>
                <TextField
                  required
                  label="画像 (jpg, png, gif)"
                  defaultValue={editingItem.image}
                />
              </Box>
              <Box>
                <TextField
                  required
                  type="number"
                  label="サイズ (px)"
                  defaultValue={editingItem.size}
                />
              </Box>
            </Stack>
            <Stack spacing={0.5} flex={1}>
              <Typography variant="caption" color="text.secondary">
                画像プレビュー
              </Typography>
              <Box
                width={100}
                height={100}
                sx={{ border: 1, borderColor: "grey.500" }}
              >
                <img
                  src={`/images/${editingItem.image}`}
                  alt={editingItem.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                />
              </Box>
            </Stack>
          </Stack>
        </Stack>
      )}
    </>
  )
}
