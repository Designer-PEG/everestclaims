// src/pages/PrivacyPolicy.jsx
import PolicyLayout from '../components/PolicyLayout';

const PrivacyPolicy = () => {
  return (
    <PolicyLayout title="Privacy Policy">
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">1. Information Collection</h2>
        <p className="text-gray-600 mb-3">
          We collect information to provide better services to all our users. The types of information we collect include:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-600">
          <li>Personal information you provide (name, email, phone number)</li>
          <li>Usage data and service analytics</li>
          <li>Device and browser information</li>
          <li>Cookies and similar tracking technologies</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">2. Use of Information</h2>
        <p className="text-gray-600 mb-3">We use the collected information for:</p>
        <ul className="list-disc pl-5 space-y-1 text-gray-600">
          <li>Providing and maintaining our service</li>
          <li>Notifying you about changes to our service</li>
          <li>Customer support</li>
          <li>Gathering analysis to improve our service</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">3. Data Protection</h2>
        <p className="text-gray-600">
          We implement security measures to protect your data, including encryption and access controls. 
          However, no method of transmission over the Internet is 100% secure.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4 text-gray-800">4. Changes to This Policy</h2>
        <p className="text-gray-600">
          We may update our Privacy Policy periodically. We will notify you of any changes by posting 
          the new policy on this page.
        </p>
        <p className="text-gray-500 text-sm mt-4">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </section>
    </PolicyLayout>
  );
};

export default PrivacyPolicy;