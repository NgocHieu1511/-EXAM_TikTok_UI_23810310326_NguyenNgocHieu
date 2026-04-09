import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CommentsScreen from "./CommentsScreen";

export default function VideoScreen({
  image,
  user,
  likes,
  caption,
  musicText,
  music,
  avt,
}) {
  const [showComments, setShowComments] = useState(false);

  return (
    <ImageBackground source={image} style={styles.container}>
      {/* Right action bar */}
      <View style={styles.rightIcons}>
        {/* Avatar */}
        <TouchableOpacity style={styles.avatarWrapper}>
          <Image source={avt} style={styles.avatar} />
        </TouchableOpacity>

        {/* Like */}
        <TouchableOpacity style={styles.iconItem}>
          <Ionicons name="heart" size={32} color="#fff" />
          <Text style={styles.text}>{likes}</Text>
        </TouchableOpacity>

        {/* Comment */}
        <TouchableOpacity
          style={styles.iconItem}
          onPress={() => setShowComments(true)}
        >
          <Ionicons name="chatbubble" size={32} color="#fff" />
          <Text style={styles.text}>64</Text>
        </TouchableOpacity>

        {/* Share */}
        <TouchableOpacity style={styles.iconItem}>
          <Ionicons name="arrow-redo" size={32} color="#fff" />
          <Text style={styles.text}>Share</Text>
        </TouchableOpacity>

        {/* Music disc */}
        <TouchableOpacity style={styles.discWrapper}>
          <Image source={music} style={styles.disc} />
        </TouchableOpacity>
      </View>

      {/* Bottom text info */}
      <View style={styles.bottomInfo}>
        <Text style={styles.user}>@{user}</Text>

        <Text style={styles.caption}>{caption}</Text>

        <View style={styles.musicRow}>
          <Ionicons name="musical-notes" size={16} color="#fff" />
          <Text style={styles.musicText}>{musicText}</Text>
        </View>
      </View>

      {/* Comments Modal */}
      <Modal visible={showComments} animationType="slide" transparent>
        <CommentsScreen onClose={() => setShowComments(false)} />
      </Modal>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },

  rightIcons: {
    position: "absolute",
    right: 12,
    bottom: 30,
    alignItems: "center",
    gap: 15,
  },

  avatarWrapper: {
    marginBottom: 20,
    alignItems: "center",
  },

  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: "#fff",
  },

  plusBadge: {
    position: "absolute",
    bottom: -8,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#ff2d55",
    justifyContent: "center",
    alignItems: "center",
  },

  plusText: {
    color: "#fff",
    fontWeight: "bold",
  },

  iconItem: {
    alignItems: "center",
    marginBottom: 20,
  },

  text: {
    color: "#fff",
    textAlign: "center",
    marginTop: 4,
    fontSize: 12,
    fontWeight: "600",
  },

  discWrapper: {
    marginTop: 4,
    marginBottom: 8,
  },

  disc: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: "#333",
  },

  bottomInfo: {
    paddingHorizontal: 16,
    paddingBottom: 28,
  },

  user: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  caption: {
    color: "#fff",
    marginTop: 8,
    fontSize: 12,
  },

  musicRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },

  musicText: {
    color: "#fff",
    marginLeft: 6,
    fontSize: 12,
  },
});
