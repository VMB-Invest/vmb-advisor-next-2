"use client";

import ContactLocalForm from "@/components/ContactLocalForm";
import { submitContactForm } from "@/app/actions/contato";

export default function LocalContactSection() {
  return <ContactLocalForm onSubmit={submitContactForm} />;
}
