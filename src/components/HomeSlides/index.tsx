import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import { Box, Flex, Heading, Image, Link, Text, Stack } from '@chakra-ui/react';
import NextLink from 'next/link'
import { useEffect, useState } from 'react';
import { api } from '../../services/api';

SwiperCore.use([Navigation, Pagination])

interface Continent {
  id: number,
  name: string,
  description: string,
  home_image: string
}

export function HomeSlides() {
  const [continents, setContinents] = useState<Continent[]>([])

  useEffect(() => {
    async function getContinents() {
      const response = await api.get<Continent[]>('/continents')
      const data = response.data

      setContinents(data)
    }

    getContinents();
  }, [])


  return (
    <Swiper
      initialSlide={1}
      navigation={true}
      pagination={{
        "clickable": true
      }}
      loop={true}
    >
      {continents.map(continent => {
        return (
          <SwiperSlide key={continent.id}>
            <Flex
              bgImage={continent.home_image}
              bgPosition="center"
              bgRepeat="no-repeat"
              bgSize="cover"
              height={["15rem", "30rem"]}
              align="center"
              justify="center"

            >
              <Flex
                position="absolute"
                width="100%"
                height="100%"
                align="center"
                justify="center"
                bg="rgba(0, 0, 0, 0.5)"
              >
                <NextLink href={`/continents/${continent.id}`}>
                  <Link>
                    <Stack
                      align="center"
                      textAlign="center"
                    >
                      <Heading as="h1" fontSize={["1.5rem", "2rem", "3rem"]} fontWeight="bold" color="gray.50">
                        {continent.name}
                      </Heading>
                      <Text fontSize={["0.85rem", "1rem", "1.5rem"]} fontWeight="bold" color="gray.200">
                        {continent.description}
                      </Text>
                    </Stack>
                  </Link>
                </NextLink>
              </Flex>
            </Flex>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}