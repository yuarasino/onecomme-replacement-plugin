import {
  Box,
  Button,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material"
import { useEffect } from "react"
import { Controller, useForm } from "react-hook-form"

import useReplacementStore from "../stores/useReplacementStore"

import type { SubmitHandler } from "react-hook-form"

import type { ReplacementItem } from "@onecomme-replacement-plugin/common/src/types"

export default function ReplacementEditor() {
  const { editingItem, editItem } = useReplacementStore()

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      id: " ",
      active: true,
      name: " ",
      pattern: " ",
      image: " ",
      size: 0,
    },
  })

  const onEditItem: SubmitHandler<ReplacementItem> = (data) => {
    editItem(data)
  }

  useEffect(() => {
    reset(editingItem)
  }, [editingItem, reset])

  return (
    <Box
      component="form"
      autoComplete="off"
      onSubmit={handleSubmit(onEditItem)}
    >
      <Toolbar variant="dense" sx={{ boxShadow: 1, zIndex: 1 }}>
        <Typography variant="caption" component="div" sx={{ flexGrow: 1 }}>
          {`ID: ${editingItem?.id ?? ""}`}
        </Typography>
        <Button
          variant="contained"
          type="submit"
          size="small"
          disabled={!editingItem}
        >
          保存
        </Button>
      </Toolbar>
      {editingItem && (
        <Stack spacing={3} padding={3}>
          <Box>
            <Controller
              control={control}
              name="name"
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  required
                  fullWidth
                  label="名前"
                  {...field}
                  error={!!errors.name}
                  slotProps={{
                    htmlInput: { "data-1p-ignore": true },
                  }}
                />
              )}
            />
          </Box>
          <Box>
            <Controller
              control={control}
              name="pattern"
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  required
                  fullWidth
                  multiline
                  minRows={3}
                  maxRows={3}
                  label="パターン"
                  helperText="1行につき1パターン記述できます。正規表現も使えます。"
                  {...field}
                  error={!!errors.pattern}
                />
              )}
            />
          </Box>
          <Stack direction="row" spacing={3}>
            <Stack spacing={3} flex={1}>
              <Box>
                <Controller
                  control={control}
                  name="image"
                  rules={{ required: true }}
                  render={({ field }) => (
                    <TextField
                      required
                      label="画像 (jpg, png, gif)"
                      {...field}
                      error={!!errors.image}
                    />
                  )}
                />
              </Box>
              <Box>
                <Controller
                  control={control}
                  name="size"
                  rules={{ required: true }}
                  render={({ field }) => (
                    <TextField
                      required
                      type="number"
                      label="サイズ (px)"
                      {...field}
                      error={!!errors.size}
                    />
                  )}
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
    </Box>
  )
}
