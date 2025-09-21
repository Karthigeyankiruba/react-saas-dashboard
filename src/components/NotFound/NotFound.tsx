import React from "react";
import { Box, Flex, Heading, Text, Button } from "@optiaxiom/react";
import { Home, ArrowLeft, Search } from "lucide-react";
import { notFound } from "./NotFound.css.ts";

const NotFound: React.FC = () => {
  return (
    <Box className={notFound.container}>
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="32"
      >
        {/* 404 Number */}
        <Box className={notFound.numberContainer}>
          <Text className={notFound.number}>404</Text>
        </Box>

        {/* Error Message */}
        <Flex flexDirection="column" alignItems="center" gap="16">
          <Heading level="2" className={notFound.title}>
            Page Not Found
          </Heading>
          <Text className={notFound.description}>
            Sorry, we couldn't find the page you're looking for. The page might
            have been moved, deleted, or doesn't exist.
          </Text>
        </Flex>

        {/* Action Buttons */}
        <Flex gap="16" alignItems="center">
          <Button
            appearance="primary"
            onClick={() => window.history.back()}
            className={notFound.button}
          >
            <ArrowLeft size={16} />
            Go Back
          </Button>

          <Button
            appearance="default"
            onClick={() => (window.location.href = "/")}
            className={notFound.button}
          >
            <Home size={16} />
            Go Home
          </Button>
        </Flex>

        {/* Search Suggestion */}
        <Box className={notFound.searchContainer}>
          <Flex alignItems="center" gap="12">
            <Search size={20} color="#6b7280" />
            <Text className={notFound.searchText}>
              Try searching for what you need or check the URL for typos
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default NotFound;
