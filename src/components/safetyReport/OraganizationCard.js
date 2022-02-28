import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import colors from '../../config/colors';
import {AppText} from '../AppText';
import {AppTextBox} from '../AppTextBox';
import Loader from 'react-native-three-dots-loader';
import Entypo from 'react-native-vector-icons/Entypo';
const OraganizationCard = ({setOrganizationInfo, orgainizationInfo}) => {
  const [extendView, setExtendView] = useState(false);
  const [industryInfo, setIndustryInfo] = useState('');
  const [loading, setLoading] = useState(false);
  const [isDataValid, setDataValid] = useState(false);

  const onDone = text => {
    setLoading(true);
    setTimeout(() => {
      if (orgainizationInfo !== '') {
        setDataValid(true);
      } else {
        setDataValid(false);
      }
      setExtendView(false);
      setLoading(false);
    }, 2000);
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        setExtendView(!extendView);
      }}>
      {isDataValid ? (
        <View style={styles.counterSticker}>
          <Entypo name="check" color={'#fff'} size={15} />
        </View>
      ) : (
        <View style={styles.counterSticker}>
          <AppText color={'#fff'} text={'3'} />
        </View>
      )}
      <AppText text={'Organization Information'} color={colors.black} />
      <AppText
        text={
          'We will like to get detailed information about the organization you are reporting operates'
        }
        color={colors.gray}
        size={10}
      />
      {extendView && (
        <>
          <TextInput
            style={styles.textBox}
            placeholder={'Company name of organization you are reporting from'}
            onChangeText={value => {
              setOrganizationInfo(value);
            }}
          />

          <TouchableOpacity style={styles.doneButton} onPress={onDone}>
            <AppText color={'white'} text={'Done'} size={10} />
          </TouchableOpacity>
        </>
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
    </TouchableOpacity>
  );
};

export default OraganizationCard;

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
  textBox: {
    marginTop: 20,
    paddingVertical: 10,
    width: '100%',
    height: 35,
    borderColor: colors.primary,
    borderWidth: 0.5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
    backgroundColor: colors.lightGray,
    fontSize: 10,
    fontFamily: 'Raleway-Medium',
  },
  doneButton: {
    height: 25,
    width: '20%',
    marginVertical: 10,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
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
});
