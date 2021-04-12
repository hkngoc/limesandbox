import { DynamicModuleLoader } from "redux-dynamic-modules";

import Sidebar from './Sidebar';
import Header from './Header';
import Content from './Content';

import './styles.css';

import dashboardModule from './module';

const Dashboard = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="body flex-row">
        <Sidebar />
        <main className="content">
          <Content />
        </main>
      </div>
    </div>
  )
};

const DynamicModule = () => (
  <DynamicModuleLoader modules={[dashboardModule]}>
    <Dashboard />
  </DynamicModuleLoader>
);

export default DynamicModule;
