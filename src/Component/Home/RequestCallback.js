import React, { useState, useEffect } from "react";
import {
  Phone,
  Calendar,
  Clock,
  User,
  Mail,
  MessageSquare,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TesodCallbackForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // Set min date to today
  const today = new Date().toISOString().split("T")[0];

  // Basic form validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (
      !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(
        formData.phoneNumber.replace(/\s/g, "")
      )
    ) {
      newErrors.phoneNumber = "Phone number is invalid";
    }

    if (!formData.preferredDate) newErrors.preferredDate = "Date is required";
    if (!formData.preferredTime) newErrors.preferredTime = "Time is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Clear error when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please correct the errors in the form");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(
        "https://backend.tesodtechnology.com/callback/request-callback",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await res.json();
      if (!res.ok) throw new Error(result.message || "Something went wrong");

      toast.success("Your callback request has been submitted successfully!");
      setIsSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        preferredDate: "",
        preferredTime: "",
        message: "",
      });

      // Reset form after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      toast.error(`Error: ${err.message}`);
      console.error("Submission error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-indigo-50 via-gray-50 to-blue-50">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <div className="w-full max-w-6xl relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 bg-indigo-600 opacity-10 rounded-full w-96 h-96 -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 bg-blue-600 opacity-10 rounded-full w-96 h-96 -ml-48 -mb-48"></div>
          <div className="absolute top-1/2 left-1/3 bg-indigo-400 opacity-10 rounded-full w-64 h-64"></div>
        </div>

        <div className="relative bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl border border-gray-100">
          <div className="text-center mb-8">
            <div className="inline-block bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-bold py-2 px-6 rounded-lg mb-4 shadow-md">
              TESOD TECHNOLOGY
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              Request a Callback
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-blue-600 mx-auto mt-3 mb-4 rounded-full"></div>
            <p className="text-gray-600 max-w-lg mx-auto">
              Our team of experts will contact you within 24 hours to discuss
              your project needs and provide tailored solutions
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-green-50 border border-green-100 p-8 rounded-xl text-center mb-4 transform transition-all duration-500 shadow-md">
              <div className="flex justify-center mb-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <CheckCircle className="w-12 h-12 text-green-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-2">
                Thank You!
              </h3>
              <p className="text-green-700 text-lg mb-2">
                Your callback request has been submitted successfully.
              </p>
              <p className="text-green-600">
                Our team will contact you shortly at your preferred date and
                time.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-6 inline-flex items-center px-4 py-2 text-sm font-medium text-green-700 bg-green-100 rounded-md hover:bg-green-200 transition-colors"
              >
                Request Another Callback
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                  icon={<User className="h-5 w-5 text-indigo-500" />}
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="John Doe"
                  label="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  error={errors.fullName}
                />
                <InputField
                  icon={<Mail className="h-5 w-5 text-indigo-500" />}
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  label="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  error={errors.email}
                />
                <InputField
                  icon={<Phone className="h-5 w-5 text-indigo-500" />}
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  placeholder="+91 1003456789"
                  label="Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  error={errors.phoneNumber}
                />
                <InputField
                  icon={<Calendar className="h-5 w-5 text-indigo-500" />}
                  id="preferredDate"
                  name="preferredDate"
                  type="date"
                  label="Preferred Date"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  required
                  min={today}
                  error={errors.preferredDate}
                />
                <InputField
                  icon={<Clock className="h-5 w-5 text-indigo-500" />}
                  id="preferredTime"
                  name="preferredTime"
                  type="time"
                  label="Preferred Time"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  required
                  error={errors.preferredTime}
                />
              </div>

              <div className="group col-span-full">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-1"
                >
                  Message (Optional)
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3 pointer-events-none">
                    <MessageSquare className="h-5 w-5 text-indigo-500" />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="3"
                    className="block w-full pl-10 pr-3 py-3 border-2 border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 bg-white"
                    placeholder="Tell us about your project requirements or any specific questions..."
                  ></textarea>
                </div>
              </div>

              <div className="text-center pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full sm:w-2/3 inline-flex justify-center items-center px-6 py-4 border border-transparent rounded-lg shadow-lg text-base font-bold text-white bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 transform hover:-translate-y-1 ${
                    loading ? "opacity-80 cursor-not-allowed" : ""
                  }`}
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      <Phone className="mr-2 h-5 w-5" />
                      Request Callback
                    </>
                  )}
                </button>
              </div>

              <div className="text-center text-sm text-gray-500 mt-4">
                <p>
                  By submitting this form, you agree to Tesod Technology's{" "}
                  <a
                    href="#"
                    className="text-indigo-600 hover:text-indigo-800 underline"
                  >
                    privacy policy
                  </a>
                  .
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

const InputField = ({
  icon,
  id,
  name,
  type,
  placeholder,
  label,
  value,
  onChange,
  required,
  error,
  min,
}) => (
  <div className="group">
    <label
      htmlFor={id}
      className="block text-sm font-semibold text-gray-700 mb-1"
    >
      {label} {required && <span className="text-indigo-600">*</span>}
    </label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        {icon}
      </div>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        min={min}
        className={`block w-full pl-10 pr-3 py-3 border-2 ${
          error ? "border-red-300 bg-red-50" : "border-gray-200 bg-white"
        } rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200`}
        placeholder={placeholder}
      />
      {error && (
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <svg
            className="h-5 w-5 text-red-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}
    </div>
    {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
  </div>
);

export default TesodCallbackForm;
