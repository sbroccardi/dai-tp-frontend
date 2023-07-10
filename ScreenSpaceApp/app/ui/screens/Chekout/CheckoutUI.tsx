import {ParamListBase, useNavigation, useRoute} from '@react-navigation/native';
import {Box, Center, Text, VStack} from 'native-base';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import ky from 'ky';
import InfoPurchase from '../../components/InfoPurchase';
import ButtonPrimary from '../../components/ButtonPrimary';
import DropdownMenu from '../../components/DropdownMenu';

export default function CheckoutUI() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const route = useRoute();
  const movieName = route.params.movieName;
  const tickets = route.params.tickets;
  const parcialPrice = route.params.parcialPrice;
  const totalPrice = route.params.totalPrice;
  const seats = route.params.seats;
  const stringSeats = seats.join('-');

  return (
    <VStack>
        <Box>
            <InfoPurchase movie={movieName} date={''} cinema={''} auditorium={''} location={''} tickets={tickets} seats={stringSeats} price={totalPrice} />
        </Box>
        <Box>
            <VStack maxW="90%" minW="90%" marginLeft="5" space={5} marginTop="10">
                  <Box display="flex" flexDirection="row" justifyContent="space-between" minW="100%" maxW="100%" borderBottomWidth="1" borderBottomColor="white" paddingTop="3" paddingBottom="3">
                    <Box>
                        <Text>
                            Subtotal
                        </Text>
                    </Box>
                    <Box>
                      <Text>
                          {parcialPrice},00$
                      </Text>
                    </Box>
                  </Box>
                  <Box display="flex" flexDirection="row" justifyContent="space-between" minW="100%" maxW="100%" borderBottomWidth="1" borderBottomColor="white" paddingTop="3" paddingBottom="3">
                    <Box>
                        <Text>
                            Booking free
                        </Text>
                    </Box>
                    <Box>
                      <Text>
                          6,00$
                      </Text>
                    </Box>
                  </Box>
                  <Box display="flex" flexDirection="row" justifyContent="space-between" minW="100%" maxW="100%" borderBottomWidth="1" borderBottomColor="white" paddingTop="3" paddingBottom="3">
                    <Box>
                        <Text>
                            Total price
                        </Text>
                    </Box>
                    <Box>
                      <Text>
                          {totalPrice},00$
                      </Text>
                    </Box>
                  </Box>
                  <Box>
                    <DropdownMenu purpose={'Payment Method'} disabled={undefined} options={[]} onChange={undefined}/>
                  </Box>
                  <Box>
                     <ButtonPrimary onPress={undefined} title='Confirm' />
                  </Box>
            </VStack>
        </Box>
    </VStack>
  );
}
