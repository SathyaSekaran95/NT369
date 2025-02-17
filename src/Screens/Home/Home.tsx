import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { format } from 'date-fns';

const Home = () => {
  const insets = useSafeAreaInsets();
  const currentDate = new Date();

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.header, { paddingTop: insets.top }]}>
        <TouchableOpacity style={styles.menuButton}>
          <View style={styles.menuIcon}>
            <View style={styles.menuLine} />
            <View style={styles.menuLine} />
            <View style={styles.menuLine} />
          </View>
        </TouchableOpacity>
        
        <View style={styles.headerCenter}>
          {/* <Image 
            source={require('../../assets/logo.png')} 
            style={styles.logo}
          /> */}
          <Text style={styles.headerTitle}>NT369 Supply</Text>
        </View>

        <TouchableOpacity style={styles.notificationButton}>
          {/* <Image 
            source={require('../../assets/notification.png')} 
            style={styles.notificationIcon}
          /> */}
          <View style={styles.notificationBadge} />
        </TouchableOpacity>
      </View>

      <Text style={styles.pageTitle}>Today, Report</Text>

      {/* <View style={styles.reportCard}>
        <View style={styles.salesChart}>
          <View style={styles.chartInner}>
            <Text style={styles.chartLabel}>Total Sales</Text>
            <Text style={styles.chartValue}>₹8970</Text>
          </View>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <View style={styles.statDot} />
            <Text style={styles.statLabel}>Profit</Text>
            <Text style={styles.statValue}>₹ 6,770</Text>
          </View>
          <View style={styles.statItem}>
            <View style={[styles.statDot, styles.expenseDot]} />
            <Text style={styles.statLabel}>Expense</Text>
            <Text style={styles.statValue}>₹ 2,200</Text>
          </View>
        </View>
      </View> */}

      <View style={styles.inventorySection}>
        <View style={styles.inventoryItem}>
          <Text style={styles.inventoryLabel}>20L Empty can</Text>
          <Text style={styles.inventoryValue}>93</Text>
        </View>
        <View style={styles.inventoryItem}>
          <Text style={styles.inventoryLabel}>20L Full can</Text>
          <Text style={styles.inventoryValue}>72</Text>
        </View>
      </View>

      <View style={styles.balanceSection}>
        <View style={styles.balanceRow}>
          <Text style={styles.balanceLabel}>Cash</Text>
          <Text style={styles.balanceValue}>₹ 2500</Text>
        </View>
        <View style={styles.balanceRow}>
          <Text style={styles.balanceLabel}>Vendor Balance</Text>
          <Text style={styles.balanceValue}>₹ 300</Text>
        </View>
        <View style={styles.balanceRow}>
          <Text style={styles.balanceLabel}>Customer Balance</Text>
          <Text style={styles.balanceValue}>₹ 750</Text>
        </View>
        <View style={styles.balanceRow}>
          <Text style={styles.balanceLabel}>Customer Advance</Text>
          <Text style={styles.balanceValue}>₹ 150</Text>
        </View>
        <View style={styles.balanceRow}>
          <Text style={styles.balanceLabel}>Customer Deposit</Text>
          <Text style={styles.balanceValue}>₹ 5400</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 60,
    backgroundColor: '#fff',
  },
  menuButton: {
    padding: 8,
  },
  menuIcon: {
    width: 24,
    height: 24,
    justifyContent: 'space-around',
  },
  menuLine: {
    height: 2,
    backgroundColor: '#000',
    borderRadius: 1,
  },
  headerCenter: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 32,
    height: 32,
    marginRight: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0066cc',
  },
  notificationButton: {
    padding: 8,
  },
  notificationIcon: {
    width: 24,
    height: 24,
  },
  notificationBadge: {
    position: 'absolute',
    top: 4,
    right: 4,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'red',
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: '600',
    marginTop: 16,
    marginLeft: 16,
  },
  reportCard: {
    margin: 16,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  salesChart: {
    width: '100%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 20,
    borderColor: '#0066cc',
    borderRadius: 100,
  },
  chartInner: {
    alignItems: 'center',
  },
  chartLabel: {
    fontSize: 14,
    color: '#666',
  },
  chartValue: {
    fontSize: 24,
    fontWeight: '600',
    marginTop: 4,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  statItem: {
    alignItems: 'center',
  },
  statDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#4CAF50',
    marginBottom: 4,
  },
  expenseDot: {
    backgroundColor: '#9e9e9e',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  statValue: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 4,
  },
  inventorySection: {
    flexDirection: 'row',
    margin: 16,
    padding: 16,
    backgroundColor: '#f5f7ff',
    borderRadius: 12,
  },
  inventoryItem: {
    flex: 1,
  },
  inventoryLabel: {
    fontSize: 14,
    color: '#666',
  },
  inventoryValue: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 4,
  },
  balanceSection: {
    margin: 16,
  },
  balanceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  balanceLabel: {
    fontSize: 16,
    color: '#333',
  },
  balanceValue: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default Home;