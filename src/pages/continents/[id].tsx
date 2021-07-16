import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { CityList } from "../../components/CityList";
import { ContinentBanner } from "../../components/ContinentBanner";
import { ContinentContent } from "../../components/ContinentContent";
import { Header } from "../../components/Header";
import { api } from "../../services/api";

interface Continent {
  id: number;
  name: string;
  cover_image: string;
  info: string;
  countries: number;
  languages: number;
  amountCities100: number;
  cities100: {
    id: number;
    name: string;
    country: string;
    city_image: string;
    flag_icon: string;
  }[]
}

interface ContinentProps {
  continent: Continent;
}

export default function Continent({ continent }: ContinentProps) {
  return (
    <>
      <Header />

      <ContinentBanner image={continent.cover_image} title={continent.name} />

      <ContinentContent
        info={continent.info}
        countries={continent.countries}
        languages={continent.languages}
        amountCities100={continent.amountCities100}
      />

      <CityList cities={[...continent.cities100]} />

    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { data } = await api.get<Continent>(`/continents/${params.id}`)

  return {
    props: {
      continent: data
    }
  }
}