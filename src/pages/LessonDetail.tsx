import React from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

const LessonDetail = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const lessonId = route?.params?.id ?? "1";

  return (
    <ScrollView style={styles.root} contentContainerStyle={styles.content}>
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1591608971362-f08b2a75731a?auto=format&fit=crop&q=80&w=1000",
        }}
        style={styles.videoHero}
      >
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-forward" size={20} color="#ffffff" />
        </TouchableOpacity>
        <View style={styles.playButton}>
          <Ionicons name="play" size={32} color="#ffffff" />
        </View>
      </ImageBackground>

      <View style={styles.card}>
        <Text style={styles.meta}>الدرس رقم {lessonId} • ١,٢٤٠ مشاهدة</Text>
        <Text style={styles.title}>
          باب الصبر واليقين من كتاب رياض الصالحين
        </Text>
        <Text style={styles.description}>
          شرح مفصل لأنواع الصبر الثلاثة مع الأدلة من القرآن والسنة وتطبيقات
          عملية في حياة المسلم.
        </Text>

        <View style={styles.tagsRow}>
          {["الرياض_الصالحين", "علوم_الحديث", "تزكية_النفوس"].map((tag) => (
            <View key={tag} style={styles.tag}>
              <Text style={styles.tagText}>#{tag}</Text>
            </View>
          ))}
        </View>

        <TouchableOpacity style={styles.followButton}>
          <Ionicons name="person-add-outline" size={18} color="#ffffff" />
          <Text style={styles.followText}>متابعة الشيخ</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  content: {
    paddingBottom: 100,
  },
  videoHero: {
    height: 240,
    justifyContent: "center",
    alignItems: "center",
  },
  backButton: {
    position: "absolute",
    top: 16,
    right: 16,
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "rgba(15,23,42,0.45)",
    justifyContent: "center",
    alignItems: "center",
  },
  playButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#004d40",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#ffffff",
    marginHorizontal: 16,
    marginTop: 14,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    padding: 16,
    gap: 10,
  },
  meta: {
    color: "#94a3b8",
    fontSize: 12,
    textAlign: "right",
  },
  title: {
    color: "#004d40",
    fontSize: 22,
    fontWeight: "800",
    textAlign: "right",
  },
  description: {
    color: "#64748b",
    lineHeight: 22,
    textAlign: "right",
  },
  tagsRow: {
    flexDirection: "row-reverse",
    flexWrap: "wrap",
    gap: 8,
  },
  tag: {
    backgroundColor: "#ecfeff",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#99f6e4",
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  tagText: {
    color: "#0f766e",
    fontSize: 12,
    fontWeight: "600",
  },
  followButton: {
    marginTop: 4,
    backgroundColor: "#004d40",
    borderRadius: 16,
    paddingVertical: 12,
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },
  followText: {
    color: "#ffffff",
    fontWeight: "700",
  },
});

export default LessonDetail;
