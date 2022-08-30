import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import colors from '../../config/colors';
import {AppButton} from '../AppButton';
import {AppText} from '../AppText';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import Loader from 'react-native-three-dots-loader';
import Entypo from 'react-native-vector-icons/Entypo';
import {getIndustryCount} from '../../api/getIssuesCount';
const IndustryInfoCard = ({setSelectedIndustry, selectedIndustry}) => {
  const [showIndustries, setShowIndustries] = useState(false);
  const [fresh, setFresh] = useState(false);
  const [showDot, setShowDots] = useState(false);
  const [showIndustryInfo, setShowIndustryInfo] = useState(false);
  const [industries, setIndustries] = useState();

  useEffect(() => {
    getIndustriesCount();
  }, []);
  const getIndustriesCount = async () => {
    try {
      const response = await getIndustryCount();
      if (response) {
        setFormat(response);
      } else {
        Alert.alert('Error', response?.message);
      }
    } catch (err) {
      Alert.alert('Error', err?.message);
    }
  };
  const setFormat = data => {
    let Arr = [];
    for (let i = 0; i < data?.length; i++) {
      console.log('.......', data[i]);
      Arr.push({
        name: data[i]?.industryName,
      });
    }
    setIndustries(Arr);
  };
  const industriess = [
    {name: 'Agriculture Industry'},
    {name: 'Real Estate'},
    {name: 'Construction'},
    {name: 'Consumer Goods'},
    {name: 'Healthcare'},
    {name: 'Life Sciences'},
    {name: 'Telecommunication'},
    {name: 'Media and Entertainment'},
    {name: 'Taxation'},
    {name: 'Consulting'},
    {name: 'Education'},
    {name: 'Information And Communications Technology ICT'},
    {name: 'Natural Resources'},
    {name: 'Mining & Metals'},
    {name: 'Oil And Gas'},
    {name: 'Services'},
    {name: 'Utilities'},
    {name: 'Power & Utilities'},
    {name: 'Automotive'},
    {name: 'Transportation'},
    {name: 'Hospitality & Services'},
    {name: 'FMCG'},
    {name: 'Financial Services'},
    {name: 'Banking'},
    {name: 'Capital Markets'},
    {name: 'Insurance'},
    {name: 'Investment Management'},
    {name: 'Government'},
  ];
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
      {selectedIndustry !== 'Select Industry' ? (
        <View style={styles.counterSticker}>
          <Entypo name="check" color={'#fff'} size={15} />
        </View>
      ) : (
        <View style={styles.counterSticker}>
          <AppText color={'#fff'} text={'2'} bold={true} />
        </View>
      )}

      <TouchableOpacity
        onPress={() => setShowIndustryInfo(!showIndustryInfo)}
        style={styles.container}>
        {showIndustryInfo ? (
          <>
            <AppText
              color={colors.black}
              text={'Industry Information'}
              size={10}
            />

            <AppText
              text={'Select the industry of the organization you are reporting'}
              color={colors.gray}
              size={10}
            />
            <TouchableOpacity
              style={{
                ...styles.industryContainer,
                borderBottomEndRadius: showIndustries ? 0 : 10,
                borderBottomStartRadius: showIndustries ? 0 : 10,
              }}
              onPress={() => setShowIndustries(!showIndustries)}>
              <AppText color={'white'} text={selectedIndustry} />
              <FontAwesome name="caret-down" size={20} color={colors.white} />
            </TouchableOpacity>
            {showIndustries && (
              <View style={styles.filter}>
                <FlatList
                  data={industries}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      style={{padding: 2}}
                      onPress={() => {
                        setShowDots(true);
                        setTimeout(() => {
                          setSelectedIndustry(item.name);
                          setShowIndustries(false);
                          setShowDots(false);
                        }, 2000);
                      }}>
                      <AppText color={'#fff'} size={12} text={item.name} />
                    </TouchableOpacity>
                  )}
                />
              </View>
            )}

            {showDot && (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  marginVertical: 10,
                  borderTopWidth: 0.5,
                  paddingTop: 10,
                }}>
                <AppText
                  text={'Next Question Will Load After Your Response Above'}
                  size={10}
                  color={colors.gray}
                />
                <Loader />
              </View>
            )}
          </>
        ) : (
          <>
            <AppText color={colors.black} text={'Industry Information'} />
            <AppText
              text={
                'We will like to know the industry the organization you are reporting operators'
              }
              color={colors.gray}
              size={10}
            />
          </>
        )}
      </TouchableOpacity>
    </View>
  );
};
export default IndustryInfoCard;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
    // paddingHorizontal: 15,
  },
  container: {
    // height: 120,
    width: '80%',
    backgroundColor: colors.background,
    borderWidth: 0,
    marginVertical: 8,
    borderRadius: 10,
    zIndex: -999,
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    shadowColor: colors.orange,
    marginLeft: -10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  counterSticker: {
    backgroundColor: colors.orange,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    height: 30,
    width: 30,
    alignSelf: 'center',

    // position: 'absolute',
    // left: -15,
    // top: 15,
    zIndex: 999,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  btn: {
    height: 40,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    position: 'absolute',
    left: 20,
    right: 20,
    bottom: 80,
    zIndex: 999,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    height: 25,
    marginVertical: 10,

    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  waitingDot: {height: 8, width: 8, backgroundColor: 'grey', marginLeft: 15},
  waitingDot2: {
    height: 8,
    width: 8,
    backgroundColor: 'grey',
    marginHorizontal: 8,
  },
  waitingDot3: {height: 8, width: 8, backgroundColor: 'grey'},
  lineCounter: {
    position: 'absolute',
    right: 5,
    bottom: 1,
  },
  textInput: {
    height: 60,
    borderWidth: 0.5,
    borderColor: 'green',
    borderRadius: 10,
  },
  cardContainer: {
    flexDirection: 'row',
    borderBottomWidth: 0.3,
    borderColor: colors.gray,
    marginBottom: 10,
  },
  issueHeader: {paddingVertical: 10, paddingHorizontal: 22},

  hitView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  industryContainer: {
    width: '90%',
    padding: 8,
    backgroundColor: colors.primary,
    borderRadius: 10,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  filter: {
    // height: 150,
    maxHeight: 150,
    width: '90%',
    backgroundColor: colors.primary,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    paddingHorizontal: 10,
    zIndex: 1,
  },
});
