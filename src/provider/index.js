import React, {component} from 'react';

export const MyContext = React.createContext();

export default class index extends Component {
  constructor() {
    super();
    this.state = {
       books:[],
       currentlyReading:[],
       wantToRead:[],
       read:[]
    }
  }
  render() {
    return(
      <MyContext.provider value={{...this.state}} >
        {this.props.children}
      </MyContext.provider>
    )
  }
}
