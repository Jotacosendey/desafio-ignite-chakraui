import { Flex, Box, SimpleGrid, useBreakpointValue } from "@chakra-ui/react";
import { Type } from "./Type";

export function TravelTypes() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex
      width={{ base: "22rem", lg: "65rem" }}
      height="9rem"
      justify="space-between"
      mx="auto"
      mt={["1.5rem", "8rem"]}
    >
      <SimpleGrid flex="1" columns={{ base: 2, lg: 5 }}>
        <Type image="/cocktail.svg" description="vida noturna" showTypeImage={isWideVersion} />
        <Type image="/surf.svg" description="praia" showTypeImage={isWideVersion} />
        <Type image="/building.svg" description="moderno" showTypeImage={isWideVersion} />
        <Type image="/museum.svg" description="clássico" showTypeImage={isWideVersion} />
        <Type image="/earth.svg" description="e mais..." showTypeImage={isWideVersion} />
      </SimpleGrid>
    </Flex>
  )
}