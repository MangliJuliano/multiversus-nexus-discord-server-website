import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 text-gray-800">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-100 sm:text-5xl">
          Privacy Policy
        </h1>

        <h2 className="mt-8 text-2xl font-semibold text-gray-100">1. Information We Collect</h2>
        <p className="mt-4 text-lg leading-7 text-gray-300">
          We collect various types of information in connection with the operation
          of the Server:
        </p>

        <h3 className="mt-4 text-xl font-semibold text-gray-100">1.1 Personal Information</h3>
        <p className="mt-2 text-lg leading-7 text-gray-300">
          When you join the Server, we may collect personal information that you
          voluntarily provide to us, such as:
        </p>
        <ul className="mt-2 ml-8 list-disc text-lg leading-7 text-gray-300">
          <li>Usernames</li>
          <li>Profile information</li>
          <li>Email address (if provided)</li>
          <li>Other information you choose to provide</li>
        </ul>

        <h3 className="mt-4 text-xl font-semibold text-gray-100">1.2 Usage Data</h3>
        <p className="mt-2 text-lg leading-7 text-gray-300">
          We may also collect information automatically when you access or use the
          Server, including:
        </p>
        <ul className="mt-2 ml-8 list-disc text-lg leading-7 text-gray-300">
          <li>IP address</li>
          <li>Browser type</li>
          <li>Operating system</li>
          <li>Usage details (e.g., pages visited)</li>
          <li>Device information</li>
        </ul>

        <h2 className="mt-8 text-2xl font-semibold text-gray-100">2. Use of Information</h2>
        <p className="mt-4 text-lg leading-7 text-gray-300">
          The information we collect is used to:
        </p>
        <ul className="mt-2 ml-8 list-disc text-lg leading-7 text-gray-300">
          <li>Operate, maintain, and improve the Server</li>
          <li>Respond to your inquiries and provide support</li>
          <li>Communicate with you, including sending important notices</li>
          <li>Protect the security and integrity of the Server</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2 className="mt-8 text-2xl font-semibold text-gray-100">3. Data Security</h2>
        <p className="mt-4 text-lg leading-7 text-gray-300">
          We are committed to protecting your information and implement appropriate
          technical and organizational measures to safeguard it against unauthorized
          access, use, or disclosure.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-gray-100">4. Sharing of Information</h2>
        <p className="mt-4 text-lg leading-7 text-gray-300">
          We do not sell, trade, or otherwise transfer your personally identifiable
          information to outside parties. This does not include trusted third
          parties who assist us in operating the Server, conducting our business,
          or servicing you, as long as those parties agree to keep this information
          confidential and secure.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-gray-100">5. Your Choices and Rights</h2>
        <p className="mt-4 text-lg leading-7 text-gray-300">
          You have the right to:
        </p>
        <ul className="mt-2 ml-8 list-disc text-lg leading-7 text-gray-300">
          <li>Access and update your personal information</li>
          <li>Request deletion of your personal information</li>
          <li>Opt-out of receiving communications from us</li>
        </ul>
        <p className="mt-2 text-lg leading-7 text-gray-300">
          Please contact us at <span className="text-orange-500 hover:cursor-pointer hover:text-gray-200 duration-300">multiversusnexus.info@gmail.com</span> if you wish to exercise these rights.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-gray-100">6. Changes to This Privacy Policy</h2>
        <p className="mt-4 text-lg leading-7 text-gray-300">
          We may update this Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-gray-100">7. Contact Us</h2>
        <p className="mt-4 text-lg leading-7 text-gray-300">
          If you have any questions about this Privacy Policy, please contact us
          at <span className="text-orange-500 hover:cursor-pointer hover:text-gray-200 duration-300">multiversusnexus.info@gmail.com</span>.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
