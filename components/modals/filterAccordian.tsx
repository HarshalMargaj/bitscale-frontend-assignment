"use client";

import { ChevronDown, Search } from "lucide-react";
import { useState } from "react";

interface FilterAccordionProps {
	icon: React.ElementType;
	title: string;
	placeholder: string;
	defaultOpen?: boolean;
	showChevron?: boolean;
}

const FilterAccordion = ({
	icon: Icon,
	title,
	placeholder,
	defaultOpen = false,
	showChevron = true,
}: FilterAccordionProps) => {
	const [isOpen, setIsOpen] = useState(defaultOpen);

	return (
		<div className="border-b border-border py-3 flex flex-col gap-2">
			<div
				className="flex items-center justify-between cursor-pointer"
				onClick={() => showChevron && setIsOpen(!isOpen)}
			>
				<div className="flex items-center gap-2">
					<Icon size={15} className="text-icon-primary shrink-0" />
					<span className="text-sm font-semibold text-text-heading">
						{title}
					</span>
				</div>
				{showChevron && (
					<ChevronDown
						size={16}
						className={`text-icon-primary transition-transform duration-200 ${
							isOpen ? "rotate-180" : ""
						}`}
					/>
				)}
			</div>

			{isOpen ? (
				<div className="flex items-center gap-2">
					<Search size={12} className="text-text-muted shrink-0" />
					<input
						type="text"
						placeholder={placeholder}
						className="text-sm font-normal text-text-muted outline-none w-full placeholder:text-text-muted"
					/>
				</div>
			) : (
				<p className="text-xs font-normal text-text-muted">
					{placeholder}
				</p>
			)}
		</div>
	);
};

export default FilterAccordion;
