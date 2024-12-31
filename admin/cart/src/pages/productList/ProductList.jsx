import "./productList.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProducts, getProducts } from "../../redux/apiCalls";

export default function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      deleteProducts(id, dispatch);
    }
  };

  const processedProducts = Array.isArray(products)
    ? products.map((product, index) => ({
        ...product,
        id: product._id || `temp-${index}`, // Fallback for missing `_id`
      }))
    : [];

  const columns = [
    { field: "id", headerName: "ID", width: 220 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        const [imageSrc, setImageSrc] = useState("");
        const backendUrl = "http://localhost:5000";

        useEffect(() => {
          const checkImage = async () => {
           

            const backendImageUrl = `${backendUrl}${params.row.img}`;

            try {
              const response = await fetch(backendImageUrl);
              if (response.ok) {
                setImageSrc(backendImageUrl); // Use backend image if it exists
              } else {
                throw new Error("Image not found");
              }
            } catch (err) {
              setImageSrc(`/images/${params.row.img}`); // Use fallback image
            }
          };

          checkImage();
        }, [params.row.img]);

        return (
          <div className="productListItem">
            <img
              className="productListImg"
              src={params.row.img}
              alt={params.row.title || "Product"}
            />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "inStock", headerName: "Stock", width: 200 },
    { field: "price", headerName: "Price", width: 160 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => (
        <>
          <Link to={`/product/${params.row.id}`}>
            <button className="productListEdit">Edit</button>
          </Link>
          <DeleteOutlineIcon
            className="productListDelete"
            onClick={() => handleDelete(params.row.id)}
          />
        </>
      ),
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={processedProducts}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
