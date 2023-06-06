import React from "react";
import { Pressable } from "react-native";
import { Surface } from "@react-native-material/core";
import { Text } from "react-native-svg";


const CardAuditorium=()=>{
    return(
        <Pressable>
            <Surface
            elevation={2}
            category="medium"
            style={{}}>
                <Text>test</Text>
            </Surface>
        </Pressable>
    )
}

export default CardAuditorium;