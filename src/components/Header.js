import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../config/colors';

export const Header = ({dashboard = false, navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {dashboard ? (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Entypo name="menu" color={colors.black} size={20} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <AntDesign name="caretleft" color={colors.black} size={20} />
          </TouchableOpacity>
        )}
        <Image
          source={require('../assets/icons/Logo1.png')}
          resizeMode="contain"
          style={{width: 80, height: 50}}
        />
        <Image
          source={require('../assets/images/1.jpg')}
          style={styles.profilePic}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,

    elevation: 5,
    backgroundColor: colors.lightGray,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  header: {
    flexDirection: 'row',
    borderColor: colors.primary,
    alignItems: 'center',
    paddingVertical: 10,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  profilePic: {width: 40, height: 40, borderRadius: 20},
});
