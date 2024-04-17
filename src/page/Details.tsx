import React from 'react'
import { Image, View, StyleSheet, Text } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1, paddingHorizontal: 16
    },
    img: {
        flex: 0.5
    },
})

export const Details = ({ route: { params } }) => {
    const product = params?.product
    if (!product) return null

    return (
        <View style={styles.container}>
            <Image style={styles.img} source={{
                uri: product.image,
            }} />
            <Text>
                {product.title}
            </Text>
            <Text>
                {product.price}
            </Text>
            <Text>
                {product.description}
            </Text>
        </View>
    )
}
