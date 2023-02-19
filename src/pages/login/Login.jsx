import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginApi } from "../../services/user";
import { setUserAction } from "../../store/actions/userActions";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch;
  const [form, setForm] = useState({
    taiKhoan: "",
    matKhau: "",
  });

  const handleChange = (even) => {
    const { name, value } = even.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {

      const result = await loginApi(form);

      localStorage.setItem(
        "USER_INFO_KEY",
        JSON.stringify(result.data.content)
      );

      dispatch(setUserAction(result.data.content));

      navigate("/");

      console.log(result?.data.content);
    } catch (e) {}
  };
  return (
    <div className="w-25 mx-auto py-5">
      <form>
        <div className="form-group">
          <label htmlFor="">Username</label>
          <input
            onChange={handleChange}
            name="taiKhoan"
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Password</label>
          <input
            onChange={handleChange}
            name="matKhau"
            type="text"
            className="form-control"
          />
        </div>
        <button
          type="button"
          onClick={handleSubmit}
          className="btn btn-primary"
        >
          LOGIN
        </button>
      </form>
    </div>
  );
}
