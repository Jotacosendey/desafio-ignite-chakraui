import { Flex, Icon, Image, Link, SimpleGrid } from '@chakra-ui/react'
import NextLink from 'next/link';
import { RiArrowLeftSLine } from 'react-icons/ri'
import { useRouter } from 'next/router'

export function Header() {
  const { asPath } = useRouter();
  const isContinentPage = asPath !== "/"

  return (
    <Flex
      as="header"
      width="100%"
      maxWidth="1440px"
      h={["50px", "100px"]}
      alignItems="center"
      justifyContent="center"
    >

      {isContinentPage && (
        <NextLink href="/">
          <Link>
            <Icon
              as={RiArrowLeftSLine}
              fontSize={["20px", "40px"]}
            />
          </Link>
        </NextLink>
      )}
      <Image
        src="/logo.png"
        height={["25px", "50px"]}
        width={["81px", "184px"]}
        mx="auto"
      />
    </Flex>
  )
}