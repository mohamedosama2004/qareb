import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const AdminUpload = () => {
  const navigation = useNavigation<any>();

  return (
    <ScrollView style={styles.root} contentContainerStyle={styles.content}>
      <TouchableOpacity
        style={styles.backRow}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="chevron-forward" size={14} color="#64748b" />
        <Text style={styles.backText}>الإدارة</Text>
      </TouchableOpacity>

      <Text style={styles.title}>رفع درس جديد</Text>
      <Text style={styles.subtitle}>
        أضف محتوى تعليمي جديد ليتمكن الطلاب من الوصول إليه
      </Text>

      <View style={styles.formCard}>
        {[
          { label: "عنوان الدرس", placeholder: "أدخل اسم الدرس هنا..." },
          { label: "اسم المحاضر", placeholder: "الشيخ / د." },
          { label: "التاريخ", placeholder: "٢٠٢٦-٠٥-٠٩" },
          { label: "رابط الفيديو", placeholder: "https://youtube.com/..." },
        ].map((field) => (
          <View key={field.label} style={styles.fieldWrap}>
            <Text style={styles.fieldLabel}>{field.label}</Text>
            <TextInput
              style={styles.input}
              placeholder={field.placeholder}
              placeholderTextColor="#94a3b8"
              textAlign="right"
            />
          </View>
        ))}

        <TouchableOpacity style={styles.submitButton}>
          <Ionicons name="send-outline" size={18} color="#ffffff" />
          <Text style={styles.submitText}>حفظ ونشر الدرس</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tipCard}>
        <Text style={styles.tipTitle}>إرشادات الرفع</Text>
        <Text style={styles.tipText}>تأكد من صحة رابط الفيديو قبل الحفظ.</Text>
        <Text style={styles.tipText}>
          استخدم عنواناً واضحاً يعبر عن محتوى الدرس.
        </Text>
        <Text style={styles.tipText}>
          سيتم إرسال تنبيه للمشتركين بعد النشر.
        </Text>
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
    padding: 16,
    paddingBottom: 80,
  },
  backRow: {
    flexDirection: "row-reverse",
    alignItems: "center",
    alignSelf: "flex-end",
    gap: 2,
  },
  backText: {
    color: "#64748b",
    fontSize: 12,
    fontWeight: "700",
  },
  title: {
    marginTop: 8,
    color: "#004d40",
    fontSize: 30,
    fontWeight: "800",
    textAlign: "right",
  },
  subtitle: {
    marginTop: 8,
    color: "#94a3b8",
    fontSize: 14,
    textAlign: "right",
  },
  formCard: {
    marginTop: 16,
    backgroundColor: "#ffffff",
    borderRadius: 24,
    padding: 16,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    gap: 14,
  },
  fieldWrap: {
    gap: 6,
  },
  fieldLabel: {
    color: "#004d40",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "right",
  },
  input: {
    backgroundColor: "#f8fafc",
    borderWidth: 1,
    borderColor: "#e2e8f0",
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 12,
    color: "#0f172a",
  },
  submitButton: {
    marginTop: 4,
    backgroundColor: "#004d40",
    borderRadius: 14,
    paddingVertical: 14,
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },
  submitText: {
    color: "#ffffff",
    fontWeight: "700",
  },
  tipCard: {
    marginTop: 14,
    backgroundColor: "#ecfeff",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#99f6e4",
    padding: 14,
    gap: 8,
  },
  tipTitle: {
    color: "#0f766e",
    fontWeight: "800",
    textAlign: "right",
  },
  tipText: {
    color: "#0f766e",
    textAlign: "right",
    fontSize: 12,
  },
});

export default AdminUpload;
