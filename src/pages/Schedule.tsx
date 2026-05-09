import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Schedule = () => {
  return (
    <ScrollView style={styles.root} contentContainerStyle={styles.content}>
      <Text style={styles.title}>جدول المحاضرات والدروس</Text>
      <Text style={styles.subtitle}>
        تابع مواعيد الدروس العلمية وحلقات التحفيظ الأسبوعية
      </Text>

      <View style={styles.weekCard}>
        <Ionicons name="calendar-outline" size={20} color="#004d40" />
        <Text style={styles.weekText}>الأسبوع الحالي - أكتوبر ٢٠٢٤</Text>
      </View>

      <Text style={styles.sectionTitle}>دروس اليوم</Text>
      {[
        {
          title: "شرح كتاب التوحيد",
          lecturer: "د. عبد الرحمن المنصور",
          time: "٠٥:٣٠ م - ٠٦:٣٠ م",
          location: "القاعة الرئيسية",
        },
        {
          title: "فقه العبادات (مباشر)",
          lecturer: "الشيخ محمد العتيبي",
          time: "الآن - ٠٨:٠٠ م",
          location: "مستوى المبتدئين",
          live: true,
        },
        {
          title: "تحسين التلاوة",
          lecturer: "القارئ خالد السعد",
          time: "٠٨:٣٠ م - ٠٩:٣٠ م",
          location: "حلقة المسجد",
        },
      ].map((item) => (
        <View
          key={item.title}
          style={[styles.lessonCard, item.live && styles.liveCard]}
        >
          <Text style={styles.lessonTitle}>{item.title}</Text>
          <Text style={styles.lessonLecturer}>{item.lecturer}</Text>
          <View style={styles.metaRow}>
            <Ionicons name="location-outline" size={14} color="#94a3b8" />
            <Text style={styles.metaText}>{item.location}</Text>
          </View>
          <View style={styles.metaRow}>
            <Ionicons name="time-outline" size={14} color="#94a3b8" />
            <Text style={styles.metaText}>{item.time}</Text>
          </View>
        </View>
      ))}

      <TouchableOpacity style={styles.notifyButton}>
        <Ionicons name="notifications-outline" size={20} color="#ffffff" />
        <Text style={styles.notifyText}>تفعيل تنبيهات الدروس</Text>
      </TouchableOpacity>
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
    fontSize: 28,
    fontWeight: "800",
    color: "#004d40",
    textAlign: "right",
  },
  subtitle: {
    marginTop: 8,
    color: "#94a3b8",
    fontSize: 14,
    textAlign: "right",
  },
  weekCard: {
    marginTop: 14,
    backgroundColor: "#ffffff",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    padding: 14,
    flexDirection: "row-reverse",
    alignItems: "center",
    gap: 8,
  },
  weekText: {
    color: "#004d40",
    fontWeight: "700",
  },
  sectionTitle: {
    marginTop: 18,
    marginBottom: 10,
    color: "#0f172a",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "right",
  },
  lessonCard: {
    backgroundColor: "#ffffff",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    padding: 14,
    marginBottom: 10,
  },
  liveCard: {
    borderColor: "#004d40",
  },
  lessonTitle: {
    color: "#0f172a",
    fontWeight: "700",
    fontSize: 16,
    textAlign: "right",
  },
  lessonLecturer: {
    marginTop: 4,
    color: "#64748b",
    fontSize: 12,
    textAlign: "right",
  },
  metaRow: {
    marginTop: 8,
    flexDirection: "row-reverse",
    alignItems: "center",
    gap: 6,
  },
  metaText: {
    color: "#94a3b8",
    fontSize: 12,
  },
  notifyButton: {
    marginTop: 10,
    backgroundColor: "#004d40",
    borderRadius: 20,
    paddingVertical: 14,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row-reverse",
    gap: 8,
  },
  notifyText: {
    color: "#ffffff",
    fontWeight: "700",
  },
});

export default Schedule;
