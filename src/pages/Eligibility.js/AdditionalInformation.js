import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  CardActions,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  eligibilityFormSchemaAdditionaYup,
  eligibilityFormSchema,
} from "../../schemas/eligibiltyFormSchema";
import {
  clearEligibilityFormData,
  saveMemberEligibilityFormData,
  setCurrentFunnel,
} from "../../slices/memberEligibilityFormSlice";

const AdditionalInformation = () => {
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
    resolver: yupResolver(eligibilityFormSchemaAdditionaYup, {
      abortEarly: false,
    }),
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const currentFunnel = useSelector(
    (state) => state.memberEligibilityForm.currentFunnel
  );

  const onSubmit = (_) => {
    dispatch(saveMemberEligibilityFormData(getValues()));
    dispatch(setCurrentFunnel(1));
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
      <Box sx={{ mt: 2, mb: 1 }}>
        <FormControl component="fieldset">
          <FormLabel component="legend">
            Are you a parent of a child under 18?
          </FormLabel>
          <Controller
            name="parentOfUnder18"
            control={control}
            defaultValue={eligibilityFormData.parentOfUnder18}
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
          {errors.parentOfUnder18 && (
            <FormHelperText sx={{ color: "error.main" }}>
              {errors.parentOfUnder18?.message}
            </FormHelperText>
          )}
        </FormControl>
      </Box>
      <Box sx={{ mt: 2, mb: 1 }}>
        <FormControl component="fieldset">
          <FormLabel component="legend">
            Is this person pregnant or been pregnant in the last 6 months?
          </FormLabel>
          <Controller
            name="pregnancyStatus"
            control={control}
            defaultValue={eligibilityFormData.pregnancyStatus}
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
          {errors.pregnancyStatus && (
            <FormHelperText sx={{ color: "error.main" }}>
              {errors.pregnancyStatus?.message}
            </FormHelperText>
          )}
        </FormControl>
      </Box>
      <Box sx={{ mt: 2, mb: 1 }}>
        <FormControl component="fieldset">
          <FormLabel component="legend">
            Does this person have a job (including self-employment)?
          </FormLabel>
          <Controller
            name="employmentStatus"
            control={control}
            defaultValue={eligibilityFormData.employmentStatus}
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
          {errors.employmentStatus && (
            <FormHelperText sx={{ color: "error.main" }}>
              {errors.employmentStatus?.message}
            </FormHelperText>
          )}
        </FormControl>
      </Box>
      <Box sx={{ mt: 2, mb: 1 }}>
        <FormControl component="fieldset">
          <FormLabel component="legend">
            Does this person have any other kind of monthly income?
          </FormLabel>
          <Controller
            name="incomeStatus"
            control={control}
            defaultValue={eligibilityFormData.incomeStatus}
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
          {errors.incomeStatus && (
            <FormHelperText sx={{ color: "error.main" }}>
              {errors.incomeStatus?.message}
            </FormHelperText>
          )}
        </FormControl>
      </Box>

      <CardActions
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            flexDirection: { xs: "column", sm: "column", md: "row" },
          }}
        >
          <Button
            onClick={() => {
              dispatch(clearEligibilityFormData());
              navigate("/");
            }}
          >
            Exit Pre-Sceener
          </Button>
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
        </Box>
      </CardActions>
    </Box>
  );
};

export default AdditionalInformation;
