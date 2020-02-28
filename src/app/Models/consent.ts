export interface Consent {
    id: number;
    name: string;
    email: string;
    receiveNewsletter: boolean;
    beShownTargetedAds: boolean;
    contributeToAnonymousVisitStatistics: boolean;
}