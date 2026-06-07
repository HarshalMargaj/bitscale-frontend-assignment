import React from "react";
import FindPeopleResultsHeader from "./finePeopleResultsHeader";
import FindPeopleResultsTable from "./findPeopleResultsTable";

const RightPanel = () => {
	return (
		<div className="flex flex-col h-full overflow-hidden">
			<FindPeopleResultsHeader />
			<div className="flex-1 overflow-hidden p-2">
				<div
					className="h-full rounded-md overflow-hidden"
					style={{
						boxShadow:
							"0px 1px 2px -1px rgba(0,0,0,0.1), 0px 1px 3px 0px rgba(0,0,0,0.1)",
					}}
				>
					<FindPeopleResultsTable />
				</div>
			</div>
		</div>
	);
};

export default RightPanel;
