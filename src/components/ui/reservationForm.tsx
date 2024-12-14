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
import { HotelFormData } from "@/types";
import { client } from "@/sanity/client";

const formSchema = z.object({
  nom: z.string().min(2, { message: "entrez votre nom." }),
  prenom: z.string().min(2, { message: "entrez votre prénom." }),
  adultes: z.string().min(2, { message: "entrez les noms des adultes." }),
  email: z.string().email({ message: "entrez un email valide." }),
  telephone: z.string().min(2, {
    message: "entrez un sujet valide.",
  }),
  message: z.string(),
});
export default function ReservationForm({
  hotelForm,
  destination,
  voyageForm,
}: {
  hotelForm?: HotelFormData;
  destination: string;
  voyageForm?: string;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nom: "",
      email: "",
      telephone: "",
      prenom: "",
      adultes: "",
      message: "",
    },
  });
  const isLoading = form.formState.isSubmitting;
  const generateHotelFormText = (formData: HotelFormData | null): string => {
    if (!formData) {
      return "null";
    }

    const { dateRange, pension, chambres } = formData;

    const dateRangeText = `Stay duration: ${dateRange.start.toString()} to ${dateRange.end.toString()}`;
    const pensionText = `Pension type: ${pension}`;

    const chambresText = chambres
      .map((chambre) => {
        const adults = chambre.selectedAdults || "Not specified";
        const enfants = chambre.selectedEnfants || "Not specified";
        const litBebe = chambre.selectedLitBebe || "Not specified";
        return `Chambre ${chambre.id}: Adults (${
          adults == "Adulte(s)" ? "0" : adults
        }), Enfants (${enfants == "Enfant(s)" ? "0" : enfants}), Lit(s) Bébé (${
          litBebe == "Lit(s) bébé" ? "0" : litBebe
        })`;
      })
      .join("\n");

    return `${dateRangeText}\n${pensionText}\n${chambresText}`;
  };
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const createPromise = client.create({
      _type: "reservations",
      ...values,
      destination: destination,
    });

    const hotelFormText = hotelForm ? generateHotelFormText(hotelForm) : "";
    const mailText = `Nom: ${values.nom} \n Prénom: ${values.prenom} \nAdultes: ${values.adultes} \nEmail: ${values.email}\n telephone: ${values.telephone}\n Message: ${values.message}`;
    const voyageFormText = voyageForm ? `Voyage: ${voyageForm}` : "";
    const emailPromise = sendEmail({
      text: hotelForm
        ? `${mailText}\n\n${hotelFormText}`
        : `${mailText}\n\n${voyageFormText}`,
      sujet: hotelForm
        ? `Nouveau message de réservation d'Hôtel ${destination}`
        : `Nouveau message de réservation Voyage ${destination}`,
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
        className="flex flex-col md:grid md:grid-cols-2 gap-3 bg-gray-100 p-4 rounded-xl shadow-lg mb-8"
      >
        <h2 className="text-gray-800 text-lg font-semibold col-span-full  ">
          Formulaire de Réservation
        </h2>
        <p className="text-gray-600 text-sm col-span-full mb-8">
          nous allons vous contacter pour confirmer votre réservation.
        </p>
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
          name="adultes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Noms des Adultes</FormLabel>
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
          name="message"
          render={({ field }) => (
            <FormItem className="col-span-full">
              <FormLabel>Message</FormLabel>
              <FormControl>
                <textarea
                  placeholder="Entrez votre choix de tarifs, dates et autres informations ici"
                  {...field}
                  className="resize-none border border-gray-300 rounded-md p-2 w-full h-32"
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
