import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  TouchableHighlight,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {industryStats} from '../api/getIssuesCount';
import {AppText} from '../components/AppText';
import {Header} from '../components/Header';
import colors from '../config/colors';
import {states} from '../config/constants';

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
const selectIndustry = [
  {name: 'Industry Name Goes Here'},
  {name: 'Industry Name Goes Here'},
  {name: 'Industry Name Goes Here'},
  {name: 'Industry Name Goes Here'},
  {name: 'Industry Name Goes Here'},
  {name: 'Industry Name Goes Here'},
];
const IndustrySafety = ({navigation}) => {
  const [showFilter, setShowFilter] = useState(false);
  const [toolTip, setShowTooltip] = useState(false);
  const [selectedTooltip, setSelectedTooltip] = useState(0);
  const [parentDropdown, setParentDropDown] = useState(false);
  const [industryIssue, setIndustryIssue] = useState();
  const [loading, setLoading] = useState(false);

  const getIndustries = async () => {
    setLoading(true);
    try {
      const response = await industryStats();
      if (response) {
        setIndustryIssue(response);
        setLoading(false);
      } else {
        setLoading(false);
        // Alert.alert('Error', response?.message);
      }
    } catch (err) {
      // Alert.alert('Error', err?.message);
    }
  };
  useEffect(() => {
    getIndustries();
  }, []);

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <Header navigation={navigation} />
      <View style={{padding: 15, flex: 1}}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 10,
              paddingHorizontal: 12,
            }}>
            <View style={{flexDirection: 'row'}}>
              <AppText
                size={16}
                color={colors.black}
                text={'Industry Safety Index'}
              />

              <TouchableOpacity
                style={styles.QMark}
                onPress={() => setParentDropDown(!parentDropdown)}>
                <AppText bold={'bold'} color={'#fff'} text={'?'} />
              </TouchableOpacity>
              {parentDropdown && (
                <View
                  style={{
                    ...styles.dropdown,
                    width: 200,
                    alignSelf: 'center',
                    justifyContent: 'center',
                  }}>
                  <AppText
                    text={'Select Industry'}
                    color={colors.white}
                    size={16}
                  />
                  <View style={{marginTop: 10}}>
                    <FlatList
                      data={states}
                      showsVerticalScrollIndicator={false}
                      keyExtractor={({index}) => index}
                      renderItem={({item, index}) => {
                        return (
                          <TouchableOpacity style={{marginTop: 5}}>
                            <AppText
                              text={item.name}
                              color={colors.white}
                              size={12}
                            />
                          </TouchableOpacity>
                        );
                      }}
                    />
                  </View>
                </View>
              )}
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <AppText size={12} text={'Filter'} />
              <TouchableOpacity
                style={{marginLeft: 8}}
                onPress={() => {
                  setShowFilter(!showFilter);
                }}>
                <AntDesign name="caretdown" color={colors.black} size={13} />
              </TouchableOpacity>
            </View>
          </View>
          {showFilter && (
            <View style={styles.filter}>
              <TouchableOpacity
                style={{padding: 2}}
                onPress={() => {
                  setShowFilter(false);
                }}>
                <AppText color={'#fff'} size={12} text={'By Industry'} />
              </TouchableOpacity>
              <TouchableOpacity
                style={{padding: 2}}
                onPress={() => {
                  setShowFilter(false);
                }}>
                <AppText color={'#fff'} size={12} text={'Last 7 Days'} />
              </TouchableOpacity>
              <TouchableOpacity
                style={{padding: 3}}
                onPress={() => {
                  setShowFilter(false);
                }}>
                <AppText color={'#fff'} size={12} text={'Last Month'} />
              </TouchableOpacity>
              <TouchableOpacity
                style={{padding: 2}}
                onPress={() => {
                  setShowFilter(false);
                }}>
                <AppText color={'#fff'} size={12} text={'Calender Range'} />
              </TouchableOpacity>
            </View>
          )}
        </View>
        <View style={{flex: 1, zIndex: -1}}>
          {loading ? (
            <ActivityIndicator
              color={colors.primary}
              size={25}
              style={{flex: 1}}
            />
          ) : (
            <FlatList
              showsVerticalScrollIndicator={false}
              data={industryIssue}
              keyExtractor={({index}) => index}
              renderItem={({item, index}) => {
                return (
                  <View style={styles.container}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <View style={styles.subContainer}>
                        <Text style={styles.index}>{index + 1}</Text>
                      </View>
                      <Text style={styles.industryN}>{item._id}</Text>
                    </View>

                    <TouchableOpacity
                      style={styles.QMark}
                      onPress={() => {
                        setShowTooltip(!toolTip);
                        setSelectedTooltip(index);
                      }}>
                      <AppText bold={'bold'} color={'#fff'} text={'?'} />
                    </TouchableOpacity>
                    {toolTip && index === selectedTooltip && (
                      <View style={styles.toolTip}>
                        <View style={{flexDirection: 'row'}}>
                          <Text style={styles.tooltipText}>{'Active:'}</Text>
                          <Text style={styles.tooltipText}>{item.active}</Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                          <Text style={styles.tooltipText}>{'Resolved:'}</Text>
                          <Text style={styles.tooltipText}>
                            {item.resolved}
                          </Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                          <Text style={styles.tooltipText}>{'Ignored:'}</Text>
                          <Text style={styles.tooltipText}>{item.ignored}</Text>
                        </View>
                      </View>
                    )}
                  </View>
                );
              }}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default IndustrySafety;

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
    backgroundColor: colors.primary,
    borderRadius: 6,
    height: 20,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginEnd: 7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  industryN: {
    fontSize: 12,

    fontFamily: 'Raleway-Medium',
  },
  index: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  filter: {
    mazHeight: 130,
    width: 130,
    backgroundColor: colors.primary,
    borderRadius: 15,
    padding: 15,
    position: 'absolute',
    right: 10,
    top: '90%',
    zIndex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 50,
  },
  dropdown: {
    backgroundColor: colors.primary,
    maxHeight: 180,
    borderRadius: 15,
    padding: 25,
    position: 'absolute',
    top: 25,
    left: 70,
    zIndex: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
    alignItems: 'center',
  },
  QMark: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  toolTip: {
    position: 'absolute',
    backgroundColor: colors.primary,
    width: '50%',
    height: 60,
    right: 30,
    top: -4,

    borderRadius: 10,
    marginRight: 3,
    zIndex: 1,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  tooltipText: {
    color: colors.white,

    fontSize: 10,
    fontFamily: 'Raleway-Medium',
    // padding: 2,
    paddingHorizontal: 10,
  },
});
