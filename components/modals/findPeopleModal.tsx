import { filterData } from "@/constants/filterData";
import React from "react";
import FilterAccordion from "./filterAccordian";
import Button from "../ui/button";
import { ChevronDown, Eye, FileSearchCorner } from "lucide-react";
import RightPanel from "./rightPanel";

const findPeopleModal = () => {
	return (
		<div className="flex h-full gap-5 overflow-hidden">
			<div className="flex flex-col space-y-6">
				<div className="flex items-center justify-between w-79.75">
					<h2 className="text-[18px] font-extrabold text-text-primary">
						Find People
					</h2>

					<div className="flex items-center gap-1 text-xs text-text-heading border border-border rounded-md px-2.5 py-0.5  cursor-pointer font-medium h-5.5 bg-surface-subtle">
						<ChevronDown size={12} />
						Saved Search
					</div>
				</div>

				<div className="space-y-6 flex flex-col justify-between h-full">
					<div className="w-79.75">
						{filterData.map(filter => (
							<FilterAccordion
								key={filter.id}
								icon={filter.icon}
								title={filter.title}
								placeholder={filter.placeholder}
								defaultOpen={filter.defaultOpen}
								showChevron={filter.showChevron}
							/>
						))}
					</div>
					<div className="flex items-center gap-4">
						<Button
							variant="ghost"
							className="rounded-md h-8.5 text-xs font-medium"
						>
							<FileSearchCorner size={16} />
							Save Search
						</Button>
						<Button
							variant="solid"
							className="rounded-md text-xs font-medium w-44.5 flex items-center justify-center"
						>
							<Eye size={16} />
							Preview Result
						</Button>
					</div>
				</div>
			</div>
			<div className="flex-1 min-w-0 ">
				<RightPanel />
			</div>
		</div>
	);
};

export default findPeopleModal;
