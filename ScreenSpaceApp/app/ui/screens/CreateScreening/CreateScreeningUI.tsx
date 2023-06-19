import { Center, VStack } from 'native-base';
import React from 'react';
import DropdownMenu from '../../components/DropdownMenu';
import ToolbarPrivateUser from '../../components/ToolbarPrivateUser';
import {Calendar, LocaleConfig} from 'react-native-calendars';

const CreateScreeningUI = ()=>{
    /*TEMP*/
    const cinemaOptions = ['Cinema Devoto', 'Cinema Abasto', 'Cinema Caballito'];
    const auditoriumOptions =['Auditorio 1', 'Auditorio 2', 'Auditorio 3'];
    const movieOptions = ['Oppenheimer', 'Interstellar', 'Harry Potter']
    /*TEMP*/
    const [selectedCinema, setSelectedCinema] = React.useState('');
    const [selectedAuditorium, setSelectedAuditorium] = React.useState('');
    const [selectedMovie, setSelectedMovie] = React.useState('');

    const handleCinemaChange = (value: any) => {
        console.log(value)
        setSelectedCinema(value);
        setSelectedAuditorium(''); // Reseteamos el valor del siguiente dropdown
        setSelectedMovie(''); // Reseteamos el valor del siguiente dropdown
    };

    const handleAuditoriumChange = (value: any) => {
        setSelectedAuditorium(value);
        setSelectedMovie(''); // Reseteamos el valor del siguiente dropdown
    };

    return(
        <VStack space={3} alignItems="center">
            <Center paddingTop={2}>
                <ToolbarPrivateUser onPress={undefined}/>
            </Center>
            <Center>
                <DropdownMenu purpose={'cinema'} disabled={false} options={cinemaOptions} onChange={handleCinemaChange} valueSelected = {selectedCinema}/>
            </Center>
            <Center>
                <DropdownMenu purpose={'auditorium'} disabled={!selectedCinema} options={auditoriumOptions} onChange={handleAuditoriumChange} valueSelected={selectedAuditorium}/>
            </Center>
            <Center>
                <DropdownMenu purpose={'movie'} disabled={!selectedAuditorium} options={movieOptions} onChange = {undefined}/>
            </Center>
        </VStack>
    )
}

export default CreateScreeningUI;