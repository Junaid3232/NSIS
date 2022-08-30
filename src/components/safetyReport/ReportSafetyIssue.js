import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import colors from '../../config/colors';
import {AppText} from '../AppText';
import Loader from 'react-native-three-dots-loader';
import Entypo from 'react-native-vector-icons/Entypo';
import {AppButton} from '../AppButton';
const ReportSafetyIssue = ({setFresh, fresh, setDone}) => {
  const [extendView, setExtendView] = useState(false);
  const [extendView2, setExtendView2] = useState(false);
  const [extendView3, setExtendView3] = useState(false);
  const [extendView4, setExtendView4] = useState(false);
  const [input, setInput] = useState(false);
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [showDots, setShowDots] = useState(false);
  const [formFilled, setFormFilled] = useState(false);
  const [statusConfirmation, setStatusConfirmation] = useState({
    freshIssue: false,
    existingIssue: false,
    softCityGroup: false,
    auditTech: false,
    resolved: false,
    pending: false,
  });

  const onExisting = () => {
    setShowDots(true);
    setTimeout(() => {
      setStatusConfirmation({
        ...statusConfirmation,
        existingIssue: !statusConfirmation.existingIssue,
        freshIssue: false,
      });
      setShowDots(false);
      setFresh(false);
    }, 2000);
  };
  const onFresh = () => {
    setShowDots(true);
    setTimeout(() => {
      setStatusConfirmation({
        freshIssue: false,
        existingIssue: false,
        softCityGroup: false,
        auditTech: false,
        resolved: false,
        pending: false,
      });
      setShowDots(false);
      setFresh(!fresh);
      setExtendView(false);
    }, 2000);
  };
  const onPressResolved = () => {
    setShowDots(true);
    setTimeout(() => {
      setDone(true);
      setExtendView(false);
      setStatusConfirmation({
        freshIssue: false,
        existingIssue: false,
        softCityGroup: false,
        auditTech: false,
        resolved: false,
        pending: false,
      });
      setShowDots(false);
    }, 2000);
  };
  const onPressDone = () => {
    setShowDots(true);
    setTimeout(() => {
      if (description !== '') {
        setFresh(true);
        setExtendView(false);
        setExtendView2(false);
        setExtendView3(false);
        setExtendView4(false);
      } else {
        setFormFilled(false);
      }
      setShowDots(false);
    }, 2000);
  };
  React.useEffect(() => {
    if (statusConfirmation.existingIssue) {
      setExtendView2(true);
    } else {
      setExtendView2(false);
    }
    if (statusConfirmation.auditTech || statusConfirmation.softCityGroup) {
      setExtendView3(true);
    } else {
      setExtendView3(false);
    }
    if (statusConfirmation.resolved || statusConfirmation.pending) {
      setExtendView4(true);
    } else {
      setExtendView4(false);
    }
  }, [statusConfirmation]);

  return (
    <View>
      <View style={styles.issueHeader}>
        <AppText color={colors.black} size={14} text={'Report Safety Issue'} />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        {fresh || formFilled ? (
          <View style={styles.counterSticker}>
            <Entypo name="check" color={'#fff'} size={15} />
          </View>
        ) : (
          <View style={styles.counterSticker}>
            <AppText color={'#fff'} text={'1'} />
          </View>
        )}
        <View style={[styles.container, {manHeight: 100}]}>
          <TouchableOpacity
            onPress={() => {
              setExtendView(!extendView);
            }}>
            <View style={{padding: 5}}>
              <AppText color={colors.black} text={'Report Safety Issue'} />
              {extendView ? (
                <AppText
                  text={
                    ' Are you reporting a fresh Safety issue or you are confirming the status of a safety issue you have reported in the past'
                  }
                  size={10}
                  color={colors.gray}
                />
              ) : (
                <AppText
                  text={
                    "Let's know if this is an existing safety issue or if this is a fresh safety issue you will like to report"
                  }
                  size={10}
                  color={colors.gray}
                />
              )}
            </View>
          </TouchableOpacity>
          {extendView && (
            <View style={styles.cardContainer}>
              <View style={{flex: 0.5, marginEnd: 8}}>
                <TouchableOpacity
                  // disabled={statusConfirmation.existingIssue && true}
                  style={[
                    styles.button,
                    {
                      backgroundColor: statusConfirmation.freshIssue
                        ? 'red'
                        : !statusConfirmation.existingIssue &&
                          !statusConfirmation.freshIssue
                        ? colors.primary
                        : colors.primary + 50,

                      elevation: statusConfirmation.existingIssue ? 0 : 5,
                    },
                  ]}
                  onPress={onFresh}>
                  <AppText size={10} color={'white'} text={'Fresh Issue'} />
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
                      elevation: statusConfirmation.freshIssue ? 0 : 5,
                    },
                  ]}
                  onPress={onExisting}>
                  <AppText color={'#fff'} text={'Existing Issue'} size={10} />
                </TouchableOpacity>
              </View>
            </View>
          )}

          {extendView2 ? (
            <>
              <AppText
                text={
                  'Below are the safety issues you have reported in the past. Select the name of the orgainization you are confirming the status of the safety issue'
                }
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
                        elevation: statusConfirmation.auditTech ? 0 : 5,
                      },
                    ]}
                    onPress={() => {
                      setShowDots(true);
                      setTimeout(() => {
                        setStatusConfirmation({
                          ...statusConfirmation,
                          auditTech: false,
                          softCityGroup: !statusConfirmation.softCityGroup,
                        });
                        setShowDots(false);
                      }, 2000);
                    }}>
                    <AppText color={'#fff'} text={'Softcity Group'} size={10} />
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
                        elevation: statusConfirmation.softCityGroup ? 0 : 5,
                      },
                    ]}
                    onPress={() => {
                      setShowDots(true);
                      setTimeout(() => {
                        setStatusConfirmation({
                          ...statusConfirmation,
                          auditTech: !statusConfirmation.auditTech,
                          softCityGroup: false,
                        });
                        setShowDots(false);
                      }, 2000);
                    }}>
                    <AppText color={'#fff'} text={'Audit Tech'} size={10} />
                  </TouchableOpacity>
                </View>
              </View>
            </>
          ) : null}
          {extendView3 ? (
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
                        elevation: statusConfirmation.pending ? 0 : 5,
                      },
                    ]}
                    onPress={onPressResolved}>
                    <AppText color={'#fff'} text={'Its Resolved'} size={10} />
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
                        elevation: statusConfirmation.resolved ? 0 : 5,
                      },
                    ]}
                    onPress={() => {
                      setShowDots(true);
                      setTimeout(() => {
                        setStatusConfirmation({
                          ...statusConfirmation,
                          pending: !statusConfirmation.pending,
                          resolved: false,
                        });
                        setShowDots(false);
                      }, 2000);
                    }}>
                    <AppText color={'#fff'} text={'Still Pending'} size={10} />
                  </TouchableOpacity>
                </View>
              </View>
            </>
          ) : null}
          {extendView4 ? (
            <>
              <View style={{paddingBottom: 10}}>
                <AppText
                  text={
                    'Is there any further information you will like to share with us about this issue? Enter below'
                  }
                  color={colors.gray}
                  size={10}
                />
              </View>
              <View style={styles.textInput}>
                <View style={styles.lineCounter}>
                  <AppText size={10} color={colors.gray} text={'0/100'} />
                </View>
                <TextInput
                  multiline
                  style={{
                    fontSize: 10,
                    fontFamily: 'Raleway-Medium',
                    padding: 10,
                  }}
                  numberOfLines={100}
                  onChangeText={text => setDescription(text)}
                />
              </View>
              <TouchableOpacity style={styles.doneButton} onPress={onPressDone}>
                <AppText color={'white'} text={'Done'} size={10} />
              </TouchableOpacity>
            </>
          ) : null}
          {showDots && (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 10,
                justifyContent: 'space-around',
              }}>
              <AppText
                text={'Next Will Load Your Response Above'}
                size={10}
                color={colors.gray}
              />
              <Loader />
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default ReportSafetyIssue;

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
    elevation: 5,
    borderWidth: 0.5,
    borderColor: colors.orange + 50,
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
    borderColor: colors.primary,
    borderRadius: 10,
    backgroundColor: colors.white,
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
