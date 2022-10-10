import { Container } from "../../components/styles/Container.styled";

import Header from "../Header/Header";
import "./Collections.css";

import { Table, Avatar, Tag, SvgMoreVert } from "@web3uikit/core";

import { getTop15ListingRewardsCollections } from "../../api/looksrare";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCollections, selectCollections } from "./CollectionsSlice";

function Collections() {
  const dispatch = useDispatch();
  const collections = useSelector(selectCollections);

  useEffect(() => {
    dispatch(fetchCollections());
  }, [dispatch]);
  // const getTop15ListingRewardsCollections();

  /* useEffect(() => {
    const collections = getTop15ListingRewardsCollections().data;
    const addresses = collections.map(({ collection }) => collection.addresses);
    console.log(addresses);
    setTop15Listing(addresses);
  }, []); */
  const rows = collections.map((collection) => {
    return [
      <Avatar fontSize={36} isRounded theme="image" />,
      collection.collection.name,
      <Tag color="blue" text="NFT Collection" />,
      "0x18...130e",
    ];
  });

  console.log("rows:", rows);

  return (
    <div>
      <Header></Header>
      <Container>
        <h1>Hello World</h1>

        <Table
          columnsConfig="80px 3fr 2fr 2fr 80px"
          data={rows}
          header={[
            "",
            <span>Name</span>,
            <span>Type</span>,
            <span>Module</span>,
            "",
          ]}
          isColumnSortable={[false, true, false, false]}
          maxPages={3}
          onPageNumberChanged={function noRefCheck() {}}
          onRowClick={function noRefCheck() {}}
          pageSize={5}
        />
      </Container>
    </div>
  );
}

export default Collections;
