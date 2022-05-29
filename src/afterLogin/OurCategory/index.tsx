import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import MenuHeader from "../../Component/MenuHeader";
import Label from "../../Component/Label";
import Product from "./Product";
import { useRoute } from "@react-navigation/native";
import {
  getFranchiesCategory,
  getFranchiesCategoryProduct,
} from "../../redux/reducer/SearchSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/Store";
import ProgressBar from "../../utily/ProgressBar";
import styles from "./styles";

const Main = () => {
  const dispatch = useDispatch<any>();
  const { loader, category, product } = useSelector(
    (state: RootState) => state.SearchSlice
  );
  const route = useRoute<any>();
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  useEffect(() => {
    dispatch(getFranchiesCategory(route?.params?.ITEM.franchaising_id));
  }, [route?.params?.ITEM]);

  useEffect(() => {
    if (category?.length > 0) {
      let pars = {
        franchId: route?.params?.ITEM.franchaising_id,
        catId: category[0].category_id,
      };
      dispatch(getFranchiesCategoryProduct(pars));
    }
  }, [category]);

  const clickCategory = (ITEM: any, INDEX: number) => {
    setSelectedIndex(INDEX);
    console.log("--ITEM----->", ITEM.category_id);
    let pars = {
      franchId: route?.params?.ITEM.franchaising_id,
      catId: ITEM.category_id,
    };
    dispatch(getFranchiesCategoryProduct(pars));
  };

  return (
    <View style={styles.main}>
      <MenuHeader />
      <Label Style={styles.title_Label} Title={"Our Category"} />
      <View style={styles.sub_Main}>
        <View style={styles.scroll_Container}>
          {category?.length > 0 && (
            <ScrollView horizontal={true} nestedScrollEnabled={true}>
              {category?.map((item: any, index : number) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => clickCategory(item, index)}
                    style={[
                      styles.category_Margin,
                      index === selectedIndex && styles.category_Container,
                    ]}
                  >
                    <Text
                      style={[
                        styles.category_Label,
                        index === selectedIndex && styles.label_Color,
                      ]}
                    >
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          )}
        </View>
        <Product List={product} />
      </View>
      <ProgressBar loader={loader} />
    </View>
  );
};
export default Main;
