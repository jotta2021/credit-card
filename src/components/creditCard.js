import { View, Text, Image, Animated, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useRef, useState } from "react";

export default function CreditCard({
  back,
  setBack,
  onFlip,
  name,
  credit,
  cvc,
  expired,
}) {
  const rotation = useRef(new Animated.Value(back ? 180 : 0)).current;

  function Flip() {
    const toValue = back ? 0 : 180;
    Animated.spring(rotation, {
      toValue,
      friction: 8,
      tension: 10,
      useNativeDriver: true,
    }).start();
    setBack(!back);
  }

  // Interpolação para rotação
  const rotateY = rotation.interpolate({
    inputRange: [0, 180],
    outputRange: ["0deg", "180deg"],
  });

  // Opacidade para frente e verso
  const frontOpacity = rotation.interpolate({
    inputRange: [0, 90],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  const backOpacity = rotation.interpolate({
    inputRange: [90, 180],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  useEffect(() => {
    console.log("flip");
    Flip();
  }, [onFlip]);

  const [banderCard, setBanderCard] = useState("");
  useEffect(() => {
    if (credit.length > 2) {
      // Remover espaços em branco e traços do número do cartão
      const cleanedNumber = credit.replace(/\s+/g, "").replace(/-/g, "");

      // Verificar os primeiros dígitos para determinar o tipo de cartão
      if (/^4/.test(cleanedNumber)) {
        console.log("Visa");
        setBanderCard("Visa");
      } else if (/^5/.test(cleanedNumber)) {
        console.log("Mastercard");
        setBanderCard("Mastercard");
      } else {
        console.log("Outro");
        setBanderCard("Outro");
      }
    }
  }, [credit]);

  return (
    <View>
      <Animated.View style={[{ transform: [{ rotateY }] }]}>
        {back === false ? (
          <Animated.View style={[{ opacity: frontOpacity }]}>
            <LinearGradient
              colors={[
                "rgba(157,155,155,1)",
                "rgba(70,70,70,0.927608543417367)",
              ]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0.9, y: 0.5 }}
              style={styles.card}
            >
              <View>
                <View>
                  <View style={styles.content}>
                    {banderCard === "Mastercard" ? (
                      <Image
                        source={require("../../assets/Mastercard-Logo.png")}
                        style={styles.bander}
                      />
                    ) : banderCard === "Visa" ? (
                      <Image
                        source={require("../../assets/visa.png")}
                        style={styles.bander}
                      />
                    ) : banderCard ==='Outro' ? (
                      <Image
                        source={require("../../assets/elo.png")}
                        style={styles.bander}
                      /> 
                    ) : ''}
                  </View>

                  <View style={{ marginTop: 60, marginStart: 10 }}>
                    <Text style={styles.number}>{credit}</Text>
                    <View
                      style={{
                        justifyContent: "center",
                      }}
                    >
                      <Text style={styles.name}>{name}</Text>
                      {expired !== "" ? (
                        <Text
                          style={{
                            color: "white",
                            marginStart: 10,
                            fontSize: 10,
                            marginTop: 5,
                          }}
                        >
                          VALID
                        </Text>
                      ) : (
                        ""
                      )}

                      <Text style={styles.valid}>{expired}</Text>
                    </View>
                  </View>
                </View>
              </View>
            </LinearGradient>
          </Animated.View>
        ) : (
          <Animated.View
            style={[
              { opacity: backOpacity },
              { transform: [{ rotateY: "180deg" }] },
            ]}
          >
            <LinearGradient
              colors={[
                "rgba(157,155,155,1)",
                "rgba(70,70,70,0.927608543417367)",
              ]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0.9, y: 0.5 }}
              style={styles.card}
            >
              <View>
                <View style={styles.codeBar}></View>

                <View style={styles.content}>
                  <View style={styles.cvc}>
                    <Text style={{ fontSize: 16 }}>{cvc}</Text>
                  </View>
                </View>
              </View>
            </LinearGradient>
          </Animated.View>
        )}
      </Animated.View>
    </View>
  );
}
