import { LinearGradient } from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type State = {};

export default class App extends React.Component<any, State> {
  render() {
    return (
      <LinearGradient style={styles.container} colors={['#214869', '#A3D1F4']}>
        <Text style={{ fontWeight: 'bold', fontSize: 48, color: 'white', marginBottom: 28 }}>⚛️.id</Text>
        <View style={{ flexDirection: 'row' }}>
          <a href="https://reactjs.id" style={{ textDecoration: 'none' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#214869' }}>🌏 Website</Text>
          </a>
          <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#214869', marginHorizontal: 10 }}> • </Text>
          <a href="https://www.meetup.com/reactindonesia/events/" style={{ textDecoration: 'none' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#214869' }}>📅 Events</Text>
          </a>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#214869', marginHorizontal: 10 }}> • </Text>
          <a href="https://t.me/react_id" style={{ textDecoration: 'none' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#214869' }}>💬 Group Chat</Text>
          </a>
          <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#214869', marginHorizontal: 10 }}> • </Text>
          <a href="https://www.facebook.com/groups/442974152553174/" style={{ textDecoration: 'none' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#214869' }}>👥 Facebook Group</Text>
          </a>
          <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#214869', marginHorizontal: 10 }}> • </Text>
          <a href="https://github.com/reactjs-id" style={{ textDecoration: 'none' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#214869' }}>👩‍💻 Github</Text>
          </a>
        </View>
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
