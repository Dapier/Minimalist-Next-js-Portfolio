import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import  LogoLight from './assets/LogoLi.png'
import LogoDark from './assets/Logo.png'

const LogoBox = styled.span`
    font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

    img{
        transition: 200ms ease;
    }
    &:hover img{
        transform: rotate(20deg);
    }
`

const Logo = () =>{
    const logo = useColorModeValue(LogoDark,LogoLight)
    return(
        <Link href="/">
            <a>
                <LogoBox>
                    <Image src={logo} width={20} height={20} alt='Logo' />
            <Text
                  color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                  fontFamily='M PLUS Rounded 1c", sans-serif'
                  fontWeight="bold"
                  ml={3}
                >
                    Josue Alvarado
            </Text>
            </LogoBox>

            </a>

        </Link>
        
    )
}

export default Logo
