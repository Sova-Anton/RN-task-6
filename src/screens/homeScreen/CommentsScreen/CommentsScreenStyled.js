import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 32,
    backgroundColor: "#FFFFFF",
  },
  photo: {
    height: 240,
    borderRadius: 8,
    marginBottom: 8,
  },
  commentsContainer: {
    flex: 1,
    // display: "flex",
    // flexDirection: "row",
    // marginTop: 24,
  },
  commentWrapper: {
    display: "flex",
    flexDirection: "row",
    // marginHorizontal: 16,
    marginTop: 24,
  },
  avatarImage: {
    marginRight: 16,
    width: 28,
    height: 28,
    borderRadius: 50,
  },
  textComtainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    width: 299,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  commentInputWrapper: {
    // flex: 1,
    justifyContent: "flex-end",
    marginBottom: 16,
  },
  inputComment: {
    height: 50,
    marginTop: 31,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 100,
    backgroundColor: "#F6F6F6",
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },
  sendIcon: {
    position: "absolute",
    bottom: 8,
    right: 8,
    alignItems: "center",
    justifyContent: "center",
    width: 34,
    height: 34,
    backgroundColor: "#FF6C00",
    borderRadius: 50,
  },
});
