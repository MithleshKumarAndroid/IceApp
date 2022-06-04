import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, TouchableOpacity, Alert } from "react-native";
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
import * as Storage from "../../utily/Storage";
import { useNavigation } from "@react-navigation/native";

const Main = () => {
  const dispatch = useDispatch<any>();
  const { loader, category, product } = useSelector(
    (state: RootState) => state.SearchSlice
  );
  const route = useRoute<any>();
  const navigation = useNavigation();
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [marchantId, setMarchentId] = useState<string | undefined>("");

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      Storage.getData("MI").then((value) => {
        dispatch(getFranchiesCategory(value));
      });
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    Storage.getData("MI").then((mID) => {
      setMarchentId(mID?.toString());
    });
  }, []);

  useEffect(() => {
    if (category?.length > 0) {
      let pars = {
        marchantId: marchantId,
        catId: category[selectedIndex].id,
      };
      dispatch(getFranchiesCategoryProduct(pars));
    }
  }, [category]);

  const clickCategory = (ITEM: any, INDEX: number) => {
    setSelectedIndex(INDEX);
    let pars = {
      marchantId: marchantId,
      catId: category[INDEX].id,
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
            <ScrollView
              horizontal={true}
              nestedScrollEnabled={true}
              showsHorizontalScrollIndicator={false}
            >
              {category?.map((item: any, index: number) => {
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
        {product?.length > 0 ? (
          <Product List={product} />
        ) : (
          <View
            style={{
              width: "100%",
              height: "50%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Label Title="No product item found" />
          </View>
        )}
      </View>
      <ProgressBar loader={loader} />
    </View>
  );
};
export default Main;
