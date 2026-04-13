import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import UserCard from "../components/UserCard";
import { User } from "../types/User";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigator";

type Props = NativeStackScreenProps<RootStackParamList, "Users">;

export default function UserListScreen({ navigation }: Props) {
  const [users, setUsers] = useState<User[]>([]);
  const [filtered, setFiltered] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = () => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data: User[]) => {
        setUsers(data);
        setFiltered(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch users");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    const result = users.filter(
      (user) =>
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase()),
    );
    setFiltered(result);
  }, [search]);

  if (loading)
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#4F46E5" />
      </View>
    );

  if (error) return <Text style={styles.error}>{error}</Text>;

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="🔍 Search users..."
        value={search}
        onChangeText={setSearch}
        style={styles.search}
      />

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id.toString()}
        refreshing={loading}
        onRefresh={fetchUsers}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Details", { user: item })}
          >
            <UserCard user={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
  },
  search: {
    backgroundColor: "#fff",
    marginHorizontal: 14,
    marginTop: 14,
    marginBottom: 6,
    padding: 12,
    borderRadius: 14,
    elevation: 3,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
  },
  error: {
    textAlign: "center",
    marginTop: 50,
    color: "red",
  },
});
