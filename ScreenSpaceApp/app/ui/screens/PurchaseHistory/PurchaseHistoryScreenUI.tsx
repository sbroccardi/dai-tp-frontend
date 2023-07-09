import React, {useContext, useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PurchaseSummaryButton from '../../components/PurchaseSummaryButton';
import {UserContext} from '../../../UserContext';
import ky from 'ky';
import Config from 'react-native-config';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


const PurchaseHistoryScreenUI = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const user = useContext(UserContext);
  const [precio,setPrecio] = React.useState(10.99);
  const [fecha, setFecha] = React.useState<string[]>([]);
  const [titulo, setTitulo] = React.useState<string[]>([]);
  const [imagen, setImagen] = React.useState<string[]>([]);
  const [asientos, setAsientos] = React.useState<string[]>([]);
  const [movideID, setMovideID] = React.useState<string[]>([]);
  const [purchaseid, setPurchaseID] = React.useState<string[]>([]);

  const getPurchases = async () => {
    const authToken = user.user?.tokens.accessToken;
    const respuesta = await ky.get(
      `${Config.API_BASE_URL}/users/purchases`,
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      },
    );
    const responseBody = await respuesta.json();

     const promises = responseBody.map(async (elemento) => {
      const nuevoAsiento = elemento.seats;
      setAsientos((prevAsiento) => [...prevAsiento, nuevoAsiento]);

      const nuevoId = elemento._id;
      setPurchaseID((prevId) => [...prevId, nuevoId]);

      const respuesta2 = await ky.get(
        `${Config.API_BASE_URL}/movies/screenings/${elemento.screeningId}`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        },
      );

      const responseBody2 = await respuesta2.json();

      const nuevoMovieID = responseBody2.movieId;
      setMovideID((prevMovieId) => [...prevMovieId, nuevoMovieID]);

      const nuevaFecha = responseBody2.datetime;
      setFecha((prevFecha) => [...prevFecha, nuevaFecha]);

      const respuesta3 = await ky.get(
        `${Config.API_BASE_URL}/movies/${responseBody2.movieId}`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        },
      );
      const responseBody3 = await respuesta3.json();
      
      const nuevoTitulo = responseBody3.name;
      setTitulo((prevTitulo) => [...prevTitulo, nuevoTitulo]);

      const nuevaImagen = responseBody3.image;
      setImagen((prevImagen) => [...prevImagen, nuevaImagen]);
    });

    await Promise.all(promises);


  };

  

  useEffect(() => {
    getPurchases();
  }, []);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
  });

  return (
  <View style={styles.container}>
    {fecha.map((elemento, index) => (
      <PurchaseSummaryButton
        key={index}
        movieTitle={titulo[index]}
        moviePrice={precio}
        date={elemento}
        cinema={"hoytz"}
        imageUrl={imagen[index]}
        onPress={() => navigation.navigate('PurchaseDetails',{
          movieTitle:titulo[index],
          moviePrice:precio,
          date:elemento,
          cinema:'hoytz',
          imageUrl:imagen[index],
          asientos:asientos[index],
          movideId: movideID[index],
          purchaseId: purchaseid[index]
        })
      }
      />
    ))}
  </View>
);



  }
export default PurchaseHistoryScreenUI;
