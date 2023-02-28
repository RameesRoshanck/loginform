import { useForm } from "react-hook-form";
import { useState } from "react";

function New() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const errorStyle = {
    color: "red",
    animation: "glow 1s ease-in-out infinite alternate",
  };

  return (
    <div>
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
          <div className=" bg-white border-l-4 border-t-8 border-[#fed0a9]  pt-12 px-8 md:px-16" style={{ height: "auto" }}>
            <h2 className="font-bold text-2xl text-[#002D74]">Add Address</h2>
            <form
              className="flex p-2 flex-col gap-1"
              onSubmit={handleSubmit()}
            >
              <div className="md:flex gap-2 ">
                <div className="left w-full">
                  <input
                    placeholder="First Name"
                    {...register("firstname", {
                      required: "Name is required",
                      pattern: {
                        value: /^[a-zA-z]+\s{1}[a-zA-z]*$/,
                        message: "Name is invalid",
                      },
                    })}
                    className="my-3 border-2 border-2"
                  />
                  <br />
                  <p ClassName="text-blue-500">{errors.firstname?.message}</p>
                  <input
                    placeholder="Middle Name"
                    {...register("middlename", {
                      required: "Middle Name is required",
                      pattern: {
                        value: /^[a-zA-z]+\s{1}[a-zA-z]*$/,
                        message: "Middle Name is invalid",
                      },
                    })}
                    className="my-3 border-2"
                  />
                  <br />
                  <p ClassName="text-blue-500">{errors.middlename?.message}</p>

                  <input
                    placeholder="Phone Number"
                    {...register("phone", {
                      required: "phone number is required",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Phone number must be 10 digits",
                      },
                    })}
                    className="my-3 border-2"
                  />
                  <br />
                  <p ClassName="text-blue-500">{errors.phone?.message}</p>

                  <input
                    placeholder="Title"
                    {...register("title", {
                      required: "Title is required",
                      pattern: {
                        value: /^[a-zA-z]+\s{1}[a-zA-z]*$/,
                        message: "title is invalid",
                      },
                    })}
                    className="my-3 border-2"
                  />
                  <br />
                  <p ClassName="text-blue-500">{errors.title?.message}</p>

                  <input
                    placeholder="Address Line 1"
                    {...register("address1", {
                      required: "Address is required",
                      pattern: {
                        value: /^[a-zA-z]+\s{1}[a-zA-z]*$/,
                        message: "Address is invalid",
                      },
                    })}
                    className="my-3 border-2"
                  />
                  <br />
                  <p ClassName="text-blue-500">{errors.address1?.message}</p>

                  <input
                    placeholder="Address Line 3 border-2"
                    {...register("address3", {
                      required: "Address is required",
                      pattern: {
                        value: /^[a-zA-z]+\s{1}[a-zA-z]*$/,
                        message: "Address is invalid",
                      },
                    })}
                    className="my-3 border-2"
                  />
                  <br />
                  <p ClassName="text-blue-500">{errors.address3?.message}</p>

                  <input
                    placeholder="State"
                    {...register("state", {
                      required: "state is required",
                      pattern: {
                        value: /^[a-zA-z]+\s{1}[a-zA-z]*$/,
                        message: "state is invalid",
                      },
                    })}
                    className="my-3 border-2"
                  />
                  <br />
                  <p ClassName="text-blue-500">{errors.state?.message}</p>
                </div>
                <div className="right">
                  <input
                    placeholder="Enter the last name"
                    {...register("lastname", {
                      required: "Lastname is required",
                      pattern: {
                        value: /^[a-zA-z]+\s{1}[a-zA-z]*$/,
                        message: "lastname is invalid",
                      },
                    })}
                    className="my-3 border-2"
                  />
                  <br />
                  <p ClassName="text-blue-500">{errors.lastname?.message}</p>

                  <input
                    placeholder="example@example.com"
                    {...register("Email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className="my-3 border-2"
                  />
                  <br />
                  <p ClassName="text-blue-500">{errors.Email?.message}</p>

                  <input
                    placeholder="Phone Number"
                    {...register("phone", {
                      required: "phone number is required",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Phone number must be 10 digits",
                      },
                    })}
                    className="my-3 border-2"
                  />
                  <br />
                  <p ClassName="text-blue-500">{errors.phone?.message}</p>

                  <input
                    placeholder="Country the last name"
                    {...register("country", {
                      required: "Country is required",
                      pattern: {
                        value: /^[a-zA-z]+\s{1}[a-zA-z]*$/,
                        message: "Country is invalid",
                      },
                    })}
                    className="my-3 border-2"
                  />
                  <br />
                  <p ClassName="text-blue-500">{errors.country?.message}</p>

                  <input
                    placeholder="Address Line 2"
                    {...register("address2", {
                      required: "Address is required",
                      pattern: {
                        value: /^[a-zA-z]+\s{1}[a-zA-z]*$/,
                        message: "Address is invalid",
                      },
                    })}
                    className="my-3 border-2"
                  />
                  <br />
                  <p ClassName="text-blue-500">{errors.address2?.message}</p>

                  <input
                    placeholder="City the last name"
                    {...register("city", {
                      required: "City is required",
                      pattern: {
                        value: /^[a-zA-z]+\s{1}[a-zA-z]*$/,
                        message: "City is invalid",
                      },
                    })}
                    className="my-3 border-2"
                  />
                  <br />
                  <p ClassName="text-blue-500">{errors.city?.message}</p>

                  <input
                    placeholder="Pin Number"
                    {...register("pincode", {
                      required: "pin  number is required",
                      pattern: {
                        value: /^[0-9]{6}$/,
                        message: "Pin number must be 10 digits",
                      },
                    })}
                    className="my-3 border-2"
                  />
                  <br />
                  <p ClassName="text-blue-500">{errors.pincode?.message}</p>
                </div>
              </div>
              <div className="mt-6 flex item-start gap-2 ">
                <button
                  type="submit"
                  className="w-auto px-4 py-2 text-white bg-[#fed0a9] rounded-md"
                >
                Add
                </button>
                <button
                  type="button"
                  className="w-auto px-4 py-2 text-white bg-[#fed0a9]  rounded-md"
                >
                  Cancle
                </button>
              </div>
            </form>
          </div>
      </div>
    </div>
  );
}

export default New;
