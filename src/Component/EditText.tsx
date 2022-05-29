import React, { useRef } from "react";
import { View, Text, TextInput, TextStyle } from "react-native";
import { scale } from "react-native-size-matters";

export interface Props {
  Placeholder?: string;
  ChangeText?(txt: string): void;
  Style?: TextStyle;
  EditTextStyle?:TextStyle
  ReturnKeyType?:
    | "done"
    | "go"
    | "next"
    | "search"
    | "send"
    | "none"
    | "previous"
    | "default";
  SubmitEditing?(): void;
  Ref?: any;
  KeyboardType?:
    | "default"
    | "email-address"
    | "numeric"
    | "phone-pad"
    | "number-pad"
    | "decimal-pad";
  Value?: string | undefined;
  MaxLength?: number | undefined;
  SecureText?:boolean |false;
  Editable?:boolean|false
}

const EditText = (props: Props) => {
  const {
    Placeholder,
    ChangeText,
    Style,
    ReturnKeyType,
    SubmitEditing,
    Ref,
    KeyboardType,
    Value,
    MaxLength,
    SecureText,
    Editable,
    EditTextStyle
  } = props;

  return (
    <View
      style={[
        {
          width: "100%",
          height: scale(40),
          borderColor: "grey",
          borderWidth: scale(0.5),
          borderRadius: scale(5),
        },
        { ...Style },
      ]}
    >
      <TextInput
        value={Value}
        ref={Ref}
        style={[{ width: "90%", marginHorizontal: "5%", height: "100%"}, {...EditTextStyle} ]}
        placeholder={Placeholder}
        onChangeText={ChangeText}
        returnKeyType={ReturnKeyType}
        blurOnSubmit={false}
        onSubmitEditing={SubmitEditing}
        keyboardType={KeyboardType}
        maxLength={MaxLength}
        secureTextEntry={SecureText}
        editable={Editable}
      />
    </View>
  );
};

export default EditText;
