import { PhoneIcon, UnlockIcon } from '@chakra-ui/icons'
import { Box, Container, Heading, InputGroup, InputLeftElement, InputRightElement, SimpleGrid, Text, Textarea } from '@chakra-ui/react'
import React from 'react'
import { Inputs } from '../components/Inputs'

const InputsPage = () => {
    return (
        <Container>
            <Box>
                <Heading
                    as={'h3'}
                    fontWeight={'light'}
                    m={4}
                >
                    Inputs
                </Heading>
                <SimpleGrid
                    columns={3}
                    minChildWidth={'120px'}
                    spacing={10}
                >
                    <Box>
                        <Text> {'<Input/>'} </Text>
                        <Inputs />
                    </Box>
                    <Box>
                        <Text>{'_hover'}</Text>
                        <Inputs _hover={{ backgroundColor: 'black' }} />
                    </Box>
                    <Box>
                        <Text>{'_focus'}</Text>
                        <Inputs _focus={{ color: 'green.300' }} />
                    </Box>
                    <Box>
                        <Text> {'<Input isInvalid />'} </Text>
                        <Inputs isInvalid />
                    </Box>
                    <Box>
                        <Text> {'_hover'} </Text>
                        <Inputs _hover={{ isInvalid: false }} />
                    </Box>
                    <Box>
                        <Text> {'_focus'} </Text>
                        <Inputs _focus={{ isInvalid: true }} />
                    </Box>
                    <Box>
                        <Text> {'<Input disabled/>'} </Text>
                        <Inputs disabled />
                    </Box>
                </SimpleGrid>
                <SimpleGrid
                    mt={8}
                    columns={2}
                    minChildWidth={'150px'}
                    spacing={10}
                >
                    <Box>
                        <Text> {'<Input helpText="Something"/>'} </Text>
                        <Inputs />
                        <Text>Something</Text>
                    </Box>
                    <Box>
                        <Text> {'<Input helpText="Something" isInvalid/>'} </Text>
                        <Inputs isInvalid />
                        <Text>Something</Text>
                    </Box>
                </SimpleGrid>
                <SimpleGrid
                    mt={8}
                    columns={1}
                    minChildWidth='250px'
                    spacing={10}
                >
                    <Box>
                        <Text> {`
                        <InputGroup>
                        <InputLeftElement pointerEvents={'none'}children={<PhoneIcon/>}/>
                        <Input/>
                        </InputGroup>
                        `}</Text>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents={'none'}
                            ><PhoneIcon />
                            </InputLeftElement>
                            <Inputs />
                        </InputGroup>
                    </Box>
                    <Box>
                        <Text> {`
                        <InputGroup>
                        <InputRightElement pointerEvents={'none'}children={<UnlockIcon/>}/>
                        <Input/>
                        </InputGroup>
                        `}</Text>
                        <InputGroup>
                            <InputRightElement
                                pointerEvents={'none'}
                            >
                                <UnlockIcon />
                            </InputRightElement>
                            <Inputs />
                        </InputGroup>
                    </Box>

                </SimpleGrid>
                <SimpleGrid
                    mt={8}
                    mb={8}
                    columns={2}
                    minChildWidth='150px'
                    spacing={10}
                >
                    <Box>
                        <Text> {'<Input size="sm"/>'} </Text>
                        <Inputs size='sm' />
                    </Box>
                    <Box>
                        <Text> {'<Input size="md"/>'} </Text>
                        <Inputs size='md' />
                    </Box>
                    <Box>
                        <Text> {'<Input size="lg"/>'} </Text>
                        <Inputs size='lg' />
                    </Box>
                    <Box>
                        <Text> {'<Input size="lg"/>'} </Text>
                        <Inputs size='lg' />
                    </Box>
                    <Box>
                        <Text> {'<Textarea/>'} </Text>
                        <Textarea borderColor={'green.300'} />
                    </Box>
                </SimpleGrid>
            </Box>
        </Container>
    )
}

export default InputsPage