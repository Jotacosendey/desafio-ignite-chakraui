import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { CityCard } from "./CityCard";

interface City {
  id: number;
  name: string;
  country: string;
  flag_icon: string;
  city_image: string;
}

interface CityListProps {
  cities: City[];
}

export function CityList({ cities }: CityListProps) {
  return (
    <Box px={["1rem", "10rem"]} mt={["2rem", "5rem"]} mb={["2rem", "5rem"]} >
      <Heading width={{ base: "20rem" }} fontSize={["1.75rem", "2.25rem"]} fontWeight="semibold">Cidades +100</Heading>

      <SimpleGrid
        columns={{ base: 1, lg: 4 }}
        gap="2.5rem"
        mt="2rem"
      >
        {cities.map(city => (
          <CityCard
            key={city.name}
            name={city.name}
            country={city.country}
            flagIcon={city.flag_icon}
            cityImage={city.city_image}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}