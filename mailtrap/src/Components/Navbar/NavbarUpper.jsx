import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import "./NavbarUpper.css"
function NavbarUpper() {
  return (
    <div className='div_first'>
<Box bg='#1A2E44' w='100%' h={12} color='#ffffff' fontSize="18px" lineHeight="31px" fontWeight="600">
  Stand with Ukraine   <Text as='b' fontSize="12px" >UA</Text>  <Text as='u' fontSize="18px" >Donate to support</Text> 
</Box>


    </div>
  )
}

export default NavbarUpper
