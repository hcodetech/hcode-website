import Head from 'next/head';

function CancellationPolicy() {
  return (
    <section>
      <Head>
        <title>Cancellation Policy | Hcode Technologies</title>
        <meta
          name="description"
          content="Cancellation policy for services provided by HCode Technologies Pvt. Ltd."
        />
      </Head>
      <div className="bg-blue-300">
        <div className="pt-40 pb-32 new-container">
          <div className="text-center">
            <h1 className="font-semibold text-4xl">Cancellation Policy</h1>
            <h5 className="text-lg font-medium pt-3 md:w-5/12 mx-auto">
              Guidelines for cancelling service engagements with Hcode
              Technologies
            </h5>
            <h6 className="mt-3">
              This document was last updated on May 6, 2026
            </h6>
          </div>
        </div>
      </div>

      <div className="py-10 md:w-1/2 new-container">
        <div>
          <p>
            At HCode Technologies Pvt. Ltd., we understand that circumstances
            may change. This Cancellation Policy outlines the terms and
            conditions for cancelling services purchased through our website{' '}
            <a href="/" className="text-primary font-semibold underline ml-1">
              https://hcode.tech/
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold mt-10">
            1. Cancellation Window
          </h2>
          <p className="mt-2">
            You may request cancellation of a service engagement by notifying
            us at least <strong>24 hours</strong> before the scheduled
            commencement of work. Cancellation requests made after work has
            commenced will be subject to the terms outlined below.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold mt-10">
            2. Cancellation Before Work Begins
          </h2>
          <p className="mt-2">
            If you cancel a service before any work has been initiated:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>
              You will receive a <strong>full refund</strong> of any payments
              made.
            </li>
            <li>
              The refund will be processed within{' '}
              <strong>5-7 working days</strong> to the original payment method.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-bold mt-10">
            3. Cancellation After Work Has Started
          </h2>
          <p className="mt-2">
            If work on the project has already begun at the time of
            cancellation:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>
              A <strong>partial refund</strong> may be issued based on the
              proportion of work completed and resources expended.
            </li>
            <li>
              Any third-party costs already incurred (such as domain
              registration, hosting, licenses, or stock assets) are{' '}
              <strong>non-refundable</strong>.
            </li>
            <li>
              Completed deliverables up to the point of cancellation will be
              handed over to the client.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-bold mt-10">
            4. Cancellation After Deliverable Approval
          </h2>
          <p className="mt-2">
            Once deliverables have been submitted and approved by the client, or
            the service has been fully rendered, cancellation is{' '}
            <strong>not applicable</strong> and no refund will be issued.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold mt-10">
            5. How to Request a Cancellation
          </h2>
          <p className="mt-2">
            To request a cancellation, please send an email to{' '}
            <a
              className="text-primary font-semibold underline"
              href="mailto:support@hcode.tech"
            >
              support@hcode.tech
            </a>{' '}
            with the following details:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>Your full name and contact information.</li>
            <li>Invoice number or project reference.</li>
            <li>Reason for cancellation.</li>
          </ul>
          <p className="mt-2">
            Our team will acknowledge your cancellation request within{' '}
            <strong>2 business days</strong> and process it accordingly.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold mt-10">
            6. Cancellation by Hcode Technologies
          </h2>
          <p className="mt-2">
            HCode Technologies reserves the right to cancel a service
            engagement under the following circumstances:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>Non-payment or delayed payment beyond the agreed terms.</li>
            <li>
              Breach of the terms of service or agreed-upon project scope by the
              client.
            </li>
            <li>
              Requests that violate applicable laws, regulations, or ethical
              standards.
            </li>
          </ul>
          <p className="mt-2">
            In such cases, any refund will be determined based on the work
            completed and costs incurred up to the point of cancellation.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold mt-10">
            7. Modifications to This Policy
          </h2>
          <p className="mt-2">
            HCode Technologies reserves the right to update or modify this
            Cancellation Policy at any time. Changes will be posted on this page
            with an updated revision date. Continued use of our services after
            any changes constitutes your acceptance of the updated policy.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold mt-10">8. Contact Us</h2>
          <p className="mt-2">
            If you have any questions about this Cancellation Policy, please
            contact us at:
          </p>
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
        </div>
      </div>
    </section>
  );
}

export default CancellationPolicy;
