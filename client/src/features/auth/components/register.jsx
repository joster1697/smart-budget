import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {

  const navigate = useNavigate();
  //Estado para campos de formulario
  const [formData, setformData] = useState({
    username: "",
    email: "",
    password: "",
  });

  //Estado para errores de validacion
  const [errors, setErrors] = useState({});

  //Manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value,
    });
  };

  //Validar el Formulario
  const validateForm = () => {
    const newErrors = {};
    if (!formData.username)
      newErrors.username = "El campo Username es necesario";
    if (!formData.email) {
      newErrors.email = "El campo Email es necesario";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email no valido";
    }
    if (!formData.password) {
      newErrors.password = "El campo Password es necesario";
    } else if (!formData.password.length < 5) {
      newErrors.password = "La contrasena debe tener 5 o mas caracteres";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Formulario Enviado:", formData);
      navigate("/register");
    }
  };

  return (
    <>
      <div className="">
        <div className="text-center bg-white text-black p-10 rounded-tl-lg rounded-tr-lg ">
          <h1>
            <em>Register to Smart</em>
            <span className="text-blue-600 font-bold">
              <em>Budget</em>
            </span>
            !
          </h1>
        </div>

        <main className="bg-blue-600 p-5 rounded-bl-lg rounded-br-lg">
          <form onSubmit={handleSubmit}>
            <div className=" flex flex-col">
              <label
                className="m-2 text-lg text-left font-bold"
                htmlFor="username"
              >
                - Username:
              </label>
              <input
                className="m-2 border-2 p-2 border-white rounded-md bg-white text-black"
                type="text"
                id="username"
                name="username"
                placeholder=" Enter your username"
                onChange={handleChange}
                value={formData.username}
              />
              {errors.username && (
                <span className="error">{errors.username}</span>
              )}
              <label
                className="m-2 text-lg text-left font-bold"
                htmlFor="email"
              >
                - Email:
              </label>
              <input
                className="m-2 border-2 p-2 border-white rounded-md bg-white text-black"
                type="email"
                id="email"
                name="email"
                placeholder=" Enter your email"
                onChange={handleChange}
                value={formData.email}
              />
              {errors.email && <span className="error">{errors.email}</span>}
              <label
                className="m-2 text-lg text-left font-bold"
                htmlFor="password"
              >
                - Password:
              </label>
              <input
                className="m-2 border-2 p-2 border-white rounded-md bg-white text-black shadow-lg"
                type="password"
                id="password"
                name="password"
                placeholder=" Create a password"
                onChange={handleChange}
                value={formData.password}
              />
              {errors.password && (
                <span className="error">{errors.password}</span>
              )}
            </div>
            <div className="mt-3">
              <button
                type="submit"
                className="w-full text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5"
              >
                Create Account
              </button>
            </div>
          </form>
        </main>
      </div>
    </>
  );
}
