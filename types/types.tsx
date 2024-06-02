import { StaticImageData } from "@/node_modules/next/image";

export type SideNavItem = {
    title: string;
    path: string;
    icon?: JSX.Element;
}

export type SummaryHeadItem = {
    title: string;
    icon?: StaticImageData;
    body: string;
    note: string;
}

export type ComplaintItem = {
    description: string;
    icon?: StaticImageData;
    amount: string;
    time: string;
}

export type DisputeItem = {
    name: string;
    mail: string;
    body: string;
    date: string;
    time: string;
}