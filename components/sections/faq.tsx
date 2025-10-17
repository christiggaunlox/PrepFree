"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    q: "Alright, but what exactly do you do?",
    a: "We simulate realistic interviews using AI, deliver detailed feedback, and provide targeted practice to help you convert interviews into offers.",
  },
  {
    q: "I don’t need a brand strategist but I need help executing an upcoming campaign. Can we still work together?",
    a: "Yes—use Prepfree to practice specific interviews, roles, or question types. Configure difficulty, upload a JD, and drill down on weak areas.",
  },
  {
    q: "Are your rates competitive?",
    a: "You can start free. Paid plans unlock unlimited practice, detailed reporting, and personalized guidance at a fraction of coaching costs.",
  },
  {
    q: "Why do you have a monthly project cap?",
    a: "We optimize for quality practice and measurable progress. A monthly cap ensures enough time to iterate between sessions for real improvement.",
  },
]

export function Faq() {
  return (
    <div id="faq" className="mx-auto max-w-4xl">
      <h2 className="text-pretty text-center text-2xl font-semibold md:text-4xl">FAQ</h2>
      <p className="mt-2 font-light text-sm text-center py-4">
        Join thousands of successful students who transformed their careers with PrepFree
      </p>
      <Accordion type="single" collapsible className="mt-6">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="p-4 border-b data-[state=open]:bg-[#E4FFF0] transition colour">
            <AccordionTrigger className="text-2xl flex justify-start gap-8 no-underline hover:no-underline focus:no-underline border-none text-left">
              <span className="font-semibold text-gray-500 shrink-0 text-3xl">0{i + 1}</span>
              <span className="text-left">{f.q}</span>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
