import onboarding1 from "@/assets/images/onboarding1.png";
import onboarding2 from "@/assets/images/onboarding2.png";
import onboarding3 from "@/assets/images/onboarding3.png";
import onboarding4 from "@/assets/images/onboarding4.png";

import home from "@/assets/images/home.png";
import ride from "@/assets/images/ride.png";
import user from "@/assets/images/user.png";
import chat from "@/assets/images/chat.png";
import signup from "@/assets/images/signup.png";

export const images = {
    onboarding1,
    onboarding2,
    onboarding3,
    onboarding4,
    signup,
};

export const icons = {
    home,
    ride,
    user,
    chat,
};

export const onBoarding = [
    {
        id: 1,
        title: "Welcome to BeMyDriver",
        description: "Get safe, reliable, and affordable rides at your fingertips anytime.",
        image: images.onboarding1,
    },
    {
        id: 2,
        title: "Track Your Ride Live",
        description: "Follow your driver’s location in real time and never miss your ride.",
        image: images.onboarding2,
    },
    {
        id: 3,
        title: "Seamless Payments",
        description: "Pay with card, wallet, or cash. It’s fast, secure, and simple.",
        image: images.onboarding3,
    },
    {
        id: 4,
        title: "Book a Ride in Seconds",
        description: "Just enter your destination and we’ll handle the rest.",
        image: images.onboarding4,
    },
];
