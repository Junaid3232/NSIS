import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {filterConfig} from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlerCommon';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {AppText} from '../components/AppText';
import {Header} from '../components/Header';
import colors from '../config/colors';
import axios from 'axios';
import {BASE_URL} from '../config/constants';
import moment from 'moment';

const notificationss = [
  //
  {
    id: 1,
    title: 'NISCN Enforces Safety In Calabar',
    description:
      "Let's know if this is an existing safety issue or if this is a fresh safety issue you will like to report",
    date: 'Yesterday',
  },
  {
    id: 1,
    title: 'NISCN Enforces Safety In Calabar',
    description:
      "Let's know if this is an existing safety issue or if this is a fresh safety issue you will like to report",
    date: 'Yesterday',
  },
  {
    id: 1,
    title: 'NISCN Enforces Safety In Calabar',
    description:
      "Let's know if this is an existing safety issue or if this is a fresh safety issue you will like to report",
    date: 'Yesterday',
  },
  {
    id: 1,
    title: 'NISCN Enforces Safety In Calabar',
    description:
      "Let's know if this is an existing safety issue or if this is a fresh safety issue you will like to report",
    date: 'Yesterday',
  },
  {
    id: 1,
    title: 'NISCN Enforces Safety In Calabar',
    description:
      "Let's know if this is an existing safety issue or if this is a fresh safety issue you will like to report",
    date: 'Yesterday',
  },
  {
    id: 1,
    title: 'NISCN Enforces Safety In Calabar',
    description:
      "Let's know if this is an existing safety issue or if this is a fresh safety issue you will like to report",
    date: 'Yesterday',
  },
  {
    id: 1,
    title: 'NISCN Enforces Safety In Calabar',
    description:
      "Let's know if this is an existing safety issue or if this is a fresh safety issue you will like to report",
    date: 'Yesterday',
  },
];

const Notification = ({navigation}) => {
  const [showFilter, setShowFilter] = useState(false);
  const [loading, setLoading] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [filterBy, setFilterBy] = useState('new');

  useEffect(() => {
    getAllNotifications();
  }, [filterBy]);
  const getAllNotifications = async () => {
    console.log('....func');
    setLoading(true);
    const res = await axios
      .get(`${BASE_URL}/notifications/getall`)
      .then(async response => {
        if (response) {
          setNotifications(response?.data);
          setLoading(false);
          let d1 = new Date();
          let dummy = [];
          if (filterBy == 'week') {
            console.log('....nootifications', notifications);

            for (let i = 0; i < response?.data?.length; i++) {
              let d2 = new Date(response?.data[i].created.split('T')[0]);
              let diff = Math.abs(d1 - d2);
              let di = new moment.duration(diff);
              let total = di.asDays();
              console.log('dillll', di);
              if (total <= 7) {
                console.log('...in if');
                dummy.push(response?.data[i]);
              }
            }
            setNotifications(dummy);
          } else if (filterBy == 'month') {
            for (let i = 0; i < response?.data?.length; i++) {
              let d2 = new Date(response?.data[i].created.split('T')[0]);
              let diff = Math.abs(d1 - d2);
              let di = new moment.duration(diff);
              let total = di.asDays();
              console.log('dillll', di);
              if (total > 30) {
                console.log('...in if else');
                dummy.push(response?.data[i]);
              }
            }
            console.log('.....fummy', dummy);
            setNotifications(dummy);
          }
        }
      })
      .catch(error => {
        setLoading(false);
      });
  };
  useEffect(() => {
    console.log('filte by', filterBy);
  }, [filterBy]);
  return (
    <SafeAreaView style={{zIndex: -1, backgroundColor: 'white', flex: 1}}>
      <Header navigation={navigation} />
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 10,
            paddingHorizontal: 12,
            zIndex: -1,
          }}>
          <AppText size={16} bold={'bold'} text={'Notifications'} />
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
            <TouchableOpacity
              style={{padding: 2}}
              onPress={() => {
                setFilterBy('new');
                setShowFilter(false);
              }}>
              <AppText color={'#fff'} size={16} text={'New'} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{padding: 2}}
              onPress={() => {
                setFilterBy('week');
                setShowFilter(false);
              }}>
              <AppText color={'#fff'} size={16} text={'Last 7 Days'} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{padding: 3}}
              onPress={() => {
                setFilterBy('month');
                setShowFilter(false);
              }}>
              <AppText color={'#fff'} size={16} text={'Last Month'} />
            </TouchableOpacity>
          </View>
        )}
      </View>
      <View style={{paddingHorizontal: 10, zIndex: -1}}>
        {loading && <ActivityIndicator color={colors.primary} size={20} />}
        {notifications?.length > 0 && (
          <FlatList
            data={notifications}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: 10,
              paddingBottom: 170,
              marginBottom: 180,
            }}
            renderItem={({item}) => {
              let da = item?.created?.split('T')[0];
              let date = da.split('-');
              let arrangeDate = date[0] + date[1] + date[2];

              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate('NotificationDetail')}
                  style={styles.notification}>
                  <AppText size={14} bold={'bold'} text={item.title} />
                  <View
                    style={{paddingVertical: 5, paddingBottom: 10, zIndex: -1}}>
                    <AppText size={12} text={item.description} />
                  </View>
                  <AppText
                    size={10}
                    text={moment(arrangeDate, 'YYYYMMDD').fromNow()}
                  />
                </TouchableOpacity>
              );
            }}
            keyExtractor={item => item.index}
            // ListFooterComponent={() => (
            //   <TouchableOpacity style={styles.btn} onPress={() => {}}>
            //     <AppText color={'#fff'} text={'LOAD MORE'} />
            //   </TouchableOpacity>
            // )}
          />
        )}
        {notifications?.length == 0 && !loading && (
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <AppText color={'black'} text={'No Notifications Found'} />
          </View>
        )}
        {/* <TouchableOpacity style={styles.btn} onPress={() => {}}>
          <AppText bold={'bold'} color={'#fff'} text={'LOAD MORE'} />
        </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  );
};

export default Notification;

const styles = StyleSheet.create({
  notification: {
    marginHorizontal: 10,
    borderRadius: 15,
    marginTop: 5,
    padding: 15,
    marginVertical: 5,
    zIndex: -1,
    backgroundColor: colors.lightGray,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
  btn: {
    height: 40,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    width: '95%',
    alignSelf: 'center',
    // position: 'absolute',
    // left: 20,
    // right: 20,
    // bottom: -10,
    zIndex: 1,
    marginBottom: 40,
    marginTop: 10,
  },
});
