import { Navbar } from "@/components";
import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <Navbar />
      <Box p={5}>
        <Heading>Opps...</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This page does not exist."
            : "Unexpected error occurred."}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
