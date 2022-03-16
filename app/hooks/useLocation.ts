import { useEffect, useState } from 'react';
import * as Location from "expo-location";

interface LocationReturnType {
    latitude: number;
    longitude: number;
}

export default function useLocation(): LocationReturnType {
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

    useEffect(() => {
        (async () => {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            console.log('Permission to access location was denied');
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          console.log(location.coords.latitude, location.coords.longitude);
          setLatitude(location.coords.latitude);
          setLongitude(location.coords.longitude);
        })();
      }, []);
      
    return { latitude, longitude };
}

