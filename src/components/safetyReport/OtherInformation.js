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
import DatePicker from 'react-native-date-picker';
import Moment from 'moment';
import {AppButton} from '../AppButton';
const OtherInformation = ({
  setResponsiblePersonName,
  setResponsiblePersonPhone,
  responsiblePersonName,
  responsiblePersonPhone,
  setResponsiblePersonEmail,
  responsiblePersonEmail,
}) => {
  const [parentExtendView, setParentExtendView] = useState(false);
  const [extendView, setExtendView] = useState(false);
  const [extendView2, setExtendView2] = useState(false);
  const [extendView3, setExtendView3] = useState(false);
  const [extendView4, setExtendView4] = useState(false);
  const [extendView5, setExtendView5] = useState(false);
  const [extendView6, setExtendView6] = useState(false);
  const [extendView7, setExtendView7] = useState(false);
  const [extendView8, setExtendView8] = useState(false);
  const [extendView9, setExtendView9] = useState(false);
  const [extendView10, setExtendView10] = useState(false);
  const [loading, setLoading] = useState(false);
  const [natureOfBussiness, setNatureOfBussiness] = useState('');
  const [describeSafetyIssue, setDescribeSafetyIssue] = useState('');
  const [isAddressDifferent, setIsAddressDifferent] = useState();
  const [detailsOfOrganization, setDetailsOfOrganization] = useState('');
  const [openCalender, setOpenCalender] = useState(false);
  const [isDateSet, setIsDateSet] = useState(false);
  const [relationship, setRelationship] = useState('');
  const [otherPhoneNo, setOtherPhoneNo] = useState('');
  const [contactYou, setContactYou] = useState();
  const [sendReminder, setSendReminder] = useState();
  const [date, setDate] = useState(new Date());
  const [doYouAuthorize, setDoYouAuthorize] = useState();
  Moment.locale('en');
  console.log(date);
  const onDone = text => {
    setLoading(true);
    setTimeout(() => {
      setExtendView(false);
      setLoading(false);
    }, 2000);
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        setExtendView(!extendView);
        setParentExtendView(!parentExtendView);
      }}>
      {natureOfBussiness !== '' &&
      describeSafetyIssue !== '' &&
      detailsOfOrganization !== '' &&
      responsiblePersonEmail !== '' ? (
        <View style={styles.counterSticker}>
          <Entypo name="check" color={'#fff'} size={15} />
        </View>
      ) : (
        <View style={styles.counterSticker}>
          <AppText color={'#fff'} text={'8'} />
        </View>
      )}
      <AppText text={'Other Relevent Information'} color={colors.black} />
      <AppText
        text={
          'We need more information to allow us investigate this safety issue such as timeline, anonymous verification, etc'
        }
        color={colors.gray}
        size={10}
      />
      {parentExtendView && (
        <>
          {extendView && ( // nature of bussines
            <>
              <TextInput
                style={styles.textBox}
                value={natureOfBussiness}
                placeholder={
                  'Describe the nature of bussiness the organization you are reporting in engaged in'
                }
                onSubmitEditing={() => {
                  setLoading(true);
                  setTimeout(() => {
                    setExtendView2(true);
                    setLoading(false);
                  }, 2000);
                }}
                onChangeText={value => {
                  setNatureOfBussiness(value);
                }}
              />
            </>
          )}
          {extendView2 && ( //describe safety issue
            <View
              style={{
                // borderTopWidth: 0.5,
                // marginTop: 5,
                borderColor: colors.gray,
              }}>
              <TextInput
                style={styles.textBox}
                value={describeSafetyIssue}
                placeholder={
                  'Describe the Safety Issue or Hazard You are Reporting'
                }
                onSubmitEditing={() => {
                  setLoading(true);
                  setTimeout(() => {
                    setExtendView3(true);
                    setLoading(false);
                  }, 2000);
                }}
                onChangeText={value => {
                  setDescribeSafetyIssue(value);
                }}
              />
            </View>
          )}
          {extendView3 && ( // is address diffrent
            <View
              style={{
                marginTop: 15,
                borderColor: colors.gray,
              }}>
              <AppText
                text={
                  'Is the address of the organization different from the location of the safety issue?'
                }
                color={colors.gray}
                size={10}
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  marginTop: 10,
                }}>
                <TouchableOpacity
                  style={{
                    ...styles.button,
                    backgroundColor:
                      isAddressDifferent === true ? 'red' : colors.primary,
                  }}
                  onPress={() => {
                    setLoading(true);
                    setTimeout(() => {
                      setIsAddressDifferent(true);
                      setExtendView4(true);
                      setLoading(false);
                    }, 2000);
                  }}>
                  <AppText text={'Yes'} color={colors.white} bold={true} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    ...styles.button,
                    backgroundColor:
                      isAddressDifferent === false ? 'red' : colors.primary,
                  }}
                  onPress={() => {
                    setLoading(true);
                    setTimeout(() => {
                      setIsAddressDifferent(false);
                      setExtendView4(true);
                      setLoading(false);
                    }, 2000);
                  }}>
                  <AppText text={'No'} color={colors.white} bold={true} />
                </TouchableOpacity>
              </View>
            </View>
          )}
          {extendView4 && ( //details of organization
            <View
              style={{
                // borderTopWidth: 0.5,
                // marginTop: 5,
                borderColor: colors.gray,
              }}>
              <TextInput
                style={{...styles.textBox, height: 35}}
                value={detailsOfOrganization}
                placeholder={'Details of ogranization you are reporting'}
                onSubmitEditing={() => {
                  setLoading(true);
                  setTimeout(() => {
                    setExtendView5(true);
                    setLoading(false);
                  }, 2000);
                }}
                onChangeText={value => {
                  setDetailsOfOrganization(value);
                }}
              />
            </View>
          )}
          {extendView5 && ( //date picker
            <View
              style={{
                // borderTopWidth: 0.5,
                marginTop: 15,
                borderColor: colors.gray,
              }}>
              <AppText
                text={'What date did you identify this safety issue?'}
                size={10}
                color={colors.gray}
              />
              <TouchableOpacity
                onPress={() => setOpenCalender(true)}
                style={styles.datePickerView}>
                <View style={{padding: 10}}>
                  <AppText
                    text={Moment(date).format('d MMM Y')}
                    size={10}
                    color={colors.gray}
                  />
                </View>
                <DatePicker
                  modal
                  mode="date"
                  open={openCalender}
                  date={date}
                  onConfirm={date => {
                    setOpenCalender(false);
                    setDate(date);
                    setIsDateSet(true);
                    setExtendView6(true);
                  }}
                  onCancel={() => {
                    setOpenCalender(false);
                  }}
                />
              </TouchableOpacity>
            </View>
          )}
          {extendView6 && ( // select releshionship
            <View
              style={{
                // borderTopWidth: 0.5,
                marginTop: 15,

                borderColor: colors.gray,
              }}>
              <AppText
                text={
                  'Please select your relatiionship with the organization you are reporting?'
                }
                size={10}
                color={colors.gray}
              />
              <View style={{marginTop: 10}}>
                <AppButton
                  title={'Former Employee'}
                  fontSize={12}
                  backgroundColor={
                    relationship === 'Former Employee' ? 'red' : colors.primary
                  }
                  style={{color: 'red', marginTop: 10}}
                  height={25}
                  width={'100%'}
                  onPress={() => {
                    setLoading(true);
                    setRelationship('Former Employee');
                    setTimeout(() => {
                      setExtendView7(true);
                      setLoading(false);
                    }, 2000);
                  }}
                />
              </View>
              <AppButton
                title={'Current Employee'}
                fontSize={12}
                style={{marginTop: 10}}
                backgroundColor={
                  relationship === 'Current Employee' ? 'red' : colors.primary
                }
                height={25}
                width={'100%'}
                onPress={() => {
                  setLoading(true);
                  setRelationship('Current Employee');
                  setTimeout(() => {
                    setExtendView7(true);
                    setLoading(false);
                  }, 2000);
                }}
              />
              <AppButton
                title={'Representative of Employees'}
                backgroundColor={
                  relationship === 'Representative of Employees'
                    ? 'red'
                    : colors.primary
                }
                fontSize={12}
                style={{marginTop: 10}}
                height={25}
                width={'100%'}
                onPress={() => {
                  setLoading(true);
                  setRelationship('Representative of Employees');
                  setTimeout(() => {
                    setExtendView7(true);
                    setLoading(false);
                  }, 2000);
                }}
              />
            </View>
          )}
          {extendView7 && ( // do you authorize
            <View
              style={{
                marginTop: 20,
                borderColor: colors.gray,
              }}>
              <AppText
                text={
                  'Do you authorize us to anonymously verify this saftety issue with other employees? Your information will not be shared.'
                }
                color={colors.gray}
                size={10}
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  marginTop: 10,
                }}>
                <TouchableOpacity
                  style={{
                    ...styles.button,
                    backgroundColor:
                      doYouAuthorize === true ? 'red' : colors.primary,
                  }}
                  onPress={() => {
                    setLoading(true);
                    setTimeout(() => {
                      setDoYouAuthorize(true);
                      setExtendView8(true);
                      setLoading(false);
                    }, 2000);
                  }}>
                  <AppText text={'Yes'} color={colors.white} bold={true} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    ...styles.button,
                    backgroundColor:
                      doYouAuthorize === false ? 'red' : colors.primary,
                  }}
                  onPress={() => {
                    setLoading(true);
                    setTimeout(() => {
                      setDoYouAuthorize(false);
                      setExtendView8(true);
                      setLoading(false);
                    }, 2000);
                  }}>
                  <AppText text={'No'} color={colors.white} bold={true} />
                </TouchableOpacity>
              </View>
            </View>
          )}
          {extendView8 && (
            <View
              style={{
                borderColor: colors.gray,
                marginTop: 20,
              }}>
              <AppText
                text={
                  'Provide phone numbers of employees we can contact anonymously - you can separate multiple numbers with a comma (Your personal information will not be mentioned)'
                }
                size={10}
                color={colors.gray}
              />
              <TextInput
                style={{...styles.textBox, height: 35, marginTop: 10}}
                value={otherPhoneNo}
                placeholder={'Details of ogranization you are reporting'}
                onSubmitEditing={() => {
                  setLoading(true);
                  setTimeout(() => {
                    setExtendView9(true);
                    setLoading(false);
                  }, 2000);
                }}
                onChangeText={value => {
                  setOtherPhoneNo(value);
                }}
              />
            </View>
          )}
          {extendView9 && ( // contact you
            <View
              style={{
                marginTop: 20,
                borderColor: colors.gray,
              }}>
              <AppText
                text={
                  'In the course of our investigation, would you mind if we anonymously contact you about the safety issue?'
                }
                color={colors.gray}
                size={10}
              />
              <AppText
                text={'We are not mandated to contact you'}
                color={colors.gray}
                size={10}
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  marginTop: 10,
                }}>
                <TouchableOpacity
                  style={{
                    ...styles.button,
                    backgroundColor:
                      contactYou == true ? 'red' : colors.primary,
                  }}
                  onPress={() => {
                    setLoading(true);
                    setContactYou(true);
                    setTimeout(() => {
                      setExtendView10(true);
                      setLoading(false);
                    }, 2000);
                  }}>
                  <AppText text={'Yes'} color={colors.white} bold={true} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    ...styles.button,
                    backgroundColor:
                      contactYou == false ? 'red' : colors.primary,
                  }}
                  onPress={() => {
                    setLoading(true);
                    setContactYou(false);
                    setTimeout(() => {
                      setExtendView10(true);
                      setLoading(false);
                    }, 2000);
                  }}>
                  <AppText text={'No'} color={colors.white} bold={true} />
                </TouchableOpacity>
              </View>
            </View>
          )}
          {extendView10 && (
            <View
              style={{
                marginTop: 20,
                borderColor: colors.gray,
                marginBottom: 50,
              }}>
              <AppText
                text={
                  'We would like to send you a reminder to fill this safety report form again in 2 weeks, this will allow us to know if action has been taken. Would you like us to send you an anonymous reminder?'
                }
                color={colors.gray}
                size={10}
              />

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  marginTop: 10,
                }}>
                <TouchableOpacity
                  style={{
                    ...styles.button,
                    backgroundColor:
                      sendReminder == true ? 'red' : colors.primary,
                  }}
                  onPress={() => {
                    setLoading(true);
                    setSendReminder(true);
                    setTimeout(() => {
                      setParentExtendView(false);
                      setLoading(false);
                    }, 2000);
                  }}>
                  <AppText text={'Yes'} color={colors.white} bold={true} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    ...styles.button,
                    backgroundColor:
                      sendReminder == false ? 'red' : colors.primary,
                  }}
                  onPress={() => {
                    setLoading(true);
                    setSendReminder(true);
                    setTimeout(() => {
                      setParentExtendView(false);
                      setLoading(false);
                    }, 2000);
                  }}>
                  <AppText text={'No'} color={colors.white} bold={true} />
                </TouchableOpacity>
              </View>
            </View>
          )}
          {loading && (
            <View style={styles.loadingView}>
              <AppText
                text={'Next Question Will Load After Your Response Above'}
                size={10}
                color={colors.gray}
              />
              <Loader />
            </View>
          )}
        </>
      )}
    </TouchableOpacity>
  );
};

export default OtherInformation;

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
    height: 45,
    borderColor: colors.primary,
    borderWidth: 0.5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
    backgroundColor: colors.white,
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
  button: {
    backgroundColor: colors.primary,
    width: '45%',
    borderRadius: 8,
    alignItems: 'center',
    height: 25,
    justifyContent: 'center',
  },
  datePickerView: {
    backgroundColor: colors.white,
    borderRadius: 10,
    borderColor: colors.primary,
    borderWidth: 0.5,
    marginTop: 10,
  },
  loadingView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 10,
    borderTopWidth: 0.5,
    paddingTop: 10,
  },
});
