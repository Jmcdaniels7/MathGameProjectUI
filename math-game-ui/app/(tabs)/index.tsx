import { StyleSheet, View, Pressable, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Plus, Minus, X, Divide, Calculator, Sparkles, Trophy, Target } from 'lucide-react-native';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        {/* HERO */}
        <ThemedView style={styles.heroWrap}>
          <LinearGradient
            colors={['#7C3AED', '#EC4899', '#F97316']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.heroGradient}
          >
            <View style={styles.heroHeader}>
              <Calculator color="white" width={48} height={48} />
              <ThemedText type="title" style={styles.heroTitle}>
                Math Mania
              </ThemedText>
            </View>

            <ThemedText type="subtitle" style={styles.heroSubtitle}>
              Turn Math into an Adventure — master skills through play.
            </ThemedText>

            <Pressable
              style={({ pressed }) => [
                styles.primaryButton,
                { transform: [{ scale: pressed ? 0.97 : 1 }] },
              ]}
              onPress={() => router.push('/modules/add')}
            >
              <LinearGradient
                colors={['#6D28D9', '#EC4899']}
                style={styles.primaryGradient}
              >
                <ThemedText style={styles.primaryText}>Start Playing Now</ThemedText>
              </LinearGradient>
            </Pressable>
          </LinearGradient>
        </ThemedView>

        {/* MODULES */}
        <ThemedView style={styles.modulesWrapper2}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            Choose Your Module
          </ThemedText>

          <View style={styles.modulesGrid}>
            {modules.map((module) => {
              const Icon = module.icon as any;
              return (
                <Pressable
                  key={module.id}
                  style={({ pressed }) => [
                    styles.moduleCard,
                    { transform: [{ scale: pressed ? 0.99 : 1 }] },
                  ]}
                  onPress={() => router.push(module.path)}
                >
                  <LinearGradient
                    colors={[module.gradientFrom, module.gradientTo]}
                    style={styles.moduleAccent}
                  >
                    <Icon color="white" width={24} height={24} />
                  </LinearGradient>

                  <View style={styles.moduleBody}>
                    <ThemedText type="defaultSemiBold" style={styles.moduleTitle}>
                      {module.title}
                    </ThemedText>
                    <ThemedText style={styles.moduleDesc}>{module.description}</ThemedText>
                    <ThemedText style={styles.moduleCTA}>Start Learning →</ThemedText>
                  </View>
                </Pressable>
              );
            })}
          </View>
        </ThemedView>

        {/* FEATURES */}
        <ThemedView style={styles.featuresWrap}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            Why Math Mania?
          </ThemedText>

          <View style={styles.featuresRow}>
            {features.map((f, i) => {
              const Icon = f.icon as any;
              return (
                <View key={i} style={styles.featureCard}>
                  <LinearGradient colors={["#7C3AED", "#EC4899"]} style={styles.featureIcon}>
                    <Icon color="white" width={20} height={20} />
                  </LinearGradient>
                  <ThemedText type="defaultSemiBold" style={styles.featureTitle}>{f.title}</ThemedText>
                  <ThemedText style={styles.featureDesc}>{f.description}</ThemedText>
                </View>
              );
            })}
          </View>
        </ThemedView>

        {/* CTA */}
        <ThemedView style={styles.ctaWrap}>
          <LinearGradient colors={["#7C3AED", "#EC4899", "#F97316"]} style={styles.ctaBox}>
            <ThemedText style={styles.ctaTitle}>Ready to Become a Math Master?</ThemedText>
            <Pressable style={styles.ctaButton} onPress={() => router.push('/modules/add')}>
              <ThemedText style={styles.ctaButtonText}>Get Started Free</ThemedText>
            </Pressable>
          </LinearGradient>
        </ThemedView>

        {/* Footer */}
        <View style={styles.footer}>
          <View style={styles.footerBrand}>
            <Calculator width={18} height={18} color="white" />
            <ThemedText style={styles.footerTitle}>Math Mania</ThemedText>
          </View>
          <ThemedText style={styles.footerCopy}>Making math fun, one problem at a time.</ThemedText>
          <ThemedText style={styles.footerCopyright}>© 2026 Math Mania. All rights reserved.</ThemedText>
        </View>
      </ScrollView>
  );
}


