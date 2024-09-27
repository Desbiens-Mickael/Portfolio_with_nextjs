"use client";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendmailer } from "@/lib/sendmailer";
import { zodResolver } from "@hookform/resolvers/zod";
import { useReCaptcha } from "next-recaptcha-v3";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import SubmitButton from "../submit-button";
import SectionComponent from "./section-component";
import TitleSection from "./title-section";

const formSchema = z.object({
  firstname: z.string().min(1, { message: "Veuillez entrer votre nom" }).max(50, { message: "Maximum de 50 caractères" }),
  lastname: z.string().min(1, { message: "Veuillez entrer votre prénom" }).max(50, { message: "Maximum de 50 caractères" }),
  object: z.string().min(1, { message: "Veuillez entrer l'objet de votre mail" }).max(20, { message: "Maximum de 20 caractères" }),
  email: z.string().email({
    message: "Veuillez entrer une adresse email valide",
  }),
  text: z.string().min(1, { message: "Veuillez entrer votre message" }),
});

export default function ContactSection() {
  const [isLoading, setIsLoading] = useState(false);

  // Import 'executeRecaptcha' using 'useReCaptcha' hook
  const { executeRecaptcha } = useReCaptcha();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      object: "",
      email: "",
      text: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsLoading(true);

      // Execute reCAPTCHA with action "contact"
      if (!executeRecaptcha) {
        throw new Error("Recaptcha not loaded");
      }
      const token = await executeRecaptcha("contact");
      if (!token) {
        throw new Error("Recaptcha token is empty");
      }

      // Send mail
      await sendmailer(values, token);
      toast.success("Votre message a bien été envoyé");
    } catch (error) {
      toast.error("Erreur lors de l'envoi du mail");
      console.error(error);
    } finally {
      setIsLoading(false);
      form.reset(); // Form reset can be moved to suit desired behaviour
    }
  }

  return (
    <SectionComponent id="contact" className="pb-14">
      <TitleSection inverse text={"Contact"} />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6">
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel className="hidden">Nom</FormLabel>
                  <FormControl>
                    <Input className="caret-primary placeholder:text-gray-400 dark:placeholder:text-gray-600 bg-white dark:bg-transparent" placeholder="Nom" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel className="hidden">Prénom</FormLabel>
                  <FormControl>
                    <Input className="caret-primary placeholder:text-gray-400 dark:placeholder:text-gray-600 bg-white dark:bg-transparent" placeholder="Prénom" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6">
            <FormField
              control={form.control}
              name="object"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel className="hidden">Objet</FormLabel>
                  <FormControl>
                    <Input className="caret-primary placeholder:text-gray-400 dark:placeholder:text-gray-600 bg-white dark:bg-transparent" placeholder="Objet" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel className="hidden">Email</FormLabel>
                  <FormControl>
                    <Input className="caret-primary placeholder:text-gray-400 dark:placeholder:text-gray-600 bg-white dark:bg-transparent" placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div>
            <FormField
              control={form.control}
              name="text"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel className="hidden">Message</FormLabel>
                  <FormControl>
                    <Textarea className="caret-primary placeholder:text-gray-400 dark:placeholder:text-gray-600 bg-white dark:bg-transparent" placeholder="Message" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="md:hidden text-slate-400 text-[0.6rem] font-extralight mt-2">
              Ce site est protégé par reCAPTCHA et la{" "}
              <a className="text-teal-300" href="https://policies.google.com/privacy">
                Politique de confidentialité{" "}
              </a>{" "}
              et les{" "}
              <a className="text-teal-300" href="https://policies.google.com/terms">
                Conditions d&apos;utilisation{" "}
              </a>{" "}
              de Google s&apos;appliquent.
            </div>
          </div>

          <SubmitButton texte="Envoyer" isLoading={isLoading} />
        </form>
      </Form>
    </SectionComponent>
  );
}
