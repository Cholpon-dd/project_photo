import React, { useContext, useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import { productsContext } from "../../contexts/ProductsContext";
import ProductsCard from "./ProductsCard";
import { useHistory } from "react-router-dom";
import EditModal from "../EditProducts/EditProducts";
import Carousel from '../Carousel/Carousel'
import './ProductsList.css'

const ProductsList = (props) => {
  const history = useHistory();
  const [page, setPage] = useState(getPage());
  const { getProducts, productsData, paginationPages } = useContext(
    productsContext
  );

  function getPage() {
    const search = new URLSearchParams(history.location.search);
    return search.get("_page");
  }

  const hadlePage = (e, page) => {
    const search = new URLSearchParams(history.location.search);
    search.set("_page", page);
    history.push(`${history.location.pathname}?${search.toString()}`);
    setPage(page);
    getProducts(history);
    console.log(history)
  };
  useEffect(() => {
    getProducts(history);
  }, []);

  return (
    <>
      <Grid container spacing={3} d-flex="true" justify="center"  style={{paddingTop:"20px"}}>
        {productsData.map((item) => (
          <Grid item key={item.id + 'grid'}>
            <ProductsCard item={item} key={item.id} history={history}/>
          </Grid>
        ))}
        <EditModal/>
      </Grid>
      <Pagination className="pagination"
        page={+page}
        onChange={hadlePage}
        count={paginationPages}
        color="primary"
      />
      <Carousel/>
    </>
  );
};

export default ProductsList;
