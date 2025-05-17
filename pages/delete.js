import React from "react";
import Head from "next/head";
import PageBanner from "../components/Common/PageBanner";

const DeleteAccount = () => {
  return (
    <>
      <Head>
      <title>Gyanoda™ | Delete Your Account</title>
      </Head>

      <PageBanner
        title="Delete Your Account"
        content="Follow these steps to delete your Gyanoda account and associated data"
      />

      <section className="delete-account-wrapper py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 p-5">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-6">Account Deletion Process</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-medium mb-3">Step 1: Request Deletion</h3>
                    <p className="text-gray-700">
                      Send an email to <a href="mailto:support@gyanoda.com" className="text-blue-600 hover:underline">support@gyanoda.com</a> with:
                    </p>
                    <ul className="list-disc ml-6 mt-2 text-gray-700">
                      <li>Subject line: "Account Deletion Request"</li>
                      <li>Your registered email address</li>
                      <li>Phone number associated with your account</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium mb-3">Step 2: Verification</h3>
                    <p className="text-gray-700">
                      We'll send a verification code to your registered email address to confirm your identity.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium mb-3">Step 3: Confirmation</h3>
                    <p className="text-gray-700">
                      Once verified, your account and associated data will be permanently deleted within 24 hours.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-xl font-medium mb-3">What Gets Deleted</h3>
                    <ul className="list-disc ml-6 text-gray-700">
                      <li>Account information (name, email, phone number)</li>
                      <li>Course progress and completion data</li>
                      <li>Payment history</li>
                      <li>Activity logs and preferences</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h3 className="text-xl font-medium mb-3">Important Notes</h3>
                    <ul className="list-disc ml-6 text-gray-700">
                      <li>Account deletion is permanent and cannot be undone</li>
                      <li>Active subscriptions will be cancelled automatically</li>
                      <li>Downloaded content should be backed up before deletion</li>
                      <li>Some data may be retained for legal compliance (up to 90 days)</li>
                    </ul>
                  </div>

                  <div className="mt-8">
                    <p className="text-gray-700">
                      Need help? Contact our support team:
                      <br />
                      Email: support@gyanoda.com
                      <br />
                      Phone: +91 907 396 3347
                      <br />
                      Hours: Monday to Friday, 9:00 AM to 6:00 PM IST
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DeleteAccount;