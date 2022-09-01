import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  CardActions,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import {
  setCurrentFunnel,
  setCurrentUuid,
} from "../../slices/memberEligibilityFormSlice";
import LoginForm from "../../components/LoginForm";
import { useState } from "react";

const AddMember = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [openLoginForm, setOpenLoginForm] = useState(false);

  const individualMemberDetails = useSelector(
    (state) => state.memberEligibilityForm.individualMemberDetails
  );

  const eligibilityFormData = useSelector(
    (state) => state.memberEligibilityForm.eligibilityFormData
  );

  const currentFunnel = useSelector(
    (state) => state.memberEligibilityForm.currentFunnel
  );

  return (
    <>
      {openLoginForm && (
        <LoginForm open={openLoginForm} setOpen={setOpenLoginForm} />
      )}
      <Box>
        {individualMemberDetails?.length === 0 && (
          <Typography variant="body2" color="text.secondary">
            No members have been added to your household yet. Start by adding a
            member.
          </Typography>
        )}
        {individualMemberDetails?.length > 0 && (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Member Name</TableCell>
                  <TableCell>Cash</TableCell>
                  <TableCell>Medical</TableCell>
                  <TableCell>Food</TableCell>
                  <TableCell>WIC</TableCell>
                  <TableCell>Child Care</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {eligibilityFormData.map((row) => (
                  <TableRow
                    key={row.uuid}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {`${row.firstName} ${row.lastName}`}
                    </TableCell>
                    <TableCell>
                      {<DoneIcon sx={{ color: "success.main" }} />}
                    </TableCell>
                    <TableCell>
                      {<CloseIcon sx={{ color: "error.main" }} />}
                    </TableCell>
                    <TableCell>
                      {<DoneIcon sx={{ color: "success.main" }} />}
                    </TableCell>
                    <TableCell>
                      {<CloseIcon sx={{ color: "error.main" }} />}
                    </TableCell>
                    <TableCell>
                      {<CloseIcon sx={{ color: "error.main" }} />}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}

        <Button
          variant="contained"
          onClick={() => {
            dispatch(setCurrentUuid(uuid()));
            dispatch(setCurrentFunnel(currentFunnel + 1));
          }}
          sx={{ my: 3 }}
        >
          Add Member
        </Button>
        <CardActions
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            flexDirection: { xs: "column", sm: "column", md: "row" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 3,
            }}
          >
            <Button onClick={() => navigate("/")}>Exit Pre-Sceener</Button>
            {individualMemberDetails?.length > 0 && (
              <Button
                variant="contained"
                color="success"
                onClick={() => setOpenLoginForm(true)}
              >
                Apply For Benefits
              </Button>
            )}
          </Box>
        </CardActions>
      </Box>
    </>
  );
};

export default AddMember;
