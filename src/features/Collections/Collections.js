import { Container } from "../../components/styles/Container.styled";

import Header from "../Header/Header";
import "./Collections.css";

import { Table, Avatar, Tag, Loading } from "@web3uikit/core";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCollections,
  fetchCollectionsImages,
  selectCollections,
  selectCollectionsImages,
} from "./CollectionsSlice";

function Collections() {
  const dispatch = useDispatch();
  const collections = useSelector(selectCollections);
  const collectionsImages = useSelector(selectCollectionsImages);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    dispatch(fetchCollections());
  }, [dispatch]);

  useEffect(() => {
    if (collections.length > 0 && !collectionsImages.isReady) {
      dispatch(fetchCollectionsImages());
    } else {
      setRows(
        collections.map((collection, index) => {
          const img =
            collectionsImages[collection.collection.address.toLowerCase()];
          return [
            <Avatar
              fontSize={36}
              isRounded
              theme="image"
              image={img}
              key={index}
            />,
            collection.collection.name,
            <Tag color="blue" text="NFT Collection" key={index} />,
            "0x18...130e",
          ];
        })
      );
    }
  }, [dispatch, collections, collectionsImages]);

  const isLoading = rows.length === 0 ? true : false;

  return (
    <div>
      <Header></Header>
      <Container>
        <h1>Top 15 Looksrare Listing Rewards Collections</h1>

        <Table
          customLoadingContent={
            <div>
              <Loading size={30} spinnerColor="#2E7DAF" text="Fetching..." />
            </div>
          }
          columnsConfig="80px 3fr 2fr 2fr 80px"
          data={rows}
          // need to add a key to the headers to avoid warning
          header={[
            "",
            <span key="1">Name</span>,
            <span key="2">Type</span>,
            <span key="3">Module</span>,
            "",
          ]}
          isLoading={isLoading}
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
