import React, {useState} from 'react'
import { HeroContainer, HeroBg, VideoBg, HeroContent,Heroimg, HeroBtnWrapper,HeroH1, HeroP, ArrowForward, ArrowRight } from './HeroElements'
import {Button} from '../ButtonElements'
import discordLogo from '../../images/discordLogo.png'

const HeroSection = () => {
    const[hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

  return (
    <HeroContainer>
        <HeroBg>
            {/*<VideoBg  autoPlay loop muted src={Video} type='video/mp4'/> */}
        </HeroBg>
        <HeroContent>
            <HeroH1>Your Gateway to the</HeroH1>
            <HeroH1>Web3 World</HeroH1>
            <HeroP>
                WE STRIVE TO CREATE A COMMUNITY OF STUDENTS PASSIONATE ABOUT BLOCKCHAIN AND WEB3 TECHNOLOGY
            </HeroP>
            <HeroBtnWrapper>
                <Button  to='signup' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                <Heroimg src={discordLogo}/> 
               JOIN COMMUNITY 
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection