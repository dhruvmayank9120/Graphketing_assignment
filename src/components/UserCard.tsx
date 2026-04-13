import { View, Text, StyleSheet } from "react-native";
import { User } from "../types/User";

type Props = {
  user: User;
};

export default function UserCard({ user }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>

      <View style={styles.row}>
        <Text>📞</Text>
        <Text style={styles.value}>{user.phone}</Text>
      </View>

      <View style={styles.row}>
        <Text>🏢</Text>
        <Text style={styles.value}>{user.company.name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 18,
    marginHorizontal: 14,
    marginVertical: 8,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
  },
  email: {
    color: "#6B7280",
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    marginTop: 6,
  },
  value: {
    marginLeft: 8,
    color: "#374151",
  },
});
