import React from 'react';

const ExtraFeature = () => {
  const tableData = [
    { serialNo: 1, features: 'Lorem ipsum dolor sit amet', cost: '$100' },
    { serialNo: 2, features: 'Consectetur adipiscing elit', cost: '$150' },
    { serialNo: 3, features: 'Sed do eiusmod tempor incididunt', cost: '$200' },
    { serialNo: 4, features: 'Sed do eiusmod tempor incididunt', cost: '$300' },
    { serialNo: 5, features: 'Sed do eiusmod tempor incididunt', cost: '$400' },
    { serialNo: 6, features: 'Sed do eiusmod tempor incididunt', cost: '$500' },
    { serialNo: 7, features: 'Sed do eiusmod tempor incididunt', cost: '$600' },
    { serialNo: 8, features: 'Sed do eiusmod tempor incididunt', cost: '$700' },
    { serialNo: 9, features: 'Sed do eiusmod tempor incididunt', cost: '$700' },
    { serialNo: 10, features: 'Sed do eiusmod tempor incididunt', cost: '8200' },
    { serialNo: 11, features: 'Sed do eiusmod tempor incididunt', cost: '9200' },
  ];

  return (
    <div className="my-8 bg-slate-100">
      <div className="flex flex-col text-center gap-y-5 py-10">
        <div className="text-2xl font-bold">EXTRA FEATURES</div>
        <div className="text-lg font-normal leading-tight">
          We are providing the following best services.
        </div>
      </div>
      <div className="container mx-auto mt-8 bg-white rounded-xl p-8">
        <table className="table-auto w-full border-collapse border border-gray-300 rounded-xl">
          <thead>
            <tr>
              <th className="w-1/12 border border-gray-300 p-2 rounded-tl-lg">Serial No.</th>
              <th className="w-6/12 border border-gray-300 p-2">Features</th>
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
