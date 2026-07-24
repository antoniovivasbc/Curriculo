export type ExperienceType = {
    title: string;
    icon: string;
    experiences: ExperienceItemType[];
}

export type ExperienceItemType = {
    dateFrom: string;
    dateTo: string;
    company: string;
    hole: string;
    descriptions: string[];
}