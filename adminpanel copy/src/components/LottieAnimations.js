import React from 'react';
import {Text,View,StyleSheet,Pressable,Image,}from 'react-native';
import LottieView from "lottie-react-native";

const LottieAnimation =()=>{
    const onPlayPress=()=>{

    }

    return (
        <LottieView
            source={require("../assets/success.json")}
            autoPlay
        />
    )
}