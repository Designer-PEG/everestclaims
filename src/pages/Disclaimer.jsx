// src/pages/Disclaimer.jsx
import PolicyLayout from '../components/PolicyLayout';

const Disclaimer = () => {
  return (
    <PolicyLayout title="Disclaimer">
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">1. No Warranties</h2>
        <p className="text-gray-600">
          This service is provided "as is" without any representations or warranties, express or implied. 
          We make no representations about the completeness, accuracy, or reliability of any information on this service.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">2. Professional Advice</h2>
        <p className="text-gray-600">
          The content on this service does not constitute professional advice. Always seek the advice of qualified professionals regarding any questions you may have.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">3. Limitation of Liability</h2>
        <p className="text-gray-600">
          We will not be liable for any consequential, incidental, indirect, or special damages resulting from your use of this service.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">4. External Links</h2>
        <p className="text-gray-600">
          Our service may contain links to external websites. We have no control over and assume no responsibility for their content or practices.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4 text-gray-800">5. Changes to Disclaimer</h2>
        <p className="text-gray-600">
          We may update this disclaimer at any time. Your continued use of the service constitutes acceptance of the current version.
        </p>
        <p className="text-gray-500 text-sm mt-4">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </section>
    </PolicyLayout>
  );
};

export default Disclaimer;