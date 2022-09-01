import { Avatar, Box, Card, Typography } from "@mui/material";
import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";

const Status = () => {
  return (
    <Card
      sx={{
        borderTop: "4px solid #90EE90",
        flexBasis: "65%",
        mb: { xs: 2, sm: 2, md: "none" },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "left",
          padding: "20px 20px 0px 20px",
        }}
      >
        Status: Our office is reviewing the submitted application
      </Typography>
      <Timeline
        sx={{
          alignItems: "flex-start",
          padding: "20px",
        }}
      >
        <TimelineItem>
          <TimelineSeparator>
            <Avatar
              sx={{
                backgroundColor: "#90EE90",
                border: "1px solid #cfEbfd",
                color: "black",
                width: 28,
                height: 28,
                fontSize: "0.8rem",
                display: "flex",
                flexDirection: "row",
                fontWeight: 600,
              }}
            >
              <DoneRoundedIcon
                sx={{
                  color: "white",
                }}
              />
            </Avatar>
            <TimelineConnector
              sx={{
                backgroundColor: "#cfEbfd",
              }}
            />
          </TimelineSeparator>
          <Box
            sx={{
              textAlign: "left",
              paddingBottom: "20px",
              paddingLeft: "20px",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "black",

                fontWeight: 600,
              }}
            >
              03/03/22: The Application has been submitted.
            </Typography>
            <Typography
              sx={{
                color: "black",
                fontSize: "1rem",

                fontWeight: 400,
                flexGrow: 4,
              }}
            >
              The Application was submit on 03/13/2022 Typically it takes one to
              two business days for the office to receive request
            </Typography>
          </Box>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <Avatar
              sx={{
                backgroundColor: "#90EE90",
                border: "1px solid #cfEbfd",
                color: "black",
                width: 28,
                height: 28,
                fontSize: "0.8rem",
                display: "flex",
                flexDirection: "row",
                fontWeight: 600,
              }}
            >
              <DoneRoundedIcon
                sx={{
                  color: "white",
                }}
              />
            </Avatar>
            <TimelineConnector
              sx={{
                backgroundColor: "#cfEbfd",
              }}
            />
          </TimelineSeparator>
          <Box
            sx={{
              textAlign: "left",
              paddingBottom: "20px",
              paddingLeft: "20px",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "black",

                fontWeight: 600,
              }}
            >
              Our office received application
            </Typography>
            <Typography
              sx={{
                color: "black",
                fontSize: "1rem",

                fontWeight: 400,
                flexGrow: 4,
              }}
            >
              The Application was submit on 03/13/2022 Typically it takes one to
              two business days for the office to receive request
            </Typography>
          </Box>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <Avatar
              sx={{
                backgroundColor: "red",
                border: "1px solid #cfEbfd",
                color: "black",
                width: 28,
                height: 28,
                fontSize: "0.8rem",
                display: "flex",
                flexDirection: "row",
                fontWeight: 600,
              }}
            >
              <PriorityHighIcon
                fontSize="small"
                sx={{
                  color: "white",
                }}
              />
            </Avatar>
            <TimelineConnector
              sx={{
                backgroundColor: "#cfEbfd",
              }}
            />
          </TimelineSeparator>
          <Box
            sx={{
              textAlign: "left",
              paddingBottom: "20px",
              paddingLeft: "20px",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "black",

                fontWeight: 600,
                fontStyle: "italic",
              }}
            >
              We need more information.
            </Typography>
            <Typography
              sx={{
                color: "black",
                fontSize: "1rem",

                fontWeight: 400,
                flexGrow: 4,
              }}
            >
              The Application was submit on 03/13/2022 Typically it takes one to
              two business days for the office to receive request
            </Typography>
          </Box>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <Avatar
              sx={{
                backgroundColor: "white",
                border: "1px solid #cfEbfd",
                width: 28,
                height: 28,
                fontSize: "0.8rem",
                display: "flex",
                flexDirection: "row",
                fontWeight: 600,
              }}
            >
              <PriorityHighIcon
                sx={{
                  fontSize: "1rem",
                  color: "white",
                }}
              />
            </Avatar>
          </TimelineSeparator>
        </TimelineItem>
      </Timeline>
    </Card>
  );
};

export default Status;
