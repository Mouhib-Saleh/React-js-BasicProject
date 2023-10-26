import React, { useEffect, useState } from "react";
import { getOffers } from "../../Service/offre";
import Offres from "./Offers";

export default function Index() {
  const [offers, setoffers] = useState([]);

  async function getProductsApi() {
    try {
      setoffers(await getOffers());
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProductsApi();
  }, []);

  return <Offres offers={offers} />;
}
