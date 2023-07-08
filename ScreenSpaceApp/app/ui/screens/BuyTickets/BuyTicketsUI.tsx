import {ParamListBase, useNavigation, useRoute} from '@react-navigation/native';
import {Box, Button, Center, Text, VStack} from 'native-base';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import ky from 'ky';
import InfoPurchase from '../../components/InfoPurchase';
import ButtonPrimary from '../../components/ButtonPrimary';
import DropdownMenu from '../../components/DropdownMenu';
import ButtonDanger from '../../components/ButtonDanger';
import { styles } from '../../styles/theme';
import Seat from '../../components/Seat';
import ButtonDangerExtraSmall from '../../components/ButtonDangerExtraSmall'; 




export default function BuyTicketsUI() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const route = useRoute();
  const params = route.params;

  const precioAdulto = 7;
  const precioChild = 3;
  const [cantAdulto, setCantAdulto] = React.useState(0);
  const [cantChild, setCantChild] = React.useState(0);
  const aumentarCantAdulto = () => {
    setCantAdulto(cantAdulto + 1)
  }
  const disminuirCantAdulto = () => {
    if(cantAdulto == 0){
        console.log("No tickets selected");
    }
    else{
        setCantAdulto(cantAdulto - 1)
    }
  }
  const aumentarCantChild = () => {
    setCantChild(cantChild + 1)
  }
  const disminuirCantChild = () => {
    if(cantChild == 0){
        console.log("No tickets selected");
    }
    else{
        setCantChild(cantChild - 1)
    }
  }


  return (
    <VStack space={6}>
        <VStack space={10} marginBottom="20">
        <Box style={styles.cardAuditorium} display="flex" flexDirection="row">
            <Box minW="70%" maxW="70%" paddingLeft="7" paddingTop="5">
                <VStack space={8}>
                    <Box display="flex" flexDirection="row">
                        <Box marginRight="20">
                            <Text>
                                Adult
                            </Text>
                        </Box>
                        <Box>
                            <Text>
                                x{cantAdulto}
                            </Text>
                        </Box>
                    </Box>
                    <Box>
                        <Text>
                            7,00$
                        </Text>
                    </Box>
                </VStack>
            </Box>
            <Box minW="30%" maxW="30%" display="flex" >
                <VStack space={4} marginTop="2">
                    <Box display="flex" alignItems="center">
                        <ButtonDangerExtraSmall onPress={aumentarCantAdulto}/>
                    </Box>
                    <Box display="flex" alignItems="center">
                        <ButtonDangerExtraSmall onPress={disminuirCantAdulto} title='-'/>
                    </Box>
                </VStack>
            </Box>
        </Box>
        <Box style={styles.cardAuditorium} display="flex" flexDirection="row">
            <Box minW="70%" maxW="70%" paddingLeft="7" paddingTop="5">
                <VStack space={8}>
                    <Box display="flex" flexDirection="row">
                        <Box marginRight="20">
                            <Text>
                                Child
                            </Text>
                        </Box>
                        <Box>
                            <Text>
                                x{cantChild}
                            </Text>
                        </Box>
                    </Box>
                    <Box>
                        <Text>
                            7,00$
                        </Text>
                    </Box>
                </VStack>
            </Box>
            <Box minW="30%" maxW="30%" display="flex" >
                <VStack space={4} marginTop="2">
                    <Box display="flex" alignItems="center">
                        <ButtonDangerExtraSmall onPress={aumentarCantChild}/>
                    </Box>
                    <Box display="flex" alignItems="center">
                        <ButtonDangerExtraSmall onPress={disminuirCantChild} title='-'/>
                    </Box>
                </VStack>
            </Box>
        </Box>
        </VStack>
        <Box>
            <Box display="flex" flexDirection="row" justifyContent="space-between" minW="100%" maxW="100%" borderBottomWidth="1" borderBottomColor="white" paddingTop="3" paddingBottom="3">
                    <Box>
                        <Text>
                            Total tickets
                        </Text>
                    </Box>
                    <Box>
                      <Text>
                          {cantAdulto + cantChild}
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
                          {(cantAdulto * precioAdulto) + (cantChild * precioChild)},00$
                      </Text>
                    </Box>
            </Box>
        </Box>
        <Box>
            <ButtonPrimary title="Select seats" onPress={() => navigation.navigate("SeatSelection")}/>
        </Box>
    </VStack>
  );
}