export interface PbjsBid {
    adId: string;
    bidderCode: string;
    cpm: number;
    width: number;
    height: number;
    creativeId?: string;
    currency?: string;
    [key: string]: unknown;
}

export interface RequestBidsParams {
    adUnitCodes: string[];
    timeout?: number;
    bidsBackHandler?: () => void;
}

export interface PbjsNamespace {
    que: Array<() => void>;
    onEvent: (eventName: string, callback: (bid: PbjsBid) => void) => void;
    requestBids: (params: RequestBidsParams) => void;
    getHighestCpmBids: (adUnitCode: string) => PbjsBid[];
    renderAd: (doc: Document, adId: string) => void;
    loadAndRenderAd: (code: string, iframe: HTMLIFrameElement) => void;
}

declare global {
    interface Window {
        pbjs?: PbjsNamespace;
    }
}
