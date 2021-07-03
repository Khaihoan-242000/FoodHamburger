import React from 'react'
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native'

import { icons, images, SIZES, COLORS, FONTS } from '../constants'


const Home = () => {
    // Data 
    const categoryData = [
        {
            id: 1,
            name: "Hamburger",
            icon: icons.hamburger,
        },
        {
            id: 2,
            name: "Hot Dot",
            icon: icons.hotDog,
        },
        {
            id: 3,
            name: "Pizza",
            icon: icons.pizza,
        },
        {
            id: 4,
            name: "Drink",
            icon: icons.softDrink,
        },
        {
            id: 5,
            name: "Dessert",
            icon: icons.dessert,
        },
        {
            id: 6,
            name: "Sushi",
            icon: icons.sushi,
        },
        {
            id: 7,
            name: "Donut",
            icon: icons.donut,
        },
        {
            id: 8,
            name: "Rice Bowl",
            icon: icons.riceBowl,
        },
        {
            id: 9,
            name: "Noodle",
            icon: icons.noodle,
        },
        {
            id: 10,
            name: "French Fries",
            icon: icons.frenchFries,
        },

    ]

    // price rating
    const affordable = 1
    const fairPrice = 2
    const expensive = 3

    const restaurantData = [
        {
            id: 1,
            name: "ByProgrammers Burger",
            rating: 4.8,
            categories: [5, 7],
            priceRating: affordable,
            photo: images.populi01,
            duration: "30",
            location: {
                latitude: 1.5347282806345879,
                longitude: 110.35632207358996,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Amy"
            },
            menu: [
                {
                    menuId: 1,
                    name: "Crispy Chicken Burger",
                    photo: images.crispy_chicken_burger,
                    description: "Burger with crispy chicken, cheese and lettuce",
                    calories: 200,
                    price: 10
                },
                {
                    menuId: 2,
                    name: "Crispy Chicken Burger with Honey Mustard",
                    photo: images.honey_mustard_chicken_burger,
                    description: "Crispy Chicken Burger with Honey Mustard Coleslaw",
                    calories: 250,
                    price: 15
                },
                {
                    menuId: 3,
                    name: "Crispy Baked French Fries",
                    photo: images.baked_fries,
                    description: "Crispy Baked French Fries",
                    calories: 194,
                    price: 8
                }
            ]
        },
        {
            id: 2,
            name: "ByProgrammers Pizza",
            rating: 4.8,
            categories: [2, 4, 6],
            priceRating: expensive,
            photo: images.populi02,
            duration: "15",
            location: {
                latitude: 1.556306570595712,
                longitude: 110.35504616746915,
            },
            courier: {
                avatar: images.avatar_2,
                name: "Jackson"
            },
            menu: [
                {
                    menuId: 4,
                    name: "Hawaiian Pizza",
                    photo: images.hawaiian_pizza,
                    description: "Canadian bacon, homemade pizza crust, pizza sauce",
                    calories: 250,
                    price: 15
                },
                {
                    menuId: 5,
                    name: "Tomato & Basil Pizza",
                    photo: images.pizza,
                    description: "Fresh tomatoes, aromatic basil pesto and melted bocconcini",
                    calories: 250,
                    price: 20
                },
                {
                    menuId: 6,
                    name: "Tomato Pasta",
                    photo: images.tomato_pasta,
                    description: "Pasta with fresh tomatoes",
                    calories: 100,
                    price: 10
                },
                {
                    menuId: 7,
                    name: "Mediterranean Chopped Salad ",
                    photo: images.salad,
                    description: "Finely chopped lettuce, tomatoes, cucumbers",
                    calories: 100,
                    price: 10
                }
            ]
        },
        {
            id: 3,
            name: "ByProgrammers Hotdogs",
            rating: 4.8,
            categories: [3],
            priceRating: expensive,
            photo: images.populi03,
            duration: "20",
            location: {
                latitude: 1.5238753474714375,
                longitude: 110.34261833833622,
            },
            courier: {
                avatar: images.avatar_3,
                name: "James"
            },
            menu: [
                {
                    menuId: 8,
                    name: "Chicago Style Hot Dog",
                    photo: images.chicago_hot_dog,
                    description: "Fresh tomatoes, all beef hot dogs",
                    calories: 100,
                    price: 20
                }
            ]
        },
        {
            id: 4,
            name: "ByProgrammers Sushi",
            rating: 4.8,
            categories: [8],
            priceRating: expensive,
            photo: images.populi01,
            duration: "10",
            location: {
                latitude: 1.5578068150528928,
                longitude: 110.35482523764315,
            },
            courier: {
                avatar: images.avatar_4,
                name: "Ahmad"
            },
            menu: [
                {
                    menuId: 9,
                    name: "Sushi sets",
                    photo: images.sushi,
                    description: "Fresh salmon, sushi rice, fresh juicy avocado",
                    calories: 100,
                    price: 50
                }
            ]
        },
        {
            id: 5,
            name: "ByProgrammers Cuisine",
            rating: 4.8,
            categories: [1, 2],
            priceRating: affordable,
            photo: images.populi02,
            duration: "15",
            location: {
                latitude: 1.558050496260768,
                longitude: 110.34743759630511,
            },
            courier: {
                avatar: images.avatar_4,
                name: "Muthu"
            },
            menu: [
                {
                    menuId: 10,
                    name: "Kolo Mee",
                    photo: images.kolo_mee,
                    description: "Noodles with char siu",
                    calories: 200,
                    price: 5
                },
                {
                    menuId: 11,
                    name: "Sarawak Laksa",
                    photo: images.sarawak_laksa,
                    description: "Vermicelli noodles, cooked prawns",
                    calories: 300,
                    price: 8
                },
                {
                    menuId: 12,
                    name: "Nasi Lemak",
                    photo: images.nasi_lemak,
                    description: "A traditional Malay rice dish",
                    calories: 300,
                    price: 8
                },
                {
                    menuId: 13,
                    name: "Nasi Briyani with Mutton",
                    photo: images.nasi_briyani_mutton,
                    description: "A traditional Indian rice dish with mutton",
                    calories: 300,
                    price: 8
                },

            ]
        },
        {

            id: 6,
            name: "ByProgrammers Dessets",
            rating: 4.9,
            categories: [9, 10],
            priceRating: affordable,
            photo: images.populi03,
            duration: "35",
            location: {
                latitude: 1.5573478487252896,
                longitude: 110.35568783282145,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Jessie"
            },
            menu: [
                {
                    menuId: 12,
                    name: "Teh C Peng",
                    photo: images.teh_c_peng,
                    description: "Three Layer Teh C Peng",
                    calories: 100,
                    price: 2
                },
                {
                    menuId: 13,
                    name: "ABC Ice Kacang",
                    photo: images.ice_kacang,
                    description: "Shaved Ice with red beans",
                    calories: 100,
                    price: 3
                },
                {
                    menuId: 14,
                    name: "Kek Lapis",
                    photo: images.kek_lapis,
                    description: "Layer cakes",
                    calories: 300,
                    price: 20
                }
            ]

        }
    ]

    const listProduct = [
        {
            id: 1,
            name: "ByProgrammers Burger",
            rating: 4.8,
            categories: [5, 7],
            priceRating: affordable,
            photo: images.product1,
            duration: "30 - 45 min",
            location: {
                latitude: 1.5347282806345879,
                longitude: 110.35632207358996,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Amy"
            },
            menu: [
                {
                    menuId: 1,
                    name: "Crispy Chicken Burger",
                    photo: images.crispy_chicken_burger,
                    description: "Burger with crispy chicken, cheese and lettuce",
                    calories: 200,
                    price: 10
                },
                {
                    menuId: 2,
                    name: "Crispy Chicken Burger with Honey Mustard",
                    photo: images.honey_mustard_chicken_burger,
                    description: "Crispy Chicken Burger with Honey Mustard Coleslaw",
                    calories: 250,
                    price: 15
                },
                {
                    menuId: 3,
                    name: "Crispy Baked French Fries",
                    photo: images.baked_fries,
                    description: "Crispy Baked French Fries",
                    calories: 194,
                    price: 8
                }
            ]
        },
        {
            id: 2,
            name: "ByProgrammers Pizza",
            rating: 4.8,
            categories: [2, 4, 6],
            priceRating: expensive,
            photo: images.pizza_restaurant,
            duration: "15 - 20 min",
            location: {
                latitude: 1.556306570595712,
                longitude: 110.35504616746915,
            },
            courier: {
                avatar: images.avatar_2,
                name: "Jackson"
            },
            menu: [
                {
                    menuId: 4,
                    name: "Hawaiian Pizza",
                    photo: images.hawaiian_pizza,
                    description: "Canadian bacon, homemade pizza crust, pizza sauce",
                    calories: 250,
                    price: 15
                },
                {
                    menuId: 5,
                    name: "Tomato & Basil Pizza",
                    photo: images.pizza,
                    description: "Fresh tomatoes, aromatic basil pesto and melted bocconcini",
                    calories: 250,
                    price: 20
                },
                {
                    menuId: 6,
                    name: "Tomato Pasta",
                    photo: images.tomato_pasta,
                    description: "Pasta with fresh tomatoes",
                    calories: 100,
                    price: 10
                },
                {
                    menuId: 7,
                    name: "Mediterranean Chopped Salad ",
                    photo: images.salad,
                    description: "Finely chopped lettuce, tomatoes, cucumbers",
                    calories: 100,
                    price: 10
                }
            ]
        },
        {
            id: 3,
            name: "ByProgrammers Hotdogs",
            rating: 4.8,
            categories: [3],
            priceRating: expensive,
            photo: images.hot_dog_restaurant,
            duration: "20 - 25 min",
            location: {
                latitude: 1.5238753474714375,
                longitude: 110.34261833833622,
            },
            courier: {
                avatar: images.avatar_3,
                name: "James"
            },
            menu: [
                {
                    menuId: 8,
                    name: "Chicago Style Hot Dog",
                    photo: images.chicago_hot_dog,
                    description: "Fresh tomatoes, all beef hot dogs",
                    calories: 100,
                    price: 20
                }
            ]
        },
        {
            id: 4,
            name: "ByProgrammers Sushi",
            rating: 4.8,
            categories: [8],
            priceRating: expensive,
            photo: images.japanese_restaurant,
            duration: "10 - 15 min",
            location: {
                latitude: 1.5578068150528928,
                longitude: 110.35482523764315,
            },
            courier: {
                avatar: images.avatar_4,
                name: "Ahmad"
            },
            menu: [
                {
                    menuId: 9,
                    name: "Sushi sets",
                    photo: images.sushi,
                    description: "Fresh salmon, sushi rice, fresh juicy avocado",
                    calories: 100,
                    price: 50
                }
            ]
        },
        {
            id: 5,
            name: "ByProgrammers Cuisine",
            rating: 4.8,
            categories: [1, 2],
            priceRating: affordable,
            photo: images.noodle_shop,
            duration: "15 - 20 min",
            location: {
                latitude: 1.558050496260768,
                longitude: 110.34743759630511,
            },
            courier: {
                avatar: images.avatar_4,
                name: "Muthu"
            },
            menu: [
                {
                    menuId: 10,
                    name: "Kolo Mee",
                    photo: images.kolo_mee,
                    description: "Noodles with char siu",
                    calories: 200,
                    price: 5
                },
                {
                    menuId: 11,
                    name: "Sarawak Laksa",
                    photo: images.sarawak_laksa,
                    description: "Vermicelli noodles, cooked prawns",
                    calories: 300,
                    price: 8
                },
                {
                    menuId: 12,
                    name: "Nasi Lemak",
                    photo: images.nasi_lemak,
                    description: "A traditional Malay rice dish",
                    calories: 300,
                    price: 8
                },
                {
                    menuId: 13,
                    name: "Nasi Briyani with Mutton",
                    photo: images.nasi_briyani_mutton,
                    description: "A traditional Indian rice dish with mutton",
                    calories: 300,
                    price: 8
                },

            ]
        },
        {

            id: 6,
            name: "ByProgrammers Dessets",
            rating: 4.9,
            categories: [9, 10],
            priceRating: affordable,
            photo: images.kek_lapis_shop,
            duration: "35 - 40 min",
            location: {
                latitude: 1.5573478487252896,
                longitude: 110.35568783282145,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Jessie"
            },
            menu: [
                {
                    menuId: 12,
                    name: "Teh C Peng",
                    photo: images.teh_c_peng,
                    description: "Three Layer Teh C Peng",
                    calories: 100,
                    price: 2
                },
                {
                    menuId: 13,
                    name: "ABC Ice Kacang",
                    photo: images.ice_kacang,
                    description: "Shaved Ice with red beans",
                    calories: 100,
                    price: 3
                },
                {
                    menuId: 14,
                    name: "Kek Lapis",
                    photo: images.kek_lapis,
                    description: "Layer cakes",
                    calories: 300,
                    price: 20
                }
            ]

        }


    ]

    const [categories, setCategories] = React.useState(categoryData)

    const [selectedCategory, setSelectedCategory] = React.useState(null)
    const [restaurants, setRestaurants] = React.useState(restaurantData)
    const [ listproducts, setListPorducts ] = React.useState(listProduct)
    // onSelectCategory
    function onSelectCategory(category) {
        // Filter restaurants
        let restaurantList = restaurantData.filter(a => a.categories.includes(category.id))
        setRestaurants(restaurantList)
        setSelectedCategory(category)
    }
    // getCategoryNameById
    function getCategoryNameById(id) {
        let category = categories.filter(a => a.id == id)

        if (category.length > 0)
            return category[0].name

        return ""
    }
    
    // Render Header
    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row', height: 50 }}>
                <TouchableOpacity style={{ width: 50, paddingLeft: SIZES.padding * 2, justifyContent: 'center' }}>
                    <Image 
                        source={icons.address}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>

                <View style={{ flex: 1, alignItems: 'center', justifyContent:'center', left: 10 }}>
                    <Text style={{ fontSize: SIZES.body3 }}>Nguyễn Huệ, Q1, Tp HCM</Text>
                </View>

                <TouchableOpacity
                    style={{ 
                        paddingRight: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                >
                    <View
                        style={{
                            width: 50,
                            height: 50,
                            backgroundColor: COLORS.main,
                            borderRadius: 10,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Image 
                            source={images.avatar_5}
                            style={{
                                width: 40,
                                height: 40,
                            }}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    // Search
    function search() {
        return (
            <View 
                style={{
                    marginLeft: SIZES.padding * 2,
                    marginRight: SIZES.padding * 2,
                    // width: '100%',
                    marginTop: 30,
                    height: 50,
                    backgroundColor: '#EEEDEF',
                    borderRadius: 15,
                    // justifyContent: 'center',
                    alignItems: 'center',
                    paddingLeft: 10,
                    flexDirection: 'row'
                }}
            >
                <Image 
                    source={icons.search}
                    style={{
                        width: 30,
                        height: 30,
                        tintColor: COLORS.extra
                    }}
                />
                <Text style={{fontSize: SIZES.body3, marginLeft: 10, color: COLORS.extra}}>Search...</Text>
            </View>
        )
    }
    // renderMainCategories
    function renderMainCategories() {
        const renderItem = ({item}) => {
            return (
                <TouchableOpacity
                    style={{
                        padding: SIZES.padding,
                        alignItems: 'center',
                        justifyContent: 'center',
                        ...style.shadow
                    }}
                    onPress={() => onSelectCategory(item)}
                >
                    <View 
                        style={{ 
                            width: 70, 
                            height: 70,
                            alignItems: 'center',
                            borderRadius: 20,
                            justifyContent: 'center',  
                            backgroundColor: (selectedCategory?.id == item.id) ? COLORS.main : '#fff', 
                        }}
                     >
                        <Image 
                            source={item.icon}
                            style={{
                                width: 50,
                                height: 50,
                            }}
                        />
                    </View>
                    <Text style={{ marginTop: 5}}>{item.name}</Text>
                </TouchableOpacity>
            )
        }

        return (
            <View style={{ paddingLeft: SIZES.padding * 2, paddingRight: SIZES.padding * 2 }}>
                <FlatList 
                    data={categoryData}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}                
                />
            </View>
        )
    }
    // renderRestaurantList
    function renderRestaurantList() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{
                    marginTop: 30,
                    width: 150,
                    height: 230,
                    backgroundColor: '#fff',
                    borderRadius: 20,
                    marginLeft: SIZES.padding,
                    marginRight: SIZES.padding,
                    shadow: style.shadow
                }}
            >
                {/* Image */}
                <View style={{marginTop: 10}}>
                    <View style={{ paddingTop: 20, paddingLeft: 10}}>
                        <Text style={{ fontSize: SIZES.body2, fontWeight: '600' }}>Price</Text>
                        <Text style={{ fontSize: SIZES.body2 }}>{item.duration}$</Text>
                    </View>
                    <Image 
                        source={item.photo}
                        style={{
                            width: '100%',
                            height: 200,
                            position: 'absolute',
                            top: -50,
                            right: -40
                        }}
                    />
                </View>

                {/* Restaurant Info */}
                <Text style={{ alignItems: 'center', justifyContent: 'center', marginTop: 50, padding: SIZES.padding * 2, fontWeight: '600', fontSize: SIZES.body3 }}>{item.name}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingLeft: SIZES.padding, paddingRight: SIZES.padding, marginTop: -10 }}>
                    {
                        [1,2,3,4,5].map(item => (
                            <Image 
                                source={icons.star}
                                // resizeMode="contain"
                                style={{
                                    width: 20,
                                    height: 20
                                }}
                            />
                        ))
                    }
                </View>
                
            </TouchableOpacity>
        )
        return (
            <View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginLeft: SIZES.padding * 2,
                        marginRight: SIZES.padding * 2,

                    }}
                >
                    <Text style={{ fontSize: SIZES.h2 }}>Popularity</Text>
                    <Image 
                        source={icons.arrow}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: COLORS.main
                        }}
                    />
                </View>
                <FlatList 
                    data={restaurants}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{
                        // paddingHorizontal: SIZES.padding * 2,
                        // paddingLeft: -30,
                        paddingBottom: 30,
                        shadow: style.shadow
                    }}
                />
            </View>
        )   
    }
    // renderListProduct
    function renderListProduct() {
        const renderItem = ({item}) => {
            return(
                <TouchableOpacity
                style={{
                    marginTop: SIZES.padding * 2,
                    marginLeft: SIZES.padding * 2,
                    marginRight: SIZES.padding * 2,
                }}
                onPress={() => navigation.navigate("Restaurant", {
                    item,
                    currentLocation
                })}
            >
                {/* Image */}
                <View
                    style={{
                        marginBottom: SIZES.padding
                    }}
                >
                    <Image
                        source={item.photo}
                        resizeMode="cover"
                        style={{
                            width: "100%",
                            height: 200,
                            borderRadius: SIZES.radius
                        }}
                    />

                    <View
                        style={{
                            position: 'absolute',
                            // left: 0,
                            bottom: 0,
                            height: 50,
                            width: SIZES.width * 0.3,
                            backgroundColor: COLORS.white,
                            borderTopRightRadius: SIZES.radius,
                            borderBottomLeftRadius: SIZES.radius,
                            alignItems: 'center',
                            justifyContent: 'center',
                            ...style.shadow
                        }}
                    >
                        <Text style={{ ...FONTS.h4 }}>{item.duration}</Text>
                    </View>
                </View>

                {/* Restaurant Info */}
                <Text style={{ ...FONTS.body2 }}>{item.name}</Text>

                <View
                    style={{
                        marginTop: SIZES.padding,
                        flexDirection: 'row'
                    }}
                >
                    {/* Rating */}
                    <Image 
                        source={icons.star}
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: COLORS.primary,
                            marginRight: 10
                        }}
                    />

                    <Text style={{ ...FONTS.body3 }}>{item.rating}</Text>

                    {/* Categories */}
                    <View
                        style={{
                            flexDirection: 'row',
                            marginLeft: 10
                        }}
                    >
                        {
                            item.categories.map(categoryId => {
                                return (
                                    <View style={{
                                        flexDirection: 'row', 
                                        }}
                                        key={categoryId}
                                    >
                                        <Text style={{ ...FONTS.body3 }}>{getCategoryNameById(categoryId)}</Text>
                                        <Text style={{ ...FONTS.h3, color: COLORS.darkgray }}> . </Text>
                                    </View>
                                )
                            })
                        }
                    </View>

                    {/* Price */}
                    {
                        [1,2,3].map(priceRating => (
                            <Text
                                style={{
                                    ...FONTS.body3,
                                    color: (priceRating <= item.priceRating) ? COLORS.black : COLORS.darkgray
                                }}
                                key={priceRating}
                            >$</Text>
                        ))
                    }
                </View>
            </TouchableOpacity>
            )
        }
        return (
            <View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginLeft: SIZES.padding * 2,
                        marginRight: SIZES.padding * 2,

                    }}
                >
                    <Text style={{ fontSize: SIZES.h2 }}>List Product</Text>
                    <Image 
                        source={icons.arrow}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: COLORS.main
                        }}
                    />
                </View>
                <FlatList 
                    data={listproducts}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{
                        paddingBottom: 30,
                        shadow: style.shadow
                    }}
                />
            </View>
        ) 
    }

    return (
        <ScrollView>
            <SafeAreaView style={style.container}>
                {renderHeader()}
                {search()}
                {renderMainCategories()}
                {renderRestaurantList()}
                {renderListProduct()}
            </SafeAreaView>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.bg,
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 1
    }
})

export default Home