import { View, Text, StyleSheet, TextInput, Alert, ScrollView } from 'react-native';
import React from 'react';
import { Button, Card } from 'react-native-paper';
import { Table, Row, Rows } from 'react-native-table-component';

const TextField = () => {
  const handleSubmit = () => {
    Alert.alert('Submitted!');
  };

  const handleCancel = () => {
    Alert.alert('Cancelled!');
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.mainContainer}>
        <Card style={styles.cardContainer}>
          <Text>First Name</Text>
          <TextInput
            placeholder="Enter First name"
            style={styles.textInput}
          />
          <View style={{ height: 22 }} />
          <Text>Last Name</Text>
          <TextInput
            placeholder="Enter Last Name"
            style={styles.textInput}
          />
          <View style={{ height: 22 }} />
          <Text>Phone</Text>
          <TextInput
            placeholder="Enter phone number"
            keyboardType="phone-pad"
            style={styles.textInput}
          />
          <View style={{ height: 22 }} />
          <Text>Email-ID</Text>
          <TextInput
            placeholder="Enter email"
            keyboardType="email-address"
            style={styles.textInput}
          />
          <Button mode="contained" onPress={handleSubmit} style={styles.button}>
            Submit
          </Button>
          <View style={{ height: 10 }} />
          <Button mode="outlined" onPress={handleCancel} style={styles.button}>
            Cancel
          </Button>
        </Card>
        <MyTable />
        <MyTableWithLibrary />
        <Tabled />
      </View>
    </ScrollView>
  );
};
const MyTable = () => {
  return (
    <View style={styles.tableContainer}>
      <View style={styles.row}>
        <Text style={styles.headerText}>Name</Text>
        <Text style={styles.headerText}>Age</Text>
        <Text style={styles.headerText}>Country</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cell}>John Doe</Text>
        <Text style={styles.cell}>30</Text>
        <Text style={styles.cell}>USA</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cell}>Jane Smith</Text>
        <Text style={styles.cell}>25</Text>
        <Text style={styles.cell}>Canada</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cell}>Ali Khan</Text>
        <Text style={styles.cell}>28</Text>
        <Text style={styles.cell}>Pakistan</Text>
      </View>
    </View>
  );
};

const MyTableWithLibrary = () => {
  const tableHead = ['Name', 'Age', 'Country'];
  const tableData = [
    ['John Doe', '30', 'USA'],
    ['Jane Smith', '25', 'Canada'],
    ['Ali Khan', '28', 'Pakistan'],
  ];

  return (
    <View style={styles.tableContainer}>
      <Table borderStyle={{ borderWidth: 3, borderColor: '#CC00FFFF' }}>
        <Row data={tableHead} style={styles.head} textStyle={styles.text} />
        <Rows data={tableData} textStyle={styles.text} />
      </Table>
    </View>
  );
};

const Tabled = () => {
  const talehead = ['usa', 'america', 'hostel']
  const tableData = [
    ['John Doe', '30', 'USA'],
    ['Jane Smith', '25', 'Canada'],
    ['Ali Khan', '28', 'Pakistan'],
  ];
  return (
    <View>
      <Table>
        <Row data={talehead} ></Row>
      </Table>
    </View>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  mainContainer: {
    padding: 16,
  },
  cardContainer: {
    marginBottom: 20,
    padding: 20,
  },
  textInput: {
    // borderColor: 'red',
    borderRadius: 3,
    borderWidth: 1,
    padding: 10,
    marginBottom: 15,
  },
  button: {
    marginBottom: 10,
  },
  tableContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 18,
    width: '30%',
  },
  cell: {
    fontSize: 16,
    width: '30%',
  },
  head: {
    height: 40,
    backgroundColor: '#f1f1f1',
  },
  text: {
    margin: 6,
    textAlign: 'center',
  },
});

export default TextField;