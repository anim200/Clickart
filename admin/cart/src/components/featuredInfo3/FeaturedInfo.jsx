import "./featuredInfo.css";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useEffect, useState } from "react";
import { publicRequest } from "../../redux/requestMethods";

export default function FeaturedInfo() {
  const [income, setIncome] = useState([]);
  const [perc, setPerc] = useState(0);

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await publicRequest.get("orders/income");
        setIncome(res.data);
        if (res.data && res.data.length > 1) {
          const percentageChange = (res.data[1].total * 100) / res.data[0].total - 100;
          setPerc(percentageChange);
        } else {
          console.error("Insufficient data to calculate percentage");
        }
      } catch (error) {
        console.error("Error fetching income data:", error);
      }
    };
    getIncome();
  }, []);

  console.log(income[0]?.total || "Income data not loaded yet");

 
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">${income[0]?.total}</span>
          <span className="featuredMoneyRate">
            %{Math.floor(perc)|| "not enough info yet"}
            
            {perc !== 0 && perc !== null && perc !== undefined ? (
  perc < 0 ? (
    <ArrowDownwardIcon className="featuredIcon negative" />
  ) : (
    <ArrowUpwardIcon className="featuredIcon" />
  )
) : null}
            
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$4,415</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownwardIcon className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,225</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpwardIcon className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}