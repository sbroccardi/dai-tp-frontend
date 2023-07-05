import {ParamListBase, useNavigation, useRoute} from '@react-navigation/native';
import {Box, Button, Center, Text, VStack} from 'native-base';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import SeatsLayout from "@mindinventory/react-native-bus-seat-layout";

export default function SeatSelectionUI() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const route = useRoute();
  const params = route.params;

  return (
    <VStack>
        <Box maxH="80%" backgroundColor="black">
            <SeatsLayout
                row={8}
                layout={{ columnOne: 0, columnTwo: 5 }}
                selectedSeats={[
                ]}
                numberTextStyle={{ fontSize: 10 }}
                getBookedSeats={(seats) => {
                console.log('getBookedSeats :: ', seats);
                }}
            />
            </Box>
            <Box>
                <Button>hola</Button>
            </Box>
    </VStack>
  );
}