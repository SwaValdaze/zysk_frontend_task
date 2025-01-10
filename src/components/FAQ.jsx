import React, { useState } from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
    },
    {
      question: 'Can I change my plan later?',
      answer: 'Yes, you can upgrade or downgrade your plan anytime.',
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'You can cancel your subscription at any time, and you will not be charged for the next billing cycle.',
    },
    {
      question: 'Can other info be added to an invoice?',
      answer: 'Yes, you can include additional details such as your company name and address.',
    },
    {
      question: 'How does billing work?',
      answer: 'Billing is done on a monthly or annual basis depending on your subscription plan.',
    },
    {
      question: 'How do I change my account email?',
      answer: 'You can update your email address in the account settings section.',
    },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen bg-white px-4 py-3 pt-20 mt-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Frequently asked questions</h1>
      <p className="text-gray-600 text-center mb-6">Everything you need to know about the product and billing.</p>
      <div className="w-full max-w-2xl bg-white border-b-2 border-slate-100 rounded-lg divide-y divide-gray-200">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        className="flex justify-between items-center px-6 py-4 cursor-pointer bg-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-800">{question}</span>
        <span className="text-2xl font-bold text-gray-400">{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && (
        <div className="px-6 py-4 text-gray-700 bg-white">{answer}</div>
      )}
    </div>
  );
};

export default FAQ;