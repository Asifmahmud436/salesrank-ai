import { useState } from "react"
import { Minus, Plus } from "lucide-react"

export default function FAQAccordion() {
  const [openItems, setOpenItems] = useState([1, 2])

  const toggleItem = (index) => {
    setOpenItems((prevOpenItems) =>
      prevOpenItems.includes(index) ? prevOpenItems.filter((item) => item !== index) : [...prevOpenItems, index],
    )
  }

  const faqItems = [
    {
      number: "01",
      question: "Why should I choose Humestic?",
      answer:
        "Bottleneck mice my capacity is full, nor incentivization we need to start advertising on social media, or helicopter view, for what the. Let's put a pin in that we need to build it so that it scales, are there any leftovers in the kitchen?, if you're not hurting you're not winning loop back",
    },
    {
      number: "02",
      question: "I like your works, how do we start a project?",
      answer:
        "We begin with a discovery call to understand your needs and goals. From there, we'll provide a detailed proposal outlining our approach, timeline, and investment required. Once approved, we'll kick off the project with a collaborative workshop session.",
    },
    {
      number: "03",
      question: "What info is required to get a quotation?",
      answer:
        "To provide an accurate quotation, we need to understand your project scope, timeline, and specific requirements. The more details you can share about your business goals and expectations, the more precise our quotation will be.",
    },
  ]

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white">
      <div className="mb-8">
        <p className="text-sm text-gray-500 mb-2">Frequently asked <br />questions</p>
        <h2 className="text-2xl lg:text-4xl text-center w-full lg:max-w-[920px]">Constant collaboration is how we <br />roll. Let's see if we are a good fit.</h2>
      </div>

      <div className="space-y-6">
        {faqItems.map((item, index) => (
          <div key={index} className="border-b border-gray-200 pb-6">
            <div className="flex items-start justify-between cursor-pointer" onClick={() => toggleItem(index)}>
              <div className="flex gap-4">
                <span className="text-amber-600 font-medium">{item.number}</span>
                <h3 className="text-lg font-medium">{item.question}</h3>
              </div>
              <button className="mt-1 flex-shrink-0">
                {openItems.includes(index) ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
              </button>
            </div>
            {openItems.includes(index) && (
              <div className="mt-2 ml-10 text-gray-600">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
