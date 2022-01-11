import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';
import isArray from 'lodash-es/isArray'; // 1348545
// import {isArray} from 'lodash-es'; // 1444136
// if lodash-es is not used then 1348412

import { Colors, Header } from 'react-native/Libraries/NewAppScreen';
import DeveloperActivitySvg from './undraw_Developer_activity_re_39tg.svg';

import { RemoteContainer } from './RemoteContainer';
import { AsyncContainer } from './AsyncContainer';
import { Section } from './Section';
import { MiniAppsContainer } from './MiniAppsContainer';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const isThisArray = isArray([1, 2, 3]);
  console.log('a', isThisArray);
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
      >
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}
        >
          <DeveloperActivitySvg width="100%" height="400" />
          <Section title="Async chunk">
            <AsyncContainer />
          </Section>
          <Section title="Remote chunks">
            <RemoteContainer />
          </Section>
          <Section title="Mini-apps">
            <MiniAppsContainer />
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
