import React, { useState } from "react";
import { View, Image, TouchableOpacity, Text, FlatList } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function ImagesDataScreen() {
  const [images, setImages] = useState([]);

  const navigation = useNavigation();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImages([...images, result.assets[0].uri]);
    }
  };

  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <View style={{ flex: 1, alignItems: "center", padding: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10, marginTop: 40 }}>
        Añade fotos de tu auto
      </Text>
      <Text style={{ color: "gray", marginBottom: 10 }}>
        Añade al menos dos para continuar
      </Text>

      <FlatList
        data={[...images, null]} // Agregar un espacio para la opción de añadir
        numColumns={3}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) =>
          item ? (
            <View style={{ margin: 5, position: "relative" }}>
              <Image
                source={{ uri: item }}
                style={{ width: 100, height: 100, borderRadius: 10 }}
              />
              <TouchableOpacity
                onPress={() => removeImage(index)}
                style={{
                  position: "absolute",
                  top: -5,
                  right: -5,
                  backgroundColor: "white",
                  borderRadius: 12,
                  padding: 2,
                }}
              >
                <AntDesign name="closecircle" size={20} color="purple" />
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity
              onPress={pickImage}
              style={{
                width: 100,
                height: 100,
                backgroundColor: "#EAEAEA",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
                margin: 5,
              }}
            >
              <AntDesign name="pluscircle" size={24} color="purple" />
            </TouchableOpacity>
          )
        }
      />

      <TouchableOpacity
        disabled={images.length < 2}
        style={{
          backgroundColor: images.length < 2 ? "#C4C4C4" : "purple",
          padding: 15,
          borderRadius: 10,
          width: "80%",
          alignItems: "center",
          marginTop: 20,
        }}
        onPress={() => navigation.navigate("VehiclePreferences")}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>CONTINUAR</Text>
      </TouchableOpacity>
    </View>
  );
}
