import FacebookIcon from "../../../../assets/icons/facebook.png"
import FacebookDisableIcon from "../../../../assets/icons/facebook-gray.jpg"
import InstagramIcon from "../../../../assets/icons/instagram.jpg"
import InstagramDisableIcon from "../../../../assets/icons/instagram-gray.png"
import SpotifyIcon from "../../../../assets/icons/spotify.png"
import SpotifyDisableIcon from "../../../../assets/icons/spotify-gray.png"

export class IntegrationIcon {
  regular: string
  disable: string

  constructor (regular: string, disable: string) {
    this.regular = regular
    this.disable = disable
  }
}

export const IFacebook = new IntegrationIcon (FacebookIcon, FacebookDisableIcon)
export const IInstagram = new IntegrationIcon (InstagramIcon, InstagramDisableIcon)
export const ISpotify = new IntegrationIcon (SpotifyIcon, SpotifyDisableIcon)