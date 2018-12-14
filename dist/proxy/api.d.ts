export interface YouTubeVideo {
    id: string;
    content: string;
    title: string;
}
export declare type YouTubeVideoInfo = Pick<YouTubeVideo, 'id' | 'title'>;
declare class Api {
    listVideos: () => {
        id: string;
        title: string;
    }[];
    getVideoInfo: (id: string) => {
        id: string;
        title: string;
    };
    getVideo: (id: string) => {
        id: string;
        title: string;
        content: string;
    };
    private findVideo;
    private extractInfo;
}
export declare const apiProvider: Api;
export {};
