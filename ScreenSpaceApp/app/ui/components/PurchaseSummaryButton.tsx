import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const PurchaseSummaryButton = ({ movieTitle, moviePrice, date, cinema, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View>
        <Text style={styles.movieTitle}>{movieTitle}</Text>
        <Text style={styles.subtitle}>Fecha: {date}</Text>
        <Text style={styles.subtitle}>Cine: {cinema}</Text>
      </View>
      <Text style={styles.moviePrice}>${moviePrice}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#000',
    marginBottom: 10,
  },
  movieTitle: {
    fontSize: 18,
    color: '#FFF',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#FFF',
  },
  moviePrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
});

export default PurchaseSummaryButton;

