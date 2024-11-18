import React from "react";
import { useLocation } from "react-router-dom";

const Results = () => {
  const location = useLocation();
  const { formData } = location.state;

  const salary = parseFloat(formData.salary || 0);
  const salaryOfYear = salary * 12;
  const bonus = parseFloat(formData.bonus || 0);
  const incomeYear = salaryOfYear + bonus;

  const expenses = Math.min(incomeYear * 0.5, 100000);

  const child = parseInt(formData.child || 0);
  const childd = Math.min(child * 30000, 60000);
  const social = parseFloat(formData.social || 0);
  const sociall = Math.min(social * 12, 30000);
  const life = Math.min(parseFloat(formData.life || 0), 100000);

  const deduction = 60000 + childd + sociall + life;

  const net = incomeYear - expenses - deduction;

  const taxRate =
    net <= 100000 ? 0 : net <= 300000 ? 0.05 : net <= 1000000 ? 0.1 : 0.15;
  const pay = net * taxRate;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          ผลคำนวณภาษี
        </h1>
        <div className="space-y-4">
          <p className="text-gray-700 text-lg">
            <strong className="text-gray-900">เงินได้ทั้งปี:</strong>{" "}
            {incomeYear.toLocaleString()} บาท
          </p>
          <p className="text-gray-700 text-lg">
            <strong className="text-gray-900">ค่าใช้จ่าย:</strong>{" "}
            {expenses.toLocaleString()} บาท
          </p>
          <p className="text-gray-700 text-lg">
            <strong className="text-gray-900">ค่าลดหย่อน:</strong>{" "}
            {deduction.toLocaleString()} บาท
          </p>
          <p className="text-gray-700 text-lg">
            <strong className="text-gray-900">เงินได้พึงประเมินสุทธิ:</strong>{" "}
            {net.toLocaleString()} บาท
          </p>
          <p className="text-gray-700 text-lg">
            <strong className="text-gray-900">อัตราภาษี:</strong>{" "}
            {(taxRate * 100).toFixed(2)} %
          </p>
          <p className="text-gray-700 text-lg">
            <strong className="text-gray-900">ภาษีที่ต้องชำระ:</strong>{" "}
            {pay.toLocaleString()} บาท
          </p>
        </div>
      </div>
    </div>
  );
};

export default Results;
