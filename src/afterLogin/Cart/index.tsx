import React, { useEffect, useState } from "react";
import { View, FlatList, Image, TouchableOpacity, Alert } from "react-native";
import { scale } from "react-native-size-matters";
import Menucard from "../../Component/MenuHeader";
import Button from "../../Component/Button";
import Label from "../../Component/Label";
import { cartProductIcon } from "../../image";
import AntDesign from "react-native-vector-icons/AntDesign";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { deleteIcon } from "../../image";
import { useDispatch, useSelector } from "react-redux";
import {
  getCartProduct,
  decreaseProductQuantitry,
  addCartProduct,
  deleteProductFromCart,
} from "../../redux/reducer/CartSlice";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { RootState } from "../../redux/Store";
import ProgressBar from "../../utily/ProgressBar";
import { Image_Base_Url_Product } from "../../Service/Api";
import { getUser } from "../../utily/Helper";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d71",
    title: "Fourth Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d70",
    title: "Fifth Item",
  },
];

const Cart = () => {
  const disspatch = useDispatch<any>();
  const { loader, cartData } = useSelector(
    (state: RootState) => state.CartSlice
  );
  const navigation = useNavigation();
  const [listData, setListData] = useState([]);

  let row: Array<any> = [];
  let prevOpenedRow: any;

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      disspatch(getCartProduct());
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    if (cartData?.length > 0) {
      setListData(cartData);
    } else {
      setListData([]);
    }
  }, [cartData]);

  const clickOnPlus = async (item: any) => {
    let mUser_Id = await getUser();
    let formDate = new FormData();
    formDate.append("user_id", parseInt(mUser_Id));
    formDate.append("product_id", item.product_id);
    formDate.append("quantity", parseInt(item.quantity) + 1);
    formDate.append("total", parseInt(item.quantity) + 1);
    disspatch(addCartProduct(formDate));
  };

  const clickOnMinus = async (item: any) => {
    let mUser_Id = await getUser();
    let formDate = new FormData();
    formDate.append("user_id", parseInt(mUser_Id));
    formDate.append("product_id", item.product_id);
    formDate.append("quantity", parseInt(item.quantity));
    formDate.append("total", parseInt(item.quantity));
    disspatch(decreaseProductQuantitry(formDate));
  };

  const deleteProduct = (ITEM: any) => {
    disspatch(deleteProductFromCart(ITEM.product_id));
  };

  const renderItem = ({ item, index }: any, onClick: any) => {
    const closeRow = (index: any) => {
      if (prevOpenedRow && prevOpenedRow !== row[index]) {
        prevOpenedRow.close();
      }
      prevOpenedRow = row[index];
    };

    const renderRightActions = (progress: any, dragX: any, onClick: any) => {
      return (
        <View style={styles.delete_Con}>
          <TouchableOpacity
            // onPress={onClick}
            onPress={() => deleteProduct(item)}
            style={styles.delete_Icon_Con}
          >
            <Image source={deleteIcon} style={styles.delete} />
          </TouchableOpacity>
        </View>
      );
    };
    return (
      <Swipeable
        renderRightActions={(progress, dragX) =>
          renderRightActions(progress, dragX, onClick)
        }
        onSwipeableOpen={() => closeRow(index)}
        ref={(ref) => (row[index] = ref)}
        rightOpenValue={-100}
      >
        <View>
          <View style={styles.listItem_Container}>
            <View style={styles.productImage_Container}>
              <Image
                style={styles.product_Image}
                source={{ uri: Image_Base_Url_Product + item.image }}
              />
            </View>
            <View style={styles.listSecond_Child}>
              <Label Style={styles.item_Lable} Title={item.title} />
              <View style={styles.price_Container}>
                <Label Style={styles.price_Label} Title={"$" + item.total} />
                <View style={styles.plus_Minus_Container}>
                  <TouchableOpacity
                    style={styles.minus_Container}
                    onPress={() => clickOnMinus(item)}
                  >
                    <AntDesign name={"minus"} color={"#FFF"} size={scale(15)} />
                  </TouchableOpacity>
                  <Label Style={styles.quantity_Label} Title={item.quantity} />
                  <TouchableOpacity
                    style={styles.plus_Container}
                    onPress={() => clickOnPlus(item)}
                  >
                    <AntDesign name={"plus"} color={"#FFF"} size={scale(12)} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Swipeable>
    );
  };
  const deleteItem = ({ item, index }: any) => {
    // console.log(item, index);
    // let a = listData;
    // a.splice(index, 1);
    // console.log(a);
    // setListData([...a]);
    {
      deleteProduct(item);
    }
  };
  return (
    <View style={styles.main}>
      <Menucard />
      <ProgressBar loader={loader} />
      <View style={styles.sub_Main}>
        <FlatList
          data={listData}
          renderItem={(v) =>
            renderItem(v, () => {
              deleteItem(v);
            })
          }
          keyExtractor={(item) => item.id}
        />
      </View>
      {listData.length >0 && 
      <View style={styles.complete_Order_Container}>
        <Button Style={styles.button_Con} Label={"Complete Order"} />
      </View>}
    </View>
  );
};

export default Cart;
