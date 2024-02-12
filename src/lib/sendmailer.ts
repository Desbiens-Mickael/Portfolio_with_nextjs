"use server";

import nodemailer from "nodemailer";
import { Mailer } from "@/types/types";
import { render } from "@react-email/components";
import TemplateEmail from "@/emails/Template-email";

const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAILER_FROM_ADDRESS, MAILER_TO_ADDRESS, NODE_ENV } = process.env;

let transporter: nodemailer.Transporter;

if (NODE_ENV === "production") {
  transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT as unknown as number,
    secure: true, // true for 465, false for other ports
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });
} else {
  // Pour le dev sous Docker
  transporter = nodemailer.createTransport({
    host: "mailhog",
    port: 1025,
    secure: false,
  });
}

export async function sendmailer(props: Mailer) {
  const mailOptions = {
    from: MAILER_FROM_ADDRESS, // L'adresse d'envoi
    to: MAILER_TO_ADDRESS, // Le destinataire
    subject: props.object,
    text: props.text,
    html: render(TemplateEmail({ ...props })),
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email :", error);
    throw new Error("Échec de l'envoi de l'email.");
  }
}
