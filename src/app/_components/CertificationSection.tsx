import { useThemeStore } from "@/stores/themeStore";
import React from "react";
import { certifications } from "../_lib/certifications";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

export default function CertificationSection() {
  const { theme } = useThemeStore();
  const certificationsByYear = certifications.reduce((acc, cert) => {
    const year = cert.year
    if (!acc[year]) acc[year] = []
    acc[year].push(cert)
    return acc
  }, {} as Record<string, typeof certifications>)

  const sortedYears = Object.keys(certificationsByYear).sort().reverse()
  return (
    <section
      id="certifications"
      className="min-h-screen lg:flex items-center justify-center px-10 lg:px-4 py-20"
    >
      <div className="max-w-5xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-800"
            }`}
          >
            Certifications
          </h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto rounded-full"></div>
        </div>
        <div className="space-y-4">
            {sortedYears.map((year) => (
              <div key={year}>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value={`year-${year}`}>
                    <AccordionTrigger
                      className={`backdrop-blur-md border rounded-lg px-6 py-4 transition-all duration-300 hover:no-underline ${
                        theme == 'dark'
                          ? "bg-white/10 border-white/20 hover:bg-white/15 text-white hover:text-pink-400"
                          : "bg-white/40 border-white/40 hover:bg-white/50 text-gray-800 hover:text-pink-600"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="text-2xl font-bold bg-clip-text">
                          {year}
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className={`mt-4 space-y-6 pl-6 pr-6 pb-6 border-l-2 ${theme == 'dark' ? "border-pink-500/30" : "border-pink-300/50"}`}>
                        {certificationsByYear[year].map((cert) => (
                          <div key={cert.title} className="animate-in fade-in-0 slide-in-from-left-2 duration-500">
                            <h3 className="text-lg font-semibold text-pink-600 dark:text-pink-400 mb-1">
                              {cert.title}
                            </h3>
                            <div className={`text-sm mb-2 ${theme == 'dark' ? "text-white/80" : "text-gray-600"}`}>
                              <span className="font-semibold">Issued by: </span>
                              <span className="font-medium">{cert.issuer}</span>
                              <span className={`ml-2 italic ${theme == 'dark' ? "text-white/70" : "text-gray-500"}`}>
                                {cert.month} {cert.year}
                              </span>
                            </div>
                            <a
                              href={cert.credential}
                              className="text-pink-500 hover:text-pink-600 dark:hover:text-pink-400 text-sm underline transition-colors duration-300"
                            >
                              show credential
                            </a>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
}
