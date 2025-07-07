import { View, Text, Button } from 'react-native';
import { router } from 'expo-router';

export default function SignIn() {
  return (
    <View>
      <Text>SignIn</Text>
      <Button title="Sign In" onPress={() => router.push("/sign-up")} />
    </View>
  );
}
