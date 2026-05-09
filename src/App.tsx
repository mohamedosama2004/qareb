import React from "react";
import { Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Header from "./components/Header";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import Schedule from "./pages/Schedule";
import LessonDetail from "./pages/LessonDetail";
import AdminUpload from "./pages/AdminUpload";

type RootStackParamList = {
  Tabs: undefined;
  LessonDetail: { id: string };
  AdminUpload: undefined;
};

type TabParamList = {
  Home: undefined;
  Discover: undefined;
  Schedule: undefined;
  About: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

const AboutScreen = () => (
  <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f8fafc",
    }}
  >
    <Text style={{ fontSize: 20, fontWeight: "700", color: "#004d40" }}>
      قريباً...
    </Text>
  </View>
);

function MainTabs() {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: "#004d40",
          tabBarInactiveTintColor: "#94a3b8",
          tabBarStyle: {
            height: 64,
            paddingBottom: 8,
            paddingTop: 6,
          },
          tabBarIcon: ({ color, size }) => {
            const iconMap: Record<
              keyof TabParamList,
              keyof typeof Ionicons.glyphMap
            > = {
              Home: "home-outline",
              Discover: "compass-outline",
              Schedule: "calendar-outline",
              About: "person-outline",
            };
            return (
              <Ionicons
                name={iconMap[route.name as keyof TabParamList]}
                size={size}
                color={color}
              />
            );
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ tabBarLabel: "الرئيسية" }}
        />
        <Tab.Screen
          name="Discover"
          component={Discover}
          options={{ tabBarLabel: "الدروس" }}
        />
        <Tab.Screen
          name="Schedule"
          component={Schedule}
          options={{ tabBarLabel: "الجدول" }}
        />
        <Tab.Screen
          name="About"
          component={AboutScreen}
          options={{ tabBarLabel: "الحساب" }}
        />
      </Tab.Navigator>
    </View>
  );
}

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Tabs" component={MainTabs} />
            <Stack.Screen name="LessonDetail" component={LessonDetail} />
            <Stack.Screen name="AdminUpload" component={AdminUpload} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
