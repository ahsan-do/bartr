import { Redirect } from 'expo-router';
import {useFonts} from "expo-font";
import {useEffect} from "react";
import {resetAndNavigate} from "../helpers";
export default function Index() {
    const [loaded] = useFonts({
        Poppins:require('../assets/fonts/Poppins-Regular.ttf'),
        Borel:require('../assets/fonts/Borel-Regular.ttf'),
    })
    useEffect(() => {
        if (loaded){
            const timeoutId = setTimeout(()=>{
                resetAndNavigate("/(auth)/landing");
            }, 1000);
            return ()=>clearTimeout(timeoutId);
        }
    },[loaded])
    return <Redirect href="/splash" />;
}