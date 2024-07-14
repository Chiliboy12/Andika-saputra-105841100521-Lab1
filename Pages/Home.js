import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const slideImages = [
  {
    url: require('../assets/daging.jpg'),
    caption: 'Halal Meat',
    rating: 10,
    reviews: 10
  },
  {
    url: require('../assets/sayuran.jpg'),
    caption: 'Sayuran Segar',
    rating: 10,
    reviews: 10
  },
  {
    url: require('../assets/bumbu.jpg'),
    caption: 'Rempah Nusantara',
    rating: 10,
    reviews: 10
  },
  {
    url: require('../assets/ikan.jpg'),
    caption: 'Ocean Meat',
    rating: 10,
    reviews: 10
  }
];

const Home = () => {
  const slides = [];
  for (let i = 0; i < slideImages.length; i += 2) {
    slides.push(slideImages.slice(i, i + 2));
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/BahanBaku.jpg')}
          style={styles.headerImage}
        />
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Kualitas Terbaik untuk Hidangan Terbaik</Text>
        </View>
        <View style={styles.checkButtonContainer}>
        </View>
      </View>
      <View style={styles.newSection}>
        <View style={styles.newSectionHeader}>
          <Image
            source={require('../assets/Halal.jpg')}
            style={styles.logo}
          />
          <Text style={styles.viewAll}>View all</Text>
        </View>
        <Text style={styles.newSectionSubtitle}>Bahan-Bahan Berkualitas</Text>
        <View style={styles.slideContainer}>
          <Slide>
            {slides.map((slideGroup, index) => (
              <View key={index} style={styles.slideGroup}>
                {slideGroup.map((slideImage, idx) => (
                  <View key={idx} style={styles.eachSlide}>
                    {slideImage.discount && (
                      <View style={styles.discountBadge}>
                        <Text style={styles.discountText}>{slideImage.discount}</Text>
                      </View>
                    )}
                    <Image source={slideImage.url} style={styles.slideImage} />
                    <View style={styles.productDetails}>
                      <Text style={styles.productName}>{slideImage.caption}</Text>
                      <View style={styles.priceContainer}>
                        {slideImage.oldPrice && (
                          <Text style={styles.oldPrice}>{slideImage.oldPrice}</Text>
                        )}
                        <Text style={styles.newPrice}>{slideImage.price}</Text>
                      </View>
                      <View style={styles.ratingContainer}>
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Text key={i} style={styles.star}>
                            {i < slideImage.rating ? '★' : '☆'}
                          </Text>
                        ))}
                        <Text style={styles.reviews}>({slideImage.reviews})</Text>
                      </View>
                    </View>
                  </View>
                ))}
              </View>
            ))}
          </Slide>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    height: 300,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  headerTextContainer: {
    backgroundColor: 'green', 
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  headerText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Metropolis-Bold', 
    textAlign: 'center',
  },
  checkButtonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  newSection: {
    padding: 20,
  },
  newSectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  viewAll: {
    fontSize: 16,
    color: 'gray',
  },
  newSectionSubtitle: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10,
  },
  slideContainer: {
    height: 350,
  },
  slideGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  eachSlide: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '48%',
    marginHorizontal: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'gainsboro',
  },
  slideImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  productDetails: {
    padding: 10,
    alignItems: 'center',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  oldPrice: {
    fontSize: 14,
    color: 'gray',
    textDecorationLine: 'line-through',
    marginRight: 5,
  },
  newPrice: {
    fontSize: 16,
    color: 'red',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  star: {
    fontSize: 14,
    color: 'orange',
  },
  reviews: {
    fontSize: 14,
    color: 'gray',
    marginLeft: 5,
  },
  discountBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'red',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 5,
  },
  discountText: {
    color: 'white',
    fontSize: 12,
  },
});
