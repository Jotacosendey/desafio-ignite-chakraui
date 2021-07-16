import { Box, Flex, Heading } from "@chakra-ui/react";

interface ContinentBannerProps {
  image: string;
  title: string;
}

export function ContinentBanner({ image, title }: ContinentBannerProps) {
  return (
    <Flex
      bgImage={image}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize={{ base: "", xl: "100vw" }}
      height={["12rem", "30rem"]}
      align={["center", "flex-end"]}
      justify={["center", "flex-start"]}
      py={["8", "10"]}
    >
      <Flex
        width={{ base: "23rem", lg: "26.5rem" }}
        mx="0"
        px="0"
      >
        <Heading
          as="h1"
          width={{ base: "23rem", lg: "26.5rem" }}
          color="gray.50"
          fontSize={["1.75rem", "3rem"]}
          fontWeight="semibold"
          lineHeight="3rem"
          pl={["2rem", "5rem"]}
          pb={["1rem", "3.5rem"]}
        >
          {title}
        </Heading>
      </Flex>
    </Flex>
  );
}