import React from 'react'
import { View, Text, Image, TouchableOpacity, ActivityIndicator  } from "react-native";

const SubCard = () => {
  return (
    <View style={{height: 80,marginTop: 100,}}>
  
  
    <View style={{flex: 1,flexDirection: 'row',}}>
      
      
        <View style={{margin: 20,}}>
        <Text style={{fontSize: 15,fontWeight: 'bold',textAlign: 'center',color: 'gray'}}> jobs</Text>
        <Text style={{fontSize: 20,fontWeight: 'bold',textAlign: 'left',}}>44.8K</Text>
        </View>

        
        <View style={{margin: 20,}}>
        <Text style={{fontSize: 15,fontWeight: 'bold',textAlign: 'center',color: 'gray'}}> jobs</Text>
        <Text style={{fontSize: 20,fontWeight: 'bold',textAlign: 'left',}}>44.8K</Text>
        </View>

        
        <View style={{margin: 20,}}>
        <Text style={{fontSize: 15,fontWeight: 'bold',textAlign: 'center',color: 'gray'}}> jobs</Text>
        <Text style={{fontSize: 20,fontWeight: 'bold',textAlign: 'left',}}>44.8K</Text>
        </View>
  
    </View>
  
  
  
    </View>
  )
}

export default SubCard