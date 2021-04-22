import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/hooks'
import { createContext, ReactNode, useContext, useEffect } from 'react'
import { useRouter } from 'next/dist/client/router';

interface SidebarDrawerProviderProps {
    children: ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn

const SidebarDrawaerContext = createContext({} as SidebarDrawerContextData);

export function SidebarDrawerProvider({ children }: SidebarDrawerProviderProps) {
    const disclosure = useDisclosure()
    const router = useRouter()

    useEffect(() => {
        disclosure.onClose()
    }, [router.asPath])

    return (
        <SidebarDrawaerContext.Provider value={disclosure}>
            {children}
        </SidebarDrawaerContext.Provider>
    )
}

export const useSidebarDrawer = () => useContext(SidebarDrawaerContext)
