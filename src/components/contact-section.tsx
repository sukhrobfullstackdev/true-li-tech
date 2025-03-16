"use client";
import ContactForm from "@/components/contact-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, MessageSquareText, Phone } from "lucide-react"
import { useLanguage } from "./language-provider";

const ContactSection = () => {
    const { t } = useLanguage();
return (
<section className="section">
        <div className="container">
          <h2 className="section-title">{t("contact.get_intouch")}</h2>
          <p className="section-subtitle">{t("contact.description")}</p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <div>
              <Card>
                <CardHeader>
                  <CardTitle>{t("contact.contact_info")}</CardTitle>
                  <CardDescription>{t("contact.contact_info_description")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">

                    <div className="flex items-center">
                      <Phone className="h-5 w-5 mr-3 text-primary shrink-0" />
                      <div>
                        <h3 className="font-medium">{t("contact.telephone")}</h3>
                        <a href="tel:+998903356910" className="text-muted-foreground hover:text-primary transition">
      +998 90 335 69 10
    </a>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <MessageSquareText className="h-5 w-5 mr-3 text-primary shrink-0" />
                      <div>
                        <h3 className="font-medium">{t("contact.telegram")}</h3>
                        <a href="https://t.me/truelitech" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition">
      @truelitech
    </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 mr-3 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-medium">{t("contact.address")}</h3>
                        <p className="text-muted-foreground">
                          Taras Shevchenko 21A
                          <br />
                          Tashkent
                          <br />
                          Uzbekistan
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>{t("contact.send_us_message")}</CardTitle>
                  <CardDescription>{t("contact.send_description")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>

           
          </div>
        </div>
      </section>
);
}
export default ContactSection;