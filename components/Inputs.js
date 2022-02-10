import { PhoneIcon } from '@chakra-ui/icons'
import { Input } from '@chakra-ui/react'
import React from 'react'

export const Inputs = (props) => {
  return (
    <Input
    borderColor={'green.300'}
    startIcon={<PhoneIcon/>}
    
    {...props}
    />
  )
}
