import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import Slider from "@react-native-community/slider";
import { LinearGradient } from "expo-linear-gradient";
import tw from "tailwind-react-native-classnames";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";

const VehiclePreferencesScreen = () => {
    const [vehicleType, setVehicleType] = useState("");
  const [price, setPrice] = useState([150000, 250000]);
  const [year, setYear] = useState([1999, 2010]);
  const [mileage, setMileage] = useState([150000, 250000]);

  const navigation = useNavigation();

  return (
    <View style={tw`flex-1 p-5 items-center bg-white`}>
      <Text style={tw`text-lg font-bold text-center mb-3 mt-10`}>
        Encuentra tu auto ideal a tan solo un swipe
      </Text>
      <Text style={tw`text-base font-bold mb-5`}>¿Qué vehículo quieres?</Text>

      {/* Tipo de Vehículo */}
      <View style={tw`w-11/12 h-12 border border-gray-300 rounded-lg mb-5`}>
        <Picker
          selectedValue={vehicleType}
          onValueChange={(itemValue) => setVehicleType(itemValue)}
          style={tw`text-base h-full`}
        >
          <Picker.Item label="Selecciona un tipo" value="" />
          <Picker.Item label="Sedán" value="sedan" />
          <Picker.Item label="SUV" value="suv" />
          <Picker.Item label="Pickup" value="pickup" />
          <Picker.Item label="Deportivo" value="deportivo" />
        </Picker>
      </View>

      {/* Sliders */}
      <View style={tw`w-11/12 mb-5`}>
        <Text style={tw`text-base font-bold`}>Precio</Text>
        <Slider
          minimumValue={150000}
          maximumValue={250000}
          step={1000}
          value={price[0]}
          onValueChange={(value) => setPrice([value, price[1]])}
          minimumTrackTintColor="#8A2BE2"
          maximumTrackTintColor="#D3D3D3"
          thumbTintColor="#8A2BE2"
        />
        <Text style={tw`text-sm text-center mt-1`}>
          ${price[0].toLocaleString()} - ${price[1].toLocaleString()}
        </Text>
      </View>

      <View style={tw`w-11/12 mb-5`}>
        <Text style={tw`text-base font-bold`}>Año</Text>
        <Slider
          minimumValue={1999}
          maximumValue={2010}
          step={1}
          value={year[0]}
          onValueChange={(value) => setYear([value, year[1]])}
          minimumTrackTintColor="#8A2BE2"
          maximumTrackTintColor="#D3D3D3"
          thumbTintColor="#8A2BE2"
        />
        <Text style={tw`text-sm text-center mt-1`}>
          {year[0]} - {year[1]}
        </Text>
      </View>

      <View style={tw`w-11/12 mb-5`}>
        <Text style={tw`text-base font-bold`}>Kilometraje</Text>
        <Slider
          minimumValue={150000}
          maximumValue={250000}
          step={1000}
          value={mileage[0]}
          onValueChange={(value) => setMileage([value, mileage[1]])}
          minimumTrackTintColor="#8A2BE2"
          maximumTrackTintColor="#D3D3D3"
          thumbTintColor="#8A2BE2"
        />
        <Text style={tw`text-sm text-center mt-1`}>
          {mileage[0].toLocaleString()} - {mileage[1].toLocaleString()}
        </Text>
      </View>

      {/* Botón de Continuar */}
      <Pressable style={tw`w-11/12 rounded-full overflow-hidden`} onPress={() => navigation.navigate("Home")}>
        <LinearGradient colors={["#8A2BE2", "#FF00FF"]} style={tw`p-4 items-center`}>
          <Text style={tw`text-white text-base font-bold`}>CONTINUAR</Text>
        </LinearGradient>
      </Pressable>
    </View>
  );
};

export default VehiclePreferencesScreen;
