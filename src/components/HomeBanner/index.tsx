import { Flex, Image, Text, Box, Heading } from "@chakra-ui/react";

export function HomeBanner() {
  return (
    <Flex
      bgImage="/background.png"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize={{ base: "", xl: "100vw" }}
      height={["12rem", "20rem"]}
      align="center"
      justify="space-around"
      py={["2rem", "2.5rem"]}
      px="4"
    >
      <Box>
        <Heading
          width={{ base: "23rem", lg: "26.5rem" }}
          color="gray.50"
          fontSize={["1.25rem", "2rem"]}
          fontWeight="medium"
          lineHeight={["1.75rem", "3rem"]}
          pl={{ base: "1rem", lg: "" }}
        >
          5 Continentes, <br /> infinitas possibilidades.
        </Heading>
        <Text
          width={{ base: "23rem", lg: "32.75rem" }}
          color="gray.200"
          fontSize={["0.85rem", "1.15rem"]}
          fontWeight="normal"
          marginTop="4"
          pl={{ base: "1rem", lg: "" }}
        >
          Chegou a hora de tirar o papel a viagem que você sempre sonhou.
        </Text>
      </Box>

      <Box>
        <Image
          src='/airplane.png'
          width="25rem"
          marginBottom="-4.5rem"
        />
      </Box>
    </Flex>
  )
}