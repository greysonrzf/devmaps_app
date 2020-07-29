import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview'

function Profile({ navigation }) {
  const githubUsername = navigation.getParam('github_username')

  return <WebView style={styles.webview} source={{ uri: `https://github.com/${githubUsername}` }} />;
}

export default Profile;

const styles = StyleSheet.create({
  webview: {
    flex: 1,
  }
})