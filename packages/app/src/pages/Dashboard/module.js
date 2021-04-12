import settingReducer from 'store/settingSlice';

const dashboardModule = {
  id: "setting",
  reducerMap: {
    setting: settingReducer
  }
};

export default dashboardModule;
