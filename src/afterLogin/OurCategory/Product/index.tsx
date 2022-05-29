import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";
import { scale } from "react-native-size-matters";
import { starIcon, catGlassIcon } from "../../../image";
import Label from "../../../Component/Label";
import PopularLayout from "./../PopularLayout";
import { Image_Base_Url_Product } from "../../../Service/Api";
import styles from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";

const mArray = [1, 2, 3, 4, 5, 6, 7];

export interface Props {
  List: [] | undefined;
}

const Product = (props: Props) => {
  const { List } = props;
  const navigation = useNavigation<any>();
  return (
    <View>
      <View style={{ width: "100%", height: scale(220) }}>
        <ScrollView
          nestedScrollEnabled={true}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {List?.map((item: any, index) => (
            <TouchableOpacity
              style={styles.main}
              key={index}
              onPress={() =>
                navigation.navigate("ProductDetails", { ITEM: item })
              }
            >
              <View style={[styles.first_Child]}>
                <View style={styles.star_Con}>
                  <Image style={styles.star} source={starIcon} />
                  <Text style={styles.rating_Label}>4.8</Text>
                </View>
                <View style={styles.name_Price_Con}>
                  <Text style={styles.name_Lable}>{item.title}</Text>
                  <Text style={styles.price_Label}>${item?.price}</Text>
                </View>
              </View>
              <Image
                style={styles.product_Icon}
                source={{ uri: Image_Base_Url_Product + item.image }}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <Label
        Style={{ fontSize: scale(13), fontWeight: "bold", color: "#10A8B2" }}
        Title={"Most Popular"}
      />
      <PopularLayout />
    </View>
  );
};
export default Product;
