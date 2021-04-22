import { Flex, Box, Text, Avatar } from '@chakra-ui/react'


interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center">
            { showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Daniel Major</Text>
                    <Text>danielmajor@gmail.com</Text>
                </Box>
            )}
            <Avatar size="md" name="Daniel Major" src="https://github.com/seveshy.png" />
        </Flex>
    )
}