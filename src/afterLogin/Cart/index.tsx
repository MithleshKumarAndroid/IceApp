import React from "react";
import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
  Touchable,
} from "react-native";
import { scale } from "react-native-size-matters";
import Menucard from "../../Component/MenuHeader";
import Button from "../../Component/Button";
import Label from "../../Component/Label";
import { cartProductIcon } from "../../image";
import AntDesign from "react-native-vector-icons/AntDesign";

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Cart = () => {
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <Menucard />

      <View
        style={{
          width: "96%",
          marginHorizontal: "2%",
          height: "80%",
        }}
      >
        <FlatList
          data={array}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <View>
              <View
                style={{
                  width: "90%",
                  marginHorizontal: "5%",
                  height: scale(80),
                  backgroundColor: "#FFF",
                  borderRadius: scale(15),
                  flexDirection: "row",
                  padding: scale(4),
                  marginTop: scale(10),
                }}
              >
                <View
                  style={{
                    width: "25%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    style={{
                      width: scale(70),
                      height: scale(70),
                      resizeMode: "contain",
                    }}
                    source={cartProductIcon}
                  />
                </View>

                <View
                  style={{
                    width: "70%",
                    height: "100%",
                    justifyContent: "center",
                    marginLeft: "5%",
                  }}
                >
                  <Label
                    Style={{ fontSize: scale(13), color: "#10A8B2" }}
                    Title={"Oreo Chocolate stormy"}
                  />

                  <View
                    style={{
                      width: "100%",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: scale(10),
                    }}
                  >
                    <Label
                      Style={{ fontSize: scale(10), color: "red" }}
                      Title={"$10"}
                    />
                    <View
                      style={{
                        width: scale(50),
                        height: scale(20),
                        backgroundColor: "#10A8B2",
                        borderRadius: scale(10),
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <TouchableOpacity
                        style={{
                          width: scale(20),
                          height: "100%",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <AntDesign
                          name={"minus"}
                          color={"#FFF"}
                          size={scale(15)}
                        />
                      </TouchableOpacity>

                      <Label
                        Style={{
                          color: "#FFF",
                          fontSize: scale(10),
                          alignSelf: "center",
                        }}
                        Title={"1"}
                      />
                      <TouchableOpacity
                        style={{
                          width: scale(20),
                          height: "100%",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <AntDesign
                          name={"plus"}
                          color={"#FFF"}
                          size={scale(12)}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          )}
        />
      </View>

      <View
        style={{
          width: "100%",
          height: "12%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          Style={{ width: scale(200), borderRadius: scale(20) }}
          Label={"Complete Order"}
        />
      </View>
    </View>
  );
};

export default Cart;
