import { Box, Center, Image, VStack } from 'native-base';
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
import DropdownMenu from '../../components/DropdownMenu';

export default function PrivateScreeningsScreenUI() {

    return (
            <VStack space={4} alignItems="center" height="100%">
                <Center>
                    <HomeToolbarPrivateUser title='Pelicula' />
                </Center>
                <Center w="100%" borderRadius="12" >
                    <Image
                        alt="ScreenSpace"
                        borderRadius="12"
                        source={{
                        uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
                        }}
                        width={350}
                        height={110}
                />
                </Center>
                <Center>
                    <DropdownMenu purpose={'Cinema'} />
                </Center>
                <Center>
                    <CardScreeningPrivate cinema='jajaja' auditorium='jajajaj' date='jajajaj' />
                </Center>
                <Center>
                <CardScreeningPrivate cinema='jajaja' auditorium='jajajaj' date='jajajaj' />
                </Center>
                <Center w="100%">
                    <ButtonPrimary title="Create screening" onPress={undefined} />
                </Center>
            </VStack>
    );
}