import React, {useRef, useState} from "react";
import {SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import {router} from "expo-router";
import Swiper from "react-native-swiper";
import {onBoarding} from "@/constants";
import {Image} from "expo-image";

const Onboarding = () => {
    const swiperRef = useRef<Swiper>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <SafeAreaView className="flex-1 bg-white">
            {/* Skip Button */}
            <View className="w-full items-end px-6 pt-6">
                <TouchableOpacity onPress={() => router.replace("/(auth)/sign-up")}>
                    <Text className="text-black text-base font-bold">Skip</Text>
                </TouchableOpacity>
            </View>

            {/* Swiper */}
            <Swiper
                ref={swiperRef}
                loop={false}
                showsPagination={true}
                dot={<View className="w-6 h-1 mx-1 bg-gray-300 rounded-full"/>}
                activeDot={<View className="w-8 h-1 mx-1 bg-blue-500 rounded-full"/>}
                onIndexChanged={(index) => setActiveIndex(index)}
            >
                {onBoarding.map((item, i) => (
                    <View
                        key={item.id}
                        className="flex-1 items-center justify-start px-6 pt-8"
                    >
                        <Image
                            source={item.image}
                            contentFit="contain"
                            style={{
                                width: "100%",
                                height: 280,
                                maxWidth: 350,
                                marginBottom: 24,
                                paddingTop: 50,
                                paddingBottom: 100
                            }}
                        />

                        <Text className="text-3xl font-extrabold text-center text-black mb-3">
                            {item.title}
                        </Text>

                        <Text className="text-base text-center text-gray-600 px-8">
                            {item.description}
                        </Text>

                        {/* Show button only on the last screen */}
                        {i === onBoarding.length - 1 && (
                            <TouchableOpacity
                                onPress={() => router.replace("/(auth)/sign-up")}
                                className="mt-12 bg-blue-600 px-8 py-3 rounded-full shadow-md"
                            >
                                <Text className="text-white font-semibold text-lg text-center">
                                    Get Started
                                </Text>
                            </TouchableOpacity>
                        )}
                    </View>
                ))}
            </Swiper>
        </SafeAreaView>
    );
};

export default Onboarding;
