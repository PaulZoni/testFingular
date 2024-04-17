import React from 'react'
import { Image, TouchableOpacity, View, StyleSheet, Text } from 'react-native'


const styles = StyleSheet.create({
    card: {
        width: '100%',
        height: 200,
        backgroundColor: '#431',
        marginVertical: 8,
        borderRadius: 8,
        flexDirection: 'row'
    },
    img: {
        flex: 0.5
    },
    cardContent: {
        flex: 0.5
    }
})

type TCardDetailProps = {
    id: number
    img: string
    title: string
    price: number
    onPress: (id: number) => void
}

export const CardDetail = ({ img, title, price, onPress, id }: TCardDetailProps) => {
    return (
        <TouchableOpacity onPress={() => onPress(id)} activeOpacity={0.8} style={styles.card}>
            {img && (
                <Image style={styles.img} source={{
                    uri: img,
                }} />
            )}
            <View style={styles.cardContent}>
                {title && (
                    <Text>
                        {title}
                    </Text>
                )}
                {price && (
                    <Text>
                        {price}
                    </Text>
                )}
            </View>
        </TouchableOpacity>
    )
}
