import CharacterCard from "@components/molecules/characterCard/CharacterCard";
import useAxios from "@hooks/useAxios";
import { Flex, Layout, Spin } from "antd";
import { useEffect, useMemo, useState } from "react";
import { CardListResponse } from "./components/cards.types";
import { layoutHeaderStyle, layoutStyle } from "./HomeTemplate.style";
import InfiniteScroll from "react-infinite-scroll-component";
import CardService from "@services/CardService";
import PageHeader from "@components/molecules/pageHeader/PageHeader";

const HomeTemplate = () => {
  const inifiniteScrollLength = 50;
  const [list, setList] = useState<Array<CardListResponse>>([]);
  const [{ data, loading }] = useAxios<Array<CardListResponse>>(
    CardService.getAllCardsUrl()
  );

  const loadMore = () => {
    if (list.length < 2000) {
      // Limit only for the purpose of the test
      const initialIndex = list.length;
      const amountItems = initialIndex + inifiniteScrollLength;
      const finalIndex = amountItems > 2000 ? 2000 : amountItems;
      const more = data?.slice(initialIndex, finalIndex) || [];
      setList((prev) => [...prev, ...more]);
    }
  };

  const renderedCards = useMemo(() => {
    return list.map((card: CardListResponse) => (
      <CharacterCard
        key={`${card.cardnumber}`}
        name={card.name}
        cardNumber={card.cardnumber}
      />
    ));
  }, [list]);

  useEffect(() => {
    setList(data?.slice(0, inifiniteScrollLength) || []);
  }, [data]);

  return (
    <Layout style={layoutStyle}>
      <Layout.Header style={layoutHeaderStyle}>
        <PageHeader />
      </Layout.Header>
      <Layout.Content>
        {loading ? (
          <Flex vertical gap="middle" justify="center" align="center">
            <span>Loading cards</span>
            <Spin size="large" />
          </Flex>
        ) : (
          <InfiniteScroll
            dataLength={list.length}
            hasMore={list.length < 2000}
            next={loadMore}
            loader={<div>Loading more cards...</div>}
            style={{ overflow: "hidden" }}
          >
            <Flex wrap gap="large" justify="center">
              {renderedCards}
            </Flex>
          </InfiniteScroll>
        )}
      </Layout.Content>
    </Layout>
  );
};

export default HomeTemplate;
