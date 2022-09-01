import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import ResponsiveAppBar from "./components/AppBar";
import FoodProgress from "./components/FoodProgress";
import Footer from "./components/Footer";
import Overview from "./components/Overview";
import Dashboard from "./pages/Dashboard";
import EligibilityForm from "./pages/Eligibility.js/EligibilityForm";
import HomePage from "./pages/HomePage";

function App() {
  const userLoggedIn = useSelector((state) => state.loginState.userLoggedIn);
  return (
    <>
      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        {!userLoggedIn && <ResponsiveAppBar />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="check-eligibility" element={<EligibilityForm />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="overview" exact element={<Overview />} />
            <Route path="food" exact element={<Overview />} />
            <Route path="cash" exact element={<Overview />} />
            <Route path="medicaid" exact element={<Overview />} />
            <Route path="housing" exact element={<Overview />} />
            <Route path="contact-us" exact element={<Overview />} />
            <Route path="account" exact element={<Overview />} />
            <Route path="food-progress" element={<FoodProgress />} />
          </Route>
        </Routes>
        {!userLoggedIn && <Footer />}
      </Box>
    </>
  );
}

export default App;
