import { Button } from "@/components/button";
import type React from "react";
import { useState } from "react";
import styled from "styled-components";
import { useCreateTicket } from "../hooks/use-create-ticket";

type InputField = {
  Name: string;
  Type: string;
};

const fields: InputField[] = [
  { Name: "Name", Type: "text" },
  { Name: "Email", Type: "email" },
];

type FeedbackProps = {
  chatId: string | undefined;
};

export const Feedback: React.FC<FeedbackProps> = ({ chatId }) => {
  const [formData, setFormData] = useState({ Name: "", Email: "" });
  const [errors, setErrors] = useState({ Name: "", Email: "" });
  const [showFeedback, setShowFeedback] = useState(true);

  const hideFeedback = () => {
    setShowFeedback(false);
  };

  const { mutate } = useCreateTicket(hideFeedback);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let valid = true;
    const newErrors = { Name: "", Email: "" };

    if (!formData.Name) {
      newErrors.Name = "Name is required";
      valid = false;
    }

    if (!formData.Email) {
      newErrors.Email = "Email is required";
      valid = false;
    } else if (!validateEmail(formData.Email)) {
      newErrors.Email = "Invalid email format";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      mutate({
        name: formData.Name,
        email: formData.Email,
        sessionId: chatId,
      });
    }
  };

  if (!showFeedback) {
    return null;
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <label key={index.toString()}>
            <span>{field.Name}</span>
            <input
              type={field.Type}
              name={field.Name}
              value={formData[field.Name as keyof typeof formData]}
              onChange={handleChange}
            />
            {errors[field.Name as keyof typeof errors] && (
              <ErrorMessage>
                {errors[field.Name as keyof typeof errors]}
              </ErrorMessage>
            )}
          </label>
        ))}

        <button type="submit">Submit</button>
      </form>
    </Container>
  );
};

const Container = styled.div`
    margin-top: 1rem;
    form {
        background-color: var(--clr-bg-100);
        border-radius: 6px;
        border-top: 2px solid var(--clr-primary-100);
        padding: 1rem;
        display: grid;
        gap: 1rem;
				color: var(--clr-text-100);
    }
    label {
        display: flex;
        flex-direction: column;
        font-size: 14px;
    }
    input {
        padding: 0.8rem 1rem;
        border: 1px solid var(--clr-bg-400) !important;
        border-radius: 6px;
        font-size: 14px;
				background-color: var(--clr-bg-200);
    }

		button {
			background-color: var(--clr-primary-100);
			color: var(--clr-bg-100);
			border: none;
			border-radius: 6px;
			padding: 0.8rem 1rem;
			font-size: 14px;
			cursor: pointer;
			transition: background-color 0.2s ease-in-out;

			&:hover {
				background-color: var(--clr-primary-200);
			}
		}
`;

const ErrorMessage = styled.span`
    color: red;
    font-size: 12px;
    margin-top: 0.5rem;
`;
