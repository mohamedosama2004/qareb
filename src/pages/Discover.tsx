import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Discover = () => {
  const navigation = useNavigation<any>();
  const rootNavigation = navigation.getParent?.();
  const categories = [
    "الكل",
    "تفسير القرآن",
    "السيرة النبوية",
    "الفقه الميسر",
    "د. محمد العوضي",
    "الشيخ صالح الفوزان",
  ];

  return (
    <ScrollView style={styles.root} contentContainerStyle={styles.content}>
      <Text style={styles.title}>اكتشف العلم والإيمان</Text>
      <Text style={styles.subtitle}>
        ابحث في مكتبة الدروس والمحاضرات التعليمية الموثوقة
      </Text>

      <View style={styles.searchWrap}>
        <Ionicons name="search-outline" size={20} color="#94a3b8" />
        <TextInput
          style={styles.searchInput}
          placeholder="ابحث عن درس، شيخ، أو موضوع..."
          placeholderTextColor="#94a3b8"
          textAlign="right"
        />
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categories}
      >
        {categories.map((cat, i) => (
          <View
            key={cat}
            style={[styles.categoryChip, i === 0 && styles.categoryChipActive]}
          >
            <Text
              style={[
                styles.categoryText,
                i === 0 && styles.categoryTextActive,
              ]}
            >
              {cat}
            </Text>
          </View>
        ))}
      </ScrollView>

      {[
        {
          id: "1",
          title: "مقاصد سورة البقرة في بناء المجتمع المسلم",
          lecturer: "الشيخ د. عبد الله بن يوسف",
          image:
            "https://images.unsplash.com/photo-1591608971362-f08b2a75731a?auto=format&fit=crop&q=80&w=800",
        },
        {
          id: "2",
          title: "آداب تلاوة القرآن الكريم",
          lecturer: "الشيخ عمر الخالد",
          image:
            "https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&q=80&w=400",
        },
      ].map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.card}
          onPress={() =>
            rootNavigation?.navigate("LessonDetail", { id: item.id })
          }
        >
          <Image source={{ uri: item.image }} style={styles.cardImage} />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardLecturer}>{item.lecturer}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  content: {
    padding: 16,
    paddingBottom: 120,
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    color: "#004d40",
    textAlign: "right",
  },
  subtitle: {
    marginTop: 8,
    color: "#94a3b8",
    textAlign: "right",
    fontSize: 14,
  },
  searchWrap: {
    marginTop: 16,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    borderRadius: 16,
    backgroundColor: "#ffffff",
    paddingHorizontal: 12,
    height: 52,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  searchInput: {
    flex: 1,
    color: "#0f172a",
  },
  categories: {
    gap: 8,
    paddingVertical: 14,
  },
  categoryChip: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  categoryChipActive: {
    backgroundColor: "#004d40",
    borderColor: "#004d40",
  },
  categoryText: {
    color: "#64748b",
    fontWeight: "700",
  },
  categoryTextActive: {
    color: "#ffffff",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    overflow: "hidden",
    marginBottom: 14,
  },
  cardImage: {
    width: "100%",
    height: 180,
  },
  cardBody: {
    padding: 14,
    gap: 4,
  },
  cardTitle: {
    color: "#0f172a",
    fontWeight: "700",
    fontSize: 16,
    textAlign: "right",
  },
  cardLecturer: {
    color: "#64748b",
    fontSize: 12,
    textAlign: "right",
  },
});

export default Discover;
