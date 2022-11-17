var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _reactNative=require("react-native");var _react=_interopRequireWildcard(require("react"));var _assets=_interopRequireDefault(require("../../assets"));var _jsxRuntime=require("react/jsx-runtime");var _this=this,_jsxFileName="D:\\React Native\\Personalia\\personalia\\src\\pages\\Login\\index.js";function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}var Login=function Login(_ref){var navigation=_ref.navigation;var login=function login(){navigation.replace('MainApp');};return(0,_jsxRuntime.jsx)(_reactNative.SafeAreaView,{style:styles.page,children:(0,_jsxRuntime.jsxs)(_reactNative.View,{style:styles.container,children:[(0,_jsxRuntime.jsx)(_reactNative.Image,{source:_assets.default.logo,style:styles.Image}),(0,_jsxRuntime.jsx)(_reactNative.Text,{style:styles.title,children:"Profil Karyawan"}),(0,_jsxRuntime.jsx)(_reactNative.TextInput,{placeholder:"Nomor Induk Karyawan",style:styles.emailInput}),(0,_jsxRuntime.jsx)(_reactNative.TextInput,{placeholder:"Password",secureTextEntry:true,style:styles.passwordInput}),(0,_jsxRuntime.jsx)(_reactNative.View,{style:styles.breakLine}),(0,_jsxRuntime.jsx)(_reactNative.TouchableOpacity,{style:styles.button,onPress:login,children:(0,_jsxRuntime.jsx)(_reactNative.Text,{style:styles.buttonText,children:"Login"})})]})});};var _default=Login;exports.default=_default;var styles=_reactNative.StyleSheet.create({page:{flex:1,backgroundColor:'#9be0fb'},container:{flex:1,paddingHorizontal:16,justifyContent:'center'},Image:{alignSelf:'center',width:150,height:150},title:{fontSize:24,fontWeight:'bold',color:'#17aa7a',alignSelf:'center',marginBottom:77,marginTop:16},emailInput:{backgroundColor:'#717976',height:45,borderRadius:8,paddingHorizontal:16,paddingVertical:13,borderWidth:1,marginBottom:16,borderColor:'#17aa7a'},passwordInput:{backgroundColor:'#717976',height:45,borderRadius:8,paddingHorizontal:16,paddingVertical:13,borderWidth:1,borderColor:'#17aa7a'},breakLine:{backgroundColor:'#F2F2F2',marginVertical:40,marginHorizontal:16,height:1},button:{backgroundColor:'#17aa7a',height:45,borderRadius:8,justifyContent:'center',alignItems:'center'},buttonText:{fontSize:16,color:'#fff',fontWeight:'bold'}});