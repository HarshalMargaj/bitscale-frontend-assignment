import DashboardHeader from "@/components/dashboard/dashboardHeader";
import LatestFromBitscale from "@/components/dashboard/latestFromBitscale";
import React from "react";

const page = () => {
	return (
		<div className="p-5 space-y-5">
			<DashboardHeader />
			<div>
				<LatestFromBitscale />
			</div>
		</div>
	);
};

export default page;
