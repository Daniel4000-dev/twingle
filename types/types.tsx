export type SideNavItem = {
    title: string;
    path: string;
    icon?: JSX.Element;
}

export type SummaryHeadItem = {
    title: string;
    body: string;
    note: string;
}

export type ComplaintItem = {
    description: string;
    icon?: JSX.Element;
    amount: string;
    time: string;
}