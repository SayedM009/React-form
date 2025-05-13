import { useState } from "react";
import "./App.css";
function App() {
  return <LoanForm />;
}

function LoanForm() {
  const [formInputs, setFormInputs] = useState({
    fullName: "",
    phoneNumber: "",
    age: "",
    isEmployee: false,
  });
  const { fullName, phoneNumber, age, isEmployee } = formInputs;

  // Functions
  function handleOnChangeIsEmoplyee() {
    setFormInputs({ ...formInputs, isEmployee: !isEmployee });
  }

  function handleOnChangeFullName(value) {
    setFormInputs({ ...formInputs, fullName: value });
  }

  function handleOnChangePhoneNumber(value) {
    setFormInputs({ ...formInputs, phoneNumber: value });
  }

  function handleOnChangeAge(value) {
    setFormInputs({ ...formInputs, age: value });
  }
  return (
    <div className="bg-white w-96 px-7  py-6  rounded-2xl">
      {/* Modal for after submitting message */}
      <Modal />
      <form>
        {/* Full name input  */}
        <InputField
          label="Full name"
          placeholder="Your full name"
          onChange={handleOnChangeFullName}
        />
        {/* Phone number input */}
        <InputField
          type="number"
          label="Phone number"
          placeholder="Your phone number +971 55 0000 000"
          onChange={handleOnChangePhoneNumber}
        />
        {/* Age input */}
        <InputField
          type="number"
          label="Age"
          placeholder="Your age"
          onChange={handleOnChangeAge}
        />

        <hr className="mb-6" />
        <div className="flex items-center ">
          <div className="inline-flex items-center">
            <label
              className="flex items-center cursor-pointer relative"
              htmlFor="check-2"
            >
              <input
                type="checkbox"
                className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border  checked:bg-blue-600 checked:border-none"
                id="check-2"
                checked={isEmployee}
                onChange={handleOnChangeIsEmoplyee}
              />
              <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>
            <label
              className="cursor-pointer ml-2 text-slate-600 text-sm"
              htmlFor="check-2"
            >
              Are you an employee ?
            </label>
          </div>
          <Button isVaild={Boolean(fullName && phoneNumber && age)} />
        </div>
      </form>
    </div>
  );
}

function Modal() {
  const [modalStatus, setModalStatus] = useState(false);
  function handleCloseModal(e) {
    if (e.target.id === "default-modal" || e.target.type === "button")
      setModalStatus(true);
  }
  return (
    <div
      id="default-modal"
      tabIndex="-1"
      aria-hidden="true"
      className={`${"overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"} ${
        modalStatus && "hidden"
      }`}
      onClick={handleCloseModal}
    >
      <div className="absolute p-4 w-full max-w-2xl max-h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Terms of Service
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-show="default-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-4 md:p-5 space-y-4">
            <p className="text-base leading-relaxed text-left text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new
              consumer privacy laws for its citizens, companies around the world
              are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-left text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them.
            </p>
          </div>
          <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              data-modal-hide="default-modal"
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              I accept
            </button>
            <button
              data-modal-hide="default-modal"
              type="button"
              className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button({ isVaild }) {
  return (
    <>
      <button
        type="button"
        className={`${"min-w-32 ml-auto  text-white   disabled:cursor-not-allowed  hover:bg-blue-500 border-none transition-all focus:border-none   hover:border-none  focus:outline-none  rounded-md px-5 py-1.5 text-center text-sm"} ${
          isVaild ? "bg-blue-600" : "bg-blue-300 disabled:bg-blue-300"
        }`}
        disabled={!isVaild}
      >
        {/* {isVaild ? (
          <>
            <svg
              aria-hidden="true"
              role="status"
              className="inline mr-3 w-4 h-4 text-white animate-spin"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="white"
              ></path>
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="#333"
              ></path>
            </svg>
            Loading
          </>
        ) : (
          "Submit"
        )} */}
        Submit
      </button>
    </>
  );
}

function InputField({ type = "text", label = "", placeholder = "", onChange }) {
  const [{ status, message }, setIsvalid] = useState({
    status: true,
    message: "",
  });
  const inputsRules = {
    "Full name": {
      minLength: 6,
      maxLength: 12,
      specialCh: [
        "`",
        "!",
        "@",
        "#",
        "$",
        "%",
        "^",
        "&",
        "&",
        "*",
        "(",
        ")",
        "_",
        "-",
        "+",
        "=",
        "/",
        "*",
      ],
      type: "characters",
    },

    "Phone number": {
      startsWith: "+",
      minLength: 12,
      maxLength: 13,
      type: "numbers",
    },

    Age: {
      minAge: 18,
      maxAge: 70,
      type: "Years",
    },
  };
  function handleOnBlue(e) {
    const value = e.target.value;
    const input = inputsRules[label];

    if (!input) return;

    if (
      label === "Full name" &&
      input.specialCh.some((ch) => value.includes(ch))
    ) {
      setIsvalid({
        status: false,
        message: `${label} should not contain special characters`,
      });
      return;
    }

    // Length validation (if applicable)
    if (input.minLength && value.length < input.minLength) {
      setIsvalid({
        status: false,
        message: `${label} length should be larger than ${input.minLength} ${input.type}`,
      });
      return;
    }

    if (input.maxLength && value.length > input.maxLength) {
      setIsvalid({
        status: false,
        message: `${label} length should be lower than ${input.maxLength} ${input.type}`,
      });
      return;
    }

    // Age validation (if applicable)
    if (input.minAge && +value < input.minAge) {
      setIsvalid({
        status: false,
        message: `${label} should be bigger than ${input.minAge} ${input.type}`,
      });
      return;
    }

    if (input.maxAge && +value > input.maxAge) {
      setIsvalid({
        status: false,
        message: `${label} should be lower than ${input.maxAge} ${input.type}`,
      });
      return;
    }

    setIsvalid({ status: true, message: "" });
  }
  return (
    <div className=" text-left">
      <label className="text-gray-900 block text-left mb-2 font-medium text-sm">
        {label}
      </label>
      <input
        className={`${"d-block h-12  rounded-lg placeholder-shown:text-xs ps-3  focus:outline-none w-full text-black border-2   "} ${
          status
            ? "bg-slate-100 focus:border-blue-500"
            : "border-red-300 bg-red-100 focus:border-red-500"
        }`}
        type={type}
        placeholder={placeholder}
        onBlur={handleOnBlue}
        onChange={(e) => {
          handleOnBlue(e);
          onChange(e.target.value);
        }}
      />
      <p
        className={`${"my-1  text-red-500 font-bold flex items-center gap-1 "} ${
          status && "invisible"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="  size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
          />
        </svg>
        <span className="text-[10px]">{message}</span>
      </p>
    </div>
  );
}
export default App;
