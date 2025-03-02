import { Navbar } from "@/components";
import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Box p={"20px"}>
        <Outlet />
      </Box>
    </div>
  );
};

export default Layout;
