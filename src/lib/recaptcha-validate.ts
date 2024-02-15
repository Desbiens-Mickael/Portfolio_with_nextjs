"use server";

const recaptchaValidate = async (token: string) => {
  if (!token) {
    throw new Error("Recaptcha token is empty");
  }

  try {
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify ", {
      method: "POST",
      // Utilisez 'application/x-www-form-urlencoded' car c'est le format attendu par Google API.
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      // Encodez les données du corps de la requête en format URL-encoded string.
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    });

    if (!response.ok) {
      throw new Error(`Server responded with ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();

    if (!data.success) {
      throw new Error("Recaptcha token is invalid");
    }

    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Recaptcha validation failed");
  }
};

export default recaptchaValidate;
