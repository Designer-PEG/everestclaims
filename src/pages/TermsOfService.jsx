// src/pages/TermsOfService.jsx
import PolicyLayout from '../components/PolicyLayout';

const TermsOfService = () => {
  return (
    <PolicyLayout title="Terms of Service">
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">1. Acceptance of Terms</h2>
        <p className="text-gray-600">
          By accessing or using our services, you agree to be bound by these Terms. If you disagree, please do not use our services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">2. User Responsibilities</h2>
        <p className="text-gray-600 mb-3">You agree not to:</p>
        <ul className="list-disc pl-5 space-y-1 text-gray-600">
          <li>Use our services for any illegal purpose</li>
          <li>Violate any laws in your jurisdiction</li>
          <li>Attempt to gain unauthorized access to our systems</li>
          <li>Interfere with or disrupt the service</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">3. Intellectual Property</h2>
        <p className="text-gray-600">
          All content and trademarks on this service are property of their respective owners. 
          You may not use any content without express written permission.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">4. Limitation of Liability</h2>
        <p className="text-gray-600">
          We shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use of our services.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4 text-gray-800">5. Governing Law</h2>
        <p className="text-gray-600">
          These Terms shall be governed by the laws of [Your Country/State] without regard to its conflict of law provisions.
        </p>
        <p className="text-gray-500 text-sm mt-4">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </section>
    </PolicyLayout>
  );
};

export default TermsOfService;