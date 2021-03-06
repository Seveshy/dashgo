import { Flex, useBreakpointValue, IconButton, Icon } from '@chakra-ui/react'
import { Logo } from '../Header/Logo'
import { Profile } from '../Header/Profile'
import { NotificationsNav } from '../Header/NotificationNav'
import { SearchBox } from '../Header/SearchBox'
import { useSidebarDrawer } from '../../context/SidebarDrawerContext'
import { RiMenuFill } from 'react-icons/ri'


export function Header() {
    const { onOpen } = useSidebarDrawer()

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })
    return (
        <Flex
            as="header"
            w="100%"
            maxWidth={1480}
            h="20"
            mx="auto"
            mt="4"
            px="6"
            align="center"
        >

        { !isWideVersion && (
            <IconButton 
                aria-label="Open navigation"
                icon={<Icon as={RiMenuFill} />}
                fontSize="24"
                variant="unstyled"
                onClick={onOpen}
                mr="2"
            >
    
            </IconButton>
        )}

            <Logo />
            { isWideVersion && <SearchBox /> }
            <Flex
                align="center"
                ml="auto"
            >
                <NotificationsNav />
                <Profile showProfileData={isWideVersion} />
            </Flex>
        </Flex>
    )
} 