// types/tableData.ts

export type EditedBy = {
	name: string;
	avatar: string;
};

export type TableRow = {
	id: number;
	name: string;
	iconType: "single" | "multi";
	icon: string | null;
	icons: string[] | null;
	starred: boolean;
	isGroup: boolean;
	editedBy: EditedBy;
	lastEdited: string;
};
