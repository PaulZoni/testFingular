import React, { useCallback, useEffect, useState } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Product } from '../types'
import { CardDetail } from '../components/CardDetail'

const styles = StyleSheet.create({
    flex: {
        flex: 1
    },
    contentContainerStyle: {
        paddingHorizontal: 16
    },
})

export const Home = () => {
    const navigation = useNavigation()
    const [products, setProducts] = useState<Product[]>(null)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
            .then((resp) => resp.json())
            .then((resp: Product[]) => {
                setProducts(resp)
            })
    }, [])

    const onPress = useCallback((id: number) => {
        const product = products?.find(prod => prod.id === id)
        navigation.push('Details', { product })
    }, [])

    return (
        <FlatList
            style={styles.flex}
            contentContainerStyle={styles.contentContainerStyle}
            keyExtractor={item => item.id.toString()}
            data={products}
            renderItem={({ item }) => (
                <CardDetail
                    id={item.id}
                    onPress={onPress}
                    img={item.image}
                    price={item.price}
                    title={item.title}
                />
            )}
        />
    )
}
