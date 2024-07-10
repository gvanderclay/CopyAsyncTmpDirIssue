import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { writeAsStringAsync, copyAsync } from "expo-file-system";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    createFileInTmpDir();
    copyFileFromTmpDirToDocumentsDir();
  }, []);
  return <View style={styles.container}></View>;
}

const copyFileFromTmpDirToDocumentsDir = () => {
  const tmpPath = "tmp/hello.txt";
  const documentsPath = "hello.txt";

  copyAsync({
    from: tmpPath,
    to: documentsPath,
  })
    .then(() => {
      console.log("File copied successfully!");
    })
    .catch((error) => {
      console.error("Error copying file: ", error);
    });
};

const createFileInTmpDir = () => {
  const content = "Hello, World!";
  const path = "tmp/hello.txt";

  writeAsStringAsync(path, content)
    .then(() => {
      console.log("File created successfully!");
    })
    .catch((error) => {
      console.error("Error creating file: ", error);
    });
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
