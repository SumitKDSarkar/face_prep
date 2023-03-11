import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

  
  export default function SimpleCard() {

    const [userNameData, setUserNameData] = useState("");
    const [passwordData, setPasswordData] = useState("");

    const navigate = useNavigate();


    const handleSubmit =(e)=>{
        e.preventDefault();

        console.log(userNameData);
        console.log(passwordData);

        if(userNameData=="foo" && passwordData=="bar"){
            let obj = [
                userNameData,
                passwordData
        ];
        // console.log(obj)
        
        localStorage.setItem("Login_credentials:" , obj)
            navigate("/");
            
        }else{
            alert("Wrong Credential");
        }
        

    }



    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>User name</FormLabel>
                <Input type="email" value={userNameData} onChange={(e)=>setUserNameData(e.target.value)}/>
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" value={passwordData} onChange={(e)=>setPasswordData(e.target.value)} />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  {/* <Link color={'blue.400'}>Forgot password?</Link> */}
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  onClick={handleSubmit}
                  _hover={{
                    bg: 'blue.500',
                    
                  }}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }