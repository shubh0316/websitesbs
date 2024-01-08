import React from 'react';

const ExtraFeature = () => {
  const tableData = [
    { serialNo: 1, features: 'Staff Login Panel (Multi Staff/Admin Login)', cost: '$300' },
    { serialNo: 2, features: 'e-Wallet (My E-Wallet, Pin Purchase, Fund Transfer, E-Wallet Report)', cost: '$250' },
    { serialNo: 3, features: 'Multi-Currency (Multi Currency for website and member area)', cost: '$200' },
    { serialNo: 4, features: 'Payment Gateway integration (Affiliate can purchase the product using their credit card/debit card)', cost: '$150' },
    { serialNo: 5, features: 'SMS integration (The system is able to send automated SMS to the user’s mobile on various actions & activities to update the user on his gains & transactions)', cost: '$100' },
    { serialNo: 6, features: 'SSL Activation (Secure Website with single domain)', cost: '$110' },
    { serialNo: 7, features: 'Auto Payment System (Auto Payout deduction on payout cycle)', cost: '$210' },
    { serialNo: 8, features: 'OpenCart Integration (E-commerce Shopping Cart Software)', cost: '$999' },
    { serialNo: 9, features: 'Repurchase System (Product Repurchase, inventory management integration for MLM)', cost: '$300' },
    { serialNo: 10, features: 'Franchise System (Basic franchise panel for MLM web Application integration.)', cost: '$300' },
    { serialNo: 11, features: 'Adv. Franchise System (Advanced franchise/CNF panel for MLM web Application integration.)', cost: '$600' },
  ];

  return (
    <div className="my-8 bg-slate-100">
      <div className="flex flex-col text-center gap-y-5 py-10">
        <div className="text-2xl font-bold">EXTRA FEATURES</div>
        <div className="text-sm font-normal leading-tight">
          We are providing the following best services.
        </div>
      </div>
      <div className="container mx-auto mt-8 bg-white rounded-xl p-4 md:p-8 overflow-x-hidden">
        <table className="table-auto w-full border-collapse border border-gray-300 rounded-xl">
          <thead>
            <tr>
              <th className="w-1/12 border border-gray-300 p-2 rounded-tl-lg">Serial No.</th>
              <th className="w-6/12 border text-left border-gray-300 p-2 text-xl">Add On Modules/Softwares Integration</th>
              <th className="w-2/12 border border-gray-300 p-2 rounded-tr-xl rounded-tl-xl">Cost</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr key={row.serialNo}>
                <td className="border border-gray-300 text-center p-2">{row.serialNo}</td>
                <td className="border border-gray-300 p-2">{row.features}</td>
                <td className="border border-gray-300 text-center p-2">{row.cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExtraFeature;
