import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Header} from '../components/Header';
import {AppText} from '../components/AppText';
import {ScrollView} from 'react-native';
import colors from '../config/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const ReportIssue = ({navigation}) => {
  const [submit, setSubmit] = useState(true);
  const [extendView, setExtendView] = useState(false);
  const [existingIssue, setExistingIssue] = useState(false);
  const [softCity, setSoftCity] = useState(false);
  const [input, setInput] = useState(false);
  const [statusConfirmation, setStatusConfirmation] = useState({
    freshIssue: false,
    existingIssue: false,
    softCityGroup: false,
    auditTech: false,
    resolved: false,
    pending: false,
  });
  const [showIndustryInfo, setShowIndustryInfo] = useState(false);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header navigation={navigation}/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.issueHeader}>
          <AppText bold={'bold'} text={'Report Safety Issue'} />
        </View>
        <View style={[styles.container, {manHeight: 100}]}>
          {submit == false ? (
            <View style={styles.counterSticker}>
              <AppText color={'#fff'} text={'1'} />
            </View>
          ) : (
            <View style={styles.counterSticker}>
              <AppText color={'#fff'} text={'A'} />
            </View>
          )}
          <TouchableOpacity
            onPress={() => {
              setExtendView(!extendView);
            }}>
            <View style={{padding: 5}}>
              <AppText bold={'bold'} text={'Report Safety Issue'} />
              {extendView ? <AppText 
               text={" Are you reporting a fresh Safety issue or you are confirming the status of a safety issue you have reported in the past"}
               size={10}
               color={colors.gray}/>
  
              :
              <AppText
                text={"Let's know if this is an existing safety issue or if this is a fresh safety issue you will like to report"}
                size={10}
                color={colors.gray}
              /> }
            </View>
          </TouchableOpacity>
          {extendView && (
            <View style={styles.cardContainer}>
              <View style={{flex: 0.5, marginEnd: 8}}>
                <TouchableOpacity
                  disabled={statusConfirmation.existingIssue && true}
                  style={[
                    styles.button,
                    {
                      backgroundColor: statusConfirmation.freshIssue
                        ? 'red'
                        : !statusConfirmation.existingIssue &&
                          !statusConfirmation.freshIssue
                        ? colors.primary
                        : colors.primary + 50,
                    },
                  ]}
                  onPress={() =>
                    setStatusConfirmation({
                      ...statusConfirmation,
                      freshIssue: !statusConfirmation.freshIssue,
                      existingIssue: false,
                    })
                  }>
                  <AppText
                    bold={'bold'}
                    size={10}
                    color={'white'}
                    text={'Fresh Issue'}
                  />
                </TouchableOpacity>
              </View>
              <View style={{flex: 0.5}}>
                <TouchableOpacity
                  disabled={statusConfirmation.freshIssue && true}
                  style={[
                    styles.button,
                    {
                      backgroundColor: statusConfirmation.existingIssue
                        ? 'red'
                        : !statusConfirmation.existingIssue &&
                          !statusConfirmation.freshIssue
                        ? colors.primary
                        : colors.primary + 50,
                    },
                  ]}
                  onPress={() =>
                    setStatusConfirmation({
                      ...statusConfirmation,
                      existingIssue: !statusConfirmation.existingIssue,
                      freshIssue: false,
                    })
                  }>
                  <AppText
                    bold={'bold'}
                    color={'#fff'}
                    text={'Existing Issue'}
                    size={10}
                  />
                </TouchableOpacity>
              </View>
            </View>
          )}

          {statusConfirmation.existingIssue || statusConfirmation.freshIssue ? (
            <>
              <AppText text={"Below are the safety issues you have reported in the past. Select the name of the orgainization you are confirming the status of the safety issue"}
                color={colors.gray}
                size={10}
              />
              <View style={styles.cardContainer}>
                <View style={{flex: 0.5, marginEnd: 8}}>
                  <TouchableOpacity
                    disabled={statusConfirmation.auditTech && true}
                    style={[
                      styles.button,
                      {
                        backgroundColor: statusConfirmation.softCityGroup
                          ? 'red'
                          : !statusConfirmation.auditTech &&
                            !statusConfirmation.softCityGroup
                          ? colors.primary
                          : colors.primary + 50,
                      },
                    ]}
                    onPress={() =>
                      setStatusConfirmation({
                        ...statusConfirmation,
                        auditTech: false,
                        softCityGroup: !statusConfirmation.softCityGroup,
                      })
                    }>
                    <AppText
                      bold={'bold'}
                      color={'#fff'}
                      text={'Softcity Group'}
                      size={10}
                    />
                  </TouchableOpacity>
                </View>
                <View style={{flex: 0.5}}>
                  <TouchableOpacity
                    disabled={statusConfirmation.softCityGroup && true}
                    style={[
                      styles.button,
                      {
                        backgroundColor: statusConfirmation.auditTech
                          ? 'red'
                          : !statusConfirmation.auditTech &&
                            !statusConfirmation.softCityGroup
                          ? colors.primary
                          : colors.primary + 50,
                      },
                    ]}
                    onPress={() =>
                      setStatusConfirmation({
                        ...statusConfirmation,
                        auditTech: !statusConfirmation.auditTech,
                        softCityGroup: false,
                      })
                    }>
                    <AppText bold={'bold'} color={'#fff'} text={'Audit Tech'}  size={10}/>
                  </TouchableOpacity>
                </View>
              </View>
            </>
          ) : null}
          {statusConfirmation.softCityGroup || statusConfirmation.auditTech ? (
            <>
              <AppText
                text={'Has this issue being resolved or it is still pending'}
                color={colors.gray}
                size={10}
              />
              <View style={styles.cardContainer}>
                <View style={{flex: 0.5, marginEnd: 8}}>
                  <TouchableOpacity
                    disabled={statusConfirmation.pending && true}
                    style={[
                      styles.button,
                      {
                        backgroundColor: statusConfirmation.resolved
                          ? 'red'
                          : !statusConfirmation.resolved &&
                            !statusConfirmation.pending
                          ? colors.primary
                          : colors.primary + 50,
                      },
                    ]}
                    onPress={() =>
                      setStatusConfirmation({
                        ...statusConfirmation,
                        resolved: !statusConfirmation.resolved,
                        pending: false,
                      })
                    }>
                    <AppText
                      bold={'bold'}
                      color={'#fff'}
                      text={'Its Resolved'}
                      size={10}
                    />
                  </TouchableOpacity>
                </View>
                <View style={{flex: 0.5}}>
                  <TouchableOpacity
                    disabled={statusConfirmation.resolved && true}
                    style={[
                      styles.button,
                      {
                        backgroundColor: statusConfirmation.pending
                          ? 'red'
                          : !statusConfirmation.resolved &&
                            !statusConfirmation.pending
                          ? colors.primary
                          : colors.primary + 50,
                      },
                    ]}
                    onPress={() =>
                      setStatusConfirmation({
                        ...statusConfirmation,
                        pending: !statusConfirmation.pending,
                        resolved: false,
                      })
                    }>
                    <AppText
                      bold={'bold'}
                      color={'#fff'}
                      text={'Still Pending'}
                      size={10}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </>
          ) : null}
          {statusConfirmation.resolved || statusConfirmation.pending ? (
            <>
              <View style={{paddingBottom: 10}}>
                <AppText
                  text={
                    "Is there any further information you will like to share with us about this issue? Enter below"
                  }
                  color={colors.gray}
                  size={10}
                />
              </View>
              <View style={styles.textInput}>
                <View style={styles.lineCounter}>
                  <AppText text={'0/100'} />
                </View>
                <TextInput multiline numberOfLines={100} />
              </View>
            </>
          ) : null}
          {extendView && (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 10,
              }}>
              <AppText text={'Next Will Load Your Response Above'} size={10} color={colors.gray}/>
              <View style={styles.waitingDot} />
              <View style={styles.waitingDot2} />
              <View style={styles.waitingDot3} />
            </View>
          )}

          {input && (
            <View
              style={styles.hitView}>
              <AppText text={'You Can Hit Submit After This'} />
              <View style={styles.waitingDot} />
              <View style={styles.waitingDot2} />
              <View style={styles.waitingDot3} />
            </View>
          )}
        </View>

        <TouchableOpacity
          onPress={() => setShowIndustryInfo(!showIndustryInfo)}
          style={styles.container}>
          {submit == false ? (
            <View style={styles.counterSticker}>
              <AppText color={'#fff'} text={'2'} />
            </View>
          ) : (
            <View style={styles.counterSticker}>
              <AppText color={'#fff'} text={'A'} />
            </View>
          )}
          {showIndustryInfo ? (
            <>
              <AppText bold={'bold'} text={'Industry Information'}  size={10}/>
              <AppText
                text={
                  'Select the industry of the organization you are reporting'
                }
                
              />
              <View
                style={{
                  width: '90%',
                  padding: 8,
                  backgroundColor: colors.primary,
                  borderRadius: 10,
                  marginTop: 10,
                }}>
                <AppText color={'white'} text={'Telecomunication'} />
              </View>
            </>
          ) : (
            <>
              <AppText bold={'bold'} text={'Industry Information'} />
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
        <TouchableOpacity style={styles.container}>
          {submit == false ? (
            <View style={styles.counterSticker}>
              <AppText color={'#fff'} text={'3'} />
            </View>
          ) : (
            <View style={styles.counterSticker}>
              <AppText color={'#fff'} text={'A'} />
            </View>
          )}
          <AppText text={'Organization Information'} bold={true}/>
          <AppText
            text={
               "We will like to get detailed information about the organization you are reporting operates"
            }
            color={colors.gray}
            size={10}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.container}>
          {submit == false ? (
            <View style={styles.counterSticker}>
              <AppText color={'#fff'} text={'4'} />
            </View>
          ) : (
            <View style={styles.counterSticker}>
              <AppText color={'#fff'} text={'A'} />
            </View>
          )}
          <AppText text={'Select the State You are Reporting From'} bold={true}/>
          <AppText
            text={
            "We will like to know the Nigerian State in which the safety issue you are reporting happend"
            }
            color={colors.gray}
            size={10}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.container}>
          {submit == false ? (
            <View style={styles.counterSticker}>
              <AppText color={'#fff'} text={'5'} />
            </View>
          ) : (
            <View style={styles.counterSticker}>
              <AppText color={'#fff'} text={'A'} />
            </View>
          )}
          <AppText text={'Select the LGA Yor ar Reporting From'} bold={true}/>
          <AppText
            text={
              "We will like to know the Local Government Area in which the safety issue you are reporting happend"
            }
            color={colors.gray}
            size={10}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.container}>
          {submit == false ? (
            <View style={styles.counterSticker}>
              <AppText color={'#fff'} text={'6'} />
            </View>
          ) : (
            <View style={styles.counterSticker}>
              <AppText color={'#fff'} text={'A'} />
            </View>
          )}
          <AppText text={'Location of the Safety Issue'} bold={true}/>
          <AppText
            text={
                "We will like to know the location within Nigeria in which the safety issue you are reporting happend"
            }
            color={colors.gray}
            size={10}
          />
        </TouchableOpacity>
        
        <TouchableOpacity style={{...styles.container}}>
          {submit == false ? (
            <View style={styles.counterSticker}>
              <AppText color={'#fff'} text={'7'} />
            </View>
          ) : (
            <View style={styles.counterSticker}>
              <AppText color={'#fff'} text={'A'} />
            </View>
          )}
          <AppText text={'Designated Safety Channel'} bold={true}/>
          <AppText
            text={
 "We will like to know if the organization you are reporting have a designated channel to report safety issues"
            }
            color={colors.gray}
            size={10}
          />
        </TouchableOpacity>
     
        <View style={{marginBottom:'30%'}}>
        <TouchableOpacity style={{...styles.container}}>
          {submit == false ? (
            <View style={styles.counterSticker}>
              <AppText color={'#fff'} text={'7'} />
            </View>
          ) : (
            <View style={styles.counterSticker}>
              <AppText color={'#fff'} text={'A'} />
            </View>
          )}
          <AppText text={'Other Relevent Information'} bold={true}/>
          <AppText
            text={
 "We need more information to allow us investigate this safety issue such as timeline, anonymous verification, etc"
            }
            color={colors.gray}
            size={10}
          />
        </TouchableOpacity>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.btn} onPress={() => setSubmit(!submit)}>
        <AppText color={'#fff'} text={'SUBMIT'} />
      </TouchableOpacity>
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
    bottom: 110,
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
  waitingDot: {height: 10, width: 10, backgroundColor: 'grey', marginLeft: 10},
  waitingDot2: {
    height: 10,
    width: 10,
    backgroundColor: 'grey',
    marginHorizontal: 10,
  },
  waitingDot3: {height: 10, width: 10, backgroundColor: 'grey'},
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
    borderColor:colors.gray,
    marginBottom: 10,
  },
  issueHeader:{paddingVertical: 10, paddingHorizontal: 22},

  hitView:{
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  }
});
