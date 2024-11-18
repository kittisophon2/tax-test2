import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormData = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const submitForm = (event) => {
    event.preventDefault();
    navigate("/result", { state: { formData } });
  };

  return (
    <div className="min-h-screen bg-gray-300 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          แบบฟอร์มภาษีเงินได้
        </h1>
        <form onSubmit={submitForm}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">เงินเดือน:</label>
            <input
              type="text"
              name="salary"
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">โบนัส:</label>
            <input
              type="text"
              name="bonus"
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              หักประกันสังคมต่อเดือน:
            </label>
            <input
              type="text"
              name="social"
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">จำนวนบุตร:</label>
            <input
              type="text"
              name="child"
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">ค่าเบี้ยประกันชีวิต:</label>
            <input
              type="text"
              name="life"
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormData;
