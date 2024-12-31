import Chart from "../../components/Chart/Chart";
import FeaturedInfo from "../../components/featuredInfo3/FeaturedInfo";

import "./home.css";
import { userData } from "../../../../data";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useEffect, useMemo, useState } from "react";
import { publicRequest } from "../../redux/requestMethods";

export default function Home() {
  const [userStats,setUserStats]=useState([]);
  const Months = useMemo(() => [
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
  ], []);
  useEffect(()=>{
    const getStats = async () =>{
      try{
        const res = await publicRequest.get("/users/stats")
        res.data.map(item=>{
          setUserStats(prev=>[
            ...prev,
            {name:Months[item._id-1],"Active User":item.total}


          ])
        })

      }catch{
        console.log("error")

      }
    
    }
    getStats();

  },[Months])
  console.log(userStats)
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStats} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}
