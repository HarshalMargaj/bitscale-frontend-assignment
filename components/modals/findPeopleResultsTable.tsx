import FindPeopleEmptyState from "./findPeopleEmptyState";

const columns = [
	"NAME",
	"TITLE",
	"HEADLINE",
	"LINKEDIN URL",
	"COMPANY",
	"COMPANY URL",
	"COMPANY SIZE",
];

const FindPeopleResultsTable = () => {
	const isEmpty = true;

	return (
		<div className="flex flex-col h-full overflow-x-scroll scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
			<table className="w-full">
				<thead>
					<tr>
						{columns.map(col => (
							<th
								key={col}
								className="text-left px-4 py-3 text-xs font-semibold text-text-muted whitespace-nowrap bg-surface-muted h-12.5"
							>
								{col}
							</th>
						))}
					</tr>
				</thead>
			</table>
			{isEmpty ? (
				<div className="flex-1 flex items-center justify-center">
					<FindPeopleEmptyState />
				</div>
			) : (
				<table className="w-full">
					<tbody></tbody>
				</table>
			)}
		</div>
	);
};

export default FindPeopleResultsTable;
