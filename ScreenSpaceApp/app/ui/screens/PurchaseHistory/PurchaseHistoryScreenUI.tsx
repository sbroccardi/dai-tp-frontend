import React, {useContext} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PurchaseSummaryButton from '../../components/PurchaseSummaryButton';
import {UserContext} from '../../../UserContext';
import ky from 'ky';
import Config from 'react-native-config';


const PurchaseHistoryScreenUI = () => {
  const user = useContext(UserContext);
  const [refreshing, setRefreshing] = React.useState(false);
  const purchases = [
    { 
      movieTitle: 'Avengers: Endgame',
      moviePrice: 10.99,
      date: '06/07/2023',
      cinema: 'Cineplex',
    },
    { 
      movieTitle: 'Jurassic Park',
      moviePrice: 8.99,
      date: '08/07/2023',
      cinema: 'AMC Theaters',
    },
    { 
      movieTitle: 'The Shawshank Redemption',
      moviePrice: 9.99,
      date: '10/07/2023',
      cinema: 'Regal Cinemas',
    },
  ];
  const getPurchases = async () => {
    const authToken = user.user.token;
    const respuesta = await ky.get(
      `${Config.API_BASE_URL}/users/purchases`,
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      },
    );
    const responseBody = await respuesta.json();
    console.log(responseBody)
  };
  if (refreshing == false){
    getPurchases();
    setRefreshing(true)
  }

  return (
    <View style={styles.container}>
      {purchases.map((purchase, index) => (
        <PurchaseSummaryButton
          key={index}
          movieTitle={purchase.movieTitle}
          moviePrice={purchase.moviePrice}
          date={purchase.date}
          cinema={purchase.cinema}
          onPress={() => {}}
        />
      ))}
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
export default PurchaseHistoryScreenUI;
