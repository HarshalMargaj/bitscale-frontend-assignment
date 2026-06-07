import Image from "next/image";

const FindPeopleEmptyState = () => {
	return (
		<div className="flex flex-col items-center justify-center h-full gap-4 py-8">
			<Image
				src="/OBJECTS.png"
				alt="empty state"
				width={200}
				height={200}
			/>
			<p className="text-xs font-medium text-text-placeholder text-center leading-6">
				Start your Company search , preview, and import companies <br />
				for enrichment by applying any filter in the left panel. <br />
				OR <br />
				Import companies from saved Search.
			</p>
		</div>
	);
};

export default FindPeopleEmptyState;
