import React from 'react';

const data = [
  {
    category: 'FDA PRODUCT REGISTRATION',
    services: [
      'Doctor & nutritionist to handle FDA Product Registration',
      'Application of import license',
      'Product importation service',
      'Product sourcing',
      'Office sourcing & renovation',
    ],
  },
  {
    category: 'MLM LICENSE APPLICATION',
    services: [
      'Application of Direct Selling / MLM License',
      'MLM Software provider',
      'Trademark registration',
      'Event management service',
      'Foreigner work permit',
    ],
  },
  {
    category: 'COMPANY REGISTRATION',
    services: [
      'Company Registration',
      'Legal service & consultation',
      'Tax & Accounting services',
      'Virtual / physical office',
      'Translation service',
    ],
  },
];

const SectionOne = () => {
  return (
    <div>
      
        <div className="flex flex-col text-center gap-y-5 py-10">
          <div className="text-2xl font-bold">OUR SPECIALTY</div>        
        </div>
        <div
        className="bg-slate-200"
        style={{
          background: 'var(--Gradient-Orange-gradient-20, linear-gradient(90deg, #FF4E50 0%, #F9D423 100%))',
        }}
      >
        <div className="grid md:grid-cols-3 gap-6 p-10 overflow-hidden">
          {data.map((categoryData, index) => (
            <div
              key={index}
              className="grid col-span-2 rounded-2xl md:col-span-1 bg-white font-sans"
            >
              <div className="flex flex-col space-y-8 p-10">
                <h1 className="text-orange-600 text-2xl font-bold">
                  {categoryData.category}
                </h1>
                <div className="space-y-4">
                  {categoryData.services.map((service, serviceIndex) => (
                    <div
                      key={serviceIndex}
                      className="flex flex-row justify-content items-baseline gap-2 md:gap-4"
                    >
                      <span className="text-md">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="15"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_3998_738)">
                            <path
                              d="M16.9838 1.91626L6.80418 12.0997L2.9995 8.29508L-0.000488281 11.299L6.80027 18.0996L7.67918 17.2247L19.9877 4.91622L16.9838 1.91626Z"
                              fill="#565656"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_3998_738">
                              <rect
                                width="19.9999"
                                height="19.9997"
                                fill="white"
                                transform="translate(0 0.000244141)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      <span className="text-xl">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
