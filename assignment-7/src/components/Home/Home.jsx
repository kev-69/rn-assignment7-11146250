import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

const Home = ({ image, title, description, price, icon, onPressAdd }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {image && <Image source={image} style={styles.image} />}
        <TouchableOpacity onPress={onPressAdd} style={styles.iconContainer}>
          <Image source={icon} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.amount}>{price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    width: "48%",
  },
  imageContainer: {
    position: "relative",
    marginBottom: 10,
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 200,
    resizeMode: "cover",
    borderRadius: 10,
  },
  iconContainer: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "white",
    borderRadius: 50,
    padding: 5,
  },
  icon: {
    width: 24,
    height: 24,
  },
  title: {
    fontWeight: "500",
    fontSize: 16,
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: "#555",
    marginBottom: 5,
  },
  amount: {
    fontSize: 16,
    color: "brown",
    fontWeight: "bold",
  },
});

export default Home;
