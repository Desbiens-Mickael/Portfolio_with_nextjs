"use client";

import React, { createContext, useState } from "react";

// Création du contexte
const NavbarContext = createContext({ activeSection: "", setActiveSection: (sectionId: string) => {} });

export function NavbarProvider({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState("");

  // Fournisseur de contexte avec état et fonction de mise à jour
  return <NavbarContext.Provider value={{ activeSection, setActiveSection }}>{children}</NavbarContext.Provider>;
}

export default NavbarContext;
