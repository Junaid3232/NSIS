import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {Header} from '../components/Header';
import {AppText} from '../components/AppText';
import {ScrollView} from 'react-native';
import colors from '../config/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {color} from 'react-native-reanimated';
import {reportIssue} from '../api/reportIssue';
import ReportSafetyIssue from '../components/safetyReport/ReportSafetyIssue';
import IssueReportedModal from '../components/IssueReportedModal';
import IndustryInfoCard from '../components/safetyReport/IndustryInfoCard';
import OraganizationCard from '../components/safetyReport/OraganizationCard';
import StateCard from '../components/safetyReport/StateCard';
import LgaCard from '../components/safetyReport/LgaCard';
import LocationInfoCard from '../components/safetyReport/LocationInfoCard';
import DesignedChannelCard from '../components/safetyReport/DesignedChannelCard';
import OtherInformation from '../components/safetyReport/OtherInformation';
import {useIsFocused} from '@react-navigation/native';
import {CommonActions} from '@react-navigation/native';
const ReportIssue = ({navigation}) => {
  const isFocused = useIsFocused();
  const [selectedIndustry, setSelectedIndustry] = useState('Select Industry');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [fresh, setFresh] = useState(false);
  const [isDone, setDone] = useState(false);
  const [orgainizationInfo, setOrganizationInfo] = useState('');
  const [selectState, setSelectState] = useState('Select State');
  const [showIndustryInfo, setShowIndustryInfo] = useState(false);
  const [selectLGA, setSelectLGA] = useState('Select LGA');
  const [locationInfo, setLocationInfo] = useState('');
  const [responsiblePersonName, setResponsiblePersonName] = useState('');
  const [responsiblePersonPhone, setResponsiblePersonPhone] = useState('');
  const [responsiblePersonEmail, setResponsiblePersonEmail] = useState('');
  const [date, setDate] = useState(new Date());
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    console.log('........');
    setFlag(true);
    const unsubscribe = navigation.addListener('focus', () => {
      setTimeout(() => {
        setFlag(false);
      }, 1000);
      // setDescription('');
      // setSelectedIndustry('Select Industry');
      // setFresh(false);
      // setDone(false);
      // setOrganizationInfo('');
      // setSelectState('Select State');
      // setShowIndustryInfo(false);
      // setSelectLGA('Select LGA');
      // setLocationInfo('');
      // setResponsiblePersonName('');
      // setResponsiblePersonPhone('');
      // setResponsiblePersonEmail('');
    });

    return unsubscribe;
  }, [navigation, date, flag]);

  const status = 'Active';
  const body = {
    status: fresh ? 'Active' : 'NotActive',
    discription: description,
    organization: orgainizationInfo,
    industry: selectedIndustry,
    state: selectState,
  };
  const onSubmitIssue = async () => {
    try {
      setLoading(true);
      const response = await reportIssue(body);
      setLoading(false);
      if (response.status) {
        console.log('....RESPONSE', response);
        setDone(true);
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [{name: 'Dashboard'}],
          }),
        );
      } else {
        Alert.alert('Error', response.message);
      }
    } catch (err) {
      setLoading(false);
      Alert.alert('Error', err.message);
      console.log('error is: ', err);
    }
  };
  useEffect(() => {
    setShowIndustryInfo(true);
  }, [fresh]);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ReportSafetyIssue
          setFresh={setFresh}
          fresh={fresh}
          isDone={isDone}
          setDone={setDone}
        />
        <IndustryInfoCard
          selectedIndustry={selectedIndustry}
          setSelectedIndustry={setSelectedIndustry}
        />
        <OraganizationCard
          setOrganizationInfo={setOrganizationInfo}
          orgainizationInfo={orgainizationInfo}
        />
        <StateCard selectState={selectState} setSelectState={setSelectState} />
        <LgaCard
          setSelectLGA={setSelectLGA}
          selectLGA={selectLGA}
          selectState={selectState}
        />
        <LocationInfoCard
          setLocationInfo={setLocationInfo}
          locationInfo={locationInfo}
        />
        <DesignedChannelCard
          setResponsiblePersonName={setResponsiblePersonName}
          responsiblePersonName={responsiblePersonName}
          setResponsiblePersonPhone={setResponsiblePersonPhone}
          responsiblePersonPhone={responsiblePersonPhone}
          setResponsiblePersonEmail={setResponsiblePersonEmail}
          responsiblePersonEmail={responsiblePersonEmail}
        />
        <OtherInformation />

        {/* <View style={{}}>
          <TouchableOpacity style={{...styles.container}}>
            <View style={styles.counterSticker}>
              <AppText color={'#fff'} text={'8'} />
            </View>

            <AppText text={'Other Relevent Information'} color={colors.black} />
            <AppText
              text={
                'We need more information to allow us investigate this safety issue such as timeline, anonymous verification, etc'
              }
              color={colors.gray}
              size={10}
            />
          </TouchableOpacity>
        </View> */}
        <TouchableOpacity style={styles.btn} onPress={() => onSubmitIssue()}>
          {loading ? (
            <ActivityIndicator size={20} color={colors.white} />
          ) : (
            <AppText color={'#fff'} text={'SUBMIT'} />
          )}
        </TouchableOpacity>
      </ScrollView>

      <IssueReportedModal visible={isDone} setModalVisible={setDone} />
    </SafeAreaView>
  );
};

export default ReportIssue;

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
    marginBottom: '40%',
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    width: '90%',
    alignSelf: 'center',
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
});
