import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export const Task = (props) => {
    const [filled, setFilled] = useState(false);

    const handlePress = () => {
        setFilled(!filled);
        props.onPress && props.onPress();
    };

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <Pressable style={styles.square} onPress={handlePress}></Pressable>
                <Text style={[styles.itemText, filled && styles.strikethroughText]}>
                    {props.text}
                </Text>
            </View>
            <View
                style={[
                    styles.circular,
                    filled && styles.filledCircular
                ]}
            ></View>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#FFF",
        padding: 15,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: "#000",
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        maxWidth: "80%",
    },
    strikethroughText: {
        textDecorationLine: "line-through", // Risca o texto
        color: "#aaa",
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: "#55BCF6",
        borderWidth: 2,
        borderRadius: 5,
    },
    filledCircular: {
        backgroundColor: "#55BCF6", // Cor quando clicado
    },
});
