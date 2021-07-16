import { Box, Icon, Image, Text } from "@chakra-ui/react";
import { BsDot } from 'react-icons/bs'

interface TypeProps {
  image: string;
  description: string;
  showTypeImage: boolean;
}

export function Type({ image, description, showTypeImage = true }: TypeProps) {
  return (
    <Box>
      {showTypeImage && (
        <Image
          src={image}
          color="yellow.950"
          align="center"
        />
      )}

      <Text
        color="gray.700"
        fontWeight="semibold"
        fontSize="1.15rem"
        mt="1.4rem"
        textAlign="center"
      >
        {!showTypeImage && (
          <Icon as={BsDot} color="yellow.950" fontSize="2.5rem" />
        )}
        {description}
      </Text>
    </Box>
  );
}