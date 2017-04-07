/**
 * Created by jwilliamson on 3/16/17.
 */
import React, { Component } from 'react';
import {
    ActivityIndicator,
    Button,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
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
        const { params } = this.props.navigation.state;
        return (
            <View style={styles.container}>
                <View style={styles.product}>
                    <Image source={{uri: 'https://cdn1.bigcommerce.com/server800/h8u3j/products/7604/images/15125/25A_SW__26395.1455117395.1280.1280.jpg'}}
                            style={{width: 100, height: 100}}
                    />
                    <View style={styles.product_desc}>
                        <Text>LIT Bulbrite A19</Text>
                        <Text>2,000 Hour Lifespan</Text>
                        <Text>190 Lumens</Text>
                        <Text>$3.50</Text>
                    </View>
                </View>
                <View style={styles.customizations}>
                    <Text style={styles.customization_title}>Customize Item</Text>
                    <TouchableOpacity>
                        <Image source={{uri: 'https://cdn1.bigcommerce.com/server800/h8u3j/products/7604/images/15125/25A_SW__26395.1455117395.1280.1280.jpg'}}
                               style={{width: 100, height: 100}}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={{uri: 'https://cdn1.bigcommerce.com/server800/h8u3j/products/7604/images/15125/25A_SW__26395.1455117395.1280.1280.jpg'}}
                               style={{width: 100, height: 100}}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.addToCart}>
                    <TouchableOpacity style={styles.addToCartBtn}>
                        <Text style={styles.addToCartBtnText}>Add to Cart ($3.50) ></Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
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
        flex: 1,
        margin: 10,
        // marginTop: 140,
        height: 110,
        alignSelf: 'stretch',
        flexDirection: 'row',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowColor: '#000000',
        shadowRadius: 4,
        shadowOpacity: 0.1,
        backgroundColor: '#FCFCFC',
    },
    product_desc: {
        borderWidth: 1,
        borderColor: '#E4E4E4',
        flex: 1,
        padding: 17,
    },
    customizations: {
        alignSelf: 'stretch',
        margin: 10,
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
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 15
    },
    addToCart: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#0076FF',
    },
    addToCartBtn: {
        alignSelf: 'stretch',
        padding: 18
    },
    addToCartBtnText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
    }
});

module.exports = MatchFound;
