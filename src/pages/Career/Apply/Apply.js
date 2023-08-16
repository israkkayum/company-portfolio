import React, { useState } from "react";
import axios from "axios";

const Apply = ({ scrollRef }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    position: "",
    experience: "",
    address: "",
    file: null,
  });

  const [success, setSuccess] = useState(true);
  const [messageActive, setMessageActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // normal data
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // file
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFormData({ ...formData, file });
  };

  // form submit
  // const handleSubmit = (event) => {
  //   setIsLoading(true);

  //   const formDataToSend = new FormData();
  //   formDataToSend.append("firstName", formData.firstName);
  //   formDataToSend.append("lastName", formData.lastName);
  //   formDataToSend.append("email", formData.email);
  //   formDataToSend.append("phoneNumber", formData.phoneNumber);
  //   formDataToSend.append("position", formData.position);
  //   formDataToSend.append("experience", formData.experience);
  //   formDataToSend.append("address", formData.address);
  //   formDataToSend.append("file", formData.file);

  //   fetch("https://company-portfolio-server.vercel.app/send-email", {
  //     method: "POST",
  //     body: formDataToSend,
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data.success) {
  //         setSuccess(true);
  //       } else {
  //         setSuccess(false);
  //       }
  //       // console.log(data);
  //       setIsLoading(false);
  //       setMessageActive(true);
  //     })
  //     .catch((error) => {
  //       // console.error(error);
  //       setSuccess(false);
  //       setIsLoading(false);
  //       setMessageActive(true);
  //     });

  //   // event.target.reset();
  //   event.preventDefault();
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formDataToSend = new FormData();
    formDataToSend.append("firstName", formData.firstName);
    formDataToSend.append("lastName", formData.lastName);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phoneNumber", formData.phoneNumber);
    formDataToSend.append("position", formData.position);
    formDataToSend.append("experience", formData.experience);
    formDataToSend.append("address", formData.address);
    formDataToSend.append("file", formData.file);

    try {
      const response = await axios.post(
        "https://company-portfolio-server.vercel.app/send-email",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        setSuccess(true);
        setIsLoading(false);
        setMessageActive(true);
      } else {
        alert("Error sending email.");
      }
    } catch (error) {
      setSuccess(false);
      setIsLoading(false);
      setMessageActive(true);
    }
  };

  // cancel button
  const handleCancelChange = (e) => {
    setMessageActive(false);
    setIsLoading(false);

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      position: "",
      experience: "",
      address: "",
      file: null,
    });

    e.preventDefault();
  };

  return (
    <div className="bg-white-100 py-10 sm:py-20" ref={scrollRef}>
      <div className="container mx-auto px-4 pt-10">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Send Us Your Resume
          </p>
        </div>

        {/* // successful message //  */}
        {messageActive && (
          <div
            class={
              success
                ? "flex items-center justify-center p-4 text-sm font-bold text-green-800 rounded-lg bg-green-50 mt-10 -mb-8 lg:-mb-20 md:-mb-10"
                : "flex items-center justify-center p-4 text-sm font-bold text-red-800 rounded-lg bg-red-50 mt-10 -mb-8 lg:-mb-20 md:-mb-10"
            }
            role="alert"
          >
            <svg
              class="flex-shrink-0 inline w-4 h-4 mr-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span class="sr-only">Info</span>
            {success ? (
              <div> Your resume has been successfully submitted! </div>
            ) : (
              <div>Your submission failed, please try again</div>
            )}
          </div>
        )}

        {/* /// */}

        <form
          onSubmit={handleSubmit}
          className="mt-16 sm:mt-20 lg:mt-24 bg-gray-100 p-10 rounded-md"
        >
          {/* /// grid -> card /// */}
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-0 lg:max-w-none lg:grid-cols-2 md:grid-cols-1 lg:gap-y-8">
            {/* /// col 1 /// */}
            <div>
              <label class="block">
                <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                  First Name
                </span>
                <input
                  type="text"
                  name="firstName"
                  class="mt-1 mb-5 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  // placeholder="Israk"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </label>

              <label class="block">
                <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                  Phone Number
                </span>
                <input
                  type="tel"
                  name="phoneNumber"
                  class="mt-1 mb-5 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  // placeholder="0199xxxxxx"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </label>

              <label class="block">
                <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                  Positions
                </span>
              </label>
              <select
                id="position"
                name="position"
                autoComplete="position"
                className="mt-1 mb-5 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                value={formData.position}
                onChange={handleInputChange}
                required
              >
                <option>Java Developer</option>
                <option>Javascript Developer</option>
                <option>DevOps</option>
                <option>UI/UX Designer</option>
                <option>Backend Developer</option>
                <option>Full Stack Developer</option>
                <option>Front End Developer</option>
              </select>

              <label class="block">
                <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                  Address
                </span>
                <input
                  type="text"
                  name="address"
                  class="mt-1 mb-5 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  // placeholder="Chittagong,....."
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                />
              </label>
            </div>
            {/* /// col 2 /// */}
            <div>
              <label class="block">
                <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                  Last Name
                </span>
                <input
                  type="text"
                  name="lastName"
                  class="mt-1 mb-5 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  // placeholder="Kayum"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label class="block">
                <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  class="mt-1 mb-5 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  // placeholder="israk.kayum@gmail.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label class="block">
                <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                  Experience
                </span>
              </label>
              <select
                id="experience"
                name="experience"
                autoComplete="experience"
                className="mt-1 mb-5 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                value={formData.experience}
                onChange={handleInputChange}
                required
              >
                <option>1 years</option>
                <option>2 years</option>
                <option>3 years</option>
                <option>4 years</option>
                <option>5 years</option>
                <option>4+ years</option>
              </select>
              <label class="block">
                <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 mb-1">
                  Resume
                </span>
                <span class="sr-only">Choose profile photo</span>
                <input
                  type="file"
                  name="file"
                  class="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-white file:text-violet-700 hover:file:bg-violet-100"
                  onChange={handleFileChange}
                  required
                />
              </label>
            </div>
          </dl>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
              onClick={handleCancelChange}
            >
              Cancel
            </button>
            {isLoading ? (
              <button
                disabled
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
              >
                <svg
                  aria-hidden="true"
                  role="status"
                  class="inline w-4 h-4 mr-3 text-white animate-spin"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#E5E7EB"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentColor"
                  />
                </svg>
                Loading
              </button>
            ) : (
              <button
                type="submit"
                className={
                  formData.file
                    ? "rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    : "rounded-md bg-gray-300 px-3 py-2 text-sm font-semibold text-white"
                }
                disabled={formData.file ? false : true}
              >
                Apply Now
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Apply;
