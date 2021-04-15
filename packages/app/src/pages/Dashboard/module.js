import { firestoreReducer } from 'redux-firestore';
import dashboardReducer from 'store/dashboardSlice';
import settingReducer from 'store/settingSlice';

const dashboardModule = [
  {
    id: "firestore_dashboard",
    reducerMap: {
      firestoreDashboard: firestoreReducer
    }
  },
  {
    id: "dashboard",
    reducerMap: {
      dashboard: dashboardReducer
    }
  },
  {
    id: "setting",
    reducerMap: {
      setting: settingReducer
    }
  }
];

export default dashboardModule;
