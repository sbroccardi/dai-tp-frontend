import {Center, ScrollView, VStack} from 'native-base';
import React from 'react';
import CardMovie from '../../components/CardMovie';
import SearchBar from '../../components/SearchBar';
import ButtonPrimary from '../../components/ButtonPrimary';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase, useNavigation} from '@react-navigation/native';

type HomeScreenNavigationProp = NativeStackNavigationProp<ParamListBase>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const PrivateMoviesScreenUI: React.FC<Props> = ({navigation}) => {
  //const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <VStack space={3} alignItems="center" height="100%">
      <Center>
        <SearchBar />
      </Center>
      <Center>
        <ScrollView maxH="450">
            <VStack space={3} alignItems="center" height="100%">
              <Center>
                <CardMovie movieID="1" />
              </Center>
              <Center>
                <CardMovie movieID="2" />
              </Center>
              <Center>
                <CardMovie movieID="3" />
              </Center>
              <Center>
                <CardMovie movieID="3" />
              </Center>
              <Center>
                <CardMovie movieID="3" />
              </Center>
              <Center>
                <CardMovie movieID="3" />
              </Center>
            </VStack>
        </ScrollView>
      </Center>
      <Center width="100%">
        <ButtonPrimary
          title="Create screening"
          onPress={() =>
            navigation.navigate('CreateScreeningStack', {
              screen: 'CreateScreening',
            })
          }
        />
      </Center>
    </VStack>
  );
};

export default PrivateMoviesScreenUI;
