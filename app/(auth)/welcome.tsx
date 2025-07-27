import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native'
import React, {useRef, useState} from 'react'
import {router} from "expo-router";
import Swiper from 'react-native-swiper';
import {onBoarding} from "@/constants";
import {Image} from "expo-image";

const Onboarding = () => {
    const swiperRef = useRef<Swiper>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <SafeAreaView className="flex h-full items-center justify-between bg-white">
            {/* Just a button skip button*/}
            <TouchableOpacity onPress={() => {
                router.replace('/(auth)/sign-up')
            }} className="w-full flex justify-end items-end p-5">
                <Text className="text-black text-1xl font-bold">Skip</Text>
            </TouchableOpacity>
            <Swiper
                ref={swiperRef}
                loop={false}
                showsPagination={true}
                dot={
                    <View className={"w-[32px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full"}/>
                }
                activeDot={
                    <View className={"w-[32px] h-[4px] mx-1 bg-[#0286FF] rounded-full"}/>
                }
                onIndexChanged={(index) => setActiveIndex(index)}>

                {onBoarding.map((item, i) => (
                    <View key={item.id} className={"flex items-center justify-center p-6"}>
                        {item.image && (
                            <Image source={item.image} resizeMode="contain" className={"w-64 h-64"}/>
                        )}
                        <Text className={"text-2xl font-bold text-center text-black mb-3"}>{item.title}</Text>
                        <Text className={"text-base text-center text-gray-600 px-4"}>{item.description}</Text>
                        {i === onBoarding.length - 1 && (
                            <TouchableOpacity onPress={() => router.replace('/(auth)/sign-up')}>
                                <Text className={'text-white font-semibold text-lg'}>Get Started</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                ))}
            </Swiper>
        </SafeAreaView>
    )
}
export default Onboarding