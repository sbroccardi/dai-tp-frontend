import { Box, Center, VStack } from 'native-base';
import React from 'react';
import HomeToolbarPrivateUser from '../../components/HomeToolbarPrivateUser';
import { Text } from 'react-native-svg';
import CardAuditorium from '../../components/CardAuditorium';
import Seat from '../../components/Seat';
import CardMovie from '../../components/CardMovie';
import SearchBar from '../../components/SearchBar';
import ToolbarPrivateUser from '../../components/ToolbarPrivateUser';
import ButtonPrimary from '../../components/ButtonPrimary';
import FooterMenu from '../../components/FooterMenu';
import CardScreeningPrivate from '../../components/CardScreeningPrivate';

export default function PrivateMoviesScreenUI() {

    return (
        
        
            <VStack space={3} alignItems="center" height="100%">
                
            <Center>
                <ToolbarPrivateUser title="Screenings" onPress={undefined} />
            </Center>
            <Center>
                <SearchBar />
            </Center>
            <Center>
                <CardMovie movie={''} age={''} rating={0} />
            </Center>
            <Center>
                <CardMovie movie={''} age={''} rating={0} />
            </Center>
            <Center>
                <CardMovie movie={''} age={''} rating={0} />
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