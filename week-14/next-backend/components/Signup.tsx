import axios from "axios";
import { ChangeEventHandler, useState } from "react";
import Button from "./Button";
import { signup } from "@/app/actions/user";

export function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onClickHandler = async () => {
    try {
      // const response = await axios.post("http://localhost:3000/api/user", {
      //   username,
      //   password,
      // });
      // const data = await response.data.newUser;

      const data = await signup(username, password);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <a
          href="#"
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 "
        >
          <div>
            <div className="px-10">
              <div className="text-3xl font-extrabold">Sign up</div>
            </div>
            <div className="pt-2">
              <LabelledInput
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                label="Username"
                placeholder="harkirat@gmail.com"
              />
              <LabelledInput
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                label="Password"
                type={"password"}
                placeholder="123456"
              />
              <Button title="signup" onClick={onClickHandler} />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

function LabelledInput({
  label,
  placeholder,
  type,
  onChange,
}: LabelledInputType) {
  return (
    <div>
      <label className="block mb-2 text-sm text-black font-semibold pt-4">
        {label}
      </label>
      <input
        onChange={onChange}
        type={type || "text"}
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        required
      />
    </div>
  );
}

interface LabelledInputType {
  label: string;
  placeholder: string;
  type?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}
