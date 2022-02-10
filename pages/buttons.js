import { ChatIcon } from '@chakra-ui/icons'
import { Box, Container, Heading, SimpleGrid, Text, useColorModeValue as ValorDeColor} from '@chakra-ui/react'
import React from 'react'
import Buttons from '../components/Buttons'

const buttons = () => {
    const bg=ValorDeColor('gray.400', 'gray.900');
    return (
        <Container>
            <Heading
                as={'h3'}
                fontWeight={'light'}
                m={4}
            >
                Buttons
            </Heading>
            <SimpleGrid
                columns={2}
                spacing={10}
                minChildWidth='168px'
                fontSize={'12px'}
                fontWeight={'light'}
            >
                <Box>
                    <Text>
                        {'<Button/>'}
                    </Text>
                    <Buttons />
                </Box>
                <Box>
                    <Text>
                        {'_hover, _focus'}
                    </Text>
                    <Buttons
                        _hover={{ backgroundColor:bg }}
                    />
                </Box>
                <Box>
                    <Text>
                        {'<Button variant="outline"/>'}
                        <Buttons variant='outline' />
                    </Text>
                </Box>
                <Box>
                    <Text>
                        {'&:hover, &:focus'}
                    </Text>
                    <Buttons
                        variant='outline'
                        _hover={{ backgroundColor: bg }}
                    />
                </Box>
                <Box>
                    <Text>
                        {'<Button variant="text"/>'}
                    </Text>
                    <Buttons
                        variant='text'
                    />
                </Box>
                <Box>
                    <Text>
                        {'&:hover, &:focus'}
                    </Text>
                    <Buttons
                        variant='text'
                        _hover={{ backgroundColor: bg }}
                    />
                </Box>
                <Box>
                    <Text>
                        {'<Button disableShadow />'}
                    </Text>
                    <Buttons
                        disableShadow
                    />
                </Box>
            </SimpleGrid>
            <SimpleGrid
                mt={6}
                columns={2}
                spacing={10}
                minChildWidth='210px'
                fontSize={'12px'}
                fontWeight={'light'}
            >
                <Box>
                    <Text>
                        {'<Buttons disabled/>'}
                    </Text>
                    <Buttons disabled />
                </Box>
                <Box>
                    <Text>
                        {'<Buttons variant="text" disabled/>'}
                    </Text>
                    <Buttons variant='text' disabled />
                </Box>
                <Box>
                    <Text>
                        {'<Button leftIcon={<ChatIcon/>}'}
                    </Text>
                    <Buttons
                        leftIcon={<ChatIcon />}
                    />
                </Box>
                <Box>
                    <Text>
                        {'<Button  rightIcon={<ChatIcon/>}'}
                    </Text>
                    <Buttons
                        rightIcon={<ChatIcon />}
                    />
                </Box>
            </SimpleGrid>
            <SimpleGrid
            mt={6}
            columns={3}
            spacing={10}
            minChildWidth='130px'
            fontSize={'12px'}
            fontWeight={'light'}
            >
                <Box>
                    <Text>
                    {'<Button size="sm"/>'}
                    </Text>
                    <Buttons size='sm' />
                </Box>
                <Box>
                    <Text>
                    {'<Button size="md"/>'}
                    </Text>
                    <Buttons size='md' />
                </Box>
                <Box>
                    <Text>
                    {'<Button size="lg"/>'}
                    </Text>
                    <Buttons size='lg' />
                </Box>
                <Box>
                    <Text>
                    {'<Button color="default"/>'}
                    </Text>
                    <Buttons color='default' />
                </Box>
                <Box>
                    <Text>
                    {'<Button color="blue.300"/>'}
                    </Text>
                    <Buttons color='blue.300' />
                </Box>
                <Box>
                    <Text>
                    {'<Button color="green.300"/>'}
                    </Text>
                    <Buttons color='green.300' />
                </Box>
            </SimpleGrid>
        </Container>
    )
}

export default buttons