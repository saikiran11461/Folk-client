import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import theme from "../../theme"
import { Box, Container, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { useTheme } from '@emotion/react';
gsap.registerPlugin(ScrollTrigger);

const BigPictureSection = () => {
  
  const theme  = useTheme()
  
  const headingMatter = useRef(null);
  const counterBox1 = useRef(null);
  const counterBox2 = useRef(null);
  const counterBox3 = useRef(null);
  const counterBox4 = useRef(null);



  // HeadingMatter Animnation

  useGSAP(()=>{
    gsap.from(headingMatter.current.children,{
      scale:0,
      opacity:0,
       duration:0.8,
       stagger:0.4,
       scrollTrigger:{
        trigger:headingMatter.current,
        start:'top 90%',
        end:'bottom center'
       }
    })
  },[])



  // CounterBox1 Number Animation
  useGSAP(() => {
   gsap.to(counterBox1.current, {
        duration: 1, 
        innerHTML: 5808,
        roundProps: 'innerHTML', 
        onUpdate: () => {
          counterBox1.current.innerHTML = Math.round(counterBox1.current.innerHTML);
        },
        scrollTrigger:{
          trigger:counterBox1.current,
          start:'top 90%',
        }
      });
  }, []);
  
  // CounterBox2 Number Animation
  useGSAP(()=>{
    gsap.to(counterBox2.current,{
      duration:1,
      innerHTML:30,
      roundProps:'innerHTML',
      onUpdate : ()=>{
        counterBox2.current.innerHTML = Math.round(counterBox2.current.innerHTML);
      },
      scrollTrigger:{
        trigger:counterBox2.current,
        start:'top 90%',
      }
    })
  },[])

  // CounterBox3 Number Animation

  useGSAP(()=>{
     gsap.to(counterBox3.current,{
       duration:1,
       innerHTML:8,
       roundProps:"innerHTML",
       onUpdate:()=>{
         counterBox3.current.innerHTML = Math.round(counterBox3.current.innerHTML);
       },
       scrollTrigger:{
        trigger:counterBox3.current,
        start:'top 90%',
      }

     })
  },[])

  // CounterBox4 Number Animation

  useGSAP(()=>{
    gsap.to(counterBox4.current,{
       duration:1,
       innerHTML:270405,
       roundProps:"innerHTML",
       onUpdate:()=>{
        counterBox4.current.innerHTML = Math.round(counterBox4.current.innerHTML);
       },
       scrollTrigger:{
        trigger:counterBox4.current,
        start:'top 90%',

      }
    })
  },[])

  return (
    <Box bgColor={theme.colors.col.secondary}>

    <Container
    w={["100%", "100%", "90%", "90%"]}
    maxW="1500px"
    marginX="auto"
    my="2rem"
    padding={"2rem"}
    display={'flex'}
    flexDirection={'column'}
    justifyContent={'center'}
    alignItems={'center'}
    gap={'4rem'}
    color={'white'}
  >
     <Box ref={headingMatter} textAlign={'center'}>
      <Box py={'20px'}>
        <Heading fontSize={['2.2rem','2.5rem','3em','4rem']} fontWeight="900">THE BIG PICTURE</Heading>
      </Box>
        <Box>
          <Text maxW="700px" m="auto" mt={['.5rem','.5rem','1rem']} mb={['0','0','0','1rem','2rem']}>
          Some stats. Although mathematical, behind each number is a person whose life has been made sweeter and meaningful by our team
          </Text>
        </Box>
     </Box>

     <SimpleGrid columns={[1,1,2,4]} spacing={[10,20,20,10]}>
         <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
           <Box ref={counterBox1} fontSize={'3.5rem'} fontWeight={'bold'}>0</Box>
           <Box fontSize={'2rem'} py={'1rem'}>WORKSHOPS</Box>
         </Box>
         <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
         <Box ref={counterBox2} fontSize={'3.5rem'} fontWeight={'bold'}>0</Box>
         <Box fontSize={'2rem'} py={'1rem'}>SPEAKERS</Box>
         </Box>
         <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
         <Box ref={counterBox3} fontSize={'3.5rem'} fontWeight={'bold'}>0</Box>
         <Box fontSize={'2rem'} py={'1rem'}>EVENTS</Box>
         </Box>
         <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
         <Box ref={counterBox4} fontSize={'3.5rem'} fontWeight={'bold'}>0</Box>
         <Box fontSize={'2rem'} py={'1rem'}>PARTICIPANTS</Box>
         </Box>
     </SimpleGrid>

    </Container>
    </Box>
  );
}

export default BigPictureSection
