import { Avatar, Box, Card, Typography } from "@mui/material";
import React from "react";

const Expect = (props) => {
  return (
    <Card
      sx={{
        borderTop: "4px solid #90EE90",
        flexBasis: "35%",
        mb: { xs: 2, sm: 2, md: "none" },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "left",
          padding: "20px",
          fontFamily: "Poppins",
        }}
      >
        What to expect
      </Typography>
      <Box
        sx={{
          textAlign: "left",
          padding: "20px",
          fontFamily: "Poppins",
          display: "flex",
          flexDirection: "column",
          rowGap: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
          }}
        >
          <Avatar
            sx={{
              backgroundColor: "#cfEbfd",
              border: "1px solid #cfEbfd",
              color: "black",
              width: 28,
              height: 28,
              fontSize: "0.9rem",
              display: "flex",
              flexDirection: "row",
              fontWeight: 600,
            }}
          >
            1
          </Avatar>

          <Box>
            <Typography
              sx={{
                color: "black",
                fontSize: "1rem",
                fontFamily: "Poppins",
                fontWeight: 600,
              }}
            >
              A letter will come to the mailing address in the application in
              the next 4-6 weeks
            </Typography>
            <Typography
              sx={{
                color: "#999999",
                fontSize: "1rem",
                fontFamily: "Poppins",
                fontWeight: 400,
                flexGrow: 4,
              }}
            >
              The Application was submit on 03/13/2022 Typically it takes one to
              two business days for the office to receive request
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
          }}
        >
          <Avatar
            sx={{
              border: "1px solid #cfEbfd",
              bgcolor: "white",
              color: "black",
              width: 28,
              height: 28,
              fontSize: "0.9rem",
              display: "flex",
              flexDirection: "row",
              fontWeight: 600,
            }}
          >
            2
          </Avatar>

          <Box>
            <Typography
              sx={{
                color: "black",
                fontSize: "1rem",
                fontFamily: "Poppins",
                fontWeight: 600,
              }}
            >
              Provide additional information if needed.
            </Typography>
            <Typography
              sx={{
                color: "#999999",
                fontSize: "1rem",
                fontFamily: "Poppins",
                fontWeight: 400,
                flexGrow: 4,
              }}
            >
              The Application was submit on 03/13/2022 Typically it takes one to
              two business days for the office to receive request
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
          }}
        >
          <Avatar
            sx={{
              border: "1px solid #cfEbfd",
              bgcolor: "white",
              color: "black",
              width: 28,
              height: 28,
              fontSize: "0.9rem",
              display: "flex",
              flexDirection: "row",
              fontWeight: 600,
            }}
          >
            3
          </Avatar>

          <Box>
            <Typography
              sx={{
                color: "black",
                fontSize: "1rem",
                fontFamily: "Poppins",
                fontWeight: 600,
                fontStyle: "italic",
              }}
            >
              Denial or Approval
            </Typography>
            <Typography
              sx={{
                color: "#999999",
                fontSize: "1rem",
                fontFamily: "Poppins",
                fontWeight: 400,
                flexGrow: 4,
              }}
            >
              The Application was submit on 03/13/2022 Typically it takes one to
              two business days for the office to receive request
            </Typography>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default Expect;
