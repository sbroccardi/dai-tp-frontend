import {ParamListBase, useNavigation, useRoute} from '@react-navigation/native';
import {Box, Center, Text, VStack} from 'native-base';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import ky from 'ky';
import InfoPurchase from '../../components/InfoPurchase';
import ButtonPrimary from '../../components/ButtonPrimary';
import DropdownMenu from '../../components/DropdownMenu';
import ButtonDanger from '../../components/ButtonDanger';
import { styles } from '../../styles/theme';
import Seat from '../../components/Seat';

export default function BuyTicketsUI() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const route = useRoute();
  const params = route.params;

  return (
    <VStack>
        
        <Box>
            <Box display="flex" flexDirection="row" justifyContent="space-between" minW="100%" maxW="100%" borderBottomWidth="1" borderBottomColor="white" paddingTop="3" paddingBottom="3">
                    <Box>
                        <Text>
                            Subtotal
                        </Text>
                    </Box>
                    <Box>
                      <Text>
                          14,00$
                      </Text>
                    </Box>
            </Box>
            <Box display="flex" flexDirection="row" justifyContent="space-between" minW="100%" maxW="100%" borderBottomWidth="1" borderBottomColor="white" paddingTop="3" paddingBottom="3">
                    <Box>
                        <Text>
                            Subtotal
                        </Text>
                    </Box>
                    <Box>
                      <Text>
                          14,00$
                      </Text>
                    </Box>
            </Box>
        </Box>
        <Box>
            <ButtonPrimary onPress={undefined}/>
        </Box>
    </VStack>
  );
}