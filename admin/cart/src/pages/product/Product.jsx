import { Link, useLocation } from "react-router-dom";
import "./product.css";
import Chart from "../../components/Chart/Chart";
import { productData } from "../../../../data";
import PublishIcon from "@mui/icons-material/Publish";
import { useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { publicRequest } from "../../redux/requestMethods";

export default function Product() {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const [pStats, setPStats] = useState([]);
  const [imageSrc, setImageSrc] = useState("/images/default-product.jpg"); // Default fallback image
  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
  );

  const Months = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await publicRequest.get(`/orders/income?pid=${productId}`);
        const list = res.data.sort((a, b) => {
          return a._id - b._id;
        });
        list.map((item) => {
          setPStats((prev) => [
            ...prev,
            { name: Months[item._id - 1], Sales: item.total },
          ]);
        });
      } catch (err) {
        console.log(err);
      }
    };

    getStats();
  }, [Months, productId]);

  useEffect(() => {
    const checkImage = async () => {
      
        const backendImageUrl = `http://localhost:5000${product.img}`;
        try {
          const response = await fetch(backendImageUrl);
          if (response.ok) {
            setImageSrc(backendImageUrl); // Use backend image if it exists
          } 
          
        } catch (error) {
          setImageSrc(`/images/${product.img}`)
          
        }

    
    };

    checkImage();
  }, [product?.img]);

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={pStats} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={imageSrc} alt="" className="productInfoImg" />
            <span className="productName">{product?.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{product?._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">sales:</span>
              <span className="productInfoValue">5123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">in stock:</span>
              <span className="productInfoValue">{product?.inStock}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder={product?.title} />
            <label>Product Description</label>
            <input type="text" placeholder={product?.desc} />
            <label>Price</label>
            <input type="text" placeholder={product?.price} />
            <label>In Stock</label>
            <select name="inStock" id="idStock">
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src={imageSrc} alt="" className="productUploadImg" />
              <label>
                <PublishIcon />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
