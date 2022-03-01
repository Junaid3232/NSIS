import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import colors from '../../config/colors';
import {AppButton} from '../AppButton';
import {AppText} from '../AppText';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import Loader from 'react-native-three-dots-loader';
import Entypo from 'react-native-vector-icons/Entypo';
import {states} from '../../config/constants';
const LgaCard = ({selectLGA, setSelectLGA, selectState}) => {
  const [showIndustries, setShowIndustries] = useState(false);
  const [fresh, setFresh] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showIndustryInfo, setShowIndustryInfo] = useState(false);

  let LGA = states.filter(state => state.name === selectState);

  return (
    <TouchableOpacity
      onPress={() => setShowIndustryInfo(!showIndustryInfo)}
      style={styles.container}>
      {selectLGA !== 'Select LGA' ? (
        <View style={styles.counterSticker}>
          <Entypo name="check" color={'#fff'} size={15} />
        </View>
      ) : (
        <View style={styles.counterSticker}>
          <AppText color={'#fff'} text={'2'} />
        </View>
      )}
      {showIndustryInfo ? (
        <>
          <AppText
            color={colors.black}
            text={'Select the LGA Yor ar Reporting From'}
            size={10}
          />

          <AppText
            text={
              'We will like to know the Local Government Area in which the safety issue you are reporting happend'
            }
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
            <AppText color={'white'} text={selectLGA} />
            <FontAwesome name="caret-down" size={20} color={colors.white} />
          </TouchableOpacity>
          {showIndustries && (
            <View style={styles.filter}>
              <FlatList
                data={LGA[0]?.LGA}
                renderItem={({item}) => (
                  <TouchableOpacity
                    style={{padding: 2}}
                    onPress={() => {
                      setLoading(true);
                      setTimeout(() => {
                        setSelectLGA(item?.name);
                        setShowIndustries(false);
                        setLoading(false);
                      }, 2000);
                    }}>
                    <AppText color={'#fff'} size={12} text={item.name} />
                  </TouchableOpacity>
                )}
              />
            </View>
          )}

          {loading && (
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
                text={'You Can Proceed to Step 3 After This'}
                size={10}
                color={colors.gray}
              />
              <Loader />
            </View>
          )}
        </>
      ) : (
        <>
          <AppText
            color={colors.black}
            text={'Select the LGA Yor ar Reporting From'}
          />
          <AppText
            text={
              'We will like to know the Local Government Area in which the safety issue you are reporting happend'
            }
            color={colors.gray}
            size={10}
          />
        </>
      )}
    </TouchableOpacity>
  );
};
export default LgaCard;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
    // paddingHorizontal: 15,
  },
  container: {
    // height: 120,
    width: '90%',
    backgroundColor: colors.lightGray,
    borderWidth: 0,
    borderColor: 'green',
    marginVertical: 8,
    borderRadius: 10,
    zIndex: -999,
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  counterSticker: {
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    height: 30,
    width: 30,
    position: 'absolute',
    left: -15,
    top: 15,
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
    height: 150,
    maxHeight: '60%',
    width: '90%',
    backgroundColor: colors.primary,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    paddingHorizontal: 10,
    zIndex: 1,
  },
});
