import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const CalculatedPage = (props) => {
  const { navigation, route } = props;
  const { averageConsumption, consumerLabel } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text>O seu veículo anda em média {averageConsumption.toFixed(1)}km/l.</Text>
        <Text>Classificação do seu veículo é {consumerLabel}</Text>
      </View>
      <View style={styles.button}>
        <Button
          title="Realizar Novo cálculo"
          onPress={() => navigation.navigate("InitialPage")}
        />
      </View>
    </View>
  );
};

export default CalculatedPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 80,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    marginTop: 20,
  },
  button: {
    marginTop: 25,
  },
});