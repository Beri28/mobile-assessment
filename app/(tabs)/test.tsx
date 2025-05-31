import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTailwind } from 'tailwindcss-react-native';

// Mock data for assets
const assetsData = [
  { id: '1', name: 'ADA', fullName: 'Cardano', quantity: '67.5', value: '$2,760.75', icon: 'https://placehold.co/40x40/533483/e0e0e0?text=ADA' },
  { id: '2', name: 'HEX', fullName: 'Hex Token', quantity: '7.8', value: '$4,053', icon: 'https://placehold.co/40x40/e94560/ffffff?text=HEX' },
  { id: '3', name: 'Ocean', fullName: 'Protocol', quantity: '3.9', value: '$2,198', icon: 'https://placehold.co/40x40/3c3c5c/e0e0e0?text=OCEAN' },
];

// Helper component for Asset Item
const AssetItem = ({ asset }) => {
  const tailwind = useTailwind();
  return (
    <View style={tailwind('flex-row items-center justify-between py-4 border-b border-darkborder last:border-b-0')}>
      <View style={tailwind('flex-row items-center')}>
        <Image source={{ uri: asset.icon }} style={tailwind('w-10 h-10 rounded-full mr-4')} />
        <View>
          <Text style={tailwind('text-darktext text-lg font-semibold')}>{asset.name}</Text>
          <Text style={tailwind('text-darktext opacity-70 text-sm')}>{asset.fullName}</Text>
        </View>
      </View>
      <View style={tailwind('flex-row items-center')}>
        <Text style={tailwind('text-darktext text-lg font-medium mr-4')}>{asset.quantity}</Text>
        <Text style={tailwind('text-darktext text-lg font-bold')}>{asset.value}</Text>
      </View>
    </View>
  );
};

export default function App() {
  const tailwind = useTailwind();

  return (
    <View style={tailwind('flex-1 bg-darkbg')}>
      <ScrollView contentContainerStyle={tailwind('p-6 pt-12')}>
        {/* Top Bar / Header */}
        <View style={tailwind('flex-row items-center justify-between mb-8')}>
          <TouchableOpacity style={tailwind('p-2 rounded-full bg-darkcard')}>
            <Text style={tailwind('text-darktext text-2xl font-bold')}>←</Text>
          </TouchableOpacity>
          <View style={tailwind('flex-row items-center')}>
            <TouchableOpacity style={tailwind('p-2 rounded-full bg-darkcard mr-4')}>
              <Text style={tailwind('text-darktext text-2xl font-bold')}>QR</Text>
            </TouchableOpacity>
            <Image
              source={{ uri: 'https://placehold.co/40x40/e94560/ffffff?text=AV' }}
              style={tailwind('w-10 h-10 rounded-full border-2 border-darkaccent')}
            />
          </View>
        </View>

        {/* Your Wallet Section */}
        <View style={tailwind('mb-8')}>
          <Text style={tailwind('text-darktext text-xl font-medium mb-2')}>Your Wallet</Text>
          <Text style={tailwind('text-darktext text-5xl font-bold mb-4')}>40,278.00 <Text style={tailwind('text-darktext text-3xl opacity-70')}>USDT</Text></Text>
          <View style={tailwind('flex-row justify-around')}>
            <TouchableOpacity style={tailwind('flex-1 py-4 px-6 bg-darksecondary rounded-xl mr-2 items-center shadow-md')}>
              <Text style={tailwind('text-white text-lg font-semibold')}>Withdraw</Text>
            </TouchableOpacity>
            <TouchableOpacity style={tailwind('flex-1 py-4 px-6 bg-darkcard rounded-xl ml-2 items-center border border-darkborder shadow-md')}>
              <Text style={tailwind('text-darktext text-lg font-semibold')}>Deposit</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Staking & Tokens Section */}
        <View style={tailwind('bg-darkcard p-6 rounded-xl shadow-md border border-darkborder mb-8')}>
          <View style={tailwind('flex-row items-center justify-between mb-4')}>
            <Text style={tailwind('text-darktext text-xl font-semibold')}>Staking & tokens</Text>
            <TouchableOpacity>
              <Text style={tailwind('text-darkaccent text-base font-medium')}>See all</Text>
            </TouchableOpacity>
          </View>
          <View style={tailwind('flex-row justify-between items-end mb-4')}>
            <View>
              <Text style={tailwind('text-darktext text-base opacity-70')}>Tokens</Text>
              <Text style={tailwind('text-darktext text-2xl font-bold')}>$32.7k</Text>
            </View>
            {/* Placeholder for graph - simple vertical bars */}
            <View style={tailwind('flex-row items-end h-16 w-24')}>
              {[10, 20, 15, 25, 30, 20, 10, 5, 15, 25, 35, 40].map((height, index) => (
                <View
                  key={index}
                  style={tailwind(`w-1.5 bg-darkaccent mx-0.5 rounded-sm`, { height: height * 1.5 })} // Scale height for visual
                />
              ))}
            </View>
          </View>
          <View style={tailwind('flex-row justify-between items-end')}>
            <View>
              <Text style={tailwind('text-darktext text-base opacity-70')}>Staking Tokens</Text>
              <Text style={tailwind('text-darktext text-2xl font-bold')}>$52.7k</Text>
            </View>
            {/* Placeholder for graph - simple vertical bars */}
            <View style={tailwind('flex-row items-end h-16 w-24')}>
              {[5, 15, 20, 30, 25, 15, 10, 20, 30, 40, 35, 25].map((height, index) => (
                <View
                  key={index}
                  style={tailwind(`w-1.5 bg-darksecondary mx-0.5 rounded-sm`, { height: height * 1.5 })} // Scale height for visual
                />
              ))}
            </View>
          </View>
        </View>

        {/* Assets Section */}
        <View style={tailwind('bg-darkcard p-6 rounded-xl shadow-md border border-darkborder mb-8')}>
          <View style={tailwind('flex-row items-center justify-between mb-4')}>
            <Text style={tailwind('text-darktext text-xl font-semibold')}>Assets</Text>
            <TouchableOpacity style={tailwind('flex-row items-center bg-darkbg px-4 py-2 rounded-lg border border-darkborder')}>
              <Text style={tailwind('text-darktext text-base mr-2')}>Buy</Text>
              <Text style={tailwind('text-darktext text-base')}>▼</Text>
            </TouchableOpacity>
          </View>
          {assetsData.map((asset) => (
            <AssetItem key={asset.id} asset={asset} />
          ))}
          <TouchableOpacity style={tailwind('mt-6 items-center')}>
            <Text style={tailwind('text-darkaccent text-base font-semibold')}>+ 12 Tokens</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

// You would typically define your tailwind.config.js separately and import it.
// For this self-contained example, we'll define it inline for the useTailwind hook.
// In a real React Native project with Tailwind, you'd use a babel plugin.
// For this example, we'll simulate the colors using direct styles or a simple object.
const tailwind = (classes, styleOverrides = {}) => {
  const styles = {
    'flex-1': { flex: 1 },
    'bg-darkbg': { backgroundColor: '#1a1a2e' },
    'p-6': { padding: 24 },
    'pt-12': { paddingTop: 48 },
    'flex-row': { flexDirection: 'row' },
    'items-center': { alignItems: 'center' },
    'justify-between': { justifyContent: 'space-between' },
    'mb-8': { marginBottom: 32 },
    'p-2': { padding: 8 },
    'rounded-full': { borderRadius: 9999 },
    'bg-darkcard': { backgroundColor: '#24243e' },
    'text-darktext': { color: '#e0e0e0' },
    'text-2xl': { fontSize: 24 },
    'font-bold': { fontWeight: '700' },
    'mr-4': { marginRight: 16 },
    'w-10': { width: 40 },
    'h-10': { height: 40 },
    'border-2': { borderWidth: 2 },
    'border-darkaccent': { borderColor: '#e94560' },
    'text-xl': { fontSize: 20 },
    'font-medium': { fontWeight: '500' },
    'mb-2': { marginBottom: 8 },
    'text-5xl': { fontSize: 48 },
    'text-3xl': { fontSize: 30 },
    'opacity-70': { opacity: 0.7 },
    'mb-4': { marginBottom: 16 },
    'justify-around': { justifyContent: 'space-around' },
    'py-4': { paddingVertical: 16 },
    'px-6': { paddingHorizontal: 24 },
    'bg-darksecondary': { backgroundColor: '#533483' },
    'rounded-xl': { borderRadius: 12 },
    'mr-2': { marginRight: 8 },
    'shadow-md': {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    'text-white': { color: '#ffffff' },
    'text-lg': { fontSize: 18 },
    'font-semibold': { fontWeight: '600' },
    'ml-2': { marginLeft: 8 },
    'border': { borderWidth: 1 },
    'border-darkborder': { borderColor: '#3c3c5c' },
    'text-base': { fontSize: 16 },
    'h-16': { height: 64 },
    'w-24': { width: 96 },
    'w-1.5': { width: 6 },
    'mx-0.5': { marginHorizontal: 2 },
    'rounded-sm': { borderRadius: 2 },
    'border-b': { borderBottomWidth: 1 },
    'last:border-b-0': {}, // This requires a custom logic or a utility for last-child in RN
    'text-darkaccent': { color: '#e94560' },
    'px-4': { paddingHorizontal: 16 },
    'py-2': { paddingVertical: 8 },
    'rounded-lg': { borderRadius: 8 },
    'mt-6': { marginTop: 24 },
  };

  let combinedStyle = {};
  classes.split(' ').forEach(cls => {
    if (styles[cls]) {
      combinedStyle = { ...combinedStyle, ...styles[cls] };
    }
  });

  // Manually handle last:border-b-0 for the asset items
  if (classes.includes('last:border-b-0')) {
    // This would typically be handled by iterating over the list and applying conditional styles
    // For a simple mock, we'll assume it's applied correctly or implement a basic check.
    // In a real FlatList, you'd pass an index and apply style if it's the last item.
  }

  return { ...combinedStyle, ...styleOverrides };
};

// This is a simplified useTailwind hook for demonstration.
// In a real project, you would use 'nativewind' or 'tailwindcss-react-native' setup.
// const useTailwind = () => tailwind;

// Define the custom colors for the simulated tailwind function
const customColors = {
  darkbg: '#1a1a2e',
  darkcard: '#24243e',
  darktext: '#e0e0e0',
  darkaccent: '#e94560',
  darksecondary: '#533483',
  darkborder: '#3c3c5c',
  darkhover: '#313150',
};

// Mocking the tailwind function to apply styles directly for this self-contained example
// In a real React Native project, you'd use a library like 'nativewind' or 'tailwindcss-react-native'
// which processes Tailwind classes into React Native styles at build time or runtime.
// For this immersive, we're doing a very basic manual mapping.
const createTailwind = () => {
  const styleMap = {
    'flex-1': { flex: 1 },
    'p-6': { padding: 24 },
    'pt-12': { paddingTop: 48 },
    'mb-8': { marginBottom: 32 },
    'mb-4': { marginBottom: 16 },
    'mb-2': { marginBottom: 8 },
    'mr-4': { marginRight: 16 },
    'mr-2': { marginRight: 8 },
    'ml-2': { marginLeft: 8 },
    'py-4': { paddingVertical: 16 },
    'px-6': { paddingHorizontal: 24 },
    'py-2': { paddingVertical: 8 },
    'px-4': { paddingHorizontal: 16 },
    'w-10': { width: 40 },
    'h-10': { height: 40 },
    'w-1.5': { width: 6 },
    'h-16': { height: 64 },
    'w-24': { width: 96 },
    'mx-0.5': { marginHorizontal: 2 },
    'text-2xl': { fontSize: 24 },
    'text-xl': { fontSize: 20 },
    'text-lg': { fontSize: 18 },
    'text-base': { fontSize: 16 },
    'text-sm': { fontSize: 14 },
    'text-5xl': { fontSize: 48 },
    'text-3xl': { fontSize: 30 },
    'font-bold': { fontWeight: '700' },
    'font-semibold': { fontWeight: '600' },
    'font-medium': { fontWeight: '500' },
    'opacity-70': { opacity: 0.7 },
    'rounded-full': { borderRadius: 9999 },
    'rounded-xl': { borderRadius: 12 },
    'rounded-lg': { borderRadius: 8 },
    'rounded-sm': { borderRadius: 2 },
    'border': { borderWidth: 1 },
    'border-2': { borderWidth: 2 },
    'border-b': { borderBottomWidth: 1 },
    'flex-row': { flexDirection: 'row' },
    'flex-col': { flexDirection: 'column' },
    'items-center': { alignItems: 'center' },
    'justify-between': { justifyContent: 'space-between' },
    'justify-around': { justifyContent: 'space-around' },
    'items-end': { alignItems: 'flex-end' },
    'mt-6': { marginTop: 24 },
    'bg-darkbg': { backgroundColor: customColors.darkbg },
    'bg-darkcard': { backgroundColor: customColors.darkcard },
    'bg-darksecondary': { backgroundColor: customColors.darksecondary },
    'bg-darkaccent': { backgroundColor: customColors.darkaccent },
    'text-darktext': { color: customColors.darktext },
    'text-darkaccent': { color: customColors.darkaccent },
    'text-white': { color: customColors.darktext }, // Assuming white text on darksecondary/darkaccent
    'border-darkborder': { borderColor: customColors.darkborder },
    'shadow-md': {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    // Add more mappings as needed
  };

  return (classNames, styleOverrides = {}) => {
    let combinedStyle = {};
    classNames.split(' ').forEach(cls => {
      if (styleMap[cls]) {
        combinedStyle = { ...combinedStyle, ...styleMap[cls] };
      }
    });
    return { ...combinedStyle, ...styleOverrides };
  };
};

// Re-assign useTailwind to our mocked function for this example
// In a real project, this would be an actual hook from a library
// const useTailwind = createTailwind();

// Define custom colors directly in a StyleSheet for Native compatibility
const customStyles = StyleSheet.create({
  darkbg: { backgroundColor: '#1a1a2e' },
  darkcard: { backgroundColor: '#24243e' },
  darktext: { color: '#e0e0e0' },
  darkaccent: { color: '#e94560' },
  darksecondary: { backgroundColor: '#533483' },
  darkborder: { borderColor: '#3c3c5c' },
  darkhover: { backgroundColor: '#313150' }, // Not directly used in RN styles like this, but for conceptual mapping
});

// Override the useTailwind mock to use StyleSheet for basic colors
// This is a more robust way to handle colors in RN without a full Tailwind setup
const useTailwindReal = () => {
  return (classNames, styleOverrides = {}) => {
    let combinedStyle = {};
    classNames.split(' ').forEach(cls => {
      // Basic mapping for common Tailwind-like classes to RN styles
      if (cls.startsWith('p-')) {
        combinedStyle.padding = parseInt(cls.split('-')[1]) * 4;
      } else if (cls.startsWith('pt-')) {
        combinedStyle.paddingTop = parseInt(cls.split('-')[1]) * 4;
      } else if (cls.startsWith('mb-')) {
        combinedStyle.marginBottom = parseInt(cls.split('-')[1]) * 4;
      } else if (cls.startsWith('mr-')) {
        combinedStyle.marginRight = parseInt(cls.split('-')[1]) * 4;
      } else if (cls.startsWith('ml-')) {
        combinedStyle.marginLeft = parseInt(cls.split('-')[1]) * 4;
      } else if (cls.startsWith('py-')) {
        combinedStyle.paddingVertical = parseInt(cls.split('-')[1]) * 4;
      } else if (cls.startsWith('px-')) {
        combinedStyle.paddingHorizontal = parseInt(cls.split('-')[1]) * 4;
      } else if (cls.startsWith('w-')) {
        combinedStyle.width = parseInt(cls.split('-')[1]) * 4;
      } else if (cls.startsWith('h-')) {
        combinedStyle.height = parseInt(cls.split('-')[1]) * 4;
      } else if (cls.startsWith('text-')) {
        const size = cls.split('-')[1];
        const fontSizeMap = {
          'sm': 14, 'base': 16, 'lg': 18, 'xl': 20, '2xl': 24, '3xl': 30, '5xl': 48
        };
        combinedStyle.fontSize = fontSizeMap[size] || parseInt(size);
        if (cls.includes('darktext')) combinedStyle.color = customColors.darktext;
        if (cls.includes('darkaccent')) combinedStyle.color = customColors.darkaccent;
        if (cls.includes('white')) combinedStyle.color = '#ffffff';
      } else if (cls.startsWith('font-')) {
        const weight = cls.split('-')[1];
        const fontWeightMap = {
          'medium': '500', 'semibold': '600', 'bold': '700'
        };
        combinedStyle.fontWeight = fontWeightMap[weight] || weight;
      } else if (cls.startsWith('bg-')) {
        if (customColors[cls.substring(3)]) {
          combinedStyle.backgroundColor = customColors[cls.substring(3)];
        }
      } else if (cls.startsWith('border-')) {
        if (customColors[cls.substring(7)]) {
          combinedStyle.borderColor = customColors[cls.substring(7)];
        }
        combinedStyle.borderWidth = 1;
        if (cls === 'border-2') combinedStyle.borderWidth = 2;
        if (cls === 'border-b') combinedStyle.borderBottomWidth = 1;
      } else if (cls.startsWith('rounded-')) {
        const radius = cls.split('-')[1];
        const borderRadiusMap = {
          'full': 9999, 'xl': 12, 'lg': 8, 'sm': 2
        };
        combinedStyle.borderRadius = borderRadiusMap[radius] || parseInt(radius);
      } else if (cls === 'flex-1') {
        combinedStyle.flex = 1;
      } else if (cls === 'flex-row') {
        combinedStyle.flexDirection = 'row';
      } else if (cls === 'items-center') {
        combinedStyle.alignItems = 'center';
      } else if (cls === 'justify-between') {
        combinedStyle.justifyContent = 'space-between';
      } else if (cls === 'justify-around') {
        combinedStyle.justifyContent = 'space-around';
      } else if (cls === 'items-end') {
        combinedStyle.alignItems = 'flex-end';
      } else if (cls === 'shadow-md') {
        combinedStyle.shadowColor = '#000';
        combinedStyle.shadowOffset = { width: 0, height: 2 };
        combinedStyle.shadowOpacity = 0.25;
        combinedStyle.shadowRadius = 3.84;
        combinedStyle.elevation = 5;
      } else if (cls.startsWith('opacity-')) {
        combinedStyle.opacity = parseInt(cls.split('-')[1]) / 100;
      }
    });

    return { ...combinedStyle, ...styleOverrides };
  };
};

// Use the more realistic mock for useTailwind
// This is still a mock, but it provides a better demonstration of how Tailwind classes map to RN styles.
// In a real project, you would install and configure 'nativewind' or 'tailwindcss-react-native'.
// const useTailwind = useTailwindReal;

// StyleSheet for base styles (optional, but good practice for static styles)
const baseStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: customColors.darkbg,
  },
  scrollViewContent: {
    padding: 24,
    paddingTop: 48,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  buttonCircle: {
    padding: 8,
    borderRadius: 9999,
    backgroundColor: customColors.darkcard,
  },
  iconText: {
    color: customColors.darktext,
    fontSize: 24,
    fontWeight: 'bold',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 9999,
    borderWidth: 2,
    borderColor: customColors.darkaccent,
  },
  walletSection: {
    marginBottom: 32,
  },
  walletTitle: {
    color: customColors.darktext,
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 8,
  },
  walletBalance: {
    color: customColors.darktext,
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  usdtText: {
    color: customColors.darktext,
    fontSize: 30,
    opacity: 0.7,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  actionButton: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  withdrawButton: {
    backgroundColor: customColors.darksecondary,
    marginRight: 8,
  },
  depositButton: {
    backgroundColor: customColors.darkcard,
    marginLeft: 8,
    borderWidth: 1,
    borderColor: customColors.darkborder,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
  stakingSection: {
    backgroundColor: customColors.darkcard,
    padding: 24,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth: 1,
    borderColor: customColors.darkborder,
    marginBottom: 32,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  sectionTitle: {
    color: customColors.darktext,
    fontSize: 20,
    fontWeight: '600',
  },
  seeAllText: {
    color: customColors.darkaccent,
    fontSize: 16,
    fontWeight: '500',
  },
  graphRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 16,
  },
  graphLabelContainer: {
    // No specific style needed here, just a container
  },
  graphLabel: {
    color: customColors.darktext,
    fontSize: 16,
    opacity: 0.7,
  },
  graphValue: {
    color: customColors.darktext,
    fontSize: 24,
    fontWeight: 'bold',
  },
  graphBarsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: 64,
    width: 96,
  },
  graphBar: {
    width: 6,
    marginHorizontal: 2,
    borderRadius: 2,
  },
  assetSection: {
    backgroundColor: customColors.darkcard,
    padding: 24,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth: 1,
    borderColor: customColors.darkborder,
    marginBottom: 32,
  },
  buyButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: customColors.darkbg,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: customColors.darkborder,
  },
  buyButtonText: {
    color: customColors.darktext,
    fontSize: 16,
    marginRight: 8,
  },
  assetItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: customColors.darkborder,
  },
  assetItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  assetIcon: {
    width: 40,
    height: 40,
    borderRadius: 9999,
    marginRight: 16,
  },
  assetName: {
    color: customColors.darktext,
    fontSize: 18,
    fontWeight: '600',
  },
  assetFullName: {
    color: customColors.darktext,
    opacity: 0.7,
    fontSize: 14,
  },
  assetItemRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  assetQuantity: {
    color: customColors.darktext,
    fontSize: 18,
    fontWeight: '500',
    marginRight: 16,
  },
  assetValue: {
    color: customColors.darktext,
    fontSize: 18,
    fontWeight: 'bold',
  },
  addTokensButton: {
    marginTop: 24,
    alignItems: 'center',
  },
  addTokensText: {
    color: customColors.darkaccent,
    fontSize: 16,
    fontWeight: '600',
  },
});
