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

const ReportIssue = () => {
  const [submit, setSubmit] = useState(true);
  const [extendView, setExtendView] = useState(false);
  const [existingIssue, setExistingIssue] = useState(false);
  const [softCity, setSoftCity] = useState(false);
  const [input, setInput] = useState(false);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header />
      <ScrollView style={{marginBottom:'35%'}}>
        <View style={{paddingVertical: 10, paddingHorizontal: 22}}>
          <AppText bold={'bold'} text={'Report Safety Issue'} />
        </View>

        <TouchableOpacity
          style={[styles.container, {manHeight: 100}]}
          onPress={() => {
            setExtendView(!extendView);
          }}>
          {submit == false ? (
            <View style={styles.counterSticker}>
              <AppText color={'#fff'} text={'1'} />
            </View>
          ) : (
            <View style={styles.counterSticker}>
              <AppText color={'#fff'} text={'A'} />
            </View>
          )}
          <AppText bold={'bold'} text={'Report Safety Issue'} />
          <AppText
            text={
              "Let's know if this is an existing safety issue or if this is a fresh safety issue you will like to report"
            }
          />
          {extendView && (
            <View
              style={{
                flexDirection: 'row',
                borderBottomWidth: 1,
                marginBottom: 10,
                borderBottomColor: extendView && 'grey',
              }}>
              <View style={{flex: 0.5, marginEnd: 8}}>
                <TouchableOpacity
                  style={[styles.button, {backgroundColor: 'green'}]}
                  onPress={() => {}}>
                  <AppText bold={'bold'} color={'#fff'} text={'Fresh Issue'} />
                </TouchableOpacity>
              </View>
              <View style={{flex: 0.5}}>
                <TouchableOpacity
                  style={[
                    styles.button,
                    {backgroundColor: existingIssue === true ? 'red' : 'green'},
                  ]}
                  onPress={() => setExistingIssue(!existingIssue)}>
                  <AppText
                    bold={'bold'}
                    color={'#fff'}
                    text={'Existing Issue'}
                  />
                </TouchableOpacity>
              </View>
            </View>
          )}

          {existingIssue && (
            <>
              <AppText
                text={
                  "Let's know if this is an existing safety issue or if this is a fresh safety issue you will like to report"
                }
              />
              <View
                style={{
                  flexDirection: 'row',
                  marginBottom: 10,
                  borderBottomWidth: 1,
                  borderBottomColor: 'grey',
                }}>
                <View style={{flex: 0.5, marginEnd: 8}}>
                  <TouchableOpacity
                    style={[
                      styles.button,
                      {backgroundColor: softCity == true ? 'red' : 'green'},
                    ]}
                    onPress={() => {
                      setSoftCity(!softCity);
                    }}>
                    <AppText
                      bold={'bold'}
                      color={'#fff'}
                      text={'Softcity Group'}
                    />
                  </TouchableOpacity>
                </View>
                <View style={{flex: 0.5}}>
                  <TouchableOpacity
                    style={[styles.button, {backgroundColor: 'green'}]}
                    onPress={() => {}}>
                    <AppText bold={'bold'} color={'#fff'} text={'Audit Tech'} />
                  </TouchableOpacity>
                </View>
              </View>
            </>
          )}
          {softCity && (
            <>
              <AppText
                text={'Here this issue being resolved or it is still pending'}
              />
              <View
                style={{
                  flexDirection: 'row',
                  marginBottom: 10,
                  borderBottomWidth: 1,
                  borderBottomColor: 'grey',
                }}>
                <View style={{flex: 0.5, marginEnd: 8}}>
                  <TouchableOpacity
                    style={[styles.button, {backgroundColor: 'green'}]}
                    onPress={() => setInput(!input)}>
                    <AppText
                      bold={'bold'}
                      color={'#fff'}
                      text={'Its Resolved'}
                    />
                  </TouchableOpacity>
                </View>
                <View style={{flex: 0.5}}>
                  <TouchableOpacity
                    style={[styles.button, {backgroundColor: 'green'}]}
                    onPress={() => {}}>
                    <AppText
                      bold={'bold'}
                      color={'#fff'}
                      text={'Still Pending'}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </>
          )}
         { input &&
          <>
          <View style={{paddingBottom: 10}}>
            <AppText
              text={
                "Let's know if this is an existing safety issue or if this is a fresh safety issue you will like to report"
              }
            />
          </View>
          <View style={styles.textInput}>
                  <Text style={styles.lineCounter}>{"0/100"}</Text>
            <TextInput
              multiline
              numberOfLines={100}
              
            />
          </View></>}
          {extendView && (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 10,
              }}>
              <AppText text={'Next Will Load Your Response Above'} />
              <View style={styles.waitingDot} />
              <View style={styles.waitingDot2} />
              <View style={styles.waitingDot3} />
            </View>
          )}
          
            {input && (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 10,
              }}>
              <AppText text={'You Can Hit Submit After This'} />
              <View style={styles.waitingDot} />
              <View style={styles.waitingDot2} />
              <View style={styles.waitingDot3} />
            </View>
          )}
        </TouchableOpacity>

        <TouchableOpacity style={styles.container}>
          {submit == false ? (
            <View style={styles.counterSticker}>
              <AppText color={'#fff'} text={'2'} />
            </View>
          ) : (
            <View style={styles.counterSticker}>
              <AppText color={'#fff'} text={'A'} />
            </View>
          )}
          <AppText bold={'bold'} text={'Report Safety Issue'} />
          <AppText
            text={
              "Let's know if this is an existing safety issue or if this is a fresh safety issue you will like to report"
            }
          />
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
          <AppText text={'Report Safety Issue'} />
          <AppText
            text={
              "Let's know if this is an existing safety issue or if this is a fresh safety issue you will like to report"
            }
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
          <AppText text={'Report Safety Issue'} />
          <AppText
            text={
              "Let's know if this is an existing safety issue or if this is a fresh safety issue you will like to report"
            }
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
          <AppText text={'Report Safety Issue'} />
          <AppText
            text={
              "Let's know if this is an existing safety issue or if this is a fresh safety issue you will like to report"
            }
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
          <AppText text={'Report Safety Issue'} />
          <AppText
            text={
              "Let's know if this is an existing safety issue or if this is a fresh safety issue you will like to report"
            }
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.container}>
          {submit == false ? (
            <View style={styles.counterSticker}>
              <AppText color={'#fff'} text={'7'} />
            </View>
          ) : (
            <View style={styles.counterSticker}>
              <AppText color={'#fff'} text={'A'} />
            </View>
          )}
          <AppText text={'Report Safety Issue'} />
          <AppText
            text={
              "Let's know if this is an existing safety issue or if this is a fresh safety issue you will like to report"
            }
          />
          
        </TouchableOpacity>
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
    // paddingHorizontal: 15,
  },
  container: {
    // height: 120,
    width: '90%',
    borderWidth: 1,
    borderColor: 'green',
    marginVertical: 8,
    borderRadius: 15,
    zIndex: -999,
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
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
    top: 25,
    zIndex: 999,
  },
  btn: {
    height: 40,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    position: 'absolute',
    left: 20,
    right: 20,
    bottom: "13%",
    zIndex: 999,
  },
  button: {
    height: 30,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  waitingDot: {height: 10, width: 10, backgroundColor: 'grey', marginLeft: 10},
  waitingDot2: {
    height: 10,
    width: 10,
    backgroundColor: 'grey',
    marginHorizontal: 10,
  },
  waitingDot3: {height: 10, width: 10, backgroundColor: 'grey'},
  lineCounter:{
      position:'absolute',
      right:5,
      bottom:1
  },
  textInput:{
    height: 60,
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 10,
  }
});
