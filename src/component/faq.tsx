'use client';
import { useState } from 'react';

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: 'Can I recover deleted files from desktop with this software?',
    answer:
      'Yes, this software allows you to recover deleted files from desktops using advanced recovery tools.',
  },
  {
    question: 'Does the software support multiple languages?',
    answer:
      'Yes, the software supports multiple languages, including English, Spanish, and French.',
  },
  {
    question: 'Is this software compatible with Mac OS?',
    answer:
      'Absolutely! The software works seamlessly with both Mac OS and Windows.',
  },
  {
    question: 'How long does the recovery process take?',
    answer:
      'The recovery process typically takes a few minutes, but it depends on the size of the files being recovered.',
  },
  {
    question: 'Is customer support available?',
    answer: 'Yes, 24/7 customer support is available for all users.',
  },
];

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 text-gray-800 py-12 px-4 md:px-16">
      <h2 className="text-center text-3xl font-bold mb-8">Frequent Ask Questions</h2>
      <div className="space-y-4 max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`border rounded-lg overflow-hidden ${
              activeIndex === index ? 'border-blue-500' : 'border-gray-300'
            }`}
          >
            <button
              className="w-full flex justify-between items-center p-4 text-left focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-medium">{faq.question}</span>
              <span
                className={`transform transition-transform ${
                  activeIndex === index ? 'rotate-90' : ''
                }`}
              >
                →
              </span>
            </button>
            {activeIndex === index && (
              <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">
          Show more →
        </button>
      </div>
    </div>
  );
};

export default FAQSection;