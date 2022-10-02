import {  AspectRatio, Box, Button, Center, Circle, Flex, Grid, HStack, Image, ListIcon, ListItem, Spacer, Stack, Text, UnorderedList } from '@chakra-ui/react'
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
   <Button  bg='#23D172' size='lg'>
    Sign Up For Free
  </Button>
  </Center>

       </div>
   

   <div className="logo_of_compnay">
   <Stack direction='row' spacing={100}>
  <Image
    boxSize='10%'
   
    objectFit='cover'
    src='https://mailtrap.io/wp-content/uploads/2021/04/Rails.svg'
    alt='Dan Abramov'
  />
  <Image
    boxSize='10%'
    objectFit='cover'
    src='https://mailtrap.io/wp-content/uploads/2021/04/Python.svg'
    alt='Dan Abramov'
  />
  <Image boxSize='10%' src='https://mailtrap.io/wp-content/uploads/2021/04/NET.svg' alt='Dan Abramov' />
  <Image boxSize='10%' src='https://mailtrap.io/wp-content/uploads/2021/04/Symfony.svg' alt='Dan Abramov' />
  <Image boxSize='10%' src='https://mailtrap.io/wp-content/uploads/2021/04/Laravel.svg' alt='Dan Abramov' />


</Stack>

   </div>

<AspectRatio ratio={5/ 5} className="img-1-1">
  <Image src='https://mailtrap.io/wp-content/uploads/2021/05/img__homepage-605x360.png' alt='naruto' objectFit='cover' />
</AspectRatio>
      

       
      <Text className='textmail'>Email testing challenges that 
       <Center className='textmail'> Mailtrap solves</Center>
      
      </Text>

<div className='imgflex'>
<Flex>
  <Box p='4' bg=''>
    <img src="https://mailtrap.io/wp-content/uploads/2021/03/icon4.svg" alt="" />
    <Text className='t011'>Configure your testing environment in 5 minutes</Text>
    <br />
    <Text className='t022'>Each Mailtrap account comes with an individual testing environment. Integrate it with your app in just a few clicks.</Text>
  </Box>
  <Spacer />
  <Box p='4' bg=''>
    
    <img src="https://mailtrap.io/wp-content/uploads/2021/03/icon__mail.svg" alt="" />
    <Text className='t01'>Keep all testing data organized in one place</Text>
   <br />
    <Text className='t02'>Create individual inboxes for different environments or review servers and group them into relevant projects</Text>
   
  </Box>
</Flex>
<br /><br />

<Flex>
  <Box p='4' bg=''>
    <img src="https://mailtrap.io/wp-content/uploads/2021/01/icon_work.svg" alt="" />
    <Text className='t011'>Quickly integrate with Mailtrap API</Text>
    <br />
    <Text className='t022'>Get started quickly with our well-documented API and configure automated testing with unlimited API calls.</Text>
  </Box>
  <Spacer />
  <Box p='4' bg=''>
    
    <img src="https://mailtrap.io/wp-content/uploads/2021/03/icon2.svg" alt="" />
    <Text className='t01'>Dig into both the content and source of your emails</Text>
   <br />
    <Text className='t02'>View messages, check spam scores, validate headers, analyze the HTML support across email clients, and more.</Text>
   
  </Box>
</Flex>
<br /><br />

<Flex>
  <Box p='4' bg=''>
    <img src="https://mailtrap.io/wp-content/uploads/2021/01/icon_men.svg" alt="" />
    <Text className='t011'>Easily share test emails with your team</Text>
    <br />
    <Text className='t022'>Manage access to your inboxes for colleagues or clients. Send selected test emails to whitelisted real recipients.</Text>
  </Box>
  <Spacer />
  <Box p='4' bg=''>
    
    <img src="https://mailtrap.io/wp-content/uploads/2021/03/ivon__performance.svg" alt="" />
    <Text className='t01'>Test your email sending service</Text>
   <br />
    <Text className='t02'>Send emails to Mailtrap directly from your CRM or email sending service. Simulate sending to multiple recipients.</Text>
   
  </Box>
</Flex>
</div>

<div className='setup001'>
  <Center>
  <Text className='se11'>Setup takes less than 5 minutes</Text>
  </Center>
  <Text className='mail001'>Mailtrap is compatible with any app or framework that supports SMTP</Text>
  </div>
  <div className='divpr001'>
<Flex>
  <Box p='4' >
  <img className="img1100"  src="https://mailtrap.io/wp-content/uploads/2021/03/setup-final-700x502.png" alt="" />
  </Box>
  <Spacer />
  <div className='divider001'>
  <Box p='4'>
  <HStack>
  <Circle  size='40px' bg='#22D172' color='white'>
    <p>1</p>
  </Circle>
</HStack>
   <Text className='sel001'>Select your integration from 20+ code samples or copy SMTP credentials</Text>
  </Box>
  <Box p='4'>
  <HStack>
  <Circle  size='40px' bg='#22D172' color='white'>
    <p>2</p>
  </Circle>
</HStack>
   <Text className='sel001'>Select your integration from 20+ code samples or copy SMTP credentials</Text>
  </Box>
  <Box p='4'>
  <HStack>
  <Circle  size='40px' bg='#22D172' color='white'>
    <p>3</p>
  </Circle>
</HStack>
   <Text className='sel001'>Select your integration from 20+ code samples or copy SMTP credentials</Text>
  </Box>
  <Box p='4'>
  <HStack>
  <Circle  size='40px' bg='#22D172' color='white'>
    <p>4</p>
  </Circle>
</HStack>
   <Text className='sel001'>Select your integration from 20+ code samples or copy SMTP credentials</Text>
  </Box>
  </div>
</Flex>

</div>

<div className='how-002'>
  <Text>How different teams use
   <Center>Mailtrap</Center>  
     </Text>
</div>
<div >
  <Center>
  <img src="https://mailtrap.io/wp-content/uploads/2021/03/img_team.svg" alt="" />
  </Center>
</div>

<div className='three-div'>
  <Box>
   <Text className='headrole'>Developers
</Text>
   <br />
   <UnorderedList className='small-0009'>
  <ListItem>Experiment with the email sending functionality
</ListItem>
  <ListItem>Cover code with tests to run automated checks via Mailtrap API
</ListItem>
  <ListItem>Verify different email aspects, debug sending script and HTML template
</ListItem>
  
</UnorderedList>
   </Box>
       <Box>
   <Text className='headrole'>QAs
</Text>
   <br />
   <UnorderedList className='small-0009'>
  <ListItem>Run safe email tests in staging and/or testing environment
</ListItem>
  <ListItem>Integrate Mailtrap with automated testing tools
</ListItem>
  <ListItem>Compare revised emails with their previous versions
</ListItem>
</UnorderedList>
       </Box>
   <Box>
   <Text className='headrole'>Marketers and managers
</Text>
   <br />
   <UnorderedList className='small-0009'>
  <ListItem>Smoothly collaborate with development and QA teams
</ListItem>
  <ListItem>
    
    View test emails in shared inboxes or forward to real recipients
    
</ListItem>
  <ListItem>Send emails to Mailtrap inboxes from CRMs and common sending tools
</ListItem>
</UnorderedList>
   </Box>
</div>
   <Center><Button bg="#22D172" color="white">Sign Up For Free</Button></Center>

   <div className='signfree'>
    <Center >
      <Text >From our #BestClientEVer</Text>
        </Center>

   </div>
    </div>
  )
}

export default Home