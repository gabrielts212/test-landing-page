import { useState } from "react";
import { setCookie } from "cookies-next";
import { useRouter } from "next/router";

const Login = () => {
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
      const response = await fetch(`/api/user/loginn`, {
        method: "POST",
        body: JSON.stringify(formData),
      });

      const json = await response.json();
      if (response.status !== 200) throw new Error(json.message || json);
      setCookie("authorization", json);
      router.push("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center relative bg-gray-900 text-white">
      <div className="bg-black bg-opacity-90 rounded-md max-w-md p-10 border border-gray-700 shadow-lg">
        <h2 className="text-3xl font-semibold mb-6 text-green-500">
          Faça login na sua conta
        </h2>
        <form onSubmit={handleForm} className="space-y-4">
          <div className="mb-4">
            <label htmlFor="name" className="text-base text-white block">
              Nome de Usuário
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={(event) => handleFormEdit(event, "name")}
              placeholder="Nome de Usuário"
              className="bg-gray-800 text-white w-full p-3 rounded focus:outline-none focus:ring focus:border-green-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="text-base text-white block">
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
            Entrar
          </button>
        </form>
        <a
          href="/registerpage"
          className="block mt-4 text-green-500 hover:text-green-400 text-base"
        >
          Ainda não tem uma conta? Cadastre-se
        </a>
      </div>
    </div>
  );
};

export default Login;
