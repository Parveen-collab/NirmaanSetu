"use client";

import ShareModal from "@/src/components/ui/ShareModal";
import React, { useState } from "react";
import Image from "next/image";
import { Share2, Info, ShoppingCart } from "lucide-react";
import Button from "@/src/components/ui/Button";

interface Shop {
  id: number;
  name: string;
  category: string;
  materials: string[];
  photo: string;
}

const shops: Shop[] = [
  {
    id: 1,
    name: "Patna Hardware Store",
    category: "Construction Materials",
    materials: ["Cement", "Bricks", "Steel", "Sand", "Gravel"],
    photo: "/shops/shop1.jpg",
  },
  {
    id: 2,
    name: "Verma Electricals",
    category: "Electrical Supplies",
    materials: ["Wires", "Switches", "Lights", "MCB", "Conduits"],
    photo: "/shops/shop2.jpg",
  },
  {
    id: 3,
    name: "Singh Paints",
    category: "Paint & Finishing",
    materials: ["Primer", "Wall Paint", "Enamel", "Brushes", "Rollers"],
    photo: "/shops/shop3.jpg",
  },
];

export default function ShopPage() {
  const [openModal, setOpenModal] = useState<
    "apply" | "material" | "share" | null
  >(null);
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black px-4 py-6 sm:px-6 lg:px-10">

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-zinc-900 dark:text-white">
          Shops
        </h1>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          Find material suppliers and shops for your projects
        </p>
      </div>

      {/* Shops Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shops.map((shop) => (
          <div
            key={shop.id}
            className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 shadow-sm hover:shadow-md transition"
          >
            {/* Shop Header */}
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
                <Image
                  src={shop.photo}
                  alt={shop.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-white">
                  {shop.name}
                </h3>
                <p className="text-sm text-zinc-500">{shop.category}</p>
              </div>
            </div>

            {/* Materials */}
            <div className="mt-4 flex flex-wrap gap-2">
              {shop.materials.map((material, idx) => (
                <span
                  key={idx}
                  className="rounded-full bg-zinc-100 dark:bg-zinc-800 px-3 py-1 text-xs text-zinc-700 dark:text-zinc-300"
                >
                  {material}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="mt-5 flex items-center justify-between gap-3">
              <Button href="/dashboard/shop/buy-materials">
                <ShoppingCart size={16} />
                Buy Materials
              </Button>

              <Button onClick={() => setOpenModal("share")}>
                <Share2 size={16} />
              </Button>

              <Button href="/dashboard/shop/shop-details">
                <Info size={16} />
              </Button>
            </div>
          </div>
        ))}
      </div>
      {openModal === "share" && (
        <ShareModal onClose={() => setOpenModal(null)} />
      )}
    </div>
  );
}
