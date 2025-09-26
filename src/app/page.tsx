"use client";

import { useState } from "react";
import { ChevronRight, Users, Brain, Calendar, BarChart3, FileText } from "lucide-react";
import Link from "next/link";

interface TeamMember {
  id: string;
  name: string;
  initials: string;
  role: string;
  roleColor: string;
  responsibilities: string[];
  status: "available" | "coming-soon";
  hasAI: boolean;
}

const teamMembers: TeamMember[] = [
  {
    id: "yasser",
    name: "Yasser Omar Zaki Shaaban",
    initials: "YS",
    role: "DIRECTOR",
    roleColor: "bg-gray-800 text-white",
    responsibilities: ["Strategic Planning", "Market Analysis"],
    status: "available",
    hasAI: true,
  },
  {
    id: "elham",
    name: "Elham Husain Al Hammadi",
    initials: "EH",
    role: "SENIOR MANAGER",
    roleColor: "bg-purple-100 text-purple-800",
    responsibilities: ["Enterprise Sales", "Solution Architecture"],
    status: "coming-soon",
    hasAI: false,
  },
  {
    id: "fawzia",
    name: "Fawzia Abdalla",
    initials: "FA",
    role: "SENIOR MANAGER",
    roleColor: "bg-purple-100 text-purple-800",
    responsibilities: ["Digital Transformation", "Customer Success"],
    status: "coming-soon",
    hasAI: false,
  },
  {
    id: "khalid",
    name: "Khalid Riyad Badah",
    initials: "KB",
    role: "SENIOR MANAGER",
    roleColor: "bg-purple-100 text-purple-800",
    responsibilities: ["Technical Solutions", "Product Management"],
    status: "coming-soon",
    hasAI: false,
  },
  {
    id: "stela",
    name: "Stela Paneva",
    initials: "SP",
    role: "SENIOR MANAGER",
    roleColor: "bg-purple-100 text-purple-800",
    responsibilities: ["Marketing Strategy", "Brand Management"],
    status: "coming-soon",
    hasAI: false,
  },
  {
    id: "fadhal",
    name: "Fadhal Abdul Majeed",
    initials: "FM",
    role: "MANAGER",
    roleColor: "bg-blue-100 text-blue-800",
    responsibilities: ["Operations Management", "Process Optimization"],
    status: "coming-soon",
    hasAI: false,
  },
  {
    id: "lina",
    name: "Lina Owis",
    initials: "LO",
    role: "MANAGER",
    roleColor: "bg-blue-100 text-blue-800",
    responsibilities: ["Account Management", "Customer Relations"],
    status: "coming-soon",
    hasAI: false,
  },
  {
    id: "sara",
    name: "Sara Mostafa",
    initials: "SM",
    role: "MANAGER",
    roleColor: "bg-blue-100 text-blue-800",
    responsibilities: ["Project Coordination", "Team Management"],
    status: "coming-soon",
    hasAI: false,
  },
  {
    id: "mohammad",
    name: "Mohammad Malkawi",
    initials: "MM",
    role: "SPECIALIST",
    roleColor: "bg-green-100 text-green-800",
    responsibilities: ["Technical Support", "Implementation"],
    status: "coming-soon",
    hasAI: false,
  },
];

const navigation = [
  { name: "Agents", href: "/agents", icon: Brain },
  { name: "e& Website", href: "https://www.etisalat.ae/en/business", icon: ChevronRight, external: true },
  { name: "Planner", href: "/planner", icon: Calendar },
  { name: "Melo Method", href: "/method", icon: FileText },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
];

export default function HomePage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const handleMemberClick = (member: TeamMember) => {
    if (member.status === "available") {
      setSelectedMember(member);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-xl font-bold text-gray-900">e& GTM Director Portal</h1>
                <p className="text-sm text-gray-500">This project was created by mrmelo.com</p>
              </div>
            </div>
            
            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>

            {/* User Profile */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-gray-600 flex items-center justify-center">
                  <span className="text-xs font-medium text-white">YS</span>
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-medium text-gray-900">Yasser Omar Zaki Shaaban</p>
                  <p className="text-xs text-gray-500">DIRECTOR</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">GTM Team Directory</h2>
          <p className="text-gray-600">Select a team member to access their AI assistant for specialized support.</p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              onClick={() => handleMemberClick(member)}
              className={`bg-white rounded-lg border border-gray-200 p-6 cursor-pointer transition-all duration-200 hover:shadow-md ${
                member.status === "available" 
                  ? "hover:border-blue-300 hover:shadow-lg" 
                  : "opacity-75 cursor-not-allowed"
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                    <span className="text-sm font-medium text-gray-600">{member.initials}</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 text-sm">{member.name}</h3>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${member.roleColor}`}>
                      {member.role}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-2">Responsibilities:</p>
                <div className="flex flex-wrap gap-1">
                  {member.responsibilities.map((resp, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-gray-100 text-gray-700"
                    >
                      {resp}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                    member.status === "available"
                      ? "bg-green-100 text-green-800"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {member.status === "available" ? "AI AVAILABLE" : "COMING SOON"}
                </span>
                {member.status === "available" && (
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                )}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-sm text-gray-500">Created by mrmelo.com</p>
        </div>
      </footer>
    </div>
  );
}