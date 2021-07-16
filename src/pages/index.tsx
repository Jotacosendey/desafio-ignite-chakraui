import { Heading, Box, Flex, Text } from "@chakra-ui/react";

import { Header } from "../components/Header";
import { HomeBanner } from "../components/HomeBanner";
import { TravelTypes } from '../components/TravelTypes'
import { HomeSlides } from '../components/HomeSlides'

export default function Home() {
  return (
    <>
      <Header />

      <HomeBanner />

      <TravelTypes />

      <Flex
        mt="5rem"
        justify="center"
      >
        <Box
          width="6rem"
          border="1px"
          borderStyle="solid"
          borderColor="gray.700"
        />
      </Flex>

      <Flex
        align="center"
        justify="center"
        marginTop={["2rem", "4rem"]}
      >
        <Heading
          textAlign="center"
          fontWeight="semibold"
          lineHeight={["1.75rem", "3rem"]}
          fontSize={["1.25rem", "1.85rem"]}
        >
          Vamos nessa?<br /> Então escolha o seu continente
        </Heading>
      </Flex>

      <Box px={{ base: 0, lg: "10rem" }} maxWidth={1500} mb="2rem" mt={["1rem", "2rem"]}>
        <HomeSlides />
      </Box>
    </>
  )
}
