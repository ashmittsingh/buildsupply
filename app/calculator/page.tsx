"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Select from "@/components/Select";
import { calculatorFormulas, calculateMaterial, calculateMaterialWithBags } from "@/data/formulas";
import { categories } from "@/data/products";

interface CalculationResult {
  productName: string;
  area: number;
  coverageRate: number;
  quantity: number;
  bags?: number;
  unit: string;
  wastagePercentage: number;
}

export default function Calculator() {
  // Input states
  const [calculationType, setCalculationType] = useState<"dimensions" | "area">(
    "dimensions"
  );
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [totalArea, setTotalArea] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [wastage, setWastage] = useState("5");

  // Results state
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Get formulas for selected category
  const categoryFormulas = selectedCategory
    ? calculatorFormulas.filter((f) => f.category === selectedCategory)
    : [];

  // Get selected formula
  const selectedFormula = selectedProduct
    ? calculatorFormulas.find((f) => f.id === selectedProduct)
    : null;

  // Validate and calculate
  const handleCalculate = () => {
    const newErrors: Record<string, string> = {};

    // Validate inputs
    if (!selectedCategory) {
      newErrors.category = "Please select a category";
    }
    if (!selectedProduct) {
      newErrors.product = "Please select a product";
    }

    let calculatedArea = 0;
    if (calculationType === "dimensions") {
      if (!length || isNaN(Number(length)) || Number(length) <= 0) {
        newErrors.length = "Please enter a valid length";
      }
      if (!width || isNaN(Number(width)) || Number(width) <= 0) {
        newErrors.width = "Please enter a valid width";
      }
      if (!newErrors.length && !newErrors.width) {
        calculatedArea = Number(length) * Number(width);
      }
    } else {
      if (!totalArea || isNaN(Number(totalArea)) || Number(totalArea) <= 0) {
        newErrors.area = "Please enter a valid area";
      } else {
        calculatedArea = Number(totalArea);
      }
    }

    if (!wastage || isNaN(Number(wastage)) || Number(wastage) < 0) {
      newErrors.wastage = "Please enter a valid wastage percentage";
    }

    setErrors(newErrors);

    // If no errors, calculate
    if (Object.keys(newErrors).length === 0 && selectedFormula) {
      const wastagePercentage = Number(wastage);
      let calculationResult: CalculationResult;

      if (selectedFormula.bagsPerUnit) {
        const calc = calculateMaterialWithBags(
          calculatedArea,
          selectedFormula.coverageRate,
          selectedFormula.bagsPerUnit,
          wastagePercentage
        );
        calculationResult = {
          productName: selectedFormula.productName,
          area: calculatedArea,
          coverageRate: selectedFormula.coverageRate,
          quantity: calc.quantity,
          bags: calc.bags,
          unit: selectedFormula.unit,
          wastagePercentage,
        };
      } else {
        const calc = calculateMaterial(
          calculatedArea,
          selectedFormula.coverageRate,
          wastagePercentage
        );
        calculationResult = {
          productName: selectedFormula.productName,
          area: calculatedArea,
          coverageRate: selectedFormula.coverageRate,
          quantity: calc.quantity,
          unit: selectedFormula.unit,
          wastagePercentage,
        };
      }

      setResult(calculationResult);
    }
  };

  const handleReset = () => {
    setCalculationType("dimensions");
    setLength("");
    setWidth("");
    setTotalArea("");
    setSelectedCategory("");
    setSelectedProduct("");
    setWastage("5");
    setResult(null);
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Material Coverage Calculator
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 sm:text-xl">
            Calculate the exact quantity of materials needed for your project with our advanced formula-based calculator
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Input Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full">
                <h2 className="text-2xl font-bold text-gray-900">
                  Calculate Your Needs
                </h2>

                <div className="mt-6 space-y-6">
                  {/* Calculation Type Selector */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      How would you like to specify area?
                    </label>
                    <div className="mt-3 flex gap-4">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          value="dimensions"
                          checked={calculationType === "dimensions"}
                          onChange={(e) =>
                            setCalculationType(e.target.value as "dimensions" | "area")
                          }
                          className="h-4 w-4"
                        />
                        <span className="text-sm text-gray-700">
                          Length & Width
                        </span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          value="area"
                          checked={calculationType === "area"}
                          onChange={(e) =>
                            setCalculationType(e.target.value as "dimensions" | "area")
                          }
                          className="h-4 w-4"
                        />
                        <span className="text-sm text-gray-700">
                          Total Area
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Dimensions or Area Input */}
                  {calculationType === "dimensions" ? (
                    <>
                      <Input
                        label="Length (meters)"
                        type="number"
                        value={length}
                        onChange={(e) => {
                          setLength(e.target.value);
                          if (errors.length) {
                            setErrors({ ...errors, length: "" });
                          }
                        }}
                        placeholder="e.g., 5"
                        error={errors.length}
                        helperText="Enter the length of your space in meters"
                      />
                      <Input
                        label="Width (meters)"
                        type="number"
                        value={width}
                        onChange={(e) => {
                          setWidth(e.target.value);
                          if (errors.width) {
                            setErrors({ ...errors, width: "" });
                          }
                        }}
                        placeholder="e.g., 4"
                        error={errors.width}
                        helperText="Enter the width of your space in meters"
                      />
                    </>
                  ) : (
                    <Input
                      label="Total Area (square meters)"
                      type="number"
                      value={totalArea}
                      onChange={(e) => {
                        setTotalArea(e.target.value);
                        if (errors.area) {
                          setErrors({ ...errors, area: "" });
                        }
                      }}
                      placeholder="e.g., 20"
                      error={errors.area}
                      helperText="Enter the total area in square meters"
                    />
                  )}

                  {/* Category Selection */}
                  <Select
                    label="Product Category"
                    options={categories.map((cat) => ({
                      value: cat,
                      label: cat,
                    }))}
                    value={selectedCategory}
                    onChange={(e) => {
                      setSelectedCategory(e.target.value);
                      setSelectedProduct("");
                      if (errors.category) {
                        setErrors({ ...errors, category: "" });
                      }
                    }}
                    placeholder="Select a category"
                    error={errors.category}
                  />

                  {/* Product Selection */}
                  {selectedCategory && (
                    <Select
                      label="Product"
                      options={categoryFormulas.map((f) => ({
                        value: f.id,
                        label: f.productName,
                      }))}
                      value={selectedProduct}
                      onChange={(e) => {
                        setSelectedProduct(e.target.value);
                        if (errors.product) {
                          setErrors({ ...errors, product: "" });
                        }
                      }}
                      placeholder="Select a product"
                      error={errors.product}
                    />
                  )}

                  {/* Product Info */}
                  {selectedFormula && (
                    <Card className="bg-blue-50">
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold text-gray-900">
                          Coverage Rate:
                        </span>{" "}
                        {selectedFormula.coverageRate} {selectedFormula.unit}/sqm
                      </p>
                      {selectedFormula.thickness && (
                        <p className="mt-2 text-sm text-gray-600">
                          <span className="font-semibold text-gray-900">
                            Standard Thickness:
                          </span>{" "}
                          {selectedFormula.thickness}mm
                        </p>
                      )}
                      <p className="mt-2 text-xs text-gray-500">
                        {selectedFormula.description}
                      </p>
                    </Card>
                  )}

                  {/* Wastage */}
                  <Input
                    label="Wastage Percentage (%)"
                    type="number"
                    value={wastage}
                    onChange={(e) => {
                      setWastage(e.target.value);
                      if (errors.wastage) {
                        setErrors({ ...errors, wastage: "" });
                      }
                    }}
                    placeholder="5"
                    error={errors.wastage}
                    helperText="Typically 5-10% for material loss during application"
                  />

                  {/* Buttons */}
                  <div className="flex gap-4 pt-4">
                    <Button
                      onClick={handleCalculate}
                      className="flex-1"
                    >
                      Calculate
                    </Button>
                    <Button
                      variant="outline"
                      onClick={handleReset}
                      className="flex-1"
                    >
                      Reset
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {result ? (
                <Card className="h-full bg-gradient-to-br from-green-50 to-emerald-50">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      Calculation Results
                    </h2>

                    <div className="mt-8 space-y-6 border-t border-gray-200 pt-6">
                      <div>
                        <p className="text-sm text-gray-600">Product Name</p>
                        <p className="mt-1 text-xl font-semibold text-gray-900">
                          {result.productName}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-600">Area</p>
                          <p className="mt-1 text-lg font-semibold text-gray-900">
                            {result.area.toFixed(2)} m²
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Coverage Rate</p>
                          <p className="mt-1 text-lg font-semibold text-gray-900">
                            {result.coverageRate} {result.unit}/m²
                          </p>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm text-gray-600">
                          Wastage Allowance
                        </p>
                        <p className="mt-1 text-lg font-semibold text-gray-900">
                          {result.wastagePercentage}%
                        </p>
                      </div>

                      <div className="rounded-lg border-2 border-green-500 bg-green-50 p-4">
                        <p className="text-sm text-gray-600">
                          Total Quantity Needed
                        </p>
                        <p className="mt-2 text-4xl font-bold text-green-600">
                          {result.quantity}
                        </p>
                        <p className="mt-1 text-sm font-semibold text-gray-700">
                          {result.unit}
                          {result.unit !== "kg" && result.unit !== "liters"
                            ? "/bags"
                            : ""}
                        </p>
                      </div>

                      {result.bags && (
                        <div className="rounded-lg border-2 border-blue-500 bg-blue-50 p-4">
                          <p className="text-sm text-gray-600">
                            Number of Bags Required
                          </p>
                          <p className="mt-2 text-4xl font-bold text-blue-600">
                            {result.bags}
                          </p>
                          <p className="mt-1 text-sm text-gray-600">
                            bags (including wastage)
                          </p>
                        </div>
                      )}

                      <div className="rounded-lg bg-yellow-50 p-4 text-sm text-yellow-800">
                        <p className="font-semibold">💡 Tip</p>
                        <p className="mt-1">
                          Always order slightly more material than calculated to account for material loss during application and potential rework.
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              ) : (
                <Card className="flex h-full items-center justify-center bg-gray-50">
                  <div className="text-center">
                    <div className="text-5xl">📊</div>
                    <p className="mt-4 text-lg font-semibold text-gray-900">
                      Fill in the form to calculate
                    </p>
                    <p className="mt-2 text-gray-600">
                      Enter your dimensions, select your product, and get instant results
                    </p>
                  </div>
                </Card>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            Calculator Help
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {[
              {
                question: "How accurate is the calculator?",
                answer:
                  "The calculator uses industry-standard coverage rates. Actual consumption may vary based on surface condition and application technique. We recommend a 5-10% wastage buffer.",
              },
              {
                question: "What does wastage percentage mean?",
                answer:
                  "Wastage accounts for material loss during application, spillage, and rework. Professional installers typically need 5-10%.",
              },
              {
                question: "Can I calculate multiple areas?",
                answer:
                  "Yes! Calculate each area separately and add the results, or enter the total area directly for a single calculation.",
              },
              {
                question: "Why should I add wastage?",
                answer:
                  "Adding wastage ensures you have enough material for mistakes, rework, and normal spillage during installation.",
              },
            ].map((item, index) => (
              <Card key={index}>
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.question}
                </h3>
                <p className="mt-3 text-gray-600">{item.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
