import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const WalletScreen = () => {
  const assets = [
    {
      id: 1,
      name: 'ADA',
      fullName: 'Cardano',
      amount: '67.5',
      value: '2,760.75',
      icon: '₳',
      color: '#0033AD',
    },
    {
      id: 2,
      name: 'HEX',
      fullName: 'Hex Token',
      amount: '7.8',
      value: '4,053',
      icon: '⬢',
      color: '#FF6B9D',
    },
    {
      id: 3,
      name: 'Ocean',
      fullName: 'Protocol',
      amount: '3.9',
      value: '2,198',
      icon: '◈',
      color: '#7B68EE',
    },
  ];

  const StakingChart = () => (
    <View style={styles.chartContainer}>
      <View style={styles.chartBars}>
        {[...Array(25)].map((_, i) => (
          <View
            key={i}
            style={[
              styles.chartBar,
              {
                height:i<15?40: 80,
                opacity: i < 15 ? 0.4 : 1,
              },
            ]}
          />
        ))}
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton}>
            <Ionicons name="chevron-back" size={24} color="#fff" />
          </TouchableOpacity>
          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.qrButton}>
              <Ionicons name="qr-code" size={24} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.profileButton}>
              <Image
                source={require('../../assets/images/img3.jpg')}
                style={styles.profileImage}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* Wallet Balance */}
        <View style={styles.walletSection}>
          <Text style={styles.walletLabel}>Your Wallet</Text>
          <View style={styles.balanceContainer}>
            <Text style={styles.balance}>40,278.00</Text>
            <Text style={styles.currency}>USDT</Text>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          {/* <LinearGradient
            colors={['#8B5CF6', '#3B82F6']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.withdrawButton}
          > */}
            <TouchableOpacity style={[styles.buttonContent,styles.withdrawButton2]}>
              <Text style={styles.withdrawText}>Withdraw</Text>
            </TouchableOpacity>
          {/* </LinearGradient> */}
          
          <TouchableOpacity style={styles.depositButton}>
            <Text style={styles.depositText}>Deposit</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.swapButton}>
            <Ionicons name="swap-horizontal" size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        {/* Staking & Tokens */}
        <View style={styles.stakingSection}>
          <View style={styles.stakingHeader}>
            <Text style={styles.stakingTitle}>Staking & tokens</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.stakingRow}>
            <Text style={styles.stakingLabel}>Tokens</Text>
            <Text style={styles.stakingValue}>$32.7k</Text>
          </View>
          <View style={{display:'flex',flexDirection:'row',gap:'1em',justifyContent:'space-between',alignItems:'center',marginTop:14}}>
            <View style={styles.stakingTokensRow}>
              <Text style={styles.stakingLabel}>Staking Tokens</Text>
              <Text style={styles.stakingValue}>$52.7k</Text>
            </View> 
            <StakingChart />
          </View>
        </View>

        {/* Assets */}
        <View style={styles.assetsSection}>
          <View style={styles.assetsHeader}>
            <Text style={styles.assetsTitle}>Assets</Text>
            <TouchableOpacity style={styles.buyButton}>
              <Text style={styles.buyText}>Buy</Text>
              <Ionicons name="chevron-down" size={16} color="#FFFFFF" />
            </TouchableOpacity>
          </View>

          {assets.map((asset) => (
            <TouchableOpacity key={asset.id} style={styles.assetRow}>
              <View style={styles.assetLeft}>
                <View style={[styles.assetIcon, { backgroundColor: '#1E1E1E' }]}>
                  <Text style={styles.assetIconText}>{asset.icon}</Text>
                </View>
                <View style={styles.assetInfo}>
                  <Text style={styles.assetName}>{asset.name}</Text>
                  <Text style={styles.assetFullName}>{asset.fullName}</Text>
                </View>
              </View>
              <View style={styles.assetRight}>
                <Text style={styles.assetAmount}>{asset.amount}</Text>
                <Text style={styles.assetValue}>$ {asset.value}</Text>
              </View>
            </TouchableOpacity>
          ))}

          <TouchableOpacity style={styles.moreTokens}>
            <Text style={styles.moreTokensText}>+ 12 Tokens</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 30,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  qrContainer: {
    backgroundColor: '#2A2A2A',
    borderRadius: 12,
    padding: 12,
  },
  qrCode: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 24,
    height: 24,
  },
  qrDot: {
    width: 10,
    height: 10,
    backgroundColor: '#FFFFFF',
    margin: 1,
    borderRadius: 1,
  },
  profileContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  walletSection: {
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  walletLabel: {
    color: '#8E8E93',
    fontSize: 12,
    marginBottom: 0,
  },
  balanceContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  balance: {
    color: '#FFFFFF',
    fontSize: 48,
    fontWeight: '300',
    letterSpacing: -1,
  },
  currency: {
    color: '#8E8E93',
    fontSize: 20,
    marginLeft: 8,
    fontWeight: '400',
  },
  actionButtons: {
    flexDirection: 'row',
    marginBottom: 40,
    zIndex:0
  },
  withdrawButton2: {
    boxShadow:'0px 0px 2px 5px #4e3b61',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius:80,
    backgroundColor: '#ffffff',
    marginRight: 8,
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  withdrawButton: {
    flex: 1,
    height: 56,
    borderRadius: 28,
    marginRight: 12,
  },
  buttonContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  withdrawText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '500',
  },
  depositButton: {
    flex: 1,
    height: 56,
    backgroundColor: '#2A2A2A',
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  depositText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  swapButton: {
    width: 56,
    height: 56,
    backgroundColor: '#2A2A2A',
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stakingSection: {
    marginBottom: 1,
  },
  stakingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20,
    marginBottom: 8,
    borderBottomColor: 'white',
    borderBottomWidth:1
  },
  stakingTitle: {
    color: '#8E8E93',
    fontSize: 14,
    fontWeight: '400',
  },
  seeAllText: {
    color: 'white',
    backgroundColor:'#2A2A2A',
    fontSize: 14,
    borderRadius:25,
    borderColor:'white',
    padding:8,
    paddingHorizontal:12
  },
  stakingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  stakingTokensRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    paddingBottom: 4,
    borderBottomColor: 'white',
    borderBottomWidth:1,
    width:'48%'
  },
  stakingLabel: {
    color: '#8E8E93',
    fontSize: 12,
  },
  stakingValue: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  chartContainer: {
    height: 60,
    width:'48%',
    marginBottom: 20,
  },
  chartBars: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: '100%',
    justifyContent: 'space-between',
  },
  chartBar: {
    width: 2,
    backgroundColor: '#FFFFFF',
    borderRadius: 1,
  },
  assetsSection: {
    marginBottom: 40,
    backgroundColor: '#2A2A2A',
    borderRadius: 20,
    padding: 16,
  },
  assetsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  assetsTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '400',
  },
  buyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2A2A2A',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  buyText: {
    color: '#FFFFFF',
    fontSize: 14,
    marginRight: 4,
  },
  assetRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#2A2A2A',
  },
  assetLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  assetIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  assetIconText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  assetInfo: {
    justifyContent: 'center',
  },
  assetName: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 2,
  },
  assetFullName: {
    color: '#8E8E93',
    fontSize: 14,
  },
  assetRight: {
    alignItems: 'flex-end',
  },
  assetAmount: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 2,
  },
  assetValue: {
    color: '#8E8E93',
    fontSize: 14,
  },
  moreTokens: {
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#1A1A1A',
    borderRadius:20
  },
  moreTokensText: {
    color: 'white',
    fontSize: 16,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  qrButton: {
    padding: 8,
    marginRight: 15,
    borderWidth:1,
    borderRadius:50,
    borderColor: '#2A2A2A',
    backgroundColor:'#2A2A2A'
  },
  profileButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
  },
});

export default WalletScreen;