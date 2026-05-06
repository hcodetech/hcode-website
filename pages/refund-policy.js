import Head from 'next/head';

function RefundPolicy() {
  return (
    <section>
      <Head>
        <title>Refund Policy | Hcode Technologies</title>
        <meta
          name="description"
          content="Refund policy for services provided by HCode Technologies Pvt. Ltd."
        />
      </Head>
      <div className="bg-blue-300">
        <div className="pt-40 pb-32 new-container">
          <div className="text-center">
            <h1 className="font-semibold text-4xl">Refund Policy</h1>
            <h5 className="text-lg font-medium pt-3 md:w-5/12 mx-auto">
              Our commitment to fair and transparent refund practices
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
            At HCode Technologies Pvt. Ltd., we are committed to delivering
            high-quality services. This Refund Policy outlines the conditions
            under which refunds may be issued for services purchased through our
            website{' '}
            <a href="/" className="text-primary font-semibold underline ml-1">
              https://hcode.tech/
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold mt-10">1. Refund Eligibility</h2>
          <p className="mt-2">
            Refund eligibility depends on the stage of service delivery:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>
              <strong>Full Refund:</strong> If the service engagement has not yet
              commenced and no work has been initiated, you are eligible for a
              full refund of the amount paid.
            </li>
            <li>
              <strong>Partial Refund:</strong> If work is currently in progress,
              a partial refund may be issued based on the percentage of work
              completed and resources already utilized.
            </li>
            <li>
              <strong>No Refund:</strong> Once deliverables have been submitted
              and approved by the client, or the service has been fully
              rendered, no refund will be applicable.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-bold mt-10">
            2. Non-Refundable Items
          </h2>
          <p className="mt-2">
            The following charges are non-refundable under any circumstances:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>
              Third-party costs including domain registration, hosting fees,
              SSL certificates, stock images, plugins, or software licenses
              purchased on behalf of the client.
            </li>
            <li>
              Completed custom development work, design assets, or any
              deliverable that has already been handed over.
            </li>
            <li>
              Consultation fees for advisory or professional services already
              rendered.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-bold mt-10">
            3. How to Request a Refund
          </h2>
          <p className="mt-2">
            To request a refund, please email us at{' '}
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
            <li>Invoice number or transaction reference.</li>
            <li>Reason for the refund request.</li>
            <li>Any supporting documentation, if applicable.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-bold mt-10">
            4. Refund Review Process
          </h2>
          <p className="mt-2">
            All refund requests are reviewed on a case-by-case basis. Our team
            will acknowledge your request within{' '}
            <strong>3 business days</strong> and provide a resolution within{' '}
            <strong>7 business days</strong> of acknowledgement. We may contact
            you for additional information during the review.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold mt-10">
            5. Refund Processing Timeline
          </h2>
          <p className="mt-2">
            Once a refund is approved:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>
              Refunds will be processed within{' '}
              <strong>5-7 working days</strong> from the date of approval.
            </li>
            <li>
              The refund will be credited to the{' '}
              <strong>original payment method</strong> used for the transaction.
            </li>
            <li>
              Bank processing times may vary; please allow additional time for
              the amount to reflect in your account.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-bold mt-10">
            6. Dispute Resolution
          </h2>
          <p className="mt-2">
            We encourage clients to reach out to us directly before initiating
            any payment dispute. Our team is committed to resolving concerns
            amicably. If you are unsatisfied with any aspect of our service,
            please contact us and we will work with you to find a fair
            resolution, which may include revisions or adjustments to the scope
            of work.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold mt-10">7. Contact Us</h2>
          <p className="mt-2">
            If you have any questions about this Refund Policy, please contact
            us at:
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

export default RefundPolicy;
