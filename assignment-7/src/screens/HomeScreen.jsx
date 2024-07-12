import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import Home from "../components/Home/Home";
import { CartContext } from "../context/CartContext";

const HomeScreen = () => {
  const navigation = useNavigation();
  const { addToCart, getTotalItems } = useContext(CartContext);
  const totalItems = getTotalItems();
  const [clothesData, setClothesData] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch("https://dummyjson.com/products/category/womens-dresses")
      .then((response) => response.json())
      .then((data) => {
        // Ensure data is properly structured
        if (data && data.products) {
          const transformedData = data.products.map((item) => ({
            id: item.id,
            image: item.thumbnail ? { uri: item.thumbnail } : null, // Ensure image.uri exists
            title: item.title,
            description: item.description,
            price: `$${item.price}`,
            icon: require("../../assets/add_circle.png"),
          }));
          setClothesData(transformedData);
        }
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={{ backgroundColor: "white" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 20,
          marginTop: 40,
        }}
      >
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Image source={require("../../assets/Menu.png")} style={{}} />
        </TouchableOpacity>

        <View>
          <Image source={require("../../assets/Logo.png")} />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 10,
          }}
        >
          <TouchableOpacity>
            <Ionicons name="search-outline" size={24} color="black" />
          </TouchableOpacity>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate("CartScreen")}>
              <SimpleLineIcons name="handbag" size={24} color="black" />
              {totalItems > 0 && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{totalItems}</Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.title}>
        <Text style={styles.topic}>OUR STORY</Text>
        <View style={styles.menu}>
          <View style={styles.filter}>
            <Image source={require("../../assets/Listview.png")} />
          </View>
          <View style={styles.filter}>
            <Image source={require("../../assets/Filter.png")} />
          </View>
        </View>
      </View>

      <View style={{ paddingBottom: 400 }}>
        <FlatList
          data={clothesData}
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: "space-around",
            paddingBottom: 30,
          }}
          renderItem={({ item }) => (
            <Home
              image={item.image}
              icon={item.icon}
              removeIcon={item.removeIcon}
              title={item.title}
              description={item.description}
              price={item.price}
              onPressAdd={() => addToCart(item)}
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
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logo: {
    marginLeft: 100,
    marginTop: 40,
    marginRight: 60,
  },
  drawerMenu: {
    width: 20,
    height: 20,
    margin: 10,
    marginTop: 40,
    //marginLeft: 20,
  },
  menu: {
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: "black",
  },
  topic: {
    fontSize: 24,
    fontWeight: "400",
    marginLeft: 15,
    marginTop: 30,
    letterSpacing: 2,
  },
  filter: {
    padding: 10,
    backgroundColor: "#F7F7F7",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginRight: 20,
    marginTop: 30,
  },
  badge: {
    position: "absolute",
    right: -10,
    top: -10,
    backgroundColor: "red",
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "white",
    fontSize: 12,
  },
});

export default HomeScreen;
