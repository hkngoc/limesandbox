import { Helmet } from 'react-helmet-async';

import Header from 'pages/Dashboard/Components/Header';
import VariableGrid from 'pages/Dashboard/Components/VariableGrid';

const Home = () => {
  return (
    <div className="container-fluid px-3 overflow-auto">
      <Helmet>
        <title>Dashboard - LimeSandbox</title>
      </Helmet>
      <Header title="Home" showViewOptions={true} />
      <VariableGrid items={[{ title: "add", type: "new-sandbox" }]}/>
    </div>
  )
};

export default Home;
