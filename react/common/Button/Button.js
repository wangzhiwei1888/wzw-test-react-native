
import React, {Component} from 'react';

import {
  View,
  Text,
} from 'react-native';


export const Button = ({children}) => <View>
  <View>{children}</View>
</View>



// export class Button extends Component{
//   render(){
//     return(
//       <View style={{marginTop:30}}>
//         <Text>Button</Text>
//       </View>
//     )
//   }
// }



// export const Button = () => <View>
//   <Text>button</Text>
// </View>

//加上下面的不行，必须用 export 导出
// module.exports = Button;
