import { LinearGradient } from 'expo';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

type State = {};

export default class App extends React.Component<any, State> {
  render() {
    return (
      <LinearGradient style={styles.container} colors={['#214869', '#A3D1F4']}>
        <Text style={{ fontWeight: 'bold', fontSize: 48, color: 'white' }}>⚛️.id</Text>
        <a href="https://www.meetup.com/reactindonesia/events/" style={{ textDecoration: 'none' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 48, color: '#214869' }}>Events</Text>
        </a>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
