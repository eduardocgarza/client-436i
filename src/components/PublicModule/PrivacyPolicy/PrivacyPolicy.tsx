import React from "react"
import { PageWrapper } from "../../../assets/styles/PageWrapper"
import {
  HeaderThree,
  HeaderTwo,
  ParagraphItem,
} from "../../_Shared/Layout/Layout"
import PageHeader from "../../_Shared/PageHeader/PageHeader"

export default function PrivacyPolicy() {
  return (
    <PageWrapper>
      <PageHeader text="Privacy Policy" />
      <HeaderTwo text="Privacy Policy" />
      <ParagraphItem text={`Last updated: (${new Date().getFullYear()})`} />
      <ParagraphItem
        text={`Educonnections ("us", "we", or "our") operates https://educonnections.ca (the "Site"). This page informs you of our policies regarding the collection, use and disclosure of Personal Information we receive from users of the Site.`}
      />
      <ParagraphItem text="We use your Personal Information only for providing and improving the Site. By using the Site, you agree to the collection and use of information in accordance with this policy." />
      <HeaderThree text="Information Collection And Use" />
      <ParagraphItem
        text={`While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to your name ("Personal Information").`}
      />
      <HeaderThree text="Log Data" />
      <ParagraphItem
        text={`Like many site operators, we collect information that your browser sends whenever you visit our Site ("Log Data").`}
      />
      <ParagraphItem
        text={`This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages and other statistics.`}
      />
      <ParagraphItem
        text={`In addition, we may use third party services such as Google Analytics that collect, monitor and analyze this …`}
      />
      <ParagraphItem
        text={`The Log Data section is for businesses that use analytics or tracking services in websites or apps, like Google Analytics. For the full disclosure section, create your own Privacy Policy.`}
      />
      <HeaderThree text="Communications" />
      <ParagraphItem
        text={`We may use your Personal Information to contact you with newsletters, marketing or promotional materials and other information that ...`}
      />
      <ParagraphItem
        text={`The Communications section is for businesses that may contact users via email (email newsletters) or other methods. For the full disclosure section, create your own Privacy Policy.`}
      />
      <HeaderThree text="Cookies" />
      <ParagraphItem
        text={`Cookies are files with small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer's hard drive.`}
      />
      <ParagraphItem
        text={`Like many sites, we use "cookies" to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site.`}
      />
      <HeaderThree text="Security" />
      <ParagraphItem
        text={`The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.`}
      />
      <HeaderThree text="Changes To This Privacy Policy" />
      <ParagraphItem
        text={`This Privacy Policy is effective as of (${new Date().getFullYear()}) and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.`}
      />
      <ParagraphItem
        text={`We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically. Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.`}
      />
      <ParagraphItem
        text={`If we make any material changes to this Privacy Policy, we will notify you either through the email address you have provided us, or by placing a prominent notice on our website.`}
      />
      <HeaderThree text="Contact Us" />
      <ParagraphItem
        text={`If you have any questions about this Privacy Policy, please contact us.`}
      />
    </PageWrapper>
  )
}
