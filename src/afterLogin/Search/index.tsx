import React, { useEffect, useState } from "react";
import { Keyboard, View, TouchableOpacity, FlatList, Text } from "react-native";
import { scale } from "react-native-size-matters";
import Label from "../../Component/Label";
import AntDesign from "react-native-vector-icons/AntDesign";
import EditText from "../../Component/EditText";
import styles from "./styles";
import { getSearchFranchies } from "../../redux/reducer/SearchSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/Store";
import ProgressBar from "../../utily/ProgressBar";

const Search = (props: any) => {
  const dispatch = useDispatch<any>();
  const { loader, data } = useSelector((state: RootState) => state.SearchSlice);
  const [search, setSearch] = useState<string>("saharanpur");
  const [list, setList] = useState<any>([]);

  useEffect(() => {
    if (data?.length > 0) {
      setList(data);
    }
  }, [data]);

  const clickSearch = () => {
    Keyboard.dismiss();
    if (search.trim() != "") {
      let mPars = { city: search.trim() };
      dispatch(getSearchFranchies(mPars));
    } else {
      setList([]);
    }
  };

  return (
    <View style={styles.main}>
      <Label Style={styles.headerLabel} Title={"Search"} />
      <ProgressBar loader={loader} />
      <View style={styles.searchContainer}>
        <TouchableOpacity
          style={styles.searchIcon_Container}
          onPress={() => clickSearch()}
        >
          <AntDesign name={"search1"} color={"grey"} size={scale(20)} />
        </TouchableOpacity>
        <View style={styles.edit_Container}>
          <EditText
            Placeholder={"Search product here...."}
            Style={{ borderWidth: 0 }}
            EditTextStyle={{ width: "100%", marginHorizontal: 0 }}
            Value={search}
            ChangeText={(txt) => setSearch(txt)}
            ReturnKeyType={"done"}
            SubmitEditing={() => clickSearch()}
          />
        </View>
      </View>
      <FlatList
        data={list}
        style={{ width: "90%", marginHorizontal: "5%" }}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={styles.list_ItemContainer}
            onPress={() =>
              props.navigation.navigate("OurCategory", { ITEM: item })
            }
          >
            <View style={styles.list_ChildContainer}>
              <Text style={{ marginRight: scale(10) }}>{index + 1}.</Text>
              <Text>{item.username}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Search;
