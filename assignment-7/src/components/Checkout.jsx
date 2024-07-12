import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

const CartsClothes = ({
  image,
  title,
  description,
  price,
  icon,
  onPressRemove,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {image && (
          <Image
            source={image.uri ? { uri: image.uri } : image}
            style={styles.image}
          />
        )}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.amount}>{price}</Text>
        <TouchableOpacity onPress={onPressRemove} style={styles.removeButton}>
          <Image source={icon} style={styles.iconImage} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  textContainer: {
    flex: 3,
    paddingLeft: 15,
  },
  title: {
    fontWeight: "600",
    letterSpacing: 1,
    fontSize: 18,
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: "#555",
    marginBottom: 10,
  },
  amount: {
    fontSize: 16,
    color: "brown",
    marginBottom: 10,
  },
  removeButton: {
    marginTop: 10,
    padding: 5,
    backgroundColor: "#f8d7da",
    borderRadius: 5,
    alignSelf: "flex-start",
  },
  iconImage: {
    width: 24,
    height: 24,
  },
});

export default CartsClothes;
