import axios from "axios";

const API_URL = "http://localhost:8090/product/getAll";
let token =
  "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJoeWRQSVNNQjdqZkhaYzMtNWRDSE52bkFIWUJNblVJRkJjRTJXcm9DdGQ0In0.eyJleHAiOjE2OTgzNTg5MDUsImlhdCI6MTY5ODM1ODYwNSwianRpIjoiMzc1ZTFmYTktN2NjZC00OTNlLWE0YmYtZmRmNmYxZjQ5YmNkIiwiaXNzIjoiaHR0cDovL2tleWNsb2FrOjgwODAvcmVhbG1zL01pY3JvU2VydmljZSIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiI0OWFmMjAzNS1iYjY4LTRkYmYtYTk3Ny03ZmNlMWFhOWU5NzEiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJPZmZlck1pY3JvU2VydmljZSIsInNlc3Npb25fc3RhdGUiOiJiZmQ2MTZlZS1hYWViLTRlYTctYmY0MC01YTMzNGEzMDNjOTMiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MSJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLW1pY3Jvc2VydmljZSIsInVtYV9hdXRob3JpemF0aW9uIiwidXNlciJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJzaWQiOiJiZmQ2MTZlZS1hYWViLTRlYTctYmY0MC01YTMzNGEzMDNjOTMiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInByZWZlcnJlZF91c2VybmFtZSI6InVzZXIifQ.mqQqQaohpEv8UrAziuHjldPAvIJmzdf8cKRidrWkyFFCOqwBqBl5e34LuDzs77O9Fx6r-zXgtuwV4d-EXSM6HaQcCsPRi0ZNcg1Wete3mZ8aAMHbjcNj4vlOi8eG7h1w9Cx94HuqcDq0Z6pAH2C9lbsxMwmkWwrREU9DUhhWfSZ5NtMKZbMsR5Tc-ROWfsgLts13JlkR16XZmzulQxUdA2EizEpcWPF3fLYBQlX1GjCWLBIof0uJFTEoiVwxgJOMoSz4JCJ222wbw-4cRg8wy00QeFzT_GhyEuvPELYmTx6NWL4M4FW9bApN_Kmrp-XF0PIgjfk8oa_yCgHrX7ZJKQ";
export const getProducts = async () => {
  try {
    const headers = {
      Authorization: `Bearer ${token} `, // Assuming it's a Bearer token
    };

    const response = await axios.get(API_URL, { headers });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const DeleteProduct = async (id) => {
  try {
    const headers = {
      Authorization: `Bearer ${token} `, // Assuming it's a Bearer token
    };
    const response = await axios.delete(
      "http://localhost:8090/product/deleteProduct/" + id,
      {
        headers,
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
