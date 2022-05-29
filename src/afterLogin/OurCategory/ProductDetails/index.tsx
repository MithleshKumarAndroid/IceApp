import React, { useEffect, useState } from "react";
import { View, Alert } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import Header from "../../../Component/Header";
import BannerLayout from "./BannerLayout";
import Label from "../../../Component/Label";
import styles from "./styles";
import Button from "../../../Component/Button";
import { getUser } from "../../../utily/Helper";
import { addCartProduct } from "../../../redux/reducer/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/Store";
import ProgressBar from "../../../utily/ProgressBar";

const Details = (props: any) => {
  const route = useRoute<any>();
  const dispatch = useDispatch<any>();
  const {loader} = useSelector((state : RootState)=> state.CartSlice )

  const navigation = useNavigation<any>();
  const [imageArray, setImageArray] = useState<any>([]);

  useEffect(() => {
    let mTemp = [];
    if (route.params?.ITEM.image != null) {
      mTemp.push(route.params?.ITEM.image);
    }
    if (route.params?.ITEM.image_two != null) {
      mTemp.push(route.params?.ITEM.image);
    }
    if (route.params?.ITEM.image_three != null) {
      mTemp.push(route.params?.ITEM.image);
    }
    setImageArray(mTemp);
  }, []);

  const onSubmit = async () => {
    let mUser_Id = await getUser();
    let formDate= new FormData();
    formDate.append("user_id",parseInt(mUser_Id) );
    formDate.append("product_id",route.params?.ITEM?.product_id );
    formDate.append("quantity",1 );
    formDate.append("total", 1);
    dispatch(addCartProduct(formDate));
  };

  return (
    <View style={styles.main}>
      <Header Label={"Product Details"} />
      <View style={styles.subMain}>
        <ProgressBar loader={loader} />
        <BannerLayout List={imageArray} />
        <Label
          Style={styles.product_Name_Label}
          Title={route.params?.ITEM.title}
        />
        <Label
          Style={styles.price_Label}
          Title={"$ " + route.params?.ITEM?.price}
        />
        <Label Style={styles.deliveryInfo_Label} Title={"Delivery info"} />
        <Label
          Style={styles.delivery_Description}
          Title={route.params?.ITEM?.delivery_info}
        />
        <Label Style={styles.deliveryInfo_Label} Title={"Return policy"} />
        <Label
          Style={styles.delivery_Description}
          Title={route.params?.ITEM?.return_policy}
        />
        <Button
          Style={styles.addTocart_Container}
          Label={"Add To Cart"}
          PressOn={() => onSubmit()}
        />
      </View>
    </View>
  );
};

export default Details;
