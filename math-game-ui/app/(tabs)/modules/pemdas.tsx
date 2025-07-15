import { View, Text, StyleSheet } from 'react-native';

export default function PEMDASModule() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PEMDAS Module</Text>
      {/* Add your learning content or quiz component here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
