import Sidebar from './Sidebar';
import Header from './Header';
import Content from './Content';

import './styles.css';

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

export default Dashboard;
