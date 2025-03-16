"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner";
import { CheckCircle2 } from "lucide-react"
import { useLanguage } from "./language-provider"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { t } = useLanguage();
  const formSchema = z.object({
  name: z.string().min(3, {
    message: t("contact_form.name_alert"),
  }),
  phone: z.string().min(9, {
    message: t("contact_form.phone_alert"),
  }),
  message: z.string().optional(),
});
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      message: "",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
  
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
  
      if (!response.ok) {
        throw new Error("Failed to send message");
      }
  
      setIsSubmitted(true);
      toast(t("contact_form.sent"), {
        description: t("contact_form.sent_description"),
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  }  

  if (isSubmitted) {
    return (
      <div className="bg-muted p-8 rounded-lg text-center">
        <div className="flex justify-center mb-4">
          <CheckCircle2 className="h-16 w-16 text-primary" />
        </div>
        <h3 className="text-2xl font-bold mb-2">{t("contact_form.thank_you")}</h3>
        <p className="text-muted-foreground mb-6">{t("contact_form.success_message")}</p>
      </div>
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("contact_form.name")}</FormLabel>
                <FormControl>
                  <Input placeholder={t("contact_form.enter_name")} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
            <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("contact_form.phone")}</FormLabel>
                <FormControl>
                  <Input placeholder={t("contact_form.enter_phone")} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("contact_form.message")}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={t("contact_form.tell_us_more")}
                  className="min-h-[150px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
          {isSubmitting ? t("contact_form.sending") : t("contact_form.send")}
        </Button>
      </form>
    </Form>
  )
}

