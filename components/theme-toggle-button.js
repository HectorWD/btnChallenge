

import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

const ThemeToggleButton = () => {
    const { toggleColorMode } = useColorMode()
    return (
        <AnimatePresence
            exitBeforeEnter initial={false}
        >
            <motion.div
                style={{ display: 'inline-block' }}
                key={useColorModeValue('light', 'dark')}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y:0, opacity: 1 }}
                exit={{ y:20, opacity: 0 }}
                transition={{ duration: .3 }}
            >
                <IconButton
                    aria-label='Cambiar tema'
                    colorScheme={useColorModeValue('purple', 'orange')}
                    icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
                    onClick={toggleColorMode}
                >
                </IconButton>
            </motion.div>
        </AnimatePresence>
    )
}

export default ThemeToggleButton