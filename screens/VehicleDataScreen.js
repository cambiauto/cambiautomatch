import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import tw from "tailwind-react-native-classnames";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const VehicleData = () => {
  const [vehicleType, setVehicleType] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");

  const navigation = useNavigation();

  return (
    <View style={tw`flex-1 bg-white justify-center items-center px-6`}>
    <Text style={tw`text-2xl font-bold text-center text-black`}>
      Encuentra tu auto ideal a tan solo un swipe
    </Text>
    <Text style={tw`text-gray-500 text-center mt-2`}>
      Encuentra el match ideal para intercambiar tu vehículo
    </Text>

    <Text style={tw`text-lg font-semibold mt-6 text-black`}>
      ¿Qué vehículo tienes?
    </Text>

    {/* Select Tipo de Vehículo */}
    <View style={tw`w-full mt-4 border border-gray-300 rounded-lg px-4`}>
      <RNPickerSelect
        onValueChange={(value) => setVehicleType(value)}
        items={[
          { label: "Sedán", value: "sedan" },
          { label: "SUV", value: "suv" },
          { label: "Pickup", value: "pickup" },
        ]}
        placeholder={{ label: "Tipo de vehículo", value: "" }}
      />
    </View>

    {/* Select Marca */}
    <View style={tw`w-full mt-4 border border-gray-300 rounded-lg px-4`}>
      <RNPickerSelect
        onValueChange={(value) => setBrand(value)}
        items={[
          { label: "Toyota", value: "toyota" },
          { label: "Honda", value: "honda" },
          { label: "Ford", value: "ford" },
        ]}
        placeholder={{ label: "Marca", value: "" }}
      />
    </View>

    {/* Select Modelo */}
    <View style={tw`w-full mt-4 border border-gray-300 rounded-lg px-4`}>
      <RNPickerSelect
        onValueChange={(value) => setModel(value)}
        items={[
          { label: "Corolla", value: "corolla" },
          { label: "Civic", value: "civic" },
          { label: "F-150", value: "f150" },
        ]}
        placeholder={{ label: "Modelo", value: "" }}
      />
    </View>

    {/* Input Precio */}
    <TextInput
      style={tw`w-full mt-4 border border-gray-300 rounded-lg px-4 py-3 text-black`}
      placeholder="Precio"
      keyboardType="numeric"
      value={price}
      onChangeText={setPrice}
      placeholderTextColor="#A0A0A0"
    />

    {/* Botón Continuar */}
    <TouchableOpacity style={tw`w-full mt-6`} onPress={() => navigation.navigate("Home")}>
      <LinearGradient
        colors={["#7B61FF", "#E14DFF"]}
        style={tw`rounded-lg p-3 items-center`}
      >
        <Text style={tw`text-white text-lg font-bold`}>CONTINUAR</Text>
      </LinearGradient>
    </TouchableOpacity>
  </View>
  );
};

export default VehicleData;
