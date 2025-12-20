// components/week5/Bmi.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function Bmi() {
  // State สำหรับรับค่า input และผลลัพธ์
  const [weight, setWeight] = useState("70");
  const [height, setHeight] = useState("170");
  const [bmi, setBmi] = useState("0");
  const [resultText, setResultText] = useState("Normal"); // ข้อความตามตาราง BMI

  console.log("STATE :", weight, height, bmi);

  const onPressButton = () => {
    console.log("Calculate button is pressed!!");

    const w = parseFloat(weight);
    const h = parseFloat(height);

    // กันกรณีกรอกไม่ครบหรือเป็น NaN
    if (!w || !h) {
      setBmi("0");
      setResultText("Invalid");
      return;
    }

    // แปลง cm -> m
    const hMeter = h / 100;
    const bmiNumber = w / (hMeter * hMeter);
    const bmiValue = bmiNumber.toFixed(2);

    // เก็บค่า bmi ลง state
    setBmi(bmiValue);

    // Quiz 1 : if-else แยกช่วง BMI แล้วใส่ข้อความให้สัมพันธ์กับตาราง
    // Test case ที่อาจารย์ให้จะออกมาเป็น:
    // <18.5  -> Underweight
    // 18.5–24.99 -> Normal
    // 25–29.99 -> Overweight
    // 30–34.99 -> Obese
    // >=35 -> Extremely Obese
    let description = "";

    if (bmiNumber < 18.5) {
      description = "Underweight";
    } else if (bmiNumber >= 18.5 && bmiNumber < 25) {
      description = "Normal";
    } else if (bmiNumber >= 25 && bmiNumber < 30) {
      description = "Overweight";
    } else if (bmiNumber >= 30 && bmiNumber < 35) {
      description = "Obese";
    } else {
      description = "Extremely Obese";
    }

    // set state ของคำอธิบาย
    setResultText(description);
  };

  return (
    <View style={{ padding: 20 }}>
      {/* กล่อง Weight */}
      <View
        style={{
          backgroundColor: "white",
          padding: 20,
          borderRadius: 10,
          height: 150,
          justifyContent: "space-around",
          marginVertical: 10,
        }}
      >
        <Text style={{ fontSize: 20 }}>Weight (kg.)</Text>
        <TextInput
          style={{ fontSize: 20 }}
          keyboardType="numeric"
          placeholder="Input your weight ..."
          value={weight}
          onChangeText={setWeight}
        />
      </View>

      {/* กล่อง Height */}
      <View
        style={{
          backgroundColor: "white",
          padding: 20,
          borderRadius: 10,
          height: 150,
          justifyContent: "space-around",
          marginVertical: 10,
        }}
      >
        <Text style={{ fontSize: 20 }}>Height (cm.)</Text>
        <TextInput
          style={{ fontSize: 20 }}
          keyboardType="numeric"
          placeholder="Input your height ..."
          value={height}
          onChangeText={setHeight}
        />
      </View>

      {/* แถวผลลัพธ์ 2 คอลัมน์ */}
      <View style={{ flexDirection: "row", marginVertical: 10 }}>
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            padding: 20,
            borderRadius: 10,
            height: 100,
            justifyContent: "center",
            alignItems: "center",
            marginRight: 10,
          }}
        >
          <Text style={{ fontSize: 20 }}>{bmi}</Text>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            padding: 20,
            borderRadius: 10,
            height: 100,
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 10,
          }}
        >
          {/* ตำแหน่ง Text สำหรับ Quiz 1 */}
          <Text style={{ fontSize: 20 }}>{resultText}</Text>
        </View>
      </View>

      {/* ปุ่ม Calculate แบบ TouchableOpacity (Ex.4) */}
      <TouchableOpacity onPress={onPressButton}>
        <View
          style={{
            padding: 20,
            backgroundColor: "blue",
            borderRadius: 40,
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontSize: 30,
              textAlign: "center",
              color: "white",
            }}
          >
            Calculate
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}