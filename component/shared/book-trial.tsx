import { Button, Flex, Text } from '@mantine/core'
import React from 'react'

const BookTrial = () => {
  return (
    <Flex justify={'center'} align={'center'} gap={32}>
        <Text>Login</Text>
        <Button variant={'default'}>Book trial</Button>
    </Flex>
  )
}

export default BookTrial