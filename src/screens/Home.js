
import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    useWindowDimensions, Image, TouchableOpacity, FlatList, TextInput
} from 'react-native';
import StarRating from 'react-native-star-rating';

import { sweetsIcon, menuIcon, foodIcon, clothesIcon, locationPinIcon, tourIcon, setIcon, notiIcon, watchIcon, beautyIcon, giftsIcon, shirtIcon, salwarIcon, watchesIcon, locationIcon, cackeIcon, aastmiIcon, kidsIcon } from '../components/icon';


export default function Home({ navigation }) {
    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;
    const Dress = [
        {
            img: sweetsIcon,
            name: 'Amrit Sweets',
            star: 5,
            distance: '2km Away [562] Reviews'
        },
        {
            img: shirtIcon,
            name: 'Ratanlal Clothes',
            star: 4,
            distance: '1km Away [562] Reviews'
        },
        {
            img: salwarIcon,
            name: 'Kids wear',
            star: 3.5,
            distance: '1.5km Away [300] Reviews'
        },
        {
            img: watchesIcon,
            name: 'The watch store',
            star: 4.2,
            distance: '3km Away [800] Reviews'
        },
    ]

    const Banner = [
        {
            img: cackeIcon,
            name: 'The watch store',
            price: '$5'
        },
        {
            img: aastmiIcon,
            name: 'The watch store',
            price: '$25'
        },
        {
            img: kidsIcon,
            name: 'The watch store',
            price: '$19'
        }
    ]

    const Types = [
        {
            img: foodIcon,
            name: 'Food',

        },
        {
            img: clothesIcon,
            name: 'Clothes',
            price: '$25'
        },
        {
            img: tourIcon,
            name: 'Travel',

        },
        {
            img: beautyIcon,
            name: 'Beauty',

        },
        {
            img: tourIcon,
            name: 'Gifts',

        },
        {
            img: watchIcon,
            name: 'Wathes',

        }
    ]

    const onStarRatingPress = (rating) => {
        console.log(rating)
    }

    const _renderDress = (item, index) => {
        return (
            <TouchableOpacity style={{
                height: 230, width: (windowWidth - 45) / 2, backgroundColor: '#fdfdfd', shadowColor: "#000",
                shadowColor: "#000000",
                shadowOffset: {
                    width: 1,
                    height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,
                elevation: 3,
            }}>
                <Image source={item.img} style={{ height: '76%', width: '100%', resizeMode: 'stretch' }} />
                <View style={{ paddingLeft: 10, paddingVertical: 5, justifyContent: 'center' }}>
                    <Text style={{ color: '#000000', fontSize: 14 }}>{item.name}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Image source={locationIcon} style={{ height: 10, width: 10, resizeMode: 'contain' }} />
                        <Text style={{ color: '#919191', fontSize: 8 }}>{item.distance}</Text>
                    </View>

                    <StarRating
                        containerStyle={{ width: 30, marginTop: 2, left: 2 }}
                        fullStarColor='red'
                        starSize={8}
                        disabled={true}
                        maxStars={5}
                        rating={item.star}
                        selectedStar={(rating) => onStarRatingPress(rating)}
                    />
                </View>
            </TouchableOpacity>
        )
    }

    const _itemSeparator = () => {
        return (
            <View style={{ marginBottom: 15 }}>
            </View>
        )
    }

    const _renderHeader = () => {
        return (
            <View style={{ flex: 1, paddingHorizontal: 15, marginBottom: 22 }}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {
                        Banner.map((item, index) => (
                            <TouchableOpacity style={{ zIndex: 1, height: 130, width: 250, marginHorizontal: 7.5, }}>
                                <Image source={item.img} style={{ height: '100%', width: '100%', resizeMode: 'cover', borderRadius: 12 }} />
                                <View style={{ position: 'absolute', bottom: 5, left: 10, zIndex: 2, flexDirection: 'row', justifyContent: 'space-between', width: '90%' }}>
                                    <Text style={{ color: 'white', fontSize: 14, fontWeight: '600' }}>{item.name}</Text>
                                    <Text style={{ color: 'white', fontSize: 16, fontWeight: '800' }}>{item.price}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                        )
                    }
                </ScrollView>
                <View style={{ marginTop: 22, }}>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ alignSelf: 'center', justifyContent: 'space-between', alignItems: 'center' }}
                    >
                        {
                            Types.map((item, index) => (
                                <View>
                                    <TouchableOpacity style={{
                                        height: 50, width: 50, marginHorizontal: 10, borderRadius: 50 / 2, backgroundColor: '#fdfdfd', shadowColor: "#000",
                                        shadowOffset: {
                                            width: 0,
                                            height: 1,
                                        },
                                        shadowOpacity: 0.20,
                                        shadowRadius: 1.41,
                                        elevation: 2,
                                        alignItems: 'center', justifyContent: 'center'
                                    }}>
                                        <Image source={item.img} style={{ height: 20, width: 20, borderRadius: 20 / 2, alignSelf: 'center', }} />
                                    </TouchableOpacity>
                                    <Text style={{ marginTop: 5, color: 'black', fontSize: 9, textAlign: 'center', textAlignVertical: 'bottom' }}>{item.name}</Text>
                                </View>
                            )
                            )
                        }
                    </ScrollView>
                </View>

            </View>
        )
    }
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={{ flex: 0, backgroundColor: 'white' }} />
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 50, marginBottom: 10, paddingHorizontal: 15, }}>
                    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                        <Image source={menuIcon} style={{ height: 20, width: 20, resizeMode: 'contain' }} />
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', width: 200, backgroundColor: 'lightgrey', borderRadius: 20 }}>
                        <Image source={locationPinIcon} style={{ height: 15, width: 15, resizeMode: 'contain', alignSelf: 'center', left: 8 }} />
                        <TextInput
                            selectionColor={'grey'}
                            placeholder={'Search by location'}
                            style={{ height: 30, width: 190, borderRadius: 20, paddingHorizontal: 10, fontSize: 10, color: 'black' }}>
                        </TextInput>
                    </View>


                    <View style={{ width: 60, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity>

                            <Image source={setIcon} style={{ height: 20, width: 20, resizeMode: 'contain' }} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={notiIcon} style={{ height: 20, width: 20, resizeMode: 'contain' }} />
                        </TouchableOpacity>
                    </View>

                </View>

                <FlatList
                    extraData={Dress}
                    data={Dress}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={_renderHeader}
                    ItemSeparatorComponent={_itemSeparator}
                    columnWrapperStyle={{ alignItems: 'center', justifyContent: 'space-between', alignSelf: 'center', width: windowWidth - 30, }}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => _renderDress(item, index)}
                />
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'white',
    },

});

