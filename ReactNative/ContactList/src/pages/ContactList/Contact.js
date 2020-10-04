/* eslint-disable react-native/no-inline-styles */

import React, {useState, useContext} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {
  Container,
  Header,
  Left,
  Right,
  Title,
  Content,
  List,
  ListItem,
  Body,
  Thumbnail,
  Text,
  Form,
  Item,
  Input,
  Label,
  Fab,
  Button,
} from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';
import {Modal} from 'react-native-paper';
import {RootContext} from './index';
import data from '../../assets/db/db.json';

const Contact = () => {
  const state = useContext(RootContext);

  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);

  const hideModal = () => setVisible(false);

  const addClose = () => {
    state.addContact();
    hideModal();
  };

  const ItemList = ({contents}) => {
    return (
      <ListItem avatar>
        <Left>
          <Thumbnail source={{uri: `${contents.image}`}} />
        </Left>
        <Body>
          <Text>{`${contents.first_name} ${contents.last_name}`}</Text>
          <Text note>{`${contents.phone_number}`}</Text>
        </Body>
        <Right style={{justifyContent: 'center'}}>
          <Icon
            name="heart"
            color="red"
            style={{paddingRight: 5, fontSize: 30}}
          />
        </Right>
      </ListItem>
    );
  };

  console.disableYellowBox = true;

  return (
    <Container>
      <Header>
        <Body>
          <Title>My Contact List</Title>
        </Body>
      </Header>
      <Content>
        <List>
          <FlatList
            data={state.contacts}
            keyExtractor={(item) => item.key}
            renderItem={({item, index}) => (
              <ListItem avatar>
                <Left>
                  <Thumbnail source={require('../../assets/icon/user.png')} />
                </Left>
                <Body>
                  <Text>{item.name}</Text>
                  <Text note>{item.number}</Text>
                </Body>
                <Right style={{justifyContent: 'center'}}>
                  <Icon
                    name="delete"
                    size={30}
                    color="red"
                    style={{
                      marginLeft: 'auto',
                      paddingRight: 5,
                    }}
                    onPress={() => state.deleteContact(index)}
                  />
                </Right>
              </ListItem>
            )}
          />
        </List>
        <List>
          <FlatList
            data={data.contact}
            renderItem={({item}) => <ItemList contents={item} />}
            keyExtractor={(item, index) => item.id.toString()}
          />
        </List>
      </Content>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={styles.modalContent}>
        <Form>
          <Item floatingLabel>
            <Label>Name</Label>
            <Input
              value={state.input}
              onChangeText={(value) => state.handleChangeName(value)}
            />
          </Item>
          <Item floatingLabel last>
            <Label>Phone number</Label>
            <Input
              value={state.input}
              onChangeText={(value) => state.handleChangeHp(value)}
            />
          </Item>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 40,
              marginBottom: 40,
            }}>
            <Button
              rounded
              style={{padding: 20, marginRight: 20}}
              onPress={addClose}>
              <Text>Add</Text>
            </Button>
            <Button rounded style={{padding: 5}} warning onPress={hideModal}>
              <Text>Cancel</Text>
            </Button>
          </View>
        </Form>
      </Modal>
      <Fab
        active={true}
        style={{backgroundColor: '#5067FF'}}
        position="bottomRight"
        onPress={showModal}>
        <Icon name="plus" />
      </Fab>
    </Container>
  );
};

export default Contact;

const styles = StyleSheet.create({
  modalContent: {
    width: '100%',
    height: '60%',
    backgroundColor: 'white',
  },
});
