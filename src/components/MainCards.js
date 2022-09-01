import React from "react";
import snapImage from "../assets/images/salad-svgrepo-com.svg";
import moneyImage from "../assets/images/money-svgrepo-com.svg";
import medicalImage from "../assets/images/medical-svgrepo-com.svg";
import MainCard from "./MainCard";
import { Box } from "@mui/material";

const cardArray = [
  {
    title: "SNAP",
    subHeader: "Food Assistance",
    svgImage: snapImage,
    description:
      'A federally funded program to help low-income families buy nutritious food from authorized retailers, also known as "Food Stamps" or "Supplemental Nutritional Assistance Program".',
  },
  {
    title: "TANF",
    subHeader: "Cash Assistance",
    svgImage: moneyImage,
    description:
      "TANF is designed to provide Temporary Assistance for Needy Families to care for dependent children in their own homes or in the homes of relative caregivers. TANF provides Financial and Support Services such as CHILD CARE, TRANSPORTATION and Other Services.",
  },
  {
    title: "Medicaid",
    subHeader: "Medical Assistance",
    svgImage: medicalImage,
    description:
      "The Medicaid Program is a federal program administered by the state. Its purpose is to help meet the cost of medical services for individuals receiving public assistance payments, and individuals and families with low income.",
  },
];

const MainCards = () => {
  return (
    <Box
      sx={{
        my: 5,
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "row" },
        justifyContent: "center",
        alignItems: "center",
        gap: "5rem",
      }}
    >
      {cardArray.map((item) => {
        return <MainCard key={item.title} {...item} />;
      })}
    </Box>
  );
};

export default MainCards;
