import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
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
  clearEligibilityFormData,
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
          <TableContainer
            component={Paper}
            sx={{ display: { xs: "none", sm: "none", md: "table" } }}
          >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 600 }}>Member Name</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Cash</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Medical</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Food</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>WIC</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Child Care</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {eligibilityFormData.map((row) => (
                  <TableRow
                    key={row.uuid}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ fontWeight: 600 }}
                    >
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
        {eligibilityFormData.map((row) => (
          <Card
            sx={{
              minWidth: 200,
              mb: 2,
              display: { xs: "block", sm: "block", md: "none" },
              borderTop: "4px solid",
              borderColor: "primary.dark",
            }}
            elevation={3}
          >
            <CardHeader title={`${row.firstName} ${row.lastName}`} />
            <Divider />
            <CardContent>
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Cash" />
                    <ListItemIcon>
                      <DoneIcon sx={{ color: "success.main" }} />
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Medical" />
                    <ListItemIcon>
                      <CloseIcon sx={{ color: "error.main" }} />
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Food" />
                    <ListItemIcon>
                      <DoneIcon sx={{ color: "success.main" }} />
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="WIC" />
                    <ListItemIcon>
                      <CloseIcon sx={{ color: "error.main" }} />
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Child Care" />
                    <ListItemIcon>
                      <CloseIcon sx={{ color: "error.main" }} />
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
              </List>
            </CardContent>
          </Card>
        ))}
        <Button
          variant="contained"
          onClick={() => {
            dispatch(setCurrentUuid(uuid()));
            dispatch(setCurrentFunnel(currentFunnel + 1));
          }}
          sx={{
            my: 3,
          }}
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
