import { yupResolver } from "@hookform/resolvers/yup";
import {
  Autocomplete,
  Box,
  Button,
  CardActions,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  eligibilityFormSchemaMemberYup,
  eligibilityFormSchema,
} from "../../schemas/eligibiltyFormSchema";
import {
  saveMemberEligibilityFormData,
  setCurrentFunnel,
} from "../../slices/memberEligibilityFormSlice";

const unitOptions = [{ label: "Years" }, { label: "Months" }];
const MemberInformation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const currentFunnel = useSelector(
    (state) => state.memberEligibilityForm.currentFunnel
  );

  const currentuuid = useSelector(
    (state) => state.memberEligibilityForm.currentuuid
  );

  const eligibilityFormData = useSelector((state) => {
    if (
      state.memberEligibilityForm.eligibilityFormData.find(
        (ele) => ele.uuid === currentuuid
      )
    ) {
      return state.memberEligibilityForm.eligibilityFormData.find(
        (ele) => ele.uuid === currentuuid
      );
    }

    return { ...eligibilityFormSchema };
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onBlur",
    defaultValue: { eligibilityFormData },
    resolver: yupResolver(eligibilityFormSchemaMemberYup, {
      abortEarly: false,
    }),
  });

  const onSubmit = (data) => {
    dispatch(saveMemberEligibilityFormData(getValues()));
    dispatch(setCurrentFunnel(currentFunnel + 1));
  };

  const handleBackButtonClickHandler = () => {
    if (currentFunnel > 0) {
      dispatch(setCurrentFunnel(currentFunnel - 1));
    } else {
      navigate("/");
    }
  };
  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="firstName"
        control={control}
        defaultValue={eligibilityFormData.firstName}
        render={({ field }) => (
          <TextField
            {...field}
            fullWidth
            variant="outlined"
            label="First Name"
            error={errors.firstName ? true : false}
            helperText={errors.firstName?.message}
            margin="normal"
          />
        )}
      />
      <Controller
        name="lastName"
        control={control}
        defaultValue={eligibilityFormData.lastName}
        render={({ field }) => (
          <TextField
            {...field}
            fullWidth
            variant="outlined"
            label="Last Name"
            error={errors.lastName ? true : false}
            helperText={errors.lastName?.message}
            margin="normal"
          />
        )}
      />
      <Controller
        name="age"
        control={control}
        defaultValue={eligibilityFormData.age}
        render={({ field }) => (
          <TextField
            {...field}
            fullWidth
            variant="outlined"
            label="Age"
            error={errors.age ? true : false}
            helperText={errors.age?.message}
            margin="normal"
          />
        )}
      />

      <Controller
        control={control}
        name="unit"
        defaultValue={eligibilityFormData.unit}
        render={({ field }) => (
          <Autocomplete
            {...field}
            onChange={(event, item) => {
              field.onChange(item);
            }}
            value={field?.value}
            options={unitOptions}
            getOptionLabel={(option) => option.label || ""}
            isOptionEqualToValue={(option, value) => {
              return (
                value === undefined ||
                value === "" ||
                option.label === value.label
              );
            }}
            renderInput={(params) => (
              <TextField
                margin="normal"
                {...params}
                {...field}
                label="Unit"
                variant="outlined"
                error={errors.unit ? true : false}
                helperText={errors.unit?.message}
              />
            )}
          />
        )}
      />
      <Box sx={{ mt: 2, mb: 1 }}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Gender</FormLabel>
          <Controller
            name="gender"
            control={control}
            defaultValue={eligibilityFormData.gender}
            render={({ field }) => (
              <RadioGroup
                {...field}
                sx={{ display: "flex", flexDirection: "row" }}
                onChange={(event, item) => {
                  field.onChange(item);
                }}
                value={field?.value}
              >
                <FormControlLabel
                  value="male"
                  label="Male"
                  control={<Radio />}
                />
                <FormControlLabel
                  value="female"
                  label="Female"
                  control={<Radio />}
                />
              </RadioGroup>
            )}
          />
          {errors.gender && (
            <FormHelperText sx={{ color: "error.main" }}>
              {errors.gender?.message}
            </FormHelperText>
          )}
        </FormControl>
      </Box>
      <Box sx={{ mt: 2, mb: 1 }}>
        <FormControl component="fieldset">
          <FormLabel component="legend">
            Are you a resident of Washington?
          </FormLabel>
          <Controller
            name="washingtonResident"
            control={control}
            defaultValue={eligibilityFormData.washingtonResident}
            render={({ field }) => (
              <RadioGroup
                {...field}
                sx={{ display: "flex", flexDirection: "row" }}
                onChange={(event, item) => {
                  field.onChange(item);
                }}
                value={field?.value}
              >
                <FormControlLabel value="yes" label="Yes" control={<Radio />} />
                <FormControlLabel value="no" label="No" control={<Radio />} />
              </RadioGroup>
            )}
          />
          {errors.washingtonResident && (
            <FormHelperText sx={{ color: "error.main" }}>
              {errors.washingtonResident?.message}
            </FormHelperText>
          )}
        </FormControl>
      </Box>
      <Box sx={{ mt: 2, mb: 1 }}>
        <FormControl component="fieldset">
          <FormLabel component="legend">
            Is this person a U.S. citizen or a lawful permanent resident?
          </FormLabel>
          <Controller
            name="permanentResident"
            control={control}
            defaultValue={eligibilityFormData.permanentResident}
            render={({ field }) => (
              <RadioGroup
                {...field}
                sx={{ display: "flex", flexDirection: "row" }}
                onChange={(event, item) => {
                  field.onChange(item);
                }}
                value={field?.value}
              >
                <FormControlLabel value="yes" label="Yes" control={<Radio />} />
                <FormControlLabel value="no" label="No" control={<Radio />} />
              </RadioGroup>
            )}
          />
          {errors.permanentResident && (
            <FormHelperText sx={{ color: "error.main" }}>
              {errors.permanentResident?.message}
            </FormHelperText>
          )}
        </FormControl>
      </Box>
      <Box sx={{ mt: 2, mb: 1 }}>
        <FormControl component="fieldset">
          <FormLabel component="legend">
            Is this person currently participating in Medicaid, SNAP, and/or
            TANF?
          </FormLabel>
          <Controller
            name="currentParticipation"
            control={control}
            defaultValue={eligibilityFormData.currentParticipation}
            render={({ field }) => (
              <RadioGroup
                {...field}
                sx={{ display: "flex", flexDirection: "row" }}
                onChange={(event, item) => {
                  field.onChange(item);
                }}
                value={field?.value}
              >
                <FormControlLabel value="yes" label="Yes" control={<Radio />} />
                <FormControlLabel value="no" label="No" control={<Radio />} />
              </RadioGroup>
            )}
          />
          {errors.currentParticipation && (
            <FormHelperText sx={{ color: "error.main" }}>
              {errors.currentParticipation?.message}
            </FormHelperText>
          )}
        </FormControl>
      </Box>
      <Box sx={{ mt: 2, mb: 1 }}>
        <FormControl component="fieldset">
          <FormLabel component="legend">
            Is this person permanently disabled or blind?
          </FormLabel>
          <Controller
            name="permanentDisability"
            control={control}
            defaultValue={eligibilityFormData.permanentDisability}
            render={({ field }) => (
              <RadioGroup
                {...field}
                sx={{ display: "flex", flexDirection: "row" }}
                onChange={(event, item) => {
                  field.onChange(item);
                }}
                value={field?.value}
              >
                <FormControlLabel value="yes" label="Yes" control={<Radio />} />
                <FormControlLabel value="no" label="No" control={<Radio />} />
              </RadioGroup>
            )}
          />
          {errors.permanentDisability && (
            <FormHelperText sx={{ color: "error.main" }}>
              {errors.permanentDisability?.message}
            </FormHelperText>
          )}
        </FormControl>
      </Box>
      <CardActions
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          flexDirection: { xs: "column", sm: "column", md: "row" },
        }}
      >
        <Button onClick={() => navigate("/")}>Exit Pre-Sceener</Button>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 3,
          }}
        >
          <Button
            variant="contained"
            color="secondary"
            onClick={handleBackButtonClickHandler}
          >
            Back
          </Button>
          <Button variant="contained" color="success" type="submit">
            Next
          </Button>
        </Box>
      </CardActions>
    </Box>
  );
};

export default MemberInformation;
