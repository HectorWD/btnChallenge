import { Box, Container, Flex, Heading, IconButton, Link, Menu, MenuButton, MenuItem, MenuList, Stack, useColorModeValue } from '@chakra-ui/react';
import React from 'react'
import NextLink from 'next/link'
import ThemeToggleButton from './theme-toggle-button';
import { HamburgerIcon } from '@chakra-ui/icons';

const LinkItem = ({ href, children }) => {
    return (
        <NextLink href={href}>
            <Link
                p={2}
                color= {useColorModeValue('gray.900', 'whiteAplha.900')}
            >
                {children}
            </Link>
        </NextLink>
    )
}
const Navbar = props => {
    const { path } = props;
    return (
        <Box
            position={'fixed'}
            as='nav'
            w={'100%'}
            bg={useColorModeValue('#ffffff40', '"#20202380')}
            style={{ backdropFilter: 'blur(10px)' }}
            zIndex={1}
            {...props}
        >
            <Container
                display={'flex'}
                p={2}
                maxW={'container.lg'}
                flexWrap='wrap'
                align='center'
                justify='space-between'
            >
                <Flex
                    align={'center'}
                    mr={5}
                >
                    <Heading
                        as={'h1'}
                        size={'lg'}
                        letterSpacing={'tighter'}
                    >
                        Logo
                    </Heading>
                </Flex>
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    display={{ base: 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    alignItems='center'
                    flexGrow={1}
                    mt={{ base: 4, md: 0 }}
                >
                    <LinkItem href={'/'} path={path}>
                        Colors
                    </LinkItem>
                    <LinkItem href={'/'} path={path}>
                        Typography
                    </LinkItem>
                    <LinkItem href={'/'} path={path}>
                        Spaces
                    </LinkItem>
                    <LinkItem href={'/buttons'} path={path}>
                        Buttons
                    </LinkItem>
                    <LinkItem href={'/inputs'} path={path}>
                        Inputs
                    </LinkItem>
                    <LinkItem href={'/'} path={path}>
                        Grid
                    </LinkItem>
                </Stack>
                <Box
                flex={1}
                align='right'
                >
                    <ThemeToggleButton/>
                    <Box
                    ml={2}
                    display={{base:'inline-block',md:'none'}}
                    >
                        <Menu>
                            <MenuButton 
                            as={IconButton} 
                            icon={<HamburgerIcon/>}
                            variant='outline'
                            aria-label='Options'
                            />
                            <MenuList>
                                <NextLink href={'/'} passHref>
                                    <MenuItem as={Link}>Colors</MenuItem>
                                </NextLink>
                                <NextLink href={'/'} passHref>
                                    <MenuItem as={Link}>Typography</MenuItem>
                                </NextLink>
                                <NextLink href={'/'} passHref>
                                    <MenuItem as={Link}>Spaces</MenuItem>
                                </NextLink>
                                <NextLink href={'/buttons'} passHref>
                                    <MenuItem as={Link}>Buttons</MenuItem>
                                </NextLink>
                                <NextLink href={'/inputs'} passHref>
                                    <MenuItem as={Link}>Inputs</MenuItem>
                                </NextLink>
                                <NextLink href={'/'} passHref>
                                    <MenuItem as={Link}>Grid</MenuItem>
                                </NextLink>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar