import { useEffect } from "react";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { useWindowDimensions } from "react-native";
import { STYLES_VARIABLES } from "../../../variables/stylesVariables";
import InputWithError from "../../UI/InputWithError/InputWithError";
import { AntDesign } from "@expo/vector-icons";
const TOP_HEALINES_GET_URL =
  "https://newsapi.org/v2/top-headlines?country=fr&apiKey=657b45d437354db4860405594c48d967";

const EVERYTHING_GET_URL = (q) => {
  return `https://newsapi.org/v2/everything?q=${q}&language=fr&apiKey=657b45d437354db4860405594c48d967`;
};

const News = () => {
  const [listeArticles, setListeArticles] = useState([]);

  const [query, setQuery] = useState("");

  function handleQuery(text) {
    setQuery(text);
  }

  const sizes = useWindowDimensions();
  useEffect(() => {
    axios.get(TOP_HEALINES_GET_URL).then((reponse) => {
      console.log(reponse);
      setListeArticles(reponse.data.articles);
    });
  }, []);
  function searchArticle() {
    axios.get(EVERYTHING_GET_URL(query)).then((rep) => {
      setListeArticles(rep.data.articles);
    });
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
          alignItems: "center",
        }}
      >
        <InputWithError
          holder='Rechercher'
          valeur={query}
          action={handleQuery}
          errorMessage=''
        />
        <TouchableOpacity onPress={searchArticle}>
          <AntDesign name='search1' size={24} color='black' />
        </TouchableOpacity>
      </View>
      {listeArticles.map((article, index) => {
        return (
          <View style={styles.articleContainer}>
            <Text style={styles.title}>{article.title}</Text>
            <Text style={styles.description}>{article.description}</Text>
            <Image
              source={article.urlToImage}
              style={[
                styles.image,
                { width: sizes.width, height: sizes.width },
              ]}
            />
            <Text style={styles.content}>{article.content}</Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  articleContainer: {
    margin: 20,
    backgroundColor: STYLES_VARIABLES.GRAY_COLOR,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: STYLES_VARIABLES.PRIMARY_COLOR,
    padding: 20,
  },
  title: {
    fontSize: 30,
    color: STYLES_VARIABLES.PRIMARY_COLOR,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold",
  },
  description: {
    color: STYLES_VARIABLES.DARK_GRAY_COLOR,
  },
  content: {
    fontSize: 18,
    color: STYLES_VARIABLES.DARK_COLOR,
    margin: 10,
  },
  image: {
    maxWidth: "100%",
  },
});

export default News;
