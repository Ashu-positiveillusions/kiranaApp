import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';
import storesList from '../data/storeList.json';

const DashboardScreen = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [displayedData, setDisplayedData] = useState([]);
  const [page, setPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const itemsPerPage = 30;

  const filteredData = searchTerm
    ? displayedData.filter(store =>
      store.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    : displayedData;
  useEffect(() => {
    const loadData = async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
      setData(Object.values(storesList.stores));
      setLoading(false);
    };
    loadData();
  }, []);

  useEffect(() => {
    // Load next set of data
    const nextData = data.slice(page * itemsPerPage, (page + 1) * itemsPerPage);
    setDisplayedData([...displayedData, ...nextData]);
  }, [page, data]);


  return (
    <>
      <View style={styles.container}>

        <TextInput
          style={styles.searchInput}
          placeholder="Search Stores"
          placeholderTextColor="#888"
          value={searchTerm}
          onChangeText={setSearchTerm}
          selectionColor="#d3d3d3"
        />
      </View>
      <FlatList
        contentContainerStyle={styles.container}
        data={filteredData}
        keyExtractor={(item, index) => 'store-' + index + item.name}
        onEndReached={() => setPage(prevPage => prevPage + 1)}
        onEndReachedThreshold={0.5} // Determines how far from the end to trigger loading
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.itemContainer}>
            <View style={styles.topRow}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemType}>{item.type}</Text>
            </View>
            <View style={styles.bottomRow}>
              <Text style={styles.itemRoute}>{item.route}</Text>
              <Text style={styles.itemArea}>{item.area}</Text>
            </View>
          </TouchableOpacity>
        )}
        ListFooterComponent={() =>
          loading && <Text style={styles.loadingText}>Loading...</Text>
        }
      />
    </>
  );
};


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'black',
  },
  itemContainer: {
    backgroundColor: '#1c1c1e',
    borderRadius: 10,
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#d3d3d3',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 3,
    justifyContent: 'space-between', // This ensures the top and bottom rows are at the ends of the container
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Aligns items to left and right
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Aligns items to left and right
    marginTop: 10, // Adds a little space between the top and bottom rows
  },
  itemName: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemType: {
    color: '#FFF',
    fontSize: 16,
  },
  itemRoute: {
    color: '#CCC',
    fontSize: 14,
  },
  itemArea: {
    color: '#CCC',
    fontSize: 14,
  },
  loadingText: {
    color: '#FFFFFF',
    textAlign: 'center',
    paddingVertical: 20,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    color: 'white',
    backgroundColor: '#1c1c1e',
    marginHorizontal: 10,
    marginVertical: 10,
  },
});


export default DashboardScreen;
