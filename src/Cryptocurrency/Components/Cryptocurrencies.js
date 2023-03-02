import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Getdata } from "../Redux/Action";
import { Card, Row, Col, Input, Spin } from "antd";
import millify from "millify";
import { Link } from "react-router-dom";

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.Data);
  const coins = list?.data?.coins;
  const loading = list?.status;
  const [searchTerm, setSearchTerm] = useState("");
  const [cryptos, setCryptos] = useState(list?.data?.coins);
  useEffect(() => {
    dispatch(Getdata(count));
  }, []);

  useEffect(() => {
    if (loading !== "success") {
      <Spin style={{ margin: "20px" }} size="small" />;
    } else if (loading === "success" && searchTerm === "") {
      setCryptos(coins);
    } else {
      const filteredData = cryptos.filter((item) =>
        item.name.toLowerCase().includes(searchTerm)
      );
      setCryptos(filteredData);
    }
  }, [loading, coins, cryptos, searchTerm]);

  const debounce = (func) => {
    let timer;
    return function () {
      const context = this;
      const args = arguments;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 300);
    };
  };

  // const optimize=useCallback(debounce(handleClicked))

  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          />
        </div>
      )}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {loading !== "success" ? (
          <Spin style={{ margin: "20px" }} size="small" />
        ) : (
          <>
            {cryptos?.map((currency) => (
              <Col
                xs={24}
                sm={12}
                lg={6}
                className="crypto-card"
                key={currency.uuid}
              >
                <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
                  <Card
                    title={`${currency.rank}. ${currency.name}`}
                    extra={
                      <img
                        className="crypto-image"
                        src={currency.iconUrl}
                        alt=""
                      />
                    }
                    hoverable
                  >
                    <p>Price: {millify(currency.price)}</p>
                    <p>Market Cap: {millify(currency.marketCap)}</p>
                    <p>Daily Change: {currency.change}%</p>
                  </Card>
                </Link>
              </Col>
            ))}
          </>
        )}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
