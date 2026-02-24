import {
  Rocket,
  Briefcase,
  Code,
  TrendingUp,
  UserCheck,
  Building2,
} from "lucide-react";

import SectionTitle from '@/components/SectionTitle';


const users = [
  {
    title: "Startup Founders",
    description:
      "Handle partnership, investor, and sales outreach faster without overthinking replies.",
    icon: Rocket,
  },
  {
    title: "Freelancers",
    description:
      "Politely decline low-quality offers or negotiate better deals in seconds.",
    icon: Briefcase,
  },
  {
    title: "Developers",
    description:
      "Send professional replies without wasting time drafting emails.",
    icon: Code,
  },
  {
    title: "Sales Professionals",
    description:
      "Respond to inbound cold pitches instantly with short, clear replies.",
    icon: TrendingUp,
  },
  {
    title: "Consultants",
    description:
      "Stay confident, concise, and polished in every email response.",
    icon: UserCheck,
  },
  {
    title: "Busy Executives",
    description:
      "Save 10+ minutes daily while maintaining a professional tone.",
    icon: Building2,
  },
];

export default function UseCases() {
  return (
    <section className="">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <SectionTitle title='Who Uses ColdReply?' description='Professionals who receive cold emails daily and value their time.' />

        {/* Cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-2">

          {users.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex gap-6 items-start p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition"
              >
                {/* Icon Circle */}
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-100 shrink-0">
                  <Icon className="w-6 h-6 text-neutral-700" />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-base font-medium">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}

        </div>

        {/* Bottom Line */}
        <div className="text-center mt-15">
          <p className="text-base font-medium">
            If you receive cold emails regularly, ColdReply is built for you.
          </p>
        </div>

      </div>
    </section>
  );
}