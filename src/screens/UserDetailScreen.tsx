import { View, Text, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigator";

type Props = NativeStackScreenProps<RootStackParamList, "Details">;

export default function UserDetailScreen({ route }: Props) {
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>

      <View style={styles.card}>
        <Text>📞 {user.phone}</Text>
        <Text>🌐 {user.website}</Text>
        <Text>🏢 {user.company.name}</Text>
        <Text>
          📍 {user.address.street}, {user.address.city}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "700",
  },
  email: {
    color: "#6B7280",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 16,
    elevation: 4,
  },
});
