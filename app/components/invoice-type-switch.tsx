"use client"

import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export function InvoiceTypeSwitch() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="invoice-type" />
      <Label htmlFor="invoice-type" className="text-lg font-semibold">
        Sales Invoice / Buyer Invoice
      </Label>
    </div>
  )
}