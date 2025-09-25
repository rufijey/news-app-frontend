export interface PbjsBid {
    adUnitCode?: string;
    bidderCode?: string;
    cpm?: number;
    width?: number;
    height?: number;
}

export interface PrebidEvent {
    event: string;
    adUnitCode?: string;
    bidderCode?: string;
    info?: string;
    id: string;
}
