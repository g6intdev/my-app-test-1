import { createContext } from 'react';

const uacContext = createContext({
  _id: "randidstring",
  userid: "userid",
  firstName: "Taro",
  lastName: "Tanaka",
  borderControlStatus: 0,
  nygBalance: 0,
  jpyBalance: 0,
  allowedActions: [{
    featurekey: "bordercontrol",
    featurename: "入退場管理",
    linkto: "./bordercontrol"
  }]
}

);

export default uacContext;