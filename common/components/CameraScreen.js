import React, { Component } from 'react';

import {
    ActivityIndicator,
    AppRegistry,
    Button,
    Image,
    NativeModules,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    View
} from 'react-native';
import Camera from 'react-native-camera';
import Clarifai from 'clarifai';
// initialize with your clientId and clientSecret
let api = new Clarifai.App(
    '55lEoNzGWOlCMCx97xTQ0yePnceODcmHgywoVj4A',
    'lWd-sMO45tnEYYG1f59FZdhVsmXw_ZDwzhAWlowk'
);
class CameraScreen extends Component {
    static navigationOptions = {
        header: {
            visible: false
        },
        tabBar: {
            label: ' ',
            icon: ({ tintColor }) => (
                <Text> </Text>
            ),
        },
        title: 'Camera'
    };

    constructor(props) {
        super(props);
        this.state = {
            has_photo: false
        };
    }

    componentDidMount() {
        this.setState({
            has_photo: false
        });
    }

    componentWillReceiveProps() {
        console.log('Receiving props');
    }

    componentWillUpdate() {
        console.log('Will Update');
    }

    getPrediction(encodedPhoto) {
        const {navigate} = this.props.navigation;
        let $this = this;
        this.setState({
            has_photo: true
        });
        api.models.predict("Category", {base64: encodedPhoto}).then(
            function(response) {
                console.log(response.outputs[0].data.concepts);
                console.log('\nIt is a ' + response.outputs[0].data.concepts[0].name + '! Of course.\n\n');
                let prediction = response.outputs[0].data.concepts[0].name;
                let confidence = response.outputs[0].data.concepts[0].value;
                $this.setState({
                    has_photo: false
                });
                navigate('Match', {
                    prediction: prediction,
                    confidence: confidence
                });
            },
            function(err) {
                console.log(err);
            }
        );
    }

    render() {
        if (this.state && this.state.has_photo) {
            return this._renderFrozen();
        } else {
            return this._renderCamera();
        }
    }

    _renderCamera() {
        const {goBack} = this.props.navigation;
        return (
            <View style={styles.fullScreen}>
                <Camera
                    ref={(cam) => {
                        this.camera = cam;
                    }}
                    style={styles.preview}
                    aspect={Camera.constants.Aspect.fill}
                    captureTarget={Camera.constants.CaptureTarget.memory}>
                    <TouchableHighlight onPress={this.takePicture.bind(this)} style={styles.cameraButton} underlayColor="#C83737">
                        <View></View>
                    </TouchableHighlight>
                </Camera>
                <TouchableOpacity onPress={() => goBack()} style={styles.closeButton}>
                    <Image
                        source={require('../assets/close-icon.png')}
                        style={styles.closeIcon}
                    />
                </TouchableOpacity>
            </View>
        );
    }

    _renderFrozen() {
        const {goBack} = this.props.navigation;
        return (
            <View style={styles.fullScreen}>
                <Camera
                    ref={(cam) => {
                        this.camera = cam;
                    }}
                    style={styles.preview}
                    aspect={Camera.constants.Aspect.fill}
                    captureTarget={Camera.constants.CaptureTarget.memory}>
                </Camera>
                <TouchableOpacity onPress={() => goBack()} style={styles.closeButton}>
                    <Image
                        source={require('../assets/close-icon.png')}
                        style={styles.closeIcon}
                    />
                </TouchableOpacity>
                <View style={styles.loading}>
                    <Text style={styles.searching}>Analyzing</Text>
                    <ActivityIndicator
                        animating={true}
                        style={styles.spinner}
                        color="white"
                        size="large"
                    />
                </View>
            </View>
        );
    }

    takePicture() {
        let $this = this;
        this.camera.capture()
            .then((data) => {
                $this.getPrediction(data.data);
            })
            .catch(err => console.log(err));
    }
}

const styles = StyleSheet.create({
    fullScreen: {
        flex: 1
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    cameraButton: {
        borderRadius: 50,
        borderColor: 'white',
        borderWidth: 3,
        width: 65,
        height: 65,
        backgroundColor: '#EA5959',
        position: 'absolute',
        bottom: 35,
        left: '50%',
        marginLeft: -32.5,
        shadowOffset: {
            width: 0,
            height: 15
        },
        shadowColor: '#EA5959',
        shadowRadius: 17,
        shadowOpacity: 0.64
    },
    closeButton: {
        position: 'absolute',
        top: 25,
        right: 20,
    },
    closeIcon: {
        width: 25,
        height: 25
    },
    loading: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        flexDirection: 'column'
    },
    searching: {
        fontSize: 22,
        color: 'white',
        backgroundColor: 'transparent',
        textAlign: 'center',
        flexDirection: 'column',
        alignSelf: 'stretch',
        marginTop: 200,
        marginBottom: 30
    },
    spinner: {
        height: 20,
    }
});

module.exports = CameraScreen;
