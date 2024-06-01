import { useState } from "react";
import { useRouter } from "next/router";
import { setCookie } from "cookies-next";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const [error, setError] = useState("");
  const router = useRouter();

  const handleFormEdit = (event, name) => {
    setFormData({
      ...formData,
      [name]: event.target.value,
    });
  };

  const handleForm = async (event) => {
    try {
      event.preventDefault();
      const response = await fetch(`/api/user/registerr`, {
        method: "POST",
        body: JSON.stringify(formData),
      });

      const json = await response.json();
      if (response.status !== 201) throw new Error(json);
      setCookie("authorization", json);
    
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center relative bg-gray-900 text-white">
    <div className="bg-black bg-opacity-90 rounded-md max-w-md p-10 border border-gray-700 shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-green-500">
        Crie sua conta
      </h2>
      <form onSubmit={handleForm} className="space-y-4">
        <div className={`form-control ${error ? "is-invalid" : ""}`}>
          <label htmlFor="name" className="text-white">
            Nome de Usuário
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => handleFormEdit(e, "name")}
            placeholder="Digite seu Nome"
            className="bg-gray-800 text-white w-full p-3 rounded focus:outline-none focus:ring focus:border-green-500"
            required
          />
        </div>
        <div className={`form-control ${error ? "is-invalid" : ""}`}>
          <label htmlFor="password" className="text-white">
            Senha
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={(event) => handleFormEdit(event, "password")}
            placeholder="Digite sua Senha"
            className="bg-gray-800 text-white w-full p-3 rounded focus:outline-none focus:ring focus:border-green-500"
            required
          />
          {error && <p className="text-red-500">{error}</p>}
        </div>

        <button
          type="submit"
          className="bg-green-500 text-white w-full p-3 rounded hover:bg-green-600 focus:outline-none focus:ring focus:border-green-500"
        >
          Cadastrar
        </button>
      </form>
      <a href="/loginpage" className="block mt-4 text-green-500 hover:text-green-400 pl-1">
        Já possui uma conta?
      </a>
    </div>
  </div>
  );
};

export default Register;
