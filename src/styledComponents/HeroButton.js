import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const HeroButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  textTransform: "none",
}));
