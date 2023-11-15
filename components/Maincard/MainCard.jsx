import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from "react-native";
import fetchData from '../../api/fetch';

const MainCard = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
      const getData = async () => {
        try {
          const fetchedData = await fetchData();
          setData(fetchedData);
        } catch (error) {
          // Handle errors
        }
      };
  
      getData();
    }, []);
    


  return (
    <View style={{flex: 1,backgroundColor: '#fdfd96',height: 350,}}>    
            <View style={{flex: 1,flexDirection: 'row',height: 220, }}>
                  <View style={{flex: 1,borderRadius: 10,}}>
                        <View style={{flex: 1,marginTop: 5,padding: 25,}}>
                          <Text style={{fontSize: 22,fontWeight: 'bold',}}>50% off</Text>{data ? (
        <View>
          {/* Display the parameters */}
          <Text>Parameter 1: {data.forecasts.period}</Text>
          {/* Add more Text components to display other parameters */}
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
                        </View>
                     </View>

                <View style={{flex: 1,borderRadius: 10,
            marginTop: -40,
                }}>

                </View>
            </View>
        
    </View>
    )
  }


export default MainCard