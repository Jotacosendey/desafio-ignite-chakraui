import { Box, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";

interface ContinentContentProps {
  info: string;
  countries: number;
  languages: number;
  amountCities100: number;
}

export function ContinentContent({ info, countries, languages, amountCities100 }: ContinentContentProps) {
  return (
    <>
      <Flex
        w="100%"
        maxWidth={1120}
        mx="auto"
        mt={["1.75rem", "4rem"]}
        mb={["1.75rem", "4rem"]}
        px={{ base: "1rem" }}
      >
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={["16px", "60px"]} align="flex-start">
          <Text
            fontSize={["0.85rem", "1.5rem"]}
            lineHeight={["1.25rem", "2rem"]}
            textAlign="justify"
            color="gray.700"
          >
            {info}
          </Text>

          <Flex align="center" justify="space-between">
            <SimpleGrid columns={3} >
              <Flex direction="column" justify="center" align="center">
                <Heading as="h1" fontSize={["2rem", "3rem"]} color="yellow.950">{countries}</Heading>
                <Text fontWeight="bold" fontSize={["1rem", "1.5rem"]} color="gray.700">países</Text>
              </Flex>

              <Flex direction="column" justify="center" align="center">
                <Heading as="h1" fontSize={["2rem", "3rem"]} color="yellow.950">{languages}</Heading>
                <Text fontWeight="bold" fontSize={["1rem", "1.5rem"]} color="gray.700">línguas</Text>
              </Flex>

              <Flex direction="column" justify="center" align="center">
                <Heading as="h1" fontSize={["2rem", "3rem"]} color="yellow.950">{amountCities100}</Heading>
                <Text fontWeight="bold" fontSize={["1rem", "1.5rem"]} color="gray.700">cidades +100</Text>
              </Flex>
            </SimpleGrid>
          </Flex>
        </SimpleGrid>
      </Flex>
    </>
  );
}