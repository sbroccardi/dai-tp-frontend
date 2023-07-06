import {ParamListBase, useNavigation, useRoute} from '@react-navigation/native';
import {Box, Button, Center, Text, VStack} from 'native-base';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import SeatsLayout from "@mindinventory/react-native-bus-seat-layout";
import { styles } from '../../styles/theme';
import ButtonPrimary from '../../components/ButtonPrimary';

export default function SeatSelectionUI() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const route = useRoute();
  const params = route.params;
  interface Seat{
    id: string,
    isSeatSeleced: boolean,
    isStatusChange: boolean,
    seatNo: any,
    type: string
  }
  const [selectedSeats, setSelectedSeats] = React.useState<Seat[]>([]);

  return (
    <VStack>
      <VStack>
          <Center>
              <Box display="flex" alignItems="center">
                <Text style={styles.headerText}>
                  Oppenheimer
                </Text>
                <Text style={styles.bodyText}>
                  Monday, 5/01/2024 - 16:00
                </Text>
                <Text style={styles.bodyText}>
                  Sala 7
                </Text>
              </Box>
          </Center>
      </VStack>
      <VStack space={5} alignItems="center" maxHeight="75%" minHeight="75%">
        <Center maxW="100%" minW="100%" backgroundColor="black" position="absolute" minH="60%" marginTop="3">
            <SeatsLayout
                row={9}
                layout={{ columnOne: 0, columnTwo: 5 }}
                selectedSeats={[
                ]}
                numberTextStyle={{ fontSize: 10 }}
                getBookedSeats={(seats) => {
                console.log('getBookedSeats :: ', seats);
                setSelectedSeats(seats);
                }}
            />
        </Center>
        <Center maxW="100%" minW="100%" backgroundColor="black" position="absolute">
                <Box display="flex" alignItems="center" paddingTop="12" marginTop="10" borderTopWidth={1} borderTopColor="white" minW="80%">
                    
                </Box>
        </Center>
        <Center position="absolute" marginTop="5">
                <Box>
                    <Text>
                        Screen
                    </Text>
                </Box>
        </Center>
      </VStack>
      <Box display="flex" alignItems="center">
        <Text>
              Seats 
        </Text>
      </Box>
      <Box>
          <ButtonPrimary onPress={undefined} title="Chekcout"/>
      </Box>
    </VStack>
    
  );
}