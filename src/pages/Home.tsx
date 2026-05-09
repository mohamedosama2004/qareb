import React from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation<any>();
  const rootNavigation = navigation.getParent?.();

  return (
    <View style={styles.root}>
      <ScrollView contentContainerStyle={styles.content}>
        <ImageBackground
          source={{
            uri: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&q=80&w=1000",
          }}
          style={styles.hero}
          imageStyle={styles.heroImage}
        >
          <View style={styles.heroOverlay}>
            <Text style={styles.heroTitle}>
              أهلاً بكم في منصة قريب التعليمية
            </Text>
            <Text style={styles.heroDescription}>
              مساحة هادئة لتسهيل طلب العلم الشرعي وتوفير الدروس لكل الأعمار.
            </Text>
            <TouchableOpacity
              style={styles.heroButton}
              onPress={() => navigation.navigate("Discover")}
            >
              <Text style={styles.heroButtonText}>ابدأ التعلم الآن</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <View style={styles.statsGrid}>
          {[
            { value: "١٢٠+", label: "ساعة تعليمية" },
            { value: "٥٠", label: "محاضر معتمد" },
            { value: "١٠٠٪", label: "مجاني بالكامل" },
            { value: "٥٠٠٠+", label: "طالب وطالبة" },
          ].map((item) => (
            <View key={item.label} style={styles.statCard}>
              <Text style={styles.statValue}>{item.value}</Text>
              <Text style={styles.statLabel}>{item.label}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.sectionTitle}>الدروس المضافة حديثاً</Text>
        {[
          {
            id: "1",
            title: "تجويد القرآن الكريم",
            image:
              "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=800",
          },
          {
            id: "2",
            title: "مقدمة في علوم الحديث",
            image:
              "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=400",
          },
        ].map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.lessonCard}
            onPress={() =>
              rootNavigation?.navigate("LessonDetail", { id: item.id })
            }
          >
            <Image source={{ uri: item.image }} style={styles.lessonImage} />
            <View style={styles.lessonBody}>
              <Text style={styles.lessonTitle}>{item.title}</Text>
              <View style={styles.lessonMetaRow}>
                <Ionicons name="time-outline" size={14} color="#94a3b8" />
                <Text style={styles.lessonMetaText}>٤٥ دقيقة</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity
        style={styles.floatingAction}
        onPress={() => rootNavigation?.navigate("AdminUpload")}
      >
        <Ionicons name="add" size={28} color="#ffffff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  content: {
    paddingBottom: 120,
  },
  hero: {
    height: 280,
    justifyContent: "flex-end",
  },
  heroImage: {
    resizeMode: "cover",
  },
  heroOverlay: {
    backgroundColor: "rgba(0, 77, 64, 0.75)",
    padding: 20,
    gap: 8,
  },
  heroTitle: {
    color: "#ffffff",
    fontSize: 26,
    fontWeight: "800",
    textAlign: "right",
  },
  heroDescription: {
    color: "#d1fae5",
    fontSize: 14,
    lineHeight: 22,
    textAlign: "right",
  },
  heroButton: {
    alignSelf: "flex-end",
    marginTop: 10,
    backgroundColor: "#1de9b6",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
  },
  heroButtonText: {
    color: "#00332a",
    fontWeight: "700",
  },
  statsGrid: {
    marginTop: -20,
    paddingHorizontal: 14,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 10,
  },
  statCard: {
    width: "48.5%",
    backgroundColor: "#ffffff",
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  statValue: {
    color: "#004d40",
    fontSize: 20,
    fontWeight: "800",
  },
  statLabel: {
    color: "#94a3b8",
    fontSize: 11,
    marginTop: 4,
  },
  sectionTitle: {
    marginTop: 18,
    marginBottom: 10,
    marginHorizontal: 16,
    color: "#004d40",
    fontSize: 20,
    fontWeight: "800",
    textAlign: "right",
  },
  lessonCard: {
    marginHorizontal: 16,
    marginBottom: 12,
    backgroundColor: "#ffffff",
    borderRadius: 18,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  lessonImage: {
    width: "100%",
    height: 170,
  },
  lessonBody: {
    padding: 12,
  },
  lessonTitle: {
    color: "#0f172a",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "right",
  },
  lessonMetaRow: {
    marginTop: 6,
    flexDirection: "row-reverse",
    alignItems: "center",
    gap: 4,
  },
  lessonMetaText: {
    color: "#94a3b8",
    fontSize: 12,
  },
  floatingAction: {
    position: "absolute",
    left: 20,
    bottom: 88,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#004d40",
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
  },
});

export default Home;
