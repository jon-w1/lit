/**
 * Created by jwilliamson on 3/16/17.
 */
import React from 'react';
import {
    ActivityIndicator,
    Button,
    Image,
    Picker,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { NavigationActions } from 'react-navigation';
const resetAction = NavigationActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({
            routeName: 'Main',
            params: {
                newTab: 'Cart'
            }
        })
    ]
});
class MatchFound extends React.Component {
    static navigationOptions = {
        header: {
            title: 'Match Found',
            tintColor: 'white',
            style: {
                backgroundColor: '#00A4F4'
            },
        }
    };

    render() {
        const items = [
            { key: 0, label: 'Fruits', value:'some value' },
            { key: 1, label: 'Fruits', value:{this: "could", be:"anything"} },
        ];
        const { params } = this.props.navigation.state;
        return (
            <View style={styles.container}>
                <View style={styles.product}>
                    <View style={styles.product_image_box}>
                        <Image source={{uri: 'https://cdn1.bigcommerce.com/server800/h8u3j/products/7604/images/15125/25A_SW__26395.1455117395.1280.1280.jpg'}}
                                style={styles.product_image}
                        />
                    </View>
                    <View style={styles.product_desc}>
                        <Text style={styles.product_title}>LIT Bulbrite A19</Text>
                        <Text style={styles.product_detail}>2,000 Hour Lifespan</Text>
                        <Text style={styles.product_detail}>190 Lumens</Text>
                        <Text style={styles.product_price}>$3.50</Text>
                    </View>
                </View>
                <View style={styles.customizations}>
                    <Text style={styles.customization_title}>Customizations</Text>
                    <View style={styles.bulb_color}>
                        <TouchableOpacity style={styles.bulb_color_choice}>
                            <Image source={{uri: 'https://cdn1.bigcommerce.com/server800/h8u3j/products/7604/images/15125/25A_SW__26395.1455117395.1280.1280.jpg'}}
                                   style={{width: 60, height: 60}}
                            />
                            <Text style={styles.bulb_color_choice_text}>Soft White</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.bulb_color_choice}>
                            <Image source={{uri: 'https://cdn1.bigcommerce.com/server800/h8u3j/products/7604/images/15125/25A_SW__26395.1455117395.1280.1280.jpg'}}
                                   style={{width: 60, height: 60}}
                            />
                            <Text style={styles.bulb_color_choice_text}>Clear</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.selectBox}>
                        <Text>25 Watts (Standard)</Text>
                        <Image source={require('../assets/chevron-down.png')} style={styles.selectArrow}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.selectBox}>
                        <Text>120 Volts (Standard)</Text>
                        <Image source={require('../assets/chevron-down.png')} style={styles.selectArrow}/>
                    </TouchableOpacity>
                    <View style={styles.quantity}>
                        <Text>Quantity:</Text>
                        <TouchableOpacity style={styles.roundButton}>
                            <Text>-</Text>
                        </TouchableOpacity>
                        <Text>1</Text>
                        <TouchableOpacity style={styles.roundButton}>
                            <Text>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.addToCart}>
                    <TouchableOpacity style={styles.addToCartBtn} onPress={this._onAddToCart.bind(this)}>
                        <Text style={styles.addToCartBtnText}>Add to Cart ($3.50)</Text>
                        <Image source={require('../assets/arrow.png')} style={styles.addToCartBtnArrow}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    _onAddToCart() {
        this.props.navigation.dispatch(resetAction);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F2F2F2',
        flexDirection: 'column'
    },
    product: {
        flex: 1.1,
        margin: 10,
        marginTop: 25,
        alignSelf: 'stretch',
        flexDirection: 'row',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowColor: '#000000',
        shadowRadius: 4,
        shadowOpacity: 0.1,
        backgroundColor: '#FFFFFF'
    },
    product_desc: {
        borderLeftWidth: 1,
        borderColor: '#E4E4E4',
        flex: 1,
        padding: 10,
        paddingBottom: 10,
        backgroundColor: '#FCFCFC',
    },
    product_title: {
        fontWeight: '600',
        fontSize: 18,
        marginBottom: 10,
        marginTop: 10
    },
    product_image_box: {
        padding: 17
    },
    product_image: {
        width: 70,
        height: 70
    },
    product_detail: {
        fontSize: 11,
        fontWeight: 'bold',
        color: '#9F9F9F'
    },
    product_price: {
        fontSize: 18,
        fontWeight: '400',
        alignSelf: 'flex-end',
        marginTop: -5,
        marginRight: 15,
        color: '#0076FF',
        fontStyle: 'italic'
    },
    customizations: {
        alignSelf: 'stretch',
        margin: 10,
        marginBottom: 75,
        flex: 4,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowColor: '#000000',
        shadowRadius: 4,
        shadowOpacity: 0.1,
        backgroundColor: '#FCFCFC',
    },
    customization_title: {
        fontSize: 16,
        fontWeight: '100',
        textAlign: 'center',
        marginTop: 15
    },
    bulb_color: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center'
    },
    bulb_color_choice: {
        alignItems: 'center',
        margin: 20,
        padding: 10,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#E4E4E4',
        borderRadius: 4,
        width: 110
    },
    bulb_color_choice_text: {
        textAlign: 'center',
        margin: 5,
    },
    selectBox: {
        alignSelf: 'center',
        alignItems: 'stretch',
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#E4E4E4',
        borderRadius: 4,
        margin: 10,
        padding: 10,
        width: 260
    },
    selectArrow: {
        height: 7,
        width: 14,
        marginLeft: 90,
        alignSelf: 'center'
    },
    quantity: {
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center'
    },
    roundButton: {
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#E4E4E4',
        borderRadius: 100,
        margin: 10,
        padding: 5,
        width: 30,
    },
    addToCart: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#0076FF',
    },
    addToCartBtn: {
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 16,
    },
    addToCartBtnText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold'
    },
    addToCartBtnArrow: {
        marginLeft: 10,
        height: 12,
        width: 16
    }
});

module.exports = MatchFound;
