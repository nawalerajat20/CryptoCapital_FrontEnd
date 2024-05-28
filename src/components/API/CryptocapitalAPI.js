import axios from "axios";
const baseUrl = "https://cryptocapitalbackend.onrender.com";

const headers = {
  "Content-Type": "application/json",
};

export const Signup = async (signupObject) => {
  try {
    const response = await axios.post(`${baseUrl}/signup`, signupObject, {
      headers,
    });
    console.log(response);
    localStorage.setItem("token", response.data.token);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const loginApi = async (loginObject) => {
  try {
    const response = await axios.post(`${baseUrl}/login`, loginObject, {
      headers: { headers },
    });
    console.log(response);
    localStorage.setItem("token", response.data.token);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const UserInput = async (userObject) => {
  try {
    const response = await axios.post(`${baseUrl}/userInput`, userObject, {
      headers,
    });
    console.log(response);
    localStorage.setItem("token", response.data.token);
    return response;
  } catch (error) {
    console.log(error);
  }
};