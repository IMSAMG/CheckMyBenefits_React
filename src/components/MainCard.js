import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function MainCard({ title, subHeader, svgImage, description }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        height: 400,
        borderTop: `3px solid`,
        borderColor: "secondary.main",
        boxShadow: [5],
      }}
    >
      <CardHeader title={title} subheader={subHeader} />
      <CardMedia
        component="img"
        height="100"
        image={svgImage}
        alt="SNAP Image"
        sx={{ objectFit: "contain" }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
