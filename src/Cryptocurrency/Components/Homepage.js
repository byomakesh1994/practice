import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cryptocurrencies from "./Cryptocurrencies";
import News from "./News";
import { Typography, Row, Col, Statistic, Spin } from "antd";
import { Link } from "react-router-dom";
import millify from "millify";
import { Getdata } from "../Redux/Action";
const { Title } = Typography;

const Homepage = () => {
  const dispatch = useDispatch();
  const count = 10;
  useEffect(() => {
    dispatch(Getdata(count));
  }, []);

  const { list } = useSelector((state) => state.Data);
  const statistic = list?.data?.stats;

  return (
    <>
      {list?.status !== "success" ? (
        <Spin style={{ margin: "20px" }} size="small" />
      ) : (
        <>
          <Title level={2} className="heading">
            Global Crypto Stats
          </Title>
          <Row gutter={[32, 32]}>
            <Col span={12}>
              <Statistic
                title="Total Cryptocurrencies :"
                value={millify(statistic.total)}
              />
            </Col>
            <Col span={12}>
              <Statistic
                title="Total Exchanges :"
                value={millify(statistic.totalExchanges)}
              />
            </Col>
            <Col span={12}>
              <Statistic
                title="Total Market Cap :"
                value={millify(statistic.totalMarketCap)}
              />
            </Col>
            <Col span={12}>
              <Statistic
                title="Total 24h Volume :"
                value={millify(statistic.total24hVolume)}
              />
            </Col>
            <Col span={12}>
              <Statistic
                title="Total Markets :"
                value={millify(statistic.totalMarkets)}
              />
            </Col>
          </Row>
        </>
      )}
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptos In The World
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">Show more</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={3}>
          <Link to="/news">Show more</Link>
        </Title>
      </div>
      <News simplified />
    </>
  );
};

export default Homepage;
