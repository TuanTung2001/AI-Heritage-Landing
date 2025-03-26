import React from "react";

export default function PrivacyPolicyPage () {
  return (
    <section className="container py-4">
      <h2>Privacy Policy</h2>
      <p>
        At <strong>Nexcyra</strong>, we deeply value your trust and privacy. Our
        mission is to provide a safe, respectful, and secure space for
        preserving memories of your loved ones. This Privacy Policy explains how
        we collect, use, protect, and handle your personal data.
      </p>

      <h3>1. Information We Collect</h3>
      <p>
        To provide our services, we may collect the following types of
        information:
      </p>

      <ul>
        <li>
          <strong>🔹 Personal Information</strong>
          <ul>
            <li>
              Your name, email, and contact details when you sign up or reach
              out to us.
            </li>
            <li>
              Any personal details shared in your memory space (e.g., the names
              of loved ones, context around recordings).
            </li>
          </ul>
        </li>

        <li>
          <strong>🔹 Uploaded Content & Voice Data</strong>
          <ul>
            <li>
              Recordings, messages, and other uploaded media that you
              voluntarily provide for Nexcyra to process and structure into an
              interactive memory space.
            </li>
            <li>
              Metadata from recordings (e.g., timestamps, file formats) to
              optimize the experience.
            </li>
          </ul>
        </li>

        <li>
          <strong>🔹 Usage & Technical Data</strong>
          <ul>
            <li>
              Device and browser information to enhance user experience and
              troubleshoot technical issues.
            </li>
            <li>
              Interaction logs (non-sensitive) that help us improve response
              accuracy and optimize performance.
            </li>
          </ul>
        </li>
      </ul>

      <h3>2. How We Use Your Information</h3>
      <p>
        We use your data solely to provide and improve the Nexcyra experience.
        Specifically, we use it to:
      </p>
      <ul>
        <li>✔ Create and personalize your interactive memory space.</li>
        <li>
          ✔ Enhance and structure recordings to make interactions feel natural.
        </li>
        <li>
          ✔ Ensure security and privacy by restricting access to authorized
          users only.
        </li>
        <li>
          ✔ Improve service performance by analyzing anonymized usage trends.
        </li>
      </ul>

      <p>
        <strong>🚫 We DO NOT:</strong>
      </p>
      <ul>
        <li>Share your personal data or recordings with third parties.</li>
        <li>
          Use your data for marketing or advertising purposes without explicit
          consent.
        </li>
        <li>Generate AI responses that go beyond the content you provide.</li>
      </ul>

      <h3>3. Who Can Access Your Data?</h3>
      <ul>
        <li>
          Your Nexcyra memory space is private by default. Only you and those
          you explicitly invite can access it.
        </li>
        <li>
          You control who can access and interact with your loved one’s
          preserved voice.
        </li>
        <li>
          Nexcyra staff may access limited data only with your consent for
          customer support or service improvements.
        </li>
        <li>
          Legal compliance: We may share data only if legally required (e.g.,
          court orders, regulatory requests).
        </li>
      </ul>

      <h3>4. How We Protect Your Data</h3>
      <ul>
        <li>
          🔒 <strong>End-to-End Encryption</strong> – All stored recordings and
          messages are encrypted.
        </li>
        <li>
          🛡️ <strong>Strict Access Control</strong> – Only authorized users can
          access memory spaces.
        </li>
        <li>
          📍 <strong>Data Backup & Recovery</strong> – Ensuring your memories
          are not lost due to technical failures.
        </li>
      </ul>

      <h3>5. Can You Modify or Delete Your Data?</h3>
      <p>Yes. You are in full control of your data.</p>
      <ul>
        <li>
          ✔ <strong>Edit & Update:</strong> You can modify your memory space by
          adding or removing recordings at any time.
        </li>
        <li>
          ✔ <strong>Download Your Data:</strong> Request an export of your
          stored recordings whenever needed.
        </li>
        <li>
          ✔ <strong>Delete Your Data:</strong> You can request permanent
          deletion of your memory space, and we will remove all associated data
          from our servers.
        </li>
      </ul>

      <h3>6. What Happens If You Stop Using Nexcyra?</h3>
      <ul>
        <li>Your data remains securely stored unless you request deletion.</li>
        <li>You can reactivate access anytime without losing saved content.</li>
        <li>
          If you opt out permanently, we provide data export options before
          deletion.
        </li>
      </ul>

      <h3>7. Updates to This Privacy Policy</h3>
      <p>
        We may periodically update this policy as Nexcyra evolves. Any major
        changes will be communicated to you via email or on our website.
      </p>

      <h3>8. Contact Us</h3>
      <p>
        If you have any questions about this Privacy Policy or need assistance,
        please reach out:
      </p>
      <ul>
        <li>
          Email: <a href="mailto:hello@nexcyra.com">hello@nexcyra.com</a>
        </li>
        <li>
          Website:{" "}
          <a
            href="https://nexcyra.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nexcyra.com
          </a>
        </li>
      </ul>

      <p>
        <strong>
          Your memories are yours—we’re here to help you keep them safe.
        </strong>
      </p>
    </section>
  );
};