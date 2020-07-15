import React from "react"
import { PageWrapper } from "../../../assets/styles/PageWrapper"
import { HeaderThree, HeaderTwo, ParagraphItem } from "../../_Shared/Layout/Layout"
import PageHeader from "../../_Shared/PageHeader/PageHeader"

export default function Terms () {
  return (
    <PageWrapper>
      <PageHeader text="Terms &amp; Conditions" />
      <HeaderTwo text={`Terms and Conditions ("Terms")`} />
      <ParagraphItem text={`Last updated: (${(new Date()).getFullYear()})`} />
      <ParagraphItem text={`Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the https://educonnections.ca website (the "Service") operated by Educonnections ("us", "we", or "our").`} />
      <ParagraphItem text="Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service." />
      <HeaderThree text="Links To Other Web Sites" />
      <ParagraphItem text="Our Service may contain links to third-party web sites or services that are not owned or controlled by Educonnections." />
      <ParagraphItem text="Educonnections has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that Educonnections shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services." />
      <HeaderThree text="Changes" />
      <ParagraphItem text="We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion." />
      <HeaderThree text="Contact Us" />
      <ParagraphItem text="If you have any questions about these Terms, please contact us." />
    </PageWrapper>
  )
}