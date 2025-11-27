'use client';

import { useState } from 'react';
import ChatWidget from '@/components/ChatWidget';

const policies = {
  privacy: {
    title: 'Privacy Policy',
    effectiveDate: '21/08/2025',
    content: `At Softerio Solutions (Software House), we value your trust and are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal and business information when you interact with our website, products, and services.

📌 Information We Collect

We may collect the following information from clients and website visitors:

Contact Information: Name, email address, phone number, and company details.

Business Information: Project requirements, documents, and communication records.

Payment Information: Billing details and invoices (processed securely through trusted third parties).

Technical Data: IP address, browser type, device details, and operating system.

Usage Data: Website activity, pages visited, and interaction patterns.

⚙️ How We Use Your Information

We use your information to:

Provide and deliver our software development and IT services.

Respond to inquiries, proposals, and support requests.

Manage client accounts, contracts, and billing.

Send important updates, notifications, and service-related communication.

Ensure website and system security.

Analyze usage to improve user experience and services.

🍪 Cookies & Tracking

Our website may use cookies to:

Save your preferences.

Improve site functionality and performance.

Track analytics for better service.

👉 You can disable cookies anytime in your browser settings, but some features may not function properly.

🤝 Sharing of Information

We do not sell or trade your personal information. We may share your data only with:

Service Providers (hosting, payment gateways, analytics tools, etc.).

Legal Authorities if required by law.

Business Transfers in case of a merger or acquisition.

🔐 Data Security

We follow strict security measures to protect your information:

SSL encryption for safe communication.

Secure servers and restricted access.

Regular system monitoring and updates.

⚠️ While we take every precaution, no digital platform can guarantee 100% security.

✉️ Your Rights

You have the right to:

Access and review your data.

Request corrections or updates.

Request deletion of your personal information (where legally possible).

Opt out of promotional emails anytime.

📩 To exercise your rights, contact us via the details below.

📅 Policy Updates

We may update this Privacy Policy from time to time. Updates will be posted here with a new effective date.

📞 Contact Us

If you have any questions about this Privacy Policy, please contact us:

📍 Softerio Solutions – Software House
📧 hr@softeriosolutions.com

📞 +92 303 6057586`
  },
  workplace: {
    title: 'Primary Workplace Policy',
    effectiveDate: '21/08/2025',
    content: `At Softerio Solutions, we believe a disciplined and professional workplace environment is the foundation of success. Our Primary Workplace Policy outlines the rules, responsibilities, and expectations for employees working at our office premises. This policy applies to all employees, contractors, and interns working with Softerio Solutions.

📍 Workplace Attendance

All employees are required to work from the company's official office location unless remote work has been explicitly approved by management.

Employees must mark daily check-in and check-out through the designated system to maintain accurate attendance records.

Late arrivals or early departures must be communicated in advance to HR or reporting managers.

Absenteeism without proper notice or approval may lead to disciplinary action.

🖥️ Use of Company Resources

Company assets including laptops, systems, software, and internet facilities are provided for official work only.

Employees are strictly prohibited from using office systems for unauthorized or personal activities.

Confidential data must be stored and handled responsibly to avoid security breaches.

Workstations should be maintained in a clean and organized manner.

👨‍💼 Professional Conduct

Employees must maintain professionalism, discipline, and respect in all interactions.

Harassment, discrimination, or disrespectful behavior will not be tolerated under any circumstances.

Teamwork and collaboration are encouraged to ensure smooth project delivery.

Confidentiality must be maintained regarding client projects, internal discussions, and business strategies.

🏠 Remote Work Exception

Remote work may only be granted in special circumstances such as health issues, emergencies, or management approval.

Remote workers must remain accessible during office hours and ensure productivity is not compromised.

Security protocols such as VPNs and encrypted communication tools must be followed when working remotely.

⚠️ Policy Enforcement

Failure to comply with this policy may result in warnings, penalties, or disciplinary actions depending on the severity of the violation. The HR and management teams are responsible for monitoring and enforcing workplace rules.`
  },
  vaccine: {
    title: 'Vaccine Policy',
    effectiveDate: '21/08/2025',
    content: `At Softerio Solutions, the health and safety of our employees, clients, and visitors are extremely important to us. This Vaccine Policy has been implemented to ensure a safe and healthy workplace, minimize risks of infections, and protect our community.

📌 Vaccination Requirements

All employees are required to be fully vaccinated against communicable diseases as per government and health authority guidelines.

Proof of vaccination must be submitted to the HR department before joining or immediately after vaccination.

Employees must update HR if they receive booster doses or additional vaccines recommended by health authorities.

🧾 Medical Exemptions

Employees who cannot be vaccinated due to medical conditions must provide valid medical certificates from certified doctors.

Exempted employees may be required to follow extra safety measures, including regular testing or mask mandates.

🏢 Workplace Safety Measures

Even after vaccination, employees must follow company health protocols such as hygiene practices, sanitization, and safe distancing during outbreaks.

The company may conduct health screenings such as temperature checks, regular COVID testing, or other medical evaluations during public health emergencies.

Visitors and clients entering Softerio Solutions premises may also be asked to provide vaccination proof or follow safety measures.

🎓 Awareness & Support

Softerio Solutions may organize health awareness programs to educate employees about vaccination benefits and workplace safety.

The company may provide support for employees to access vaccination facilities when necessary.

⚠️ Non-Compliance

Failure to comply with this policy may result in restricted workplace access until vaccination requirements are met.

In cases of repeated non-compliance, management may take disciplinary action in line with company policies.

📅 Policy Updates

This Vaccine Policy may be updated in response to new health regulations, government mandates, or public health concerns. Employees will be informed of all changes in advance.`
  }
};

export default function PrivacyPolicyPage() {
  const [selectedPolicy, setSelectedPolicy] = useState<string | null>(null);

  const handleCardClick = (policyKey: string) => {
    setSelectedPolicy(selectedPolicy === policyKey ? null : policyKey);
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 pt-20">
      <div className="container mx-auto px-6 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Privacy & Policies
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Our commitment to transparency and compliance
          </p>
        </div>

        {/* Policy Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {Object.entries(policies).map(([key, policy]) => (
            <div
              key={key}
              onClick={() => handleCardClick(key)}
              className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                selectedPolicy === key ? 'ring-2 ring-teal-500' : ''
              }`}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  {key === 'privacy' && '🔒'}
                  {key === 'workplace' && '🏢'}
                  {key === 'vaccine' && '💉'}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {policy.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  Effective: {policy.effectiveDate}
                </p>
                <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
                  {selectedPolicy === key ? 'Hide Details' : 'View Details'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Policy Details */}
        {selectedPolicy && (
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {policies[selectedPolicy as keyof typeof policies].title}
              </h2>
              <button
                onClick={() => setSelectedPolicy(null)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                ✕
              </button>
            </div>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                <strong>Effective Date:</strong> {policies[selectedPolicy as keyof typeof policies].effectiveDate}
              </p>
              <div className="whitespace-pre-line text-gray-700 dark:text-gray-300 leading-relaxed">
                {policies[selectedPolicy as keyof typeof policies].content}
              </div>
            </div>
          </div>
        )}
      </div>
      <ChatWidget />
    </main>
  );
}
