export type SideNavItem = {
    title: string;
    path: string;
    icon?: JSX.Element;
}

export type SummaryHeadItem = {
    title: string;
    icon?: string;
    body: string;
    note: string;
}

export type ComplaintItem = {
    description: string;
    icon?: JSX.Element;
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