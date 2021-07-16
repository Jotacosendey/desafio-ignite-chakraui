import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

interface CityCardProps {
  name: string;
  country: string;
  flagIcon: string;
  cityImage: string;
}

export function CityCard({ name, country, flagIcon, cityImage }: CityCardProps) {
  return (
    <Stack boxShadow="lg" borderRadius="5px" width="16rem" height="17.5rem">
      <Image src={cityImage} width="227px" height="160px" objectFit="cover" />

      <Flex align="center" justify="space-around" >
        <Box >
          <Heading color="gray.700" fontWeight="semibold" fontSize="1.25rem" mb="0.75rem">{name}</Heading>
          <Text color="gray.500" fontWeight="semibold" fontSize="1rem" mb="1rem">{country}</Text>
        </Box>

        <Image src={flagIcon} w="2rem" h="2rem" borderRadius="full" objectFit="cover" boxShadow="xs" />
      </Flex>
    </Stack>
  );
}