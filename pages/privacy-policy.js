import Head from 'next/head';
import MetaTags from '../components/MetaTags';
import { metaData, privacy_policy_data } from '../constants/constants';

function privacy_policy() {
  return (
    <section>
      <Head>
        <title>Privacy Policy | Hcode Technologies </title>
        <MetaTags page={metaData.privacy_policy} />
      </Head>
      <div className="bg-blue-300">
        <div className="  pt-40 pb-32 new-container">
          <div className="text-center">
            <h1 className="font-semibold text-4xl">
              {privacy_policy_data.main_heading}
            </h1>
            <h5 className="text-lg font-medium pt-3 md:w-5/12 mx-auto">
              {privacy_policy_data.main_paragraph}
            </h5>
            <h6 className=" mt-3">
              This document was last updated on March 12, 2025
            </h6>
          </div>
        </div>
      </div>

      <div className="py-10 md:w-1/2 new-container">
        <div>
          <p>
            At HCode Technologies Pvt. Ltd., we respect your privacy and are
            committed to protecting your personal data. This Privacy Policy
            outlines how we collect, use, disclose, and safeguard your
            information when you visit our website{' '}
            <a href="/" className="text-primary font-semibold underline ml-1">
              {' '}
              https://hcode.tech/
            </a>
            .
          </p>
          <p>
            By using our website, you consent to the practices described in this
            policy.
          </p>
          <h2 className="text-3xl font-bold mt-10">
            1. Information We Collect
          </h2>
          <h3 className="text-xl font-bold mt-10">1.1 Personal Information</h3>

          <p className="mt-2 ">
            When you use our website, we may collect the following personal
            information:
            <ul className="list-disc list-inside">
              <li>
                <strong>Contact details</strong> (name, email address, phone
                number).
              </li>
              <li>
                <strong>Business details</strong> (company name, job title,
                address).
              </li>
              <li>
                <strong> Billing information </strong> (if applicable, such as
                payment details).
              </li>
            </ul>
          </p>
          <p className="mt-3">
            We may collect information from Users in a variety of ways,
            including, but not limited to, when Users visit our site, subscribe
            to the newsletter, and in connection with other activities,
            services, features, or resources we make available on our Site.
          </p>
        </div>
        {/*  */}
        <div>
          <h1 className="text-xl font-bold mt-10">
            1.2 Non-Personal Information
          </h1>

          <p className="mt-2 ">
            We may also collect non-personal information such as:
            <ul className="list-disc list-inside">
              <li>
                Your{' '}
                <strong>IP address, browser type, and operating system.</strong>
              </li>
              <li>
                Your <strong>usage data,</strong> including pages visited and
                interactions with our website.
              </li>
              <li>Cookies and tracking data (see Section 8 for details).</li>
            </ul>
          </p>
        </div>

        {/*  */}
        <div>
          <h1 className="text-3xl font-bold mt-10">
            2. How We Use Your Information
          </h1>
          <p className="mt-2 ">We use your data for the following purposes:</p>

          <ul className="list-disc list-inside">
            <li>
              To <strong>provide and manage services</strong> requested by you.
            </li>
            <li>
              To <strong>personalize</strong> your experience and improve our
              website.
            </li>
            <li>
              To <strong>process payments and transactions</strong>.
            </li>
            <li>
              To send you{' '}
              <strong>
                updates, promotional emails, and service notifications
              </strong>
              (you can opt out anytime).
            </li>
            <li>
              To <strong>respond to your inquiries and support requests</strong>
              .
            </li>
            <li>
              To <strong>comply with legal obligations</strong>.
            </li>
          </ul>
        </div>
        {/*  */}
        <div>
          <h2 className="text-3xl font-bold mt-10">
            3. Data Sharing and Disclosure
          </h2>
          <p className="mt-2 ">
            We do not sell, trade, or rent User's personal identification
            information to others. We may share generic aggregated demographic
            information not linked to any personal identification information
            regarding visitors and users with our business partners, trusted
            affiliates, and advertisers for the purposes outlined above. We may
            use third-party service providers to help us operate our business
            and the Site or administer activities on our behalf, such as sending
            out newsletters or surveys. However, we may share your data in the
            following cases:
            <ul className="list-disc list-inside">
              <li>
                <strong>With service providers</strong> that help us run our
                business (e.g., hosting providers, payment processors).
              </li>
              <li>
                <strong>To comply with legal obligations</strong> when required
                by law, regulation, or court order.
              </li>
              <li>
                <strong>To protect our rights</strong> and enforce our policies.
              </li>
            </ul>
          </p>
        </div>
        {/*  */}
        <div>
          <h2 className="text-3xl font-bold mt-10">4. Data Retention</h2>
          <p className="mt-2 ">
            We retain your data only as long as necessary for the purposes
            mentioned in this policy or as required by law. After this period,
            we securely delete or anonymize your data.
          </p>
        </div>
        {/*  */}
        <div>
          <h2 className="text-3xl font-bold mt-10">5. Your Rights</h2>
          <p className="mt-2 ">
            Under applicable laws, you have the following rights regarding your
            personal data:
            <ul className="list-disc list-inside">
              <li>
                <strong>Access and Correction:</strong> You can request access
                to or correction of your data.{' '}
              </li>
              <li>
                <strong>Deletion</strong> You can request the deletion of your
                personal data.
              </li>
              <li>
                <strong>Withdraw Consent:</strong> If processing is based on
                consent, you may withdraw it at any time.
              </li>
              <li>
                <strong>Opt-Out:</strong> You can opt out of receiving marketing
                emails by clicking the "Unsubscribe" link.
              </li>
            </ul>
          </p>
          <p>
            To exercise these rights, contact us at
            <a
              className="text-primary font-semibold underline ml-1"
              href="mailto:support@hcode.tech"
            >
              support@hcode.tech
            </a>
            .
          </p>
        </div>
        {/*  */}
        <div>
          <h2 className="text-3xl font-bold mt-10">6. Data Security</h2>
          <p className="mt-2 ">
            We adopt appropriate data collection, storage and processing
            practices and security measures to protect against unauthorized
            access, alteration, disclosure or destruction of your personal
            information, username, password, transaction information and data
            stored on our Site. However, no method of transmission over the
            internet is 100% secure, so we cannot guarantee absolute security.
          </p>
        </div>
        {/*  */}
        <div>
          <h1 className="text-3xl font-bold mt-10">
            7. Cookies and Tracking Technologies
          </h1>
          <p className="mt-2 ">{privacy_policy_data.web_browser_paragraph}</p>
          <p className="pt-3">
            We use cookies and similar tracking technologies to:
          </p>

          <ul className="list-disc list-inside">
            <li>Improve website performance.</li>
            <li>Personalize content based on user preferences.</li>
            <li>Analyze visitor behavior for website enhancements.</li>
          </ul>
        </div>
        {/*  */}
        <div>
          <h2 className="text-3xl font-bold mt-10">
            8. International Data Transfers
          </h2>
          <p className="mt-2 ">
            If your data is transferred outside India, we ensure it is protected
            under equivalent data protection standards.
          </p>
        </div>
        {/*  */}
        <div>
          <h2 className="text-3xl font-bold mt-10">9. Children's Privacy</h2>
          <p className="mt-2 ">
            Our website is{' '}
            <strong>not intended for children under 13 years of age</strong>. We
            do not knowingly collect personal information from minors. If you
            believe a child has provided us with personal data, please contact
            us to have it removed.
          </p>
        </div>

        {/*  */}
        <div>
          <h1 className="text-3xl font-bold mt-10">
            10. {privacy_policy_data.collected_information}
          </h1>
          <p className="mt-2 ">
            {privacy_policy_data.collected_information_paragraph}
            <ul className="list-disc list-inside">
              {privacy_policy_data.collected_information_points.map(
                (point, index) => (
                  <li key={index}>{point}</li>
                )
              )}
            </ul>
          </p>
        </div>

        {/*  */}
        <div>
          <h1 className="text-3xl font-bold mt-10">
            11. {privacy_policy_data.third_websites}
          </h1>
          <p className="mt-2 ">
            {privacy_policy_data.third_websites_paragarph}
          </p>
        </div>
        {/*  */}
        <div>
          <h1 className="text-3xl font-bold mt-10">
            12. {privacy_policy_data.change_privacy_policy}
          </h1>
          <p className="mt-2 ">
            {privacy_policy_data.change_privacy_policy_paragraph}
          </p>
        </div>
        {/*  */}
        <div>
          <h1 className="text-3xl font-bold mt-10">
            13. {privacy_policy_data.acceptance_terms}
          </h1>
          <p className="mt-2 ">
            {privacy_policy_data.acceptance_terms_paragarph}
          </p>
        </div>
        {/*  */}
        <div>
          <h1 className="text-3xl font-bold mt-10">
            14. Refund & Cancellation Policy
          </h1>
          <p className="mt-2 ">
            At HCode Technologies Pvt. Ltd., we strive to provide the best
            service possible. If you wish to request a refund, please note the
            following policy:
          </p>
          <ul className="list-disc my-2 px-3">
            <li>
              Refunds for eligible services/products will be processed within{' '}
              <strong>5-7 working days</strong> from the date of request
              approval.
            </li>
            <li>
              Refunds will be credited to the original payment method used for
              the transaction.
            </li>
            <li>
              For any cancellations, please contact our support team within 24
              hours of the purchase.
            </li>
            <li>
              Refund requests beyond the stipulated period may not be
              entertained.
            </li>
          </ul>
          <p>
            For any queries regarding refunds and cancellations, please reach
            out to us at
            <a
              className="text-primary font-semibold underline ml-1"
              href="mailto:support@hcode.tech"
            >
              support@hcode.tech
            </a>
            .
          </p>
        </div>
        {/*  */}
        <div>
          <h1 className="text-3xl font-bold mt-10">15. Contact Us</h1>
          <p className="mt-2 ">
            If you have any questions about this Privacy Policy, the practices
            of this site, or your dealings with this site, please contact us at:
            <p className="pt-4">
              <strong>HCode Technologies Pvt. Ltd.</strong>
            </p>
            <p>120/7th Milestone, NH-1, Karnal, Haryana - 132001</p>
            <p>Contact Number: +91-9876543210</p>
            <p>
              Email:{' '}
              <a
                className="text-primary font-semibold underline ml-1"
                href="mailto:support@hcode.tech"
              >
                support@hcode.tech
              </a>
            </p>
          </p>
        </div>
      </div>
    </section>
  );
}

export default privacy_policy;
