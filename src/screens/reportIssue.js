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
const ReportIssue = ({navigation}) => {
  const [selectedIndustry, setSelectedIndustry] = useState('Select Industry');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [fresh, setFresh] = useState(false);
  const [isDone, setDone] = useState(false);
  const [orgainizationInfo, setOrganizationInfo] = useState('');
  const [selectState, setSelectState] = useState('Select State');
  const [showIndustryInfo, setShowIndustryInfo] = useState(false);

  const status = 'Active';
  const organization = 'organization';
  const industry = 'industry';
  const state = 'state';
  const onSubmitIssue = async () => {
    try {
      setLoading(true);
      const response = await reportIssue({
        status,
        description,
        organization,
        industry,
        state,
      });
      setLoading(false);
      if (response.status) {
        console.log('....RESPONSE', response);
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
        <TouchableOpacity style={styles.container}>
          <View style={styles.counterSticker}>
            <AppText color={'#fff'} text={'5'} />
          </View>
          <AppText
            text={'Select the LGA Yor ar Reporting From'}
            color={colors.black}
          />
          <AppText
            text={
              'We will like to know the Local Government Area in which the safety issue you are reporting happend'
            }
            color={colors.gray}
            size={10}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.container}>
          <View style={styles.counterSticker}>
            <AppText color={'#fff'} text={'6'} />
          </View>

          <AppText text={'Location of the Safety Issue'} color={colors.black} />
          <AppText
            text={
              'We will like to know the location within Nigeria in which the safety issue you are reporting happend'
            }
            color={colors.gray}
            size={10}
          />
        </TouchableOpacity>

        <TouchableOpacity style={{...styles.container}}>
          <View style={styles.counterSticker}>
            <AppText color={'#fff'} text={'7'} />
          </View>

          <AppText text={'Designated Safety Channel'} color={colors.black} />
          <AppText
            text={
              'We will like to know if the organization you are reporting have a designated channel to report safety issues'
            }
            color={colors.gray}
            size={10}
          />
        </TouchableOpacity>

        <View style={{marginBottom: '40%'}}>
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
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.btn} onPress={() => onSubmitIssue()}>
        {loading ? (
          <ActivityIndicator size={20} color={colors.white} />
        ) : (
          <AppText color={'#fff'} text={'SUBMIT'} />
        )}
      </TouchableOpacity>
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
    height: 100,
    maxHeight: '50%',
    width: '90%',
    backgroundColor: colors.primary,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    padding: 15,
    marginTop: -10,
    zIndex: 1,
  },
});
