import {
	LayoutDashboard,
	BookOpen,
	RefreshCcw,
	Library,
	Settings,
} from "lucide-react";

export const sidebarNav = [
	{
		section: "Home",
		items: [
			{
				id: 1,
				name: "My Dashboard",
				icon: LayoutDashboard,
				active: true,
				badge: null,
			},
			{
				id: 2,
				name: "Playbooks",
				icon: BookOpen,
				active: false,
				badge: "rocket", // the yellow rocket badge
			},
			{
				id: 3,
				name: "Integrations",
				icon: RefreshCcw,
				active: false,
				badge: null,
			},
		],
	},
	{
		section: "Other",
		items: [
			{
				id: 4,
				name: "Documentation",
				icon: Library,
				active: false,
				badge: null,
			},
			{
				id: 5,
				name: "Settings",
				icon: Settings,
				active: false,
				badge: null,
			},
		],
	},
];
