import { useEffect, useState } from "react";
import {
  Text,
  View,
  ImageBackground,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
//icons
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import Post from "../../../components/Post";

import { styles } from "./ProfileScreenStyled";
import { authSignOutUser } from "../../../redux/auth/authOperations";
import db from "../../../firebase/config";

export default function ProfileScreen({ navigation }) {
  const [userPosts, setUserPosts] = useState([]);
  console.log("userPosts", userPosts);

  const dispatch = useDispatch();
  const { userId, login } = useSelector((state) => state.auth);

  useEffect(() => {
    getUserPosts();
  }, []);

  const getUserPosts = async () => {
    await db
      .firestore()
      .collection("posts")
      .where("userId", "==", userId)
      .onSnapshot((data) =>
        setUserPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      );
  };

  console.log("userPosts", userPosts);

  const signOut = () => {
    dispatch(authSignOutUser());
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require("../../../../assets/images/bg.jpg")}
      >
        <View style={styles.profileWrapper}>
          <View style={styles.avatarContainer}>
            <Image
              style={styles.avatarImage}
              source={require("../../../../assets/images/avatar.jpg")}
            />
            <TouchableOpacity
              style={styles.btnRemoveAvatar}
              activeOpacity={0.7}
            >
              <Ionicons name="close-circle-outline" size={30} color="#E8E8E8" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.btnLogOut} activeOpacity={0.7}>
            <Feather
              name="log-out"
              size={24}
              color="#BDBDBD"
              onPress={signOut}
            />
          </TouchableOpacity>

          <Text style={styles.title}>{login}</Text>

          <View>
            <FlatList
              data={userPosts}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <Post item={item} navigation={navigation} />
              )}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
