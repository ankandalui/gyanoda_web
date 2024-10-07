import React from "react";
import Head from "next/head";
import PageBanner from "../components/Common/PageBanner";

const Section = ({ title, content }) => (
  <div className="mb-8 p-5 ">
    <h2 className="text-2xl font-semibold mb-4">{title}</h2>
    <div
      className="text-gray-700"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  </div>
);

export default function TermsAndConditions() {
  return (
    <>
      <Head>
        <title>Terms and Conditions - Gyanoda</title>
      </Head>

      <PageBanner
        title="Terms and Conditions"
        content="Please read these terms and conditions carefully before using our services."
      />

      <section className="terms-and-conditions-wrapper py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Section
              title="Platform Terms and Conditions"
              content={`
                <p>Our website provides Users with access to compiled educational information and related sources. Such information is provided on an As Is basis and We assume no liability for the accuracy or completeness or use or non-obsolescence of such information. We shall not be liable to update or ensure continuity of such information contained on the Website. We would not be responsible for any errors, which might appear in such information, which is compiled from third party sources or for any unavailability of such information. That any modification or change in facts may occur and shall be the responsibility of the third parties involved to provide necessary methods or answers.</p>
              `}
            />

            <Section
              title="User Terms & Conditions"
              content={`
                <p>One user upon acceptance and agreeing to the terms and conditions herein below shall accept and be bound with the terms and conditions as set forth and any violation of the same shall be equivocally treated as breach of contract herein.</p>
                <p>That the user shall by validating his phone number and email and shall register within the website to avail the necessary educational information and materials available, upon paying the fees as admissible through the Company.</p>
                <p>That the User upon non satisfaction or other clauses may ask for any refund and that no refund system is available herein. That no compensation or money back is available with the platform and that no such claim shall be entertained.</p>
                <p>Users cannot log in as educators or third parties or other fake identity or multiple accounts and cannot engage in any business activities using the platform.</p>
                <p>The Gyanoda will not call any user and ask for an OTP. Users are advised not to share their personal details with anyone on the platform. That as per the mechanism of software as held by the company the user ID is mapped with the phone number but not the phone. So, if a user loses their phone but still recovers the SIM, they can log in with the same ID. If unable to recover the SIM, the user has to register again.</p>
              `}
            />

            <Section
              title="Proprietary Information"
              content={`
                <p>That the user once creates the website cannot share his or her ID with any other users. If found otherwise, legal action will be taken. That all information, content, material, trademarks, services marks, trade names, and trade secrets including but not limited to the software, text, images, graphics, video, script and audio, contained in the Application, Website, Services and products are proprietary property of the Company ("Proprietary Information"). That if any user or otherwise is found monetizing upon the contents and materials within the Website then the same shall be held punishable under the breach of contract vide Indian Contract Act,1872 and relevant criminal provisions shall apply.</p>
                <p>No Proprietary Information may be copied, downloaded, reproduced, modified, republished, uploaded, posted, transmitted or distributed in any way without obtaining prior written permission from the Company and nothing on this Application or Website or Services shall be or products deemed to confer a license of or any other right, interest or title to or in any of the intellectual property rights belonging to the Company, to the User. Users are strictly prohibited from creating and publicly sharing any videos generated using AI technology that may cause harm, misinformation, or any form of disturbance. Violations may lead to legal consequences. Recording of the videos is not permissible on this platform, and recording or causing duplicate profiles to circulate the exclusive contents in a public domain shall be treated as breach of contract and appropriate damages and compensation shall be claimed.</p>
              `}
            />

            <Section
              title="Privacy Policy"
              content={`
                <p>At Sandipan Das (Officially Gyanoda will release Soon), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our services.</p>
                <h3 class="text-xl font-semibold mt-4 mb-2">Information We Collect:</h3>
                <p>We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support. This may include your name, email address, phone number, and payment information.</p>
                <h3 class="text-xl font-semibold mt-4 mb-2">How We Use Your Information:</h3>
                <p>We use your information to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and respond to your comments and questions.</p>
                <h3 class="text-xl font-semibold mt-4 mb-2">Data Security:</h3>
                <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage.</p>
                <h3 class="text-xl font-semibold mt-4 mb-2">Your Rights:</h3>
                <p>You have the right to access, correct, or delete your personal information. If you wish to exercise these rights, please contact us using the information provided in our Contact Us section.</p>
                <h3 class="text-xl font-semibold mt-4 mb-2">Changes to This Policy:</h3>
                <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
              `}
            />

            <Section
              title="Educator Terms & Conditions"
              content={`
                <p>Once the educator enters into the agreement with the Gyanoda then they are bound by the rules and agreement as made between the parties. That the educational material prepared in any medium/by script or by video is and shall be made by the educator upon consent and acceptance with the terms as laid by Gyanoda. Once educator uploads their content to our platform, then the Gyanoda team has the right to use that video for any future reference. That all videos and materials curated and created are as per the remuneration paid to educator to conclusively shoot and send the videos to the Gyanoda. That educator shall be bound the provisions of Copyright Act,1872 and the relevant amendment provisions.</p>
                <p>The Gyanoda being the sole owner and proprietor of the contents shall have the absolute right to remove or delete videos of educators if the content is not relevant or good.</p>
                <p>The Educators shall be bound to share their original videos; they cannot copy content from other websites, for example, using content from platforms like "XYZ Learning/Academy/Platform or any app."</p>
                <p>That the Educators cannot use any rough language/abusive language/behaviour dressing sense or engage in inappropriate behaviour with the users/ students while clearing doubts.</p>
                <p>Educators and the Gyanoda team will mutually decide on the pricing for the content. Educators cannot charge exorbitant prices from users. They shall be bound by the monetary aspects as per the agreement.</p>
              `}
            />

            <Section
              title="Refund and Cancellation Policy"
              content={`
                <p>At Gyanoda, we strive to provide high-quality educational content and services. However, we understand that there may be instances where a refund is warranted.</p>
                <h3 class="text-xl font-semibold mt-4 mb-2">Refund Eligibility:</h3>
                <p>Refunds may be considered on a case-by-case basis within 7 days of purchase if technical issues prevent access to the content.</p>
                <h3 class="text-xl font-semibold mt-4 mb-2">Refund Process:</h3>
                <p>To request a refund, please contact our support team with your order details and reason for the refund. We will review your request and respond within 3 business days.</p>
                <h3 class="text-xl font-semibold mt-4 mb-2">Refund Timeline:</h3>
                <p>If a refund is approved, it will be processed within 5-7 working days. The refund will be credited back to the original payment method used for the purchase.</p>
                <h3 class="text-xl font-semibold mt-4 mb-2">Cancellations:</h3>
                <p>We do not currently offer cancellations for our services. All purchases are final and non-refundable unless otherwise stated in our refund policy above. Please carefully review the service details before making a purchase.</p>
              `}
            />

            <Section
              title="Contact Us"
              content={`
                <p>We're here to help! If you have any questions, concerns, or feedback, please don't hesitate to reach out to us using the following contact information:</p>
                <p><strong>Email:</strong> support@gyanoda.com</p>
                <p><strong>Phone:</strong> +91 907 396 3347</p>
                <p><strong>Operating Hours:</strong> Monday to Friday, 9:00 AM to 6:00 PM IST</p>
                <p><strong>Address:</strong><br>
                StudyBloom 24<br>
                218 Basudevpur Roas<br>
                Saratpally Shyamnagar, North 24 PGS 743127<br>
                West Bengal, India</p>
              `}
            />
          </div>
        </div>
      </section>
    </>
  );
}
