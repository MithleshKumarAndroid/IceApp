import React from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";

export interface Props {
    loader?: boolean
}
const ProgressBar = (props: Props) => {
    const { loader } = props;
    if (loader) {
        return (
            <View style={styles.main} >
                <ActivityIndicator color={"#02A4AE"} size="large" />
            </View>
        )

    }
    else {
        return null
    }
}
const styles = StyleSheet.create({
    main: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
        zIndex: 10,
    }
})

export default ProgressBar;