import {ParamListBase, useNavigation, useRoute} from '@react-navigation/native';
import {Box, Button, Center, Text, VStack} from 'native-base';
import React, { useState } from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import SeatsLayout from "@mindinventory/react-native-bus-seat-layout";
import { styles } from '../../styles/theme';
import ButtonPrimary from '../../components/ButtonPrimary';
import Config from 'react-native-config';
import ky from 'ky';

export default function SeatSelectionUI() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const route = useRoute();
  const movieId = route.params.movieId;
  const movieName = route.params.movieName;
  const parcialPrice = route.params.parcialPrice;
  const tickets = route.params.tickets;

  const occupiedSeats = [1,5,8];
  const occupiedSeatsList = [];

  occupiedSeats.forEach(seat => {
      const occupiedSeat = { seatNumber: seat, seatType: 'booked' }
      occupiedSeatsList.push(occupiedSeat);
  })

  
  const bookingFee = 6;
  const totalPrice = parcialPrice + bookingFee;

  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatSelection = (seats: any) => {
    setSelectedSeats(seats);
  }

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
        <Center maxW="100%" minW="100%" backgroundColor="#16171D" position="absolute" minH="60%" marginTop="3">
            <SeatsLayout
                maxSeatToSelect={tickets}
                row={9}
                layout={{ columnOne: 0, columnTwo: 5 }}
                selectedSeats={occupiedSeatsList}
                numberTextStyle={{ fontSize: 13 }}
                getBookedSeats={(seats) => {
                  const numbers = seats.map(seat => seat.seatNo);
                  handleSeatSelection(numbers);
                }}
            />
        </Center>
        <Center maxW="100%" minW="100%" backgroundColor="#16171D" position="absolute">
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
          <ButtonPrimary onPress={() => navigation.navigate('Checkout', {movieId: movieId, seats: selectedSeats, movieName: movieName, tickets: tickets, parcialPrice: parcialPrice, totalPrice: totalPrice})} title="Checkout"/>
      </Box>
    </VStack>
    
  );
}