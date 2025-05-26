"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

// TypeScript interfaces
interface ScrewType {
  name: string;
  description: string;
}

interface HeadType {
  name: string;
}

interface SlotType {
  name: string;
}

interface SurfaceTreatment {
  plating: string[];
  phosphating: string[];
  others: string[];
}

interface ProductCatalog {
  screwTypes: ScrewType[];
  headTypes: HeadType[];
  slotTypes: SlotType[];
  surfaceTreatments: SurfaceTreatment;
  productionSteps: string[];
  additionalInfo: {
    standards: string[];
    materials: string[];
    specifications: string[];
  };
}

const ProductCatalog: React.FC = () => {
  const [activeTab, setActiveTab] = useState("types");

  const catalog: ProductCatalog = {
    screwTypes: [
      {
        name: "Drywall Screws",
        description:
          "Specifically designed for attaching drywall to wood or metal studs. Features a bugle-shaped head that prevents tearing the drywall paper and is often phosphate-coated to resist corrosion. Market relevance: Lightweight and cost-effective, making them a staple for contractors and DIYers.",
      },
      {
        name: "Chipboard Screws",
        description:
          "Ideal for particleboard and other composite materials, commonly used in furniture manufacturing, cabinetry and carpentry. Deep threads provide a soft grip in softer materials. Market relevance: With the global rise in affordable furniture manufacturing (e.g. flat-pack furniture), chipboard screws remain in high demand for their ability to securely fasten engineered wood products.",
      },
      {
        name: "Collated Screws",
        description:
          "Supplied in strips or coils for use with automatic screw guns, enhancing efficiency in repetitive tasks. Designed for high-volume, repetitive tasks such as installing decking, flooring, or drywall. Market relevance: Automation in construction is on the rise, making collated screws increasingly popular for their time-saving benefits.",
      },
      {
        name: "Self-Drilling Screws",
        description:
          "Equipped with a drill-like point that eliminates the need for pre-drilling, suitable for metal and wood applications. Often coated for corrosion resistance, reducing labor time and increasing productivity. Market relevance: Industries requiring efficiency and precision, such as HVAC, automotive, and metal fabrications.",
      },
      {
        name: "Self-Tapping Screws",
        description:
          "Features sharp cutting edges to create their threads as they are driven into material. Can be used with plastic, wood, or thin metals. Frequently used in assembling electrical components, toys, and appliances. Market relevance: The versatility of self-tapping screws makes them indispensable across multiple sectors, including electronics and consumer goods.",
      },
      {
        name: "Construction Screws",
        description:
          "Heavy-duty screws designed for structural applications. Handle structural loads, commonly longer and thicker, with reinforced threading for better grip. Used for building wooden decks, framing, and other load-bearing structures. Market relevance: The surge in infrastructure projects and residential construction globally boosts the demand for construction screws; essential for professional builders.",
      },
    ],
    headTypes: [
      { name: "Hex Washer Head" },
      { name: "Hex Flange Head" },
      { name: "Pan Head" },
      { name: "Countersunk Head" },
      { name: "Oval Flat Head" },
      { name: "Pan Framing Head" },
      { name: "Bugle Head" },
      { name: "Wafer Head" },
    ],
    slotTypes: [
      { name: "Slotted" },
      { name: "Phillips" },
      { name: "Phillips/Slotted Combination" },
      { name: "Pozi" },
      { name: "Square" },
      { name: "Torx" },
    ],
    surfaceTreatments: {
      plating: [
        "Blue-white Zinc",
        "Yellow Zinc",
        "Black Zinc",
        "Hot-dip Galvanized",
        "Mechanical Galvanized",
        "Nickel Plated",
      ],
      phosphating: ["Black Phosphate", "Gray Phosphate"],
      others: ["Oxidation", "Ruspert Coating", "Paint Coating"],
    },
    productionSteps: [
      "Wire Drawing",
      "Cold Heading",
      "Thread Rolling",
      "Heat Treatment",
      "Surface Treatment",
      "Packaging",
    ],
    additionalInfo: {
      standards: [
        "GB (Chinese Standard)",
        "DIN (German Standard)",
        "ANSI (American Standard)",
        "BS (British Standard)",
      ],
      materials: ["Carbon Steel", "Stainless Steel"],
      specifications: ["Metric (MM)", "American (UNC/UNF)", "British (BSW)"],
    },
  };

  const renderList = (items: string[]) => (
    <div className="grid grid-cols-2 gap-2">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          <ChevronRight className="h-4 w-4 mr-2" />
          <span>{item}</span>
        </div>
      ))}
    </div>
  );

  const CatalogList: React.FC<{
    catalog: ProductCatalog;
    activeTab: string;
    setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  }> = ({ catalog, activeTab, setActiveTab }) => (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <CardTitle className="text-2xl">Product Catalog</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="types">Types</TabsTrigger>
            <TabsTrigger value="heads">Head Types</TabsTrigger>
            <TabsTrigger value="slots">Slot Types</TabsTrigger>
            <TabsTrigger value="surface">Surface</TabsTrigger>
            <TabsTrigger value="production">Production</TabsTrigger>
            <TabsTrigger value="info">Additional Info</TabsTrigger>
          </TabsList>

          <TabsContent value="types">
            <div className="space-y-4 text-center">
              {catalog.screwTypes.map((type, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <h3 className="text-lg font-semibold">{type.name}</h3>
                  <p className="mt-2 text-gray-600">{type.description}</p>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="heads">
            {renderList(catalog.headTypes.map((head) => head.name))}
          </TabsContent>

          <TabsContent value="slots">
            {renderList(catalog.slotTypes.map((slot) => slot.name))}
          </TabsContent>

          <TabsContent value="surface">
            <div className="space-y-6">
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2 text-gray-800">Plating</h3>
                {renderList(catalog.surfaceTreatments.plating)}
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2 text-gray-800">
                  Phosphating
                </h3>
                {renderList(catalog.surfaceTreatments.phosphating)}
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2 text-gray-800">Others</h3>
                {renderList(catalog.surfaceTreatments.others)}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="production">
            <div className="flex flex-col space-y-4">
              {catalog.productionSteps.map((step, index) => (
                <div
                  key={index}
                  className="flex items-center border rounded-lg p-4"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 text-gray-800">
                    {index + 1}
                  </div>
                  <span className="text-lg text-gray-800">{step}</span>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="info">
            <div className="space-y-6">
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2 text-gray-800">Standards</h3>
                {renderList(catalog.additionalInfo.standards)}
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2 text-gray-800">Materials</h3>
                {renderList(catalog.additionalInfo.materials)}
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2 text-gray-800">
                  Specifications
                </h3>
                {renderList(catalog.additionalInfo.specifications)}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );

  return (
    <div className="flex justify-center">
      <CatalogList
        catalog={catalog}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </div>
  );
};

export default ProductCatalog;