// Mocked module data transferring to postgresql DB and late deploying to cloud enviroment
const modules = [
  { id: 'addition', title: 'Addition', icon: Plus, path: '/modules/add', description: 'Master the art of adding numbers', gradientFrom: '#60A5FA', gradientTo: '#3B82F6' },
  { id: 'subtraction', title: 'Subtraction', icon: Minus, path: '/modules/sub', description: 'Perfect your subtraction skills', gradientFrom: '#86EFAC', gradientTo: '#34D399' },
  { id: 'multiplication', title: 'Multiplication', icon: X, path: '/modules/multi', description: 'Multiply your way to success', gradientFrom: '#C4B5FD', gradientTo: '#8B5CF6' },
  { id: 'division', title: 'Division', icon: Divide, path: '/modules/div', description: 'Divide and conquer challenges', gradientFrom: '#FDBA74', gradientTo: '#FB923C' },
  { id: 'pemdas', title: 'PEMDAS', icon: Calculator, path: '/modules/pemdas', description: 'Master order of operations', gradientFrom: '#F9A8D4', gradientTo: '#F472B6' },
] as const;

const features = [
  { icon: Sparkles, title: 'Interactive Learning', description: 'Engage with fun, game-based math challenges' },
  { icon: Trophy, title: 'Track Progress', description: 'Earn achievements and unlock new levels' },
  { icon: Target, title: 'Adaptive Difficulty', description: 'Challenges that grow with your skills' },
];

const styles = StyleSheet.create({
  reactLogo: {
    height: 160,
    width: 260,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },

  heroWrap: {
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 16,
  },

  heroGradient: {
    borderRadius: 18,
    padding: 20,
  },

  heroHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  heroTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: 'white',
    marginLeft: 8,
  },

  heroSubtitle: {
    marginTop: 12,
    fontSize: 15,
    color: 'rgba(255,255,255,0.95)',
  },

  primaryButton: {
    marginTop: 14,
    borderRadius: 999,
    overflow: 'hidden',
    alignSelf: 'flex-start',
  },

  primaryGradient: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 999,
  },

  primaryText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 15,
  },

  modulesWrapper2: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 6,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 12,
  },

  modulesGrid: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },

  moduleCard: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 18,
    elevation: 6,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
  },

  moduleAccent: {
    width: 56,
    height: 56,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },

  moduleBody: {
    flex: 1,
    justifyContent: 'center',
  },

  moduleTitle: {
    fontSize: 16,
    marginBottom: 6,
    fontWeight: '700',
  },

  moduleDesc: {
    fontSize: 13,
    color: '#6B7280',
  },

  moduleCTA: {
    marginTop: 8,
    fontSize: 13,
    color: '#7C3AED',
    fontWeight: '700',
  },

  featuresWrap: {
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 6,
  },

  featuresRow: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 16,
  },

  featureCard: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F9FAFB',
    borderRadius: 16,
    justifyContent: 'center',
  },

  featureIcon: {
    width: 56,
    height: 56,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },

  featureTitle: {
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 6,
  },

  featureDesc: {
    fontSize: 13,
    color: '#6B7280',
    textAlign: 'center',
  },

  ctaWrap: {
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 22,
  },

  ctaBox: {
    borderRadius: 20,
    padding: 18,
    alignItems: 'center',
  },

  ctaTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 12,
  },

  ctaButton: {
    backgroundColor: 'white',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 999,
  },

  ctaButtonText: {
    color: '#7C3AED',
    fontWeight: '700',
  },

  footer: {
    paddingHorizontal: 20,
    paddingVertical: 18,
    backgroundColor: '#111827',
    alignItems: 'center',
  },

  footerBrand: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },

  footerTitle: {
    color: 'white',
    fontWeight: '800',
    marginLeft: 6,
  },

  footerCopy: {
    color: '#9CA3AF',
    fontSize: 12,
  },

  footerCopyright: {
    color: '#6B7280',
    fontSize: 11,
    marginTop: 6,
  },
});
