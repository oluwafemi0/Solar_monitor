import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ActivityIndicator  } from "react-native";
import fetchData from '../../api/fetch';
import SubCard from '../Subcard/SubCard';

const SlotCard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [nextFetchTime, setNextFetchTime] = useState(null);

  const fetchDataAtInterval = () => {
    fetchData(setData, setLoading);
  };

  const getCurrentNigerianTime = () => {
    // Adjust for Nigerian time offset (UTC +1)
    const nigerianOffset = 60; // Nigerian offset is 1 hour ahead of UTC
    const now = new Date();
    const nigerianTime = new Date(now.getTime() + nigerianOffset * 60000);
    return nigerianTime;
  };

  const isWithinTimeFrame = () => {
    const nigerianTime = getCurrentNigerianTime();
    const hour = nigerianTime.getHours();
    return hour >= 8 && hour < 17; // Check if the current hour is between 8 am and 5 pm
  };

  useEffect(() => {
    if (isWithinTimeFrame()) {
      fetchDataAtInterval(); // Initial fetch

      const interval = setInterval(fetchDataAtInterval, 60 * 60 * 1000); // Fetch data every hour

      return () => {
        clearInterval(interval); // Clean up the interval on component unmount
      };
    } else {
      // Calculate time till next fetch at 8 am
      const currentTime = getCurrentNigerianTime();
      const nextFetch = new Date(currentTime);
      nextFetch.setHours(8, 0, 0, 0);

      if (currentTime.getHours() >= 17) {
        // If it's already past 5 pm, set next fetch for the next day
        nextFetch.setDate(nextFetch.getDate() + 1);
      }

      setNextFetchTime(nextFetch);
    }
  }, []);



  return (
    <View>
        <View style={{flex: 1,flexDirection: 'row',height: 510, }}>
      <View style={{height: 500, width:280, margin: 5,marginLeft: 0,marginRight: 0, backgroundColor: '#89cff0', borderTopRightRadius: 35, borderBottomRightRadius: 35, justifyContent: 'center',alignItems: 'center',}}>
      <View style={{justifyContent: 'center',alignItems: 'center',marginBottom: 10,}}>
         <View style={{width: 50, height: 50,justifyContent: 'center',alignItems: 'center', backgroundColor: '#fff', borderRadius: 50}}>
                          <Image resizeMode='contain'style={{width: 35, height: 30, borderRadius: 50}}dimension='100%' />
                      </View>

      </View>
      <View>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : nextFetchTime ? (
        <Text style={{fontSize: 15,fontWeight: 'bold',textAlign: 'center',color: 'gray'}}>
          Information will be available at 8 am. Time remaining: {`${Math.floor((nextFetchTime - Date.now()) / (1000 * 60 * 60))} hours`}
        </Text>
      ) : (
        <View>
          {data ? (
            <View>
              <Text style={{fontSize: 25,fontWeight: 'bold',textAlign: 'center',color: 'gray'}}>Pv Prodution: {data.estimated_actuals[0].pv_estimate} Kw</Text>
              {/* Add more Text components to display other parameters */}
            </View>
          ) : (
            <Text style={{fontSize: 25,fontWeight: 'bold',textAlign: 'center',color: 'gray'}}>No data available</Text>
          )}



          <SubCard />
        </View>
      )}
      </View>
  </View>

  <View style={{flex: 1,borderRadius: 10,margin: 5,backgroundColor: '#fff',}}>


  <View style={{flex: 1,flexDirection: 'row',borderTopLeftRadius: 35,margin: 5,marginTop: 0,marginLeft: 0,marginRight: 0,justifyContent: 'center',alignItems: 'center',}}>
    
    <View style={{justifyContent: 'center',alignItems: 'center',marginBottom: 10,}}>
         

      </View>
      <View style={{margin: 10,}}>
      <Text style={{fontSize: 15,fontWeight: 'bold',textAlign: 'center',color: 'gray'}}> jobs</Text>
      <Text style={{fontSize: 20,fontWeight: 'bold',textAlign: 'left',}}>44.8K</Text>
      </View>

  </View>

<View style={{flex: 1,flexDirection: 'row',margin: 5,marginTop: 0,marginLeft: 0,marginRight: 0,justifyContent: 'center',alignItems: 'center',}}>
    
    <View style={{justifyContent: 'center',alignItems: 'center',marginBottom: 10,}}>
        

      </View>
      <View style={{margin: 10,}}>
      <Text style={{fontSize: 15,fontWeight: 'bold',textAlign: 'center',color: 'gray'}}> jobs</Text>
      <Text style={{fontSize: 20,fontWeight: 'bold',textAlign: 'left',}}>44.8K</Text>
      </View>

  </View>

  <View style={{flex: 1,flexDirection: 'row',borderBottomLeftRadius: 35, margin: 5,marginBottom: 0,marginLeft: 0,marginRight: 0,justifyContent: 'center',alignItems: 'center',}}>
    
    <View style={{justifyContent: 'center',alignItems: 'center',marginBottom: 10,}}>
        

      </View>
      <View style={{margin: 10,}}>
      <Text style={{fontSize: 15,fontWeight: 'bold',textAlign: 'center',color: 'gray'}}>Remote </Text>
      <Text style={{fontSize: 20,fontWeight: 'bold',textAlign: 'left',}}>44.8K</Text>
      </View>


  </View>

  </View>
    </View>
    </View>
  )
}


export default SlotCard