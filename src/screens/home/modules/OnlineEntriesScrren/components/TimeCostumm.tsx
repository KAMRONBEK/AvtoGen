// import * as React from 'react';
// import {Dimensions, FlatList, Text, TouchableOpacity, View} from 'react-native';

// const {width, height} = Dimensions.get('screen');

// const data = [...Array(20).keys()].map((e, i) => ({
//   key: i,
//   job: 'cibwiclnw',
// }));

// const _colors = {
//   active: `#FCD259ff`,
//   inactive: `#FCD25900`,
// };
// const _spacing = 10;

// export default function UberEats() {
//   const ref = React.useRef<FlatList>(null);
//   const [index, setIndex] = React.useState(0);
//   React.useEffect(() => {
//     ref.current.scrollToIndex({
//       index,
//       animated: true,
//     });
//   }, [index]);
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <FlatList
//         ref={ref}
//         initialScrollIndex={index}
//         style={{flexGrow: 0}}
//         data={data}
//         keyExtractor={item => item.key}
//         contentContainerStyle={{paddingLeft: _spacing}}
//         showsHorizontalScrollIndicator={false}
//         horizontal
//         renderItem={({item, index: fIndex}) => {
//           return (
//             <TouchableOpacity onPress={() => {}}>
//               <View
//                 style={{
//                   marginRight: _spacing,
//                   padding: _spacing,
//                   borderWidth: 2,
//                   borderColor: _colors.active,
//                   backgroundColor:
//                     fIndex === index ? _colors.active : _colors.inactive,
//                   borderRadius: 12,
//                 }}>
//                 <Text style={{color: '#36303F', fontWeight: '700'}}>
//                   {item.job}
//                 </Text>
//               </View>
//             </TouchableOpacity>
//           );
//         }}
//       />
//       <View
//         style={{
//           alignItems: 'center',
//           flexDirection: 'row',
//           marginTop: _spacing * 10,
//         }}>
//         <View style={{alignItems: 'center'}}>
//           <Text
//             style={{
//               color: '#36303F',
//               fontWeight: '700',
//               marginBottom: _spacing,
//             }}>
//             Scroll position
//           </Text>
//           <View
//             style={{
//               flexDirection: 'row',
//               width: width / 2,
//               justifyContent: 'center',
//             }}>
//             <TouchableOpacity onPress={() => {}}>
//               <View
//                 style={{
//                   padding: _spacing,
//                   backgroundColor: '#FCD259',
//                   borderRadius: _spacing,
//                   marginRight: _spacing,
//                 }}></View>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => {}}>
//               <View
//                 style={{
//                   padding: _spacing,
//                   backgroundColor: '#FCD259',
//                   borderRadius: _spacing,
//                   marginRight: _spacing,
//                 }}></View>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => {}}>
//               <View
//                 style={{
//                   padding: _spacing,
//                   backgroundColor: '#FCD259',
//                   borderRadius: _spacing,
//                 }}></View>
//             </TouchableOpacity>
//           </View>
//         </View>
//         <View style={{alignItems: 'center'}}>
//           <Text style={{color: '#36303F', fontWeight: '700', marginBottom: 10}}>
//             Navigation
//           </Text>
//           <View
//             style={{
//               flexDirection: 'row',
//               width: width / 2,
//               justifyContent: 'center',
//             }}>
//             <TouchableOpacity
//               onPress={() => {
//                 if (index === 0) {
//                   return;
//                 }
//                 setIndex[index + 1];
//               }}>
//               <View
//                 style={{
//                   padding: _spacing,
//                   backgroundColor: '#FCD259',
//                   borderRadius: _spacing,
//                   marginRight: _spacing,
//                 }}><Text>xsxsxasx</Text></View>
//             </TouchableOpacity>
//             <TouchableOpacity
//               onPress={() => {
//                 if (index ===  - 1) {
//                   return;
//                 }
//                 setIndex[index + 1];
//               }}>
//               <View
//                 style={{
//                   padding: _spacing,
//                   backgroundColor: '#FCD259',
//                   borderRadius: _spacing,
//                 }}><Text>xsxsxasx</Text></View>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// }
