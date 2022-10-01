import {  AspectRatio, Button, Center, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import "./Home.css"

function Home() {
  return (
    <div>
       <div className='text-center' >
        <Stack spacing={6}>
   <Text className='email-1'>Email Sandbox Service</Text>
   <Text></Text>
   </Stack>
   <Stack spacing={4}>
   
   <Text className='cp1'>Capture SMTP traffic from staging and dev
   <Center className='cp1'>environments</Center> 
    </Text>
   
   
   <Text className='cp1'>Automate test flows and scenarios with flexible 
    <Center className='cp1'>API</Center> 
   </Text>
   <Text className='cp1'>Analyze email content for spam score and validate 
     <Center className='cp1'> HTML/CSS</Center>
   </Text>
   
   </Stack>
   

 <Center className='btn-001'>
   <Button  colorScheme='teal' size='lg'>
    Sign Up For Free
  </Button>
  </Center>

       </div>
   

   <div className="logo_of_compnay">
   <Stack direction='row' spacing={100}>
  <Image
    boxSize='16%'
   
    objectFit='cover'
    src='https://mailtrap.io/wp-content/uploads/2021/04/Rails.svg'
    alt='Dan Abramov'
  />
  <Image
    boxSize='16%'
    objectFit='cover'
    src='https://mailtrap.io/wp-content/uploads/2021/04/Python.svg'
    alt='Dan Abramov'
  />
  <Image boxSize='16%' src='https://mailtrap.io/wp-content/uploads/2021/04/NET.svg' alt='Dan Abramov' />
  <Image boxSize='16%' src='https://mailtrap.io/wp-content/uploads/2021/04/Symfony.svg' alt='Dan Abramov' />
  <Image boxSize='16%' src='https://mailtrap.io/wp-content/uploads/2021/04/Laravel.svg' alt='Dan Abramov' />


</Stack>

   </div>

<AspectRatio ratio={5/ 5} className="img-1-1">
  <Image src='https://mailtrap.io/wp-content/uploads/2021/05/img__homepage-605x360.png' alt='naruto' objectFit='cover' />
</AspectRatio>

    </div>
  )
}

export default Home