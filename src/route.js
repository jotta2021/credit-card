import { View,Text, TouchableOpacity } from "react-native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Icon from 'react-native-vector-icons/AntDesign'
import Home from "./page/home"
import react from "react"
export default function Routes(){

    const Stack = createNativeStackNavigator()
    return(
       <Stack.Navigator>

        <Stack.Screen name="home" component={Home} 
        options={{
            title:'PAYMENT DETAILS',
            headerRight:()=> (
                <TouchableOpacity>
                  <Icon name='plus' size={24}/>  
                </TouchableOpacity>
                
            ),
            headerLeft:()=> (
                <TouchableOpacity>
                   <Icon name='left' size={24}/> 
                </TouchableOpacity>
                
            )
        }}
        />
       </Stack.Navigator>
    )
}

