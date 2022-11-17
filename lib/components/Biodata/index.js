var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=exports.Biodata=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _reactNative=require("react-native");var _react=_interopRequireWildcard(require("react"));var _reactNativeTableComponent=require("react-native-table-component");var _jsxRuntime=require("react/jsx-runtime");var _jsxFileName="D:\\React Native\\Personalia\\personalia\\src\\components\\Biodata\\index.js";function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=(0,_getPrototypeOf2.default)(Derived),result;if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2.default)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return(0,_possibleConstructorReturn2.default)(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}var Biodata=function(_Component){(0,_inherits2.default)(Biodata,_Component);var _super=_createSuper(Biodata);function Biodata(props){var _this;(0,_classCallCheck2.default)(this,Biodata);_this=_super.call(this,props);_this.state={tableData:[['KTP','3311071006990004'],['BPJS','0002167007804'],['JHT','22020956482'],['Alamat','Dk Dari Rt 002 Rw 004 Rejosari Polokarto Sukoharjo 087736026'],['Tanggal Masuk','02 Feb 2022'],['Bagian','Office'],['Status','Junior Staff'],['Dept','IT']]};return _this;}(0,_createClass2.default)(Biodata,[{key:"render",value:function render(){var state=this.state;return(0,_jsxRuntime.jsx)(_reactNative.View,{style:styles.container,children:(0,_jsxRuntime.jsxs)(_reactNative.View,{style:styles.title,children:[(0,_jsxRuntime.jsx)(_reactNative.Text,{style:styles.label,children:"Biodata"}),(0,_jsxRuntime.jsx)(_reactNative.View,{style:styles.breakLine}),(0,_jsxRuntime.jsx)(_reactNative.View,{style:styles.table,children:(0,_jsxRuntime.jsx)(_reactNativeTableComponent.Table,{borderStyle:{borderWidth:0},children:(0,_jsxRuntime.jsxs)(_reactNativeTableComponent.TableWrapper,{style:styles.wrapper,children:[(0,_jsxRuntime.jsx)(_reactNativeTableComponent.Col,{data:state.tableTitle,style:styles.title,textStyle:styles.text}),(0,_jsxRuntime.jsx)(_reactNativeTableComponent.Rows,{data:state.tableData,flexArr:[1,2],style:styles.row,textStyle:styles.text})]})})})]})});}}]);return Biodata;}(_react.Component);exports.Biodata=Biodata;var _default=Biodata;exports.default=_default;var styles=_reactNative.StyleSheet.create({table:{flex:1,backgroundColor:'#fff'},head:{height:40,backgroundColor:'#f1f8ff'},wrapper:{flexDirection:'row'},titletb:{flex:1,backgroundColor:'#f6f8fa'},text:{textAlign:'left',color:'grey'},container:{marginTop:10,marginLeft:10,marginRight:10,paddingTop:20},title:{position:'relative',backgroundColor:'white',padding:20,top:20,borderRadius:10},label:{fontSize:16,fontWeight:'600',color:'#0087ff'},breakLine:{backgroundColor:'#F2F2F2',marginVertical:8,height:1}});