import { Box, Card, CardContent, CardHeader, Divider } from "@mui/material";
import { useSelector } from "react-redux";
import AdditionalInformation from "./AdditionalInformation";
import AddMember from "./AddMember";
import MainEligibilityContent from "./MainEligibilityContent";
import MemberInformation from "./MemberInformation";

const EligibilityForm = () => {
  const currentFunnel = useSelector(
    (state) => state.memberEligibilityForm.currentFunnel
  );
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        mt: 10,
      }}
    >
      <Card
        sx={{
          maxWidth: "80vw",
          borderTop: `3px solid`,
          borderColor: "secondary.main",
          boxShadow: [5],
          mt: 5,
          mb: 2,
        }}
      >
        <CardHeader title="Could I Qualify?"></CardHeader>
        <Divider />

        <CardContent>
          {currentFunnel === 0 && <MainEligibilityContent />}
          {currentFunnel === 1 && <AddMember />}
          {currentFunnel === 2 && <MemberInformation />}
          {currentFunnel === 3 && <AdditionalInformation />}
        </CardContent>
      </Card>
    </Box>
  );
};

export default EligibilityForm;
