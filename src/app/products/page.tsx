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
        name: "Self Drilling Screw",
        description:
          "Also known as drill point screw or self-drilling tapping screw. Generally has self-tapping threads (BSD thread). Unlike regular screws, the tip is not pointed but resembles a drill bit, allowing it to drill its own hole.",
      },
      {
        name: "Self Tapping Screw",
        description:
          "A threaded fastener that forms its own thread when driven into a pre-drilled hole in metal or non-metal materials.",
      },
      {
        name: "Drywall Screw",
        description:
          "Main characteristic is the bugle head design. Available in double-thread fine pitch for metal studs up to 0.8mm thick, and single-thread coarse pitch for wooden studs.",
      },
      {
        name: "Chipboard Screw",
        description:
          "Primarily used for connections between wooden boards or between wooden boards and thin steel plates. Available in many specifications. Standard: DIN7505",
      },
      {
        name: "Machine Screw",
        description:
          "Mainly used for fastening connections between a threaded hole component and a component with a through hole.",
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
                  <p className="mt-2 text-gray-400">{type.description}</p>
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
                <h3 className="font-semibold mb-2">Plating</h3>
                {renderList(catalog.surfaceTreatments.plating)}
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Phosphating</h3>
                {renderList(catalog.surfaceTreatments.phosphating)}
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Others</h3>
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
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    {index + 1}
                  </div>
                  <span className="text-lg">{step}</span>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="info">
            <div className="space-y-6">
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Standards</h3>
                {renderList(catalog.additionalInfo.standards)}
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Materials</h3>
                {renderList(catalog.additionalInfo.materials)}
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Specifications</h3>
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
