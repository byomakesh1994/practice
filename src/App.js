// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { Layout, Typography, Space } from "antd";
// import {
//   Exchanges,
//   Homepage,
//   News,
//   Cryptocurrencies,
//   CryptoDetails,
//   Navbar,
// } from "./Cryptocurrency/Components";
// import "./App.css";

// const App = () => (
//   <Router>
//     <div className="app">
//       <div className="navbar">
//         <Navbar />
//       </div>
//       <div className="main">
//         <Layout>
//           <div className="routes">
//             <Routes>
//               <Route path="/" element={<Homepage />} />
//               <Route path="/exchanges" element={<Exchanges />} />
//               <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
//               <Route path="/crypto/:coinId" element={<CryptoDetails />} />
//               <Route path="/news" element={<News />} />
//             </Routes>
//           </div>
//         </Layout>
//         <div className="footer">
//           <Typography.Title
//             level={5}
//             style={{ color: "white", textAlign: "center" }}
//           >
//             Copyright © 2021
//             <Link to="/">Cryptoverse Inc.</Link> <br />
//             All Rights Reserved.
//           </Typography.Title>
//           <Space>
//             <Link to="/">Home</Link>
//             <Link to="/exchanges">Exchanges</Link>
//             <Link to="/news">News</Link>
//           </Space>
//         </div>
//       </div>
//     </div>
//   </Router>
// );

// export default App;

//.................LOGIN.............//

// import React from "react";
// import Home from "./login/Home";

// const App = () => {
//   return (
//     <div>
//       <Home />
//     </div>
//   );
// };

// export default App;

import React from "react";
import CallbackHook from "./Practice/Hook";

const App = () => {
  return (
    <div>
      <CallbackHook />
    </div>
  );
};

export default App;
