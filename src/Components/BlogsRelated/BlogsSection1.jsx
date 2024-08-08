import React from "react";
import {
  Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    Container,
    HStack,
    Image,
    SimpleGrid,
    Text,
    VStack,
} from "@chakra-ui/react";
import { FiArrowUpRight } from "react-icons/fi";
import theme from "../../theme";

const BlogPost = [
  {
    imageUrl:'https://images.unsplash.com/photo-1527221579996-0de6d1ae2069?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    BlogHeading: "Devotional Insights",
    date: "18-08-2024",
    desc: "In the serene silence of dawn ,as the first rays of the sun gently kiss,the heart of the devotee is gently filled with divine presence",
  },

  {
    imageUrl:'https://images.unsplash.com/photo-1527221579996-0de6d1ae2069?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    BlogHeading: "Devotional Insights",
    date: "18-08-2024",
    desc: "In the serene silence of dawn ,as the first rays of the sun gently kiss,the heart of the devotee is gently filled with divine presence",
  },

];

const BlogsSection1 = () => {
  return (
    <>
      <Box width="100%" my={["5rem", "5rem", "7rem", "5rem", "10rem"]}>
       <Container
         w={["100%", "100%", "95%", "95%"]}
         maxW="1500px"
         marginX="auto"
       >
         <HStack
           w={['100%','90%','100%']}
           mx={'auto'}
           justifyContent={["space-between"]}
           gap={["1rem"]}
           alignItems={"flex-end"}
         >
           <Box
             fontSize={["1.2rem", "1.5rem", "1.8rem", "2.5rem"]}
             fontWeight={"600"}
             color={theme.colors.col.secondary}
             pl={3}
           >
             Latest Blogs
           </Box>
           <Box>
             <Button
               size={["sm", "sm", "md",'lg']}
               fontSize={["0.8rem", "0.8rem", "0.9rem"]}
               variant={"outline"}
               colorScheme="orange" 
             >
               View all
             </Button>
           </Box>
         </HStack>
 
         <SimpleGrid  w={'100%'}  columns={['1','1','2','2','4']} mt={['3rem']} spacing={[10,10,5,10,4]}>
           {
             BlogPost?.slice(0,4).map((item,index)=>(
               <Card key={index} bgColor={'rgb(245,247,248)'} overflow={'hidden'} p={3} borderRadius={'10px'}>
               <Box w={'100%'} h={['250px']} position={['relative']} overflow={'hidden'} borderRadius={'10px'}>
                  <Image w={'100%'} h={'100%'} objectFit={'cover'} src={item.imageUrl} />
               </Box>
 
              <CardBody px={2}>
                   <VStack alignItems={'flex-start'}>
                     <Box fontSize={'1.5rem'} fontWeight={'600'} color={theme.colors.col.secondary}>
                    {item.BlogHeading.length >= 18 ? `${item.BlogHeading.substring(0,19)}...`: item.BlogHeading}
                     </Box>
                     <Text lineHeight={['1.7rem']} fontSize={['0.9rem']} textAlign='justify'>
                      {item.desc.length >= 150 ? `${item.desc.substring(0,150)}...` : item.desc}
                     </Text>
                   </VStack>
              </CardBody>
 
              <CardFooter py={'1'} px={2}>
                   <HStack  w={'100%'} justifyContent={'space-between'}>
                   <Box  bgColor={theme.colors.col.secondary} color={'white'} boxShadow={'0 1px 3px rgba(0,0,0,0.10), 0 1px 2px rgba(0,0,0,0.10)'} borderRadius={'10px'} p={2} fontWeight={'600'} pointerEvents={'none'} fontSize={'0.9rem'}>
                     {item.date}
                  </Box>
                       <Box role="group" bgColor={theme.colors.col.secondary} display={'inline-flex'} w={'40px'} h={'40px'}  justifyContent={'center'} alignItems={'center'} fontSize={'1.1rem'} color={'white'} borderRadius={'10px'} boxShadow={'0 1px 3px rgba(0,0,0,0.10), 0 1px 2px rgba(0,0,0,0.10)'} cursor={'pointer'}>
                        <Box _groupHover={{transform:'rotate(45deg)'}} transition={'all 0.2s linear'}>
                        <Box><FiArrowUpRight  /></Box>
                        </Box>
                       </Box>
                   </HStack>
              </CardFooter>
 
          </Card>
             ))
           }
         </SimpleGrid>
       </Container>
     </Box>
    </>
  );
};
export default BlogsSection1;
