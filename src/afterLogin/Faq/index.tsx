import React from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity, Text } from "react-native";
import { scale } from "react-native-size-matters";
import Header from "../../Component/Header";
import FastImage from "react-native-fast-image";

import { faqIcon } from "../../image";
import Label from "../../Component/Label";

const Faq = (props : any) => {
  return (
    <View style={styles.main}>
      <Header Label={"FAQ"} />
      <ScrollView contentContainerStyle={{ paddingBottom: scale(100) }}>
        <View style={{ width: "96%", height: "100%", marginHorizontal: "2%" }}>
          <FastImage
            style={{ width: "100%", height: 200 }}
            source={faqIcon}
            resizeMode={FastImage.resizeMode.cover}
          />
          <Label
            Style={styles.title_Label}
            Title={"1. What is the cost of opening an R&B Tea store?​"}
          />
          <Label
            Style={styles.des_Label}
            Title={
              "The estimated initial investment for a new R&B Tea store can range from $200,000 to $350,000 depending on the size, configuration and rent of the desired location.​"
            }
          />
          <Label
            Style={styles.title_Label}
            Title={
              "2. How long does it take for an application to be approved?​​"
            }
          />
          <Label
            Style={styles.des_Label}
            Title={
              "Once the application is received, it may take up to 10 business days for our Sales Department to review the application. Application accompanied by a location and business may be expedited (the location must be approved for tea beverage or café business by the landlord or property management company).​"
            }
          />
          <Label
            Style={styles.title_Label}
            Title={"3. Can I purchase or build multiple locations?​​​"}
          />
          <Label
            Style={styles.des_Label}
            Title={
              "Yes. We encourage potential licensees to own and operate multiple locations.​​​​"
            }
          />
          <Label
            Style={styles.title_Label}
            Title={"4. Do we have to buy all supplies from you?​​​​"}
          />
          <Label
            Style={styles.des_Label}
            Title={
              "Supplies are purchased from approved vendors. This ensures that all R&B Tea stores have the best quality while allowing maximum savings and ensuring consistency across all locations."
            }
          />
          <Label
            Style={styles.title_Label}
            Title={"5. How long will it take to open a store?​​​​​"}
          />
          <Label
            Style={styles.des_Label}
            Title={
              "After a store location is secured and a building permit is issued, the construction normally takes 3-5 months.​"
            }
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
    backgroundColor: "#FFF",
  },
  title_Label: {
    fontSize: scale(13),
    color: "#000",
    marginTop: scale(10),
  },
  des_Label: {
    color: "grey",
    fontSize: scale(12),
    marginTop: scale(5),
  },
});

export default Faq;
