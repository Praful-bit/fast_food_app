import { View, Text, KeyboardAvoidingView, Platform, ScrollView, Dimensions, ImageBackground, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Slot } from "expo-router";
import { images } from "@/constants";
import CustomInput from "@/components/Custominput";
import CustomButton from "@/components/CustomButton";

const _Layout = () => {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === "android" ? "padding" : "height"} >
      <ScrollView className="bg-white h-full" keyboardShouldPersistTaps="handled">
        <View className="w-full relative" style={{ height: Dimensions.get('screen').height / 2.25 }}>
          <ImageBackground
            source={images.loginGraphic}
            className="size-full rounded-b-lg"
            resizeMode="stretch"
          />
          <Image source={images.logo} className="self-center size-48 absolute -bottom-16 z-10"/>
        </View>
          
       <CustomInput 
       placeholder="Ente Your Eamil"
       value={""}
       onChangeText={(text)=>{}}
       label="Email"
       keyboardType="email-address"
       />
       <CustomButton/>
      </ScrollView>
          <Slot />
    </KeyboardAvoidingView>
  );
};

export default _Layout;
