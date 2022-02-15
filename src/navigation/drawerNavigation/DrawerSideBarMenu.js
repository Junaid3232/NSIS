import React from 'react';
import {
    SafeAreaView,
    View,
    StyleSheet,
    Image,
    Text,
    Platform,
} from 'react-native';

import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import colors from '../../config/colors';
const DrawerSection = ({title }) => {
    return (
        <View style={{ flexDirection: 'row', borderTopColor: 'gray',marginVertical:-8, }}>
            <Text style={{ color:title==="LOGOUT"?'red': 'gray', fontSize: 12 }}>{title}</Text>
        </View>
    )
}

const DrawerSideBarMenu = props => {
    return (
        <SafeAreaView style={styles.safe}>
            <View style={styles.container2}>
                <Image
                    source={require('../../assets/images/1.jpg')}
                    style={styles.sideMenuProfileIcon}
                />
                <Text style={styles.text}>John Doe</Text>
            </View>
          

            <DrawerContentScrollView
                style={{ fontSize: 10, marginTop:Platform.OS==='ios'?-50:0 , height:'100%'}}
                {...props}>
                <DrawerItemList style={{ backgroundColor: 'red', fontSize: 10 }}
                    {...props} />
                <DrawerItem
                    label={({ focused, color }) =>
                        <DrawerSection focused={focused} color={color} icon='heart-outline' title='About NISCN' />}
                    onPress={() => props.navigation.navigate('Favourites')}
                />
                <DrawerItem
                    label={({ focused, color }) =>
                        <DrawerSection focused={focused} color={color} icon='clipboard-list-outline' title='Report Safety Issue' />}
                    onPress={() => props.navigation.navigate('Orders')}
                />
                <DrawerItem
                    label={({ focused, color }) =>
                        <DrawerSection focused={focused} color={color} icon='account-outline' title='Terms of Use' />}
                    onPress={() => props.navigation.navigate('Profile')}
                />
                <DrawerItem
                    label={({ focused, color }) =>
                        <DrawerSection focused={focused} color={color} icon='map-marker-outline' title='Notifications' />}
                    onPress={() => { alert('Addresses Pressed') }}
                />
                <DrawerItem
                    label={({ focused, color }) =>
                        <DrawerSection focused={focused} color={color} icon='trophy-variant-outline' title='National Safety Index' />}
                    onPress={() => { alert('Challenges Pressed') }}
                />
                <DrawerItem
                    label={({ focused, color }) =>
                        <DrawerSection focused={focused} color={color} icon='crop-square' title='Industry Safety Index' />}
                    onPress={() => { alert('Vouchers Pressed') }}
                />
                <DrawerItem
                    label={({ focused, color }) =>
                        <DrawerSection focused={focused} color={color} icon='account-question-outline' title='NDPR / GDPR Compliance' />}
                    onPress={() => { alert('Help Pressed') }}
                />
                 <DrawerItem
                    label={({ focused, color }) =>
                        <DrawerSection focused={focused} color={color} icon='account-question-outline' title='Contact NDCIN' />}
                    onPress={() => { alert('Help Pressed') }}
                />
                 <DrawerItem
                    label={({ focused, color }) =>
                        <DrawerSection focused={focused} color={color} icon='account-question-outline' title='Profile Update' />}
                    onPress={() => { alert('Help Pressed') }}
                />
                <View style={{ marginTop:50}}>
                <DrawerItem
                    label={({ focused, color }) =>
                        <View style={{}}>
                    
                            <DrawerSection focused={focused} color={color} title='LOGOUT' />
                        </View>}
                    onPress={() => { alert('Settings Pressed') }}
                />

                <DrawerItem
                    label={({ focused, color }) =>
                    <>
                    <View style={{ borderTopWidth: 0.2, borderTopColor: 'gray', position: 'absolute', left: 1, right: 1, top: -10 }}></View>
                       <Text style={{fontSize:10, color:'gray'}}> Powered by Softcity Group</Text>
                       <Text style={{fontSize:10, color:'gray'}}>Ⓒ Copyright 2022</Text>
                        </>}
                    onPress={() => { alert('Terms Pressed') }}
                />
                </View>
            </DrawerContentScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    sideMenuProfileIcon: {
        width: 70,
        height: 70,
        borderRadius: 35,
        alignSelf: 'center',
        marginLeft: '3%',
    },

    text: {
        fontSize: 16,
        marginLeft: 10,
        fontFamily: 'Nunito-Light',
        fontWeight: '400',
        color: 'white'
    },
    safe: {
        flex: 1,
        backgroundColor: '#f3f3f3',
    },
    container2: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.primary,
        height: '17%',
    },
});

export default DrawerSideBarMenu;