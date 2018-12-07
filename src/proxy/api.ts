const db = [
  {
    id: '1', title: 'cats', content: 'djkgsjdhgkjdhgkajdhf',
  },
  {
    id: '2', title: 'dogs', content: ' sd fsdfsdfsada sdfsad ',
  },
  {
    id: '3', title: 'parrots', content: 'djkgsjdh asdg asd fs as kjdhgkajdhf',
  },
  {
    id: '4', title: 'worms', content: 'djkgsjda ad fs dhgkjdhgkajdhf',
  },
  {
    id: '5', title: 'lizards', content: 'djkgs sd asd fjdhgkjdhgkajdhf',
  },
  {
    id: '6', title: 'cars', content: 'djkgsjdhgas dfas fsa dkjdhgkajdhf',
  },
]
export interface YouTubeVideo {
  id: string,
  content: string,
  title: string
}
export type YouTubeVideoInfo = Pick<YouTubeVideo, 'id' | 'title'>

interface ApiInterface {
  listVideos: () => YouTubeVideoInfo[]
  getVideoInfo: (id: string) => YouTubeVideoInfo
  getVideo: (id: string) => YouTubeVideo
}

class Api {
  public listVideos = () => db.map(({ id, title }) => ({ id, title }))
  public getVideoInfo = (id: string) => {
    console.log('getVideoInfo in API is called')

    const video = this.findVideo(id)
    const videoInfo = this.extractInfo(video)
    return videoInfo
  }
  public getVideo = (id: string) => {
    console.log('getVideo in API is called')
    return this.findVideo(id)
  }

  private findVideo = (id: string) => db.find((videoItem) => videoItem.id === id)
  private extractInfo = (video: YouTubeVideo) => ({ id: video.id, title: video.title })
}

export const apiProvider = new Api()
