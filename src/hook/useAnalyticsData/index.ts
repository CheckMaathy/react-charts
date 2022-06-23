import { useContext } from "react";
import AnalyticsDataContext from "@context/AnalyticsData/indext";

const useAnalyticsData = () => {
    return useContext(AnalyticsDataContext);
};

export default useAnalyticsData;
