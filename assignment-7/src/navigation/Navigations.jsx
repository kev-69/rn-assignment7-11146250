import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen";

// Create the navigation component and then call it in your other screens using the useNavigation hook in como with Touchable opacity. so when you click on the icon it will let the drawer toggle.(This toggle is what is defined here in the nav component below)
const Drawer = createDrawerNavigator();
const Navigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="HomeScreen"
      screenOptions={({ navigation }) => ({
        headerLeft: () => {
          return (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <Image
                source={require("../../assets/Menu.png")}
                style={{ width: 20, height: 20, marginLeft: 10 }}
              />
            </TouchableOpacity>
          );
        },
      })}
    >
      {/* Set the headershown options of the screens to false so the header does not show at all then the toggle button will work in place of the header there. so in the touchable opacity, you will put the menu icon there that will make the drawer show or not */}
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {},
});
export default Navigation;
