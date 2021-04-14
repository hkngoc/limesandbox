import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';

import Header from 'pages/Dashboard/Components/Header';
import VariableGrid from 'pages/Dashboard/Components/VariableGrid';

import { selectOrderedSandbox } from 'store/firebaseSlice';

const Home = () => {
  const sandboxs = useSelector(selectOrderedSandbox);

  return (
    <div className="container-fluid px-3 overflow-auto">
      <Helmet>
        <title>Dashboard - LimeSandbox</title>
      </Helmet>
      <Header title="Home" showViewOptions={true} />
      <VariableGrid items={ [{ type: "new-sandbox" }, ...sandboxs.map(s => ({ type: "sandbox", sandbox: s })) ]}/>
    </div>
  )
};

export default Home;
