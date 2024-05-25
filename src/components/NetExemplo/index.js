import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import NetInfo from '@react-native-community/netinfo';

export default function Index() {

  const [isInternetReachable, setIsInternetReachable] = useState(false)
  const [strength, setStrength] = useState(25)
  const [icon, setIcon] = useState("network-strength-off")

  useEffect(() => {
    NetInfo.addEventListener(state => {
      setStrength(state.details.strength)
      setIsInternetReachable(state.isInternetReachable)
      setIcon(getNetworkIcon())
    });
  },[]);

  const getNetworkIcon=()=> {
  
    if(!strength){
      return "network-strength-off"
    }else if (strength <= 25) {
      return "network-strength-1"
    }else if (strength <= 50) {
      return "network-strength-2"
    }else if (strength <= 75) {
      return "network-strength-3"
    }else if (strength <= 100) {
      return "network-strength-4"
    } else if(!isInternetReachable){
      return "network-strength-outline"
    }
  
  }

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name={icon} size={100}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});