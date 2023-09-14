import { ILoginResponse } from '@/type'
import { cookieStorage, usePortal } from '@ibnlanre/portal'
import { Box, Flex, Text } from '@mantine/core'
import React from 'react'

const NameTag = () => {
  const [user, setUser] = usePortal<ILoginResponse>('user',JSON.parse(cookieStorage.getItem('my-user')as string))
  return (
    <Flex justify='space-between' align='center' gap='12px'>
        <Box w='40px' h='40px'sx={{borderRadius: "100%", backgroundImage:`url('/img-head.svg')`}}/>
        <Text size='base' variant="steel" fw={600} className='max-[445px]:hidden'>{user?.first_name} </Text>
    </Flex>
  )
}

export default NameTag