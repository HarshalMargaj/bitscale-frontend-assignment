import { filterData } from "@/constants/filterData";
import React from "react";
import FilterAccordion from "./filterAccordian";
import Button from "../ui/button";
import { Eye, FileSearchCorner } from "lucide-react";

const findPeopleModal = () => {
	return (
		<div className="space-y-6">
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
	);
};

export default findPeopleModal;
