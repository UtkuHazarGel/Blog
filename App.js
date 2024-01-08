import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import CreateBlog from './screens/CreateBlog';
import { Provider } from './context/BlogContext';
import ShowBlogScreen from './screens/ShowBlogScreen';
import { AntDesign } from '@expo/vector-icons';
import EditScreen from './screens/EditScreen';
import { EvilIcons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerTitle: "Blog Uygulaması" }}>

          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={({ navigation }) => ({
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate("Create")}>
                  <AntDesign name="plus" size={24} color="black" />
                </TouchableOpacity>
              )
            })} />

          <Stack.Screen
            name="Create"
            component={CreateBlog}
          />

          <Stack.Screen
            name="ShowBlog"
            component={ShowBlogScreen}
            options={({ navigation, route}) => ({
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate("Edit", { id: route.params.id})}>
                  <EvilIcons name="pencil" size={32} color="black" />
                </TouchableOpacity>
              )
            })} />
          <Stack.Screen name="Edit" component={EditScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}