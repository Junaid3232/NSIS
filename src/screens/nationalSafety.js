import React, {useState} from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {AppText} from '../components/AppText';
import {Header} from '../components/Header';

const nationalSafety = [
  {
    id: 1,
    count: '1',
    title: 'NISCN Enforces Safety In Calabar',
    description:
      "Let's know if this is an existing safety issue or if this is a fresh safety issue you will like to report",
    date: 'Yesterday',
  },
  {
    id: 1,
    count: '1',
    title: 'NISCN Enforces Safety In Calabar',
    description:
      "Let's know if this is an existing safety issue or if this is a fresh safety issue you will like to report",
    date: 'Yesterday',
  },
  {
    id: 1,
    count: '3',
    title: 'NISCN Enforces Safety In Calabar',
    description:
      "Let's know if this is an existing safety issue or if this is a fresh safety issue you will like to report",
    date: 'Yesterday',
  },
  {
    id: 1,
    count: '4',
    title: 'NISCN Enforces Safety In Calabar',
    description:
      "Let's know if this is an existing safety issue or if this is a fresh safety issue you will like to report",
    date: 'Yesterday',
  },
  {
    id: 1,
    count: '1',
    title: 'NISCN Enforces Safety In Calabar',
    description:
      "Let's know if this is an existing safety issue or if this is a fresh safety issue you will like to report",
    date: 'Yesterday',
  },
];

const NationalSafety = () => {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Header />
      <View style={{padding: 15, zIndex: -1}}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 10,
              paddingHorizontal: 12,
              zIndex: -1,
            }}>
            <View style={{flexDirection: 'row'}}>
              <AppText size={16} bold={'bold'} text={'National Safety Index'} />
              <View style={styles.QMark}>
                <AppText bold={'bold'} color={'#fff'} text={'?'} />
              </View>
            </View>
            <TouchableOpacity style={{flexDirection: 'row'}}>
              <AppText size={16} text={'Filter'} />
              <TouchableOpacity
                style={{marginLeft: 8}}
                onPress={() => {
                  setShowFilter(!showFilter);
                }}>
                <AntDesign name="caretdown" color={colors.black} size={20} />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
          {showFilter && (
            <View style={styles.filter}>
              <TouchableOpacity style={{padding: 2}} onPress={() => {}}>
                <AppText color={'#fff'} size={16} text={'Last 7 Days'} />
              </TouchableOpacity>
              <TouchableOpacity style={{padding: 3}} onPress={() => {}}>
                <AppText color={'#fff'} size={16} text={'Last Month'} />
              </TouchableOpacity>
              <TouchableOpacity style={{padding: 2}} onPress={() => {}}>
                <AppText color={'#fff'} size={16} text={'Calender Range'} />
              </TouchableOpacity>
            </View>
          )}
        </View>
        <FlatList
          data={nationalSafety}
          renderItem={({item}) => {
            return (
              <View style={styles.container}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={styles.subContainer}>
                    <Text style={styles.index}>{item.count}</Text>
                  </View>
                  <Text style={styles.industryN}>{item.title}</Text>
                </View>
                <View style={styles.QMark}>
                  <AppText bold={'bold'} color={'#fff'} text={'?'} />
                </View>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default NationalSafety;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    width: '100%',
    borderRadius: 5,
    borderWidth: 0.2,
    borderColor: '#dfdfdf',
    padding: 5,
    marginEnd: 12,
    marginVertical: 8,
    paddingHorizontal: 10,
    zIndex: -1,
  },
  subContainer: {
    backgroundColor: 'green',
    borderRadius: 6,
    height: 25,
    width: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginEnd: 7,
  },
  industryN: {
    color: '#000',
    fontSize: 12,
    fontWeight: '300',
  },
  index: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  filter: {
    height: 110,
    width: 170,
    backgroundColor: 'green',
    borderRadius: 15,
    padding: 15,
    position: 'absolute',
    right: 10,
    top: '90%',
    zIndex: 1,
  },
  QMark: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
});
