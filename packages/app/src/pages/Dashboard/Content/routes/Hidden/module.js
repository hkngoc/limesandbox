import {
  permissionApi
} from 'apis/slices/permission';

const permissionModule = [{
  id: "permission",
  reducerMap: {
    [permissionApi.reducerPath]: permissionApi.reducer,
  }
}];

export default permissionModule;
