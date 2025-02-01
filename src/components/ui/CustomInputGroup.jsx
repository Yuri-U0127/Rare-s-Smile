import { FormControl, FormLabel, Input, Select, MenuItem, Box } from "@mui/material";
import TextField from "@mui/material/TextField";

export default function InputGroup({ inputLab, inputPlaceholder, imgSrc, extraButton,
  btnLabel,
  btnIcon,
  imgAlt,
  matches
}) {
  return (
    <>
      {matches ?
        <FormControl fullWidth>
          <FormLabel sx={{ color: "inherit" }}>
            <div className="flex">
              <img src={imgSrc} alt={imgAlt} style={{ marginRight: '8px' }} />
              {inputLab}
            </div>
          </FormLabel>
          <Box sx={{ display: "flex", alignItems: "center", border: "1px solid #ccc", borderRadius: "8px", overflow: "hidden" }}>
            <Input
              placeholder={inputPlaceholder}
              sx={{ flex: 1, padding: "12px", border: "none", outline: "none" }}
              disableUnderline
            />
            <Select defaultValue={2024} sx={{ minWidth: "100px", borderLeft: "1px solid #ccc", padding: "12px" }}>
              <MenuItem value={2023}>2023年</MenuItem>
              <MenuItem value={2024}>2024年</MenuItem>
              <MenuItem value={2025}>2025年</MenuItem>
            </Select>
            {extraButton && (

              <div className="flex absolute top-0 right-0 cursor-pointer">
                <img src={btnIcon} alt="" />
                {btnLabel}
              </div>
            )
            }
          </Box>
        </FormControl>
        :
        <FormControl fullWidth>
          <FormLabel sx={{ color: "inherit" }}>
            <div className="flex">
              <img src={imgSrc} alt={imgAlt} style={{ marginRight: '8px' }} />
              {inputLab}
            </div>
          </FormLabel>
          <Box
            sx={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              position: "relative",
            }}
          >
            <Input
              variant="standard"
              placeholder=""
              fullWidth
              sx={{
                padding: "8px 12px",
              }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderTop: "1px solid #ddd",
                padding: "8px 12px",
                backgroundColor: "#f9f9f9",
                color: "#888",
              }}
            >
              <Box sx={{ fontSize: "14px" }}>確定診断年度</Box>
              <Select
                disableUnderline
                select
                variant="standard"
                value="2024"
                sx={{
                  minWidth: "80px",
                  "& .MuiSelect-select": {
                    paddingRight: "24px",
                  },
                }}
              >
                <MenuItem value="2023">2023年</MenuItem>
                <MenuItem value="2024">2024年</MenuItem>
                <MenuItem value="2025">2025年</MenuItem>
              </Select>
            </Box>
          </Box>
        </FormControl>
      }
    </>
  );
}
