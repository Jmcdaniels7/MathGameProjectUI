import { Image } from 'expo-image';
import { Platform, StyleSheet, View, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#FFDEE9', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">🎉 Math Mania 🎉</ThemedText>
      </ThemedView>

      <ThemedView style={styles.descriptionContainer}>
        <ThemedText type="subtitle">Welcome, Math Wizard!</ThemedText>
        <ThemedText>
          Ready to play and learn? Choose <ThemedText type="defaultSemiBold" style={styles.moduleText}> Module 1 </ThemedText>
            to start your journey! 🚀
        </ThemedText>
      </ThemedView>

      <View style={styles.modulesContainer}>
        {modules.map((module, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.moduleCard, { backgroundColor: module.color }]}
            onPress={() => router.push(module.path)}
          >
            <ThemedText type="defaultSemiBold" style={styles.moduleText}>
              {module.title}
            </ThemedText>
          </TouchableOpacity>
        ))}
      </View>
    </ParallaxScrollView>
  );
}

// 🧠 Mocked module data — eventually replace `path` with actual screen routes
const modules = [
  { title: '➕ Module 1: Addition', path: '/modules/add', color: '#FCD5CE' },
  { title: '➖ Module 2: Subtraction', path: '/modules/sub', color: '#D0F4DE' },
  { title: '✖️ Module 3: Multiplication', path: '/modules/multi', color: '#B5EAD7' },
  { title: '➗ Module 4: Division', path: '/modules/div', color: '#C7CEEA' },
  { title: '🧠 Module 5: PEMDAS', path: '/modules/pemdas', color: '#FFDAC1' },
] as const;

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  descriptionContainer: {
    paddingHorizontal: 20,
    marginBottom: 16,
    gap: 8,
  },
  modulesContainer: {
    paddingHorizontal: 20,
    gap: 12,
  },
  moduleCard: {
    padding: 16,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 4,
  },
  moduleText: {
    fontSize: 18,
  },
  reactLogo: {
    height: 160,
    width: 260,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

