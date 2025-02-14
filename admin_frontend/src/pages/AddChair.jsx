import { useState } from "react";
import axios from "axios";

function AddChair() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    idNo: "",
    username: "",
    password: "",
    role: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:9000/api/chairs/add",
        formData
      );
      setSuccessMessage("Chair added successfully!");
      setErrorMessage("");
      console.log("Response:", response.data);
      // Reset form fields
      setFormData({
        firstName: "",
        lastName: "",
        idNo: "",
        username: "",
        password: "",
        role: "",
      });
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || "An error occurred while adding the chair."
      );
      setSuccessMessage("");
      console.error("Error adding advisor:", error.message);
    }
  };

  return (
    <div className="p-4 max-w-lg mx-auto border rounded-lg shadow-md">
      <h1 className="text-xl font-bold mb-4">Add Chair</h1>
      {successMessage && (
        <div className="bg-green-100 text-green-800 p-2 mb-4 rounded">
          {successMessage}
        </div>
      )}
      {errorMessage && (
        <div className="bg-red-100 text-red-800 p-2 mb-4 rounded">
          {errorMessage}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <input
          className="w-full p-2 border rounded mb-2"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
          required
        />
        <input
          className="w-full p-2 border rounded mb-2"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          required
        />
        <input
          className="w-full p-2 border rounded mb-2"
          name="idNo"
          value={formData.idNo}
          onChange={handleChange}
          placeholder="ID Number"
          required
        />
        <input
          className="w-full p-2 border rounded mb-2"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
          required
        />
        <input
          className="w-full p-2 border rounded mb-2"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
      
        <input
          className="w-full p-2 border rounded mb-2"
          name="role"
          value={formData.role}
          onChange={handleChange}
          placeholder="role"
          required
        />
        
        <button
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          type="submit"
        >
          Add Chair
        </button>
      </form>
    </div>
  );
}

export default AddChair;
