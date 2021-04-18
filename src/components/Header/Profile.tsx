import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

export function Profile() {
    return (
        <Flex
            align="center"
        >
            <Box mr="4" textAlign="right">
                <Text>Daniel Major</Text>
                <Text>danielmajor@gmail.com</Text>
            </Box>
            <Avatar size="md" name="Daniel Major" src="https://github.com/seveshy.png" />
        </Flex>
    )
}