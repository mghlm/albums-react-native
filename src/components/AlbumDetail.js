import React from 'react';
import { Text, View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection'

const AlbumDetail = (props) => {
  return (
    <Card>
      <CardSection>
        <View>
        </View>
        <View style={styles.headerContentStyle}>
          <Text>{props.album.artist}</Text>
          <Text>{props.album.title}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-a round'
  }
};

export default AlbumDetail;
