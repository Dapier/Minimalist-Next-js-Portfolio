import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;

    &:hover img{
        transform: rotate(20deg);
    }
`

const Logo = () =>{
    const LogoCat = `/images/LogoCat${useColorModeValue('', '-dark')}.png`

    return(
        <Link href="/">
            <a>
                <LogoBox>
                    <Image src={LogoCat} width={20} height={20} alt='Logo' />
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo
