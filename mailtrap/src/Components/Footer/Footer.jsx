import { Box, Center, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import "./Footer.css"
function Footer() {
  return (
    <div className='footer-div'>
      <Center>
      <Stack direction={['column', 'row']} spacing='300px'>
        <Box >
        <Image
        />
        </Box>
  <Box  >
    <Text as="b" >
    Mailtrap
    </Text>
        <Text>
        Pricing
        </Text>
        <Text>
        Changelog
        </Text>
        <Text>
        Status
        </Text>
        <Text>
        Terms of Service
        </Text>
        <Text>
       Privacy Policy
        </Text>
        <Text>
       Navigational Information
        </Text>
        <Text>
        DPA
        </Text>
    
  </Box>
  
  <Box  >
   <Text as=
   'b'>
      Railsware Experience
   </Text>
   
        <Text>
        Pricing
        </Text>
        <Text>
        Changelog
        </Text>
        <Text>
        Status
        </Text>
        <Text>
        Terms of Service
        </Text>
        <Text>
       Privacy Policy
        </Text>
        <Text>
       Navigational Information
        </Text>
        <Text>
        DPA
        </Text>
   
  </Box>
  <Box  >
   
  <Text as="b">
    Contact
  </Text>
    
        <Text>
  email Support@mailtrap.in
        </Text>
        <Stack direction='row'>
        <Image
  borderRadius=''
  boxSize='50px'
  src='https://assets.mailtrap.io/packs/assets/landing/facebook-0be93f551b662821a339.svg'
  alt='Dan Abramov'
/>
<Image
  borderRadius=''
  boxSize='50px'
  src='https://assets.mailtrap.io/packs/assets/landing/twitter-57fa29ba21896247fdc6.svg'
  alt='Dan Abramov'
/>
<Image
  borderRadius=''
  boxSize='50px'
  src='https://assets.mailtrap.io/packs/assets/landing/linkedin-604440460898fa41700c.svg'
  alt='Dan Abramov'
/>
</Stack>
  </Box>
</Stack>
</Center>
    </div>
  )
}

export default Footer