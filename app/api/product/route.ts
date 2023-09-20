import { PRODUCTS } from "@/app/api/db/db-fake"
import { NextResponse } from "next/server"

export function GET() {
  return NextResponse.json(PRODUCTS)
}

export function DELETE() {
  return NextResponse.json({ message: 'Todos los productos fueron eliminados' })
}

