import { apiProvider, YouTubeVideo, YouTubeVideoInfo } from './api'

interface ThirdPartyYouTubeLib {
  listVideos: () => YouTubeVideoInfo[]
  getVideoInfo: (id: string) => YouTubeVideoInfo
  downloadVideo: (id: string) => YouTubeVideo
}

class ThirdPartyYouTubeClass implements ThirdPartyYouTubeLib {

  public listVideos = () => apiProvider.listVideos()
  public getVideoInfo = (id: string) => apiProvider.getVideoInfo(id)
  public downloadVideo = (id: string) => apiProvider.getVideo(id)
}

class CachedYoutubeClass implements ThirdPartyYouTubeLib {
  private service: ThirdPartyYouTubeLib
  private videoInfoCache: YouTubeVideoInfo[] = []
  private videoCache: YouTubeVideo[] = []
  private needReset: boolean

  constructor(service: ThirdPartyYouTubeLib) {
    this.service = service
  }

  public listVideos = () => {
    return this.service.listVideos()
  }

  public getVideoInfo = (id: string) => {
    const cachedVideoInfo = this.findCachedVideoInfo(id)
    if (!cachedVideoInfo || this.needReset) {
      const videoInfo = this.service.getVideoInfo(id)
      this.videoInfoCache.push(videoInfo)
      return videoInfo
    }
    return cachedVideoInfo
  }
  public downloadVideo = (id: string) => {
    const cachedVideo = this.findCachedVideo(id)

    if (!cachedVideo || this.needReset) {
      const video = this.service.downloadVideo(id)
      this.videoCache.push(video)
      return video
    }
    return cachedVideo
  }

  private findCachedVideoInfo = (id) => this.videoInfoCache.find((videoInfo) => videoInfo.id === id)
  private findCachedVideo = (id) => this.videoCache.find((video) => video.id === id)

}

export class Application {
  public run() {
    const youTubeService = new ThirdPartyYouTubeClass()
    const youTubeProxy = new CachedYoutubeClass(youTubeService)
    console.log(youTubeProxy.downloadVideo('1'))
    console.log(youTubeProxy.downloadVideo('1'))
  }
}
