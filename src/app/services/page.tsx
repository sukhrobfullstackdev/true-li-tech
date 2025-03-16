"use client";
import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react"
import Link from "next/link";


export default function ServicesPage() {
  const { t } = useLanguage();
  // const industries = [
  //   {
  //     id: "ecommerce",
  //     title: "E-commerce",
  //     description: "Custom e-commerce solutions to boost your online sales",
  //     features: [
  //       "Custom online stores",
  //       "Payment gateway integration",
  //       "Inventory management",
  //       "Mobile shopping experiences",
  //       "Customer analytics",
  //       "Marketing automation",
  //     ],
  //   },
  //   {
  //     id: "healthcare",
  //     title: "Healthcare",
  //     description: "Digital solutions for modern healthcare providers",
  //     features: [
  //       "Patient management systems",
  //       "Telemedicine platforms",
  //       "Health record management",
  //       "Medical appointment scheduling",
  //       "Healthcare analytics",
  //       "Compliance solutions",
  //     ],
  //   },
  //   {
  //     id: "finance",
  //     title: "Finance & Fintech",
  //     description: "Secure and innovative financial technology solutions",
  //     features: [
  //       "Payment processing systems",
  //       "Banking applications",
  //       "Investment platforms",
  //       "Financial analytics dashboards",
  //       "Regulatory compliance",
  //       "Fraud detection systems",
  //     ],
  //   },
  //   {
  //     id: "education",
  //     title: "Education",
  //     description: "Digital learning platforms and educational tools",
  //     features: [
  //       "Learning management systems",
  //       "Virtual classrooms",
  //       "Educational content platforms",
  //       "Student progress tracking",
  //       "Administrative tools",
  //       "Assessment systems",
  //     ],
  //   },
  //   {
  //     id: "realestate",
  //     title: "Real Estate",
  //     description: "Digital solutions for property management and sales",
  //     features: [
  //       "Property listing platforms",
  //       "Virtual property tours",
  //       "Property management systems",
  //       "Real estate CRM solutions",
  //       "Market analysis tools",
  //       "Document management",
  //     ],
  //   },
  //   {
  //     id: "tourism",
  //     title: "Hospitality & Tourism",
  //     description: "Digital experiences for the travel and hospitality industry",
  //     features: [
  //       "Booking systems",
  //       "Travel planning platforms",
  //       "Hotel management software",
  //       "Customer experience solutions",
  //       "Review management",
  //       "Analytics and reporting",
  //     ],
  //   },
  // ]

  const services = [
    {
      title: t("services_page.web_development_title"),
      description: t("services_page.web_development_description"),
      features: [
        t("services_page.web_development_responsive"),
        t("services_page.web_development_powerful"),
        t("services_page.web_development_content"),
        t("services_page.web_development_progressive"),
        t("services_page.web_development_api"),
        t("services_page.web_development_custom")
      ],
    },
    {
      title: t("services_page.mobile_title"),
      description: t("services_page.mobile_description"),
      features: [
        t("services_page.mobile_ios"),
        t("services_page.mobile_android"),
        t("services_page.mobile_cross"),
        t("services_page.mobile_ui"),
        t("services_page.mobile_support"),
        t("services_page.mobile_store"),
      ],
    },
    {
      title: t("services_page.ui_title"),
      description: t("services_page.ui_description"),
      features: [
        t("services_page.ui_research"),
        t("services_page.ui_prototyping"),
        t("services_page.ui_visual"),
        t("services_page.ui_interaction"),
        t("services_page.ui_testing"),
        t("services_page.ui_designs"),
      ],
    },
    {
      title: t("services_page.mvp_title"),
      description: t("services_page.mvp_description"),
      features: [
        t("services_page.mvp_reality"),
        t("services_page.mvp_quick"),
        t("services_page.mvp_ready"),
      ],
    },
    {
      title: t("services_page.erp_title"),
      description: t("services_page.erp_description"),
      features: [
        t("services_page.erp_finance"),
        t("services_page.erp_customer"),
      ],
    },
    {
      title: t("services_page.bots_title"),
      description: t("services_page.bots_description"),
      features: [
        t("services_page.bots_business"),
        t("services_page.bots_orders"),
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-20">
      {/* Hero section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("services_page.title")}</h1>
              <p className="text-xl text-muted-foreground mb-6">
                 {t("services_page.description")}
              </p>
              <Button asChild>
                <Link href="/contact">
                {t("services_page.discuss")} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core services section */}
      <section className="py-20" id="core-services">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("services_page.core_service")}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("services_page.core_service_description")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

{/*       
      <section className="py-20 bg-muted/30" id="industries">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialized solutions for various industries
            </p>
          </div>

          <Tabs defaultValue="ecommerce" className="w-full">
            <TabsList className="flex flex-wrap justify-center mb-8 h-auto bg-transparent">
              {industries.map((industry) => (
                <TabsTrigger
                  key={industry.id}
                  value={industry.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground m-1"
                >
                  {industry.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {industries.map((industry) => (
              <TabsContent key={industry.id} value={industry.id}>
                <div className="grid md:grid-cols-1 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">{industry.title} Solutions</h3>
                    <p className="text-lg text-muted-foreground mb-6">{industry.description}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      {industry.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild>
                      <Link href={`/contact?industry=${industry.id}`}>
                        Get Started <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      Process section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("services.our_process_title")}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("services.our_process_description")}</p>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-primary/20 -translate-y-1/2 hidden lg:block" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  step: 1,
                  title: t("services.process_discovery_title"),
                  description: t("services.process_discovery_description"),
                },
                {
                  step: 2,
                  title: t("services.process_research_title"),
                  description: t("services.process_research_description"),
                },
                {
                  step: 3,
                  title: t("services.process_design_title"),
                  description: t("services.process_design_description"),
                },
                {
                  step: 4,
                  title: t("services.process_developement_title"),
                  description: t("services.process_developement_description"),
                },
                {
                  step: 5,
                  title: t("services.process_testing_title"),
                  description: t("services.process_testing_description"),
                },
                {
                  step: 6,
                  title: t("services.process_launch_title"),
                  description: t("services.process_launch_description"),
                },
              ].map((step) => (
                <div key={step.step} className="relative">
                  <div className="bg-card rounded-lg p-6 h-full border shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                        <span className="font-bold">{step.step}</span>
                      </div>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("cta.title")}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("services_page.free_consultation")}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/contact">
                {t("nav.contact")} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/portfolio">{t("hero.cta.work")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

