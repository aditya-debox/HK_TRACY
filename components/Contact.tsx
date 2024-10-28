import Image from "next/image";
import React, { useRef, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import I1 from "../public/assets/telugu.png";
import I2 from "../public/assets/Logo3.png";
import { amar } from "@/pages/_app";

const Contact = () => {
  interface contactType {
    name: string;
    guest: string;
    phone: string;
    email: string;
    event: string;
  }

  const [loading, setLoading] = useState(false);

  const [contactData, setContactData] = useState<contactType>({
    name: "",
    guest: "",
    phone: "",
    email: "",
    event: "",
  });
  const form = useRef<null | HTMLFormElement>(null);
  function handleSubmit(e: any) {
    e.preventDefault();
    if (typeof form !== null) {
      if (
        !contactData.name ||
        !contactData.guest ||
        !contactData.phone ||
        !contactData.email ||
        !contactData.event
      ) {
        toast.error("Please provide all the details!");
        return;
      }

      if (
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
          contactData.email.toString()
        )
      ) {
        toast.error("Please provide a valid email id.");
        return;
      }

      try {
        fetch("/api/contact", {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contactData),
        });
        toast.success(
          "Your enquiry has been submitted successfully. We'll get back to you at our earliest.",
          { duration: 3000 }
        );
      } catch (e) {
        toast.error("Something went wrong. Please try again later.");
      }
    }
    setContactData({
      name: "",
      guest: "",
      phone: "",
      email: "",
      event: "",
    });
  }
  return (
    <div id="contact" className="bg-[#fdfdec] py-8 scroll-mt-24">
      {loading && <h2>Loading...</h2>}
      <Toaster />
      {/* <div className="pb-8">
        <h2
          className={`text-center text-2xl md:text-4xl font-bold pb-8 ${amar.className}`}
        >
          Proud Sponsorer
        </h2>
        <div className="grid grid-cols-12 max-w-3xl mx-auto lg:gap-8 gap-4 place-items-center w-11/12">
          <div className="md:col-span-9 col-span-12">
            <Image
              src={I1}
              alt="Telugu Association"
              className="md:h-28 w-full"
            />
          </div>
          <div className="md:col-span-3 col-span-12">
            <Image
              src={I2}
              alt="Telugu Association"
              className="md:h-32 md:w-32 h-20 w-20"
            />
          </div>
        </div>
      </div> */}
      <h2
        className={`text-center text-2xl md:text-4xl font-bold ${amar.className}`}
      >
        Contact Us
      </h2>
      <h2 className="text-center md:text-lg text-xs py-4">
        Feel free to reach out to us for event sponsorships
      </h2>
      {/* contact section */}
      <div className="mx-auto max-w-6xl w-11/12 py-3  ">
        {/* main div */}
        <div className="grid md:grid-cols-1 gap-3 md:gap-8 max-w-3xl mx-auto">
          <div className="">
            <form
              ref={form}
              name="contact"
              encType="multipart/form-data"
              className="grid gap-4 "
            >
              {/* hidden input for netlify */}
              <input
                type="hidden"
                name="form-name"
                value="Contact_Form"
                onChange={() => null}
              />
              <div className="grid gap-3 md:grid-cols-2 grid-cols-1">
                <div>
                  <label className="block text-xs font-medium text-gray-500">
                    Name
                  </label>
                  <label htmlFor="email" className="sr-only">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={contactData.name}
                    onChange={(e) =>
                      setContactData((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    id="name"
                    autoComplete="given-name"
                    className="block w-full shadow-sm py-2 px-4 placeholder-gray-300 focus:border-red-500 border-2 rounded-md"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500">
                    Email
                  </label>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    value={contactData.email}
                    onChange={(e) =>
                      setContactData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    type="email"
                    autoComplete="email"
                    className="block w-full shadow-sm py-2 px-4 placeholder-gray-300 focus:border-red-500 border-2 rounded-md"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="grid gap-3 md:grid-cols-2 grid-cols-1">
                <div>
                  <label className="block text-xs font-medium text-gray-500">
                    Phone No.
                  </label>
                  <label htmlFor="phone" className="sr-only">
                    Phone No.
                  </label>
                  <PhoneInput
                    onChange={(v, c, e, phone) => {
                      setContactData({
                        ...contactData,
                        phone: phone,
                      });
                    }}
                    inputProps={{
                      name: "phone",
                    }}
                    value={contactData.phone}
                    country={"us"}
                    inputClass="!w-full !py-5  !text-black-2 focus:!border-gray-500 !placeholder-gray-300"
                    containerClass="!text-black rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500">
                    No. of Guests
                  </label>
                  <label htmlFor="guest" className="sr-only">
                    No. of Guests
                  </label>
                  <input
                    type="text"
                    name="guest"
                    value={contactData.guest}
                    onChange={(e) =>
                      setContactData((prev) => ({
                        ...prev,
                        guest: e.target.value,
                      }))
                    }
                    id="guest"
                    autoComplete="family-name"
                    className="block w-full shadow-sm py-2 px-4 placeholder-gray-300 focus:border-red-500 border-2 rounded-md"
                    placeholder="No. of guests"
                  />
                </div>
              </div>
              <div className="">
                <label className="block text-xs font-medium text-gray-500">
                  Event Details
                </label>
                <label htmlFor="event" className="sr-only">
                  Event Details
                </label>
                <textarea
                  id="event"
                  name="event"
                  value={contactData.event}
                  onChange={(e) =>
                    setContactData((prev) => ({
                      ...prev,
                      event: e.target.value,
                    }))
                  }
                  rows={3}
                  aria-describedby="event-max"
                  className="block w-full shadow-sm py-2 px-4 placeholder-gray-300 focus:border-red-500 border-2 rounded-md "
                  placeholder="We'd love to know more about your event. Got a date in mind? Perhaps, any special requirements or preferences you'd like us to accomodate. Tell us all about it."
                />
              </div>
              <div className="grid justify-center pb-10">
                <button
                  onClick={handleSubmit}
                  className="text-sm bg-secondary  hover:bg-ternary hover:text-white border-2 font-bold  px-4 py-1.5 text-white rounded-md transition-colors duration-200"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* contact section ends here  */}
    </div>
  );
};

export default Contact;
