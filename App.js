import { Dimensions, SafeAreaView, FlatList, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

import news_data from './src/news_data.json'
import news_banner_data from './src/new_banner_data.json'
import NewsCard from './src/components/NewsCard';
import { ScrollView } from 'react-native';

function App() {

  const renderNews = ({ item }) => <NewsCard news={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>News</Text>
      <FlatList
        ListHeaderComponent={() => (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {news_banner_data.map(bannerNews => (
              <Image
                key={bannerNews.id}
                style={styles.banner_image}
                source={{ uri: bannerNews.imageUrl }}
              />
            ))}
          </ScrollView>
        )}
        keyExtractor={item => item.u_id.toString()}
        data={news_data}
        renderItem={renderNews}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff9'
  },
  headerText: {
    marginTop: 18,
    marginLeft: 12,
    fontSize: 40,
    fontWeight: 'bold',
  },
  banner_image: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 2,
    borderRadius: 12,
    margin: 12,
  },

});


export default App;