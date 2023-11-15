import { useState } from "react";
import { View, Text, Image, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import MainCard from "../components/Maincard/MainCard";
import SlotCard from "../components/Slotcard/SlotCard";


const Home = () => {
    const router = useRouter();

    return (
        <SafeAreaView >
            <Stack.Screen 
             options={{
                    headerStyle: {backgroundColor: '#fff'},
                    headerShadowVisible: false,
                   
                    headerTitle: ''
                }} />

            <ScrollView showsVerticalScrollIndicator={false}  style={{backgroundColor: '#fff',}}>
                <View style={{
                    flex: 1,
                    backgroundColor: '#fff',
                }}>
                  
                  <SlotCard />

                </View>

            </ScrollView>
            </SafeAreaView>
    )
}

export default Home;