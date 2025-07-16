import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "@/components/CustomHeader"; // Ensure this is styled properly
import { Feather, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import useAuthStore from "@/store/auth.store";
import CustomButton from "@/components/CustomButton";

const profileData = [
  { icon: "user", label: "Full Name", value: "Adrian Hajdin" },
  { icon: "mail", label: "Email", value: "adrian@jsmastery.com" },
  { icon: "phone", label: "Phone number", value: "+1 555 123 4567" },
  {
    icon: "home",
    label: "Address 1 - (Home)",
    value: "123 Main Street, Springfield, IL 62704",
  },
  {
    icon: "briefcase",
    label: "Address 2 - (Work)",
    value: "221B Rose Street, Foodville, FL 12345",
  },
];

const Profile = () => {
  const { items } = useAuthStore();
  console.log(items, "hey items");
  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <FontAwesome name={item.icon} size={20} color="#f59e0b" />
      <View style={{ marginLeft: 12 }}>
        <Text style={styles.label}>{item.label}</Text>
        <Text style={styles.value}>{item.value}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <FlatList
        data={profileData}
        keyExtractor={(item) => item.label}
        renderItem={renderItem}
        contentContainerStyle={styles.container}
        ListHeaderComponent={() => (
          <>
            <CustomHeader title="Profile" />
            <View style={styles.avatarContainer}>
              <Image
                source={{
                  uri: "https://randomuser.me/api/portraits/men/32.jpg",
                }}
                style={styles.avatar}
              />
              <TouchableOpacity style={styles.editIcon}>
                <Feather name="edit" size={18} color="#fff" />
              </TouchableOpacity>
            </View>
            <View style={styles.card}>
              {/* Profile fields rendered by FlatList */}
            </View>
          </>
        )}
        ListFooterComponent={() => (
          <View style={styles.footer}>
            <CustomButton title="Edit" />

            <CustomButton
              title="Logout"
              style="bg-white border border-red-600 rounded-full py-3 px-8 mt-2"
              textStyle="text-red-500 font-bold"
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 40,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  avatarContainer: {
    alignItems: "center",
    marginBottom: 20,
    position: "relative",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  editIcon: {
    position: "absolute",
    bottom: 0,
    right: "35%",
    backgroundColor: "#f59e0b",
    borderRadius: 999,
    padding: 6,
  },
  card: {
    backgroundColor: "#f9fafb",
    borderRadius: 16,
    marginTop: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  label: {
    fontSize: 12,
    color: "#6b7280",
  },
  value: {
    fontSize: 14,
    color: "#111827",
    fontWeight: "500",
  },
  footer: {
    marginTop: 20,
    alignItems: "center",
  },
});

export default Profile;
