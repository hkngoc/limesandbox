import { Helmet } from 'react-helmet-async';

import Header from 'pages/Dashboard/Components/Header';
import VariableGrid from 'pages/Dashboard/Components/VariableGrid';

const ITEMS = [{
  title: "1"
}, {
  title: "2"
}, {
  title: "3"
}, {
  title: "4"
}, {
  title: "5"
}, {
  title: "6"
}, {
  title: "7"
}, {
  title: "8"
}, {
title: "9"
}, {
  title: "1"
}, {
  title: "2"
}, {
  title: "3"
}, {
  title: "4"
}, {
  title: "5"
}, {
  title: "6"
}, {
  title: "7"
}, {
  title: "8"
}, {
  title: "9"
}];

const Home = () => {
  return (
    <div className="container-fluid px-4 overflow-auto">
      <Helmet>
        <title>Dashboard - LimeSandbox</title>
      </Helmet>
      <Header title="Home" showViewOptions={true} />
      <VariableGrid items={ITEMS}/>
    </div>
  )
};

export default Home;
