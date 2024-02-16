"use server";

const recaptchaValidate = async (token: string) => {
  if (!token) {
    throw new Error("Recaptcha token is empty");
  }

  try {
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify ", {
      method: "POST",
      // Use 'application/x-www-form-urlencoded' as this is the format expected by Google API.
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      // Encode the data in the request body in URL-encoded string format.
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    });

    if (!response.ok) {
      throw new Error(`Server responded with ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();

    if (!data.success || data.score < 0.5) {
      throw new Error("Recaptcha token is invalid");
    }

    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Recaptcha validation failed");
  }
};

export default recaptchaValidate;
