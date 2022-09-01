import { yupResolver } from "@hookform/resolvers/yup";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import PersonIcon from "@mui/icons-material/Person";
import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginFormSchemaYup } from "../schemas/loginForm";
import { setUserLoggedIn } from "../slices/LoginStateSlice";

export default function LoginForm({ open, setOpen }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onBlur",
    resolver: yupResolver(loginFormSchemaYup, {
      abortEarly: false,
    }),
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onSubmit = async (_) => {
    const status = await trigger();

    if (status) {
      dispatch(setUserLoggedIn(true));
      navigate("/dashboard/overview");
      setOpen(false);
    }
  };

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle
          sx={{
            mx: "auto",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>Log in</span>

          <IconButton onClick={handleClose} sx={{ ml: "auto" }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  variant="outlined"
                  label="Email"
                  error={errors.email ? true : false}
                  helperText={errors.email?.message}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon />
                      </InputAdornment>
                    ),
                  }}
                  margin="normal"
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  variant="outlined"
                  type={showPassword ? "text" : "password"}
                  label="Password"
                  error={errors.password ? true : false}
                  helperText={errors.password?.message}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          size="small"
                          edge="start"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  margin="normal"
                />
              )}
            />
          </Box>
        </DialogContent>
        <DialogActions sx={{ flexDirection: "column" }}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button onClick={() => onSubmit()} variant="contained">
              Sign In
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              my: 2,
            }}
          >
            <Button
              sx={{
                textTransform: "none",
                color: "secondary.main",
                textDecoration: "underline",
              }}
            >
              Don't have an account yet?
            </Button>
            <Button
              sx={{
                textTransform: "none",
                color: "secondary.main",
                textDecoration: "underline",
              }}
            >
              Forgot Password?
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
    </div>
  );
}
