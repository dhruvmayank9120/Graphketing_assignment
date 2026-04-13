import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import UserListScreen from "../screens/UserListScreen";
import UserDetailScreen from "../screens/UserDetailScreen";
import { User } from "../types/User";

export type RootStackParamList = {
  Users: undefined;
  Details: { user: User };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#4F46E5" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "600" },
        }}
      >
        <Stack.Screen name="Users" component={UserListScreen} />
        <Stack.Screen name="Details" component={UserDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
