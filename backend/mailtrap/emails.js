import { mailtrapClient, sender } from "./mailtrap.config.js";
import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
} from "./emailTemplates.js";

export const sendVerificationEmail = async (email, verificationCode) => {
  const recepient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recepient,
      subject: "Verify Your Email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationCode
      ),
      category: "email-verification",
    });

    console.log("Email sent successfully:", response);
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error(`Error sending email: ${error}`);
  }
};

export const sendWelcomeEmail = async (email, name) => {
  const recepient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recepient,
      template_uuid: "fb333d9e-7780-4463-a976-b9a36e9c3d78",
      template_variables: {
        name: name,
        company_info_name: "Mern Auth",
      },
    });

    console.log("Email sent successfully:", response);
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error(`Error sending email: ${error}`);
  }
};

export const sendResetPasswordEmail = async (email, resetURL) => {
  const recepient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recepient,
      subject: "Reset Your Password",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace(
        "{resetURL}",
        resetURL
      ),
      category: "reset-password",
    });

    console.log("Email sent successfully:", response);
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error(`Error sending email: ${error}`);
  }
};

export const sendResetPasswordSuccessEmail = async (email) => {
  const recepient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recepient,
      subject: "Password Reset Success",  
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
      category: "reset-password-success",
    });       

    console.log("Email sent successfully:", response);
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error(`Error sending email: ${error}`);
  }
};