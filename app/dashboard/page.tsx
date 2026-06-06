import DashboardHeader from "@/components/dashboard/dashboardHeader";
import LatestFromBitscale from "@/components/dashboard/latestFromBitscale";
import ProductDemoCard from "@/components/dashboard/productDemoCard";
import React from "react";

const page = () => {
	return (
		<div className="p-5 space-y-5">
			<DashboardHeader />
			<div className="flex items-center gap-6">
				<div className="flex-1">
					<LatestFromBitscale />
				</div>
				<div className="flex-1">
					<ProductDemoCard />
				</div>
			</div>
		</div>
	);
};

export default page;
