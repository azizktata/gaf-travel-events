"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { sendEmail } from "@/utils/email";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { client } from "@/sanity/client";

const formSchema = z.object({
  nom: z.string().min(2, { message: "entrez votre nom." }),
  prenom: z.string().min(2, { message: "entrez votre prénom." }),
  email: z.string().email({ message: "entrez un email valide." }),
  telephone: z.string().min(2, {
    message: "entrez un sujet valide.",
  }),
  destination: z.string({ message: "entrez le pays." }),
  visa: z.string({ message: "entrez le type de visa." }),
  passport: z.any().refine((file) => file instanceof File, {
    message: "Veuillez télécharger un fichier valide.",
  }),
});
export default function VisaForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nom: "",
      prenom: "",
      email: "",
      telephone: "",
      destination: "",
      visa: "",
      passport: undefined,
    },
  });
  const isLoading = form.formState.isSubmitting;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    let imageAsset;
    if (values.passport) {
      imageAsset = await client.assets.upload("image", values.passport);
    } else {
      throw new Error("passport file is required.");
    }
    const createPromise = client.create({
      _type: "visa",
      ...values,
      passport: {
        _type: "image",
        asset: {
          _type: "reference",
          _ref: imageAsset._id,
        },
      },
    });

    const mailText = `Nom: ${values.nom} \nPrénom: ${values.prenom} \nEmail: ${values.email}\n Télephone: ${values.telephone}\n visa: ${values.visa}`;
    const emailPromise = sendEmail({
      text: mailText,
      sujet: "Nouveau message de demande de visa",
      email: values.email,
    });
    const [ress, res] = await Promise.all([createPromise, emailPromise]);
    if (res?.success && ress) {
      toast.success("Votre message a été envoyé avec succès.");
      form.reset();
    } else {
      toast.error(res?.message);
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" flex flex-col md:grid md:grid-cols-2 gap-3 bg-gray-100 p-4"
      >
        <h2 className="text-gray-800 text-lg font-semibold col-span-full mb-8 ">
          Formulaire de Demande de Visa
        </h2>
        <FormField
          control={form.control}
          name="nom"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Votre Nom</FormLabel>
              <FormControl>
                <Input className="bg-white" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="prenom"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Votre prénom</FormLabel>
              <FormControl>
                <Input className="bg-white" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Votre mail</FormLabel>
              <FormControl>
                <Input className="bg-white" type="email" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="telephone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Télephone</FormLabel>
              <FormControl>
                <Input className="bg-white" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="destination"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pays</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="bg-white">
                      <SelectValue placeholder="Select le pays" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="USA">USA</SelectItem>
                    <SelectItem value="France">France</SelectItem>
                    <SelectItem value="Portugal">Allemagne</SelectItem>
                    <SelectItem value="Allemagne">Portugal</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="visa"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type de visa</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="bg-white">
                      <SelectValue placeholder="Select le type de visa" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Visa de transit">
                      Visa de transit
                    </SelectItem>
                    <SelectItem value="Visa de travail">
                      Visa de travail
                    </SelectItem>
                    <SelectItem value="Visa touristiques">
                      Visa touristiques
                    </SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="passport"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Photo de passport</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  className="bg-white"
                  onChange={(e) => field.onChange(e.target.files?.[0])}
                  onBlur={field.onBlur}
                  name={field.name}
                  ref={field.ref}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="col-span-full py-7 text-lg mt-8 bg-[#00a0f4] hover:bg-[#007bb2] text-white"
          disabled={isLoading}
          type="submit"
        >
          {isLoading ? (
            "encours..."
          ) : (
            <>
              envoyer
              <Send size={24} />
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
