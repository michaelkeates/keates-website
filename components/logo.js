import Link from 'next/link'
import Image from 'next/image'
import { useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 20px;

  img {
    transition: 200ms ease;
  }

  &:hover img {
    transform: scale(1.4);
  }
`


const Logo = () => {
  const footPrintImg = `/images/signature${useColorModeValue('', '-dark')}.png`

  return (
    <Link href="/" scroll={false}>
        <LogoBox>
          <Image src={footPrintImg} width={28} height={28} alt="logo" />
        </LogoBox>
    </Link>
  )
}

export default Logo