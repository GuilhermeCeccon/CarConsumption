import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

const InitialPage = (props) => {
  const [kmTraveled, setkmTraveled] = useState("");
  const [consumedGasoline, setConsumedGasoline] = useState("");
  const [msg, setMsg] = useState("Calcular a média por KM percorridos");
  const { navigation } = props;

  const consumption = () => {
    if (kmTraveled && consumedGasoline) {
      const averageConsumption = (kmTraveled / consumedGasoline);

      let consumerLabel = "";
      if (averageConsumption > 12) {
        consumerLabel = "A";
      } else if (averageConsumption > 10 && averageConsumption <= 12) {
        consumerLabel = "B";
      } else if (averageConsumption > 8 && averageConsumption <= 10) {
        consumerLabel = "C";
      } else if (averageConsumption > 4 && averageConsumption <= 8) {
        consumerLabel = "D";
      } else if (averageConsumption <= 4) {
        consumerLabel = "E";
      }

      navigation.navigate("CalculatedPage", {
        consumerLabel,
        averageConsumption,
      });

      setkmTraveled("");
      setConsumedGasoline("");
    } else {
      setMsg("Dados inválidos, tente novamente.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{msg}</Text>
      <TextInput
        style={styles.inputText}
        keyboardType="numeric"
        placeholder="Quantos KM foram percorridos"
        onChangeText={(km) => setkmTraveled(km)}
        value={kmTraveled}
      />
      <TextInput
        style={styles.inputText}
        keyboardType="numeric"
        placeholder="Quantos litros de gasolina foram gastos"
        onChangeText={(liters) => setConsumedGasoline(liters)}
        value={consumedGasoline}
      />
      <View style={styles.button}>
        <Button title="Calcular" onPress={() => consumption()} />
      </View>
    </View>
  );
};

export default InitialPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  text: {
    marginTop: 20,
  },
  inputText: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    width: "80%",
    padding: 5,
    marginTop: 15,
  },
  button: {
    marginTop: 25,
  },
});