"use client";

import { Search, List } from "lucide-react";
import { useState } from "react";
import DashboardTable from "./dashboardTable";

const tabs = ["My Grids", "Starred"];

const DashboardTabs = () => {
	const [activeTab, setActiveTab] = useState("My Grids");
	const [search, setSearch] = useState("");

	return (
		<div>
			<div className="flex items-center justify-between ">
				<div className="flex items-center border-b border-border gap-2">
					{tabs.map(tab => (
						<button
							key={tab}
							onClick={() => setActiveTab(tab)}
							className={`px-4 py-3 text-sm font-medium cursor-pointer transition-colors
              ${
					activeTab === tab
						? "text-text-active border-b border-text-active -mb-px"
						: "text-text-muted hover:text-text-secondary"
				}`}
						>
							{tab}
						</button>
					))}
				</div>

				<div className="flex items-center gap-2 pb-2">
					<div className="flex items-center gap-2 bg-surface-subtle rounded-sm px-3 py-2 w-72 h-9">
						<Search
							size={14}
							className="text-text-muted shrink-0"
						/>
						<input
							type="text"
							placeholder="Search grids and workbooks..."
							value={search}
							onChange={e => setSearch(e.target.value)}
							className="bg-transparent text-xs text-text-secondary placeholder:text-text-muted placeholder:text-xs outline-none w-full"
						/>
					</div>
					<button className="p-2 w-8 h-8 rounded-full  bg-surface-subtle cursor-pointer">
						<List size={16} className="text-icon-secondary" />
					</button>
				</div>
			</div>
			{activeTab === "My Grids" && <DashboardTable />}
		</div>
	);
};

export default DashboardTabs;
