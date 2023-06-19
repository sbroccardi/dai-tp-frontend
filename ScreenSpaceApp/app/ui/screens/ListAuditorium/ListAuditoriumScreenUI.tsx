import { Box, Center, VStack, Text } from 'native-base';
import React from 'react';
import HomeToolbarPrivateUser from '../../components/HomeToolbarPrivateUser';
import CardAuditorium from '../../components/CardAuditorium';
import Seat from '../../components/Seat';
import ToolbarPrivateUser from '../../components/ToolbarPrivateUser';
import SearchBar from '../../components/SearchBar';
import FooterMenu from '../../components/FooterMenu';
import { SafeAreaView } from 'react-native-safe-area-context';
import ButtonPrimary from '../../components/ButtonPrimary';

export default function ListAuditoriumScreenUI(params: {cinema: string}) {

    return (
        
        <VStack space={4} alignItems="center" height="100%">
            <Center>
                <ToolbarPrivateUser title="My auditoriums" onPress={undefined} />
            </Center>
            <Center>
                <Text>
                    jajaajaj
                </Text>
            </Center>
            <Center>
                <SearchBar />
            </Center>
            <Center>
            <CardAuditorium auditoriumName='Sala 7' auditoriumAvailability='Disponible' auditoriumSize='12 rows of 7 seats' />
            </Center>
            <Center>
            <CardAuditorium auditoriumName='Sala 8' auditoriumAvailability='Disponible' auditoriumSize='12 rows of 7 seats' />
            </Center>
            <Center width="100%">
                <ButtonPrimary title='Create screening' onPress={undefined} />
            </Center>
            <Center minW="100" minH="100">
                <FooterMenu />
            </Center>
        </VStack>
       
    );
}