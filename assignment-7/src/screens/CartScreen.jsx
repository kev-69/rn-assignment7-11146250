import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useEffect } from "react";
import CartsClothes from "../components/Checkout";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { CartContext } from "../context/CartContext";

const CartScreen = () => {
  const { cart, removeFromCart, clearCart, getTotalItems } =
    useContext(CartContext);
  const navigation = useNavigation();

  console.log(cart);
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Image
            style={styles.drawerMenu}
            source={require("../../assets/Menu.png")}
          />
        </TouchableOpacity>
        <Image style={styles.logo} source={require("../../assets/Logo.png")} />
        <Ionicons
          name="search-outline"
          size={24}
          color="black"
          style={{ marginTop: 40, marginRight: 30 }}
        />
      </View>

      <Text style={styles.title}>CHECKOUT</Text>
      <View style={styles.span}>
        <View style={styles.line}></View>
        <MaterialCommunityIcons
          name="cards-diamond-outline"
          size={20}
          color="#AFB0B6"
        />
        <View style={styles.line}></View>
      </View>
      <View>
        <FlatList
          data={cart}
          vertical
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <CartsClothes
              image={item.image}
              icon={item.removeIcon}
              title={item.title}
              description={item.description}
              price={item.price}
              onPressRemove={() => removeFromCart(item.id)}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "light",
    marginTop: 20,
    marginLeft: 110,
    letterSpacing: 5,
    justifyCOntent: "center",
    alignContent: "center",
  },
  drawerMenu: {
    width: 20,
    height: 20,
    margin: 10,
    marginTop: 40,
    marginLeft: 20,
  },
  line: {
    width: 60,
    height: 1,
    backgroundColor: "#AFB0B6",
    marginTop: 20,
    alignContent: "center",
    bottom: 10,
  },
  span: {
    flexDirection: "row",
    marginHorizontal: 120,
  },
  logo: {
    marginLeft: 10,
    marginTop: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
});

export default CartScreen;
