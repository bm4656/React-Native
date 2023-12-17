import React from 'react';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import _ from 'lodash';
import Button from '../components/Button';
import Contents from '../components/Contents';
import Container from '../components/Container';

const ListContainer = styled.View`
  width: 100%;
  padding: 12px 0;
  border-bottom-color: #aaaaaa;
  border-bottom-width: 1px;
`;
const ListItem = styled.TouchableOpacity`
  /* width: 100%;
  padding: 12px 0;
  border-bottom-color: #aaaaaa;
  border-bottom-width: 1px; */
`;
const Label = styled.Text`
  font-size: 20px;
`;
const DeleteButton = styled.Button``;

function List({ navigation }) {
  const [list, setList] = React.useState([]);

  const load = async () => {
    const data = await AsyncStorage.getItem('list');
    if (data !== null) {
      setList(JSON.parse(data));
    }
  };

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      load();
    });
    load();
    return unsubscribe;
  }, [navigation]);

  const deleteItem = (date) => {
    // const newList = list.filter((element) => element.date !== date);
    const newList = _.reject(list, (element) => element.date === date);
    setList(newList);
    AsyncStorage.setItem('list', JSON.stringify(newList));
  };

  return (
    <Container>
      <Contents>
        {_.sortBy(list, 'date').map((item) => {
          return (
            <ListContainer key={item.date}>
              <ListItem
                onPress={() =>
                  navigation.navigate('Detail', { date: item.date })
                }>
                <Label>{item.date}</Label>
              </ListItem>
              <DeleteButton
                title='삭제'
                onPress={() => deleteItem(item.date)}
              />
            </ListContainer>
          );
        })}
      </Contents>
      <Button onPress={() => navigation.navigate('Form')}>새 일기 작성</Button>
    </Container>
  );
}
export default List;
