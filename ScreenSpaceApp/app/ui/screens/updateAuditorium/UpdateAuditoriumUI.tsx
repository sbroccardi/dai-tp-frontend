import {
  Center,
  FormControl,
  Input,
  Image,
  Text,
  VStack,
  useToast,
} from 'native-base';
import React, {useState} from 'react';
import {View, Switch} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import I18n from '../../../assets/localization/I18n';
import ButtonDanger from '../../components/ButtonDanger';
import ButtonPrimary from '../../components/ButtonPrimary';
import {styles} from '../../styles/theme';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const UpdateAuditoriumUI = ({}) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const toast = useToast();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [formData, setData] = React.useState({name: '', rows: '', seats: ''});

  return (
    <KeyboardAwareScrollView>
      <VStack
        space={4}
        alignItems="center"
        justifyContent="space-around"
        height="100%">
        <Center w="100%" pt={50}>
          <Image
            alt="ScreenSpace"
            source={require('../../../assets/images/popcorn.png')}
            width={116}
            height={116}
          />
        </Center>
        <Center w={'90%'}>
          <FormControl isRequired>
            {I18n.t('name')}
            <Input
              size="md"
              keyboardType="email-address"
              inputMode="email"
              placeholder={'sala 7'}
              backgroundColor={'#21242D'}
              onChangeText={value => setData({...formData, name: value})}
            />
            {'\n'}
            {I18n.t('rows')}
            <Input
              size="md"
              keyboardType="email-address"
              inputMode="email"
              placeholder={'12'}
              backgroundColor={'#21242D'}
            />
            {'\n'}
            {I18n.t('seatsRows')}
            <Input
              size="md"
              keyboardType="email-address"
              inputMode="email"
              placeholder={'7'}
              backgroundColor={'#21242D'}
            />
          </FormControl>
        </Center>
        <View style={styles.switchcontainer}>
          <View
            style={{
              backgroundColor: '#21242D',
              paddingHorizontal: 40,
              paddingVertical: 10,
              borderRadius: 8,
              flexDirection: 'row',
            }}>
            <Text>Available</Text>
            <Switch
              trackColor={{false: 'grey', true: '#f5dd4b'}}
              thumbColor={isEnabled ? 'white' : 'white'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <ButtonDanger
            onPress={() => navigation.navigate('ConfirmDeleteAuditorium')}
            title={I18n.t('delete')}
            width="150px"
          />
        </View>
        <ButtonPrimary
          onPress={() => console.log(formData.name)}
          title={I18n.t('save')}
          width="90%"
        />
      </VStack>
    </KeyboardAwareScrollView>
  );
};

export default UpdateAuditoriumUI;
