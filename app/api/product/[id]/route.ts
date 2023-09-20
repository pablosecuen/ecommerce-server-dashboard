import { NextResponse } from "next/server";
import { PRODUCT } from "@/app/types/products";
import { PRODUCTS } from "../../db/db-fake";
export async function GET(request: Request, { params }: any) {
  try {
    const response: PRODUCT[] = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(PRODUCTS);

      }, 1000)
    });
    const product = response.find(prod => prod.id === params.id)
    if (!product) throw new Error('producto no encontrado')

    return NextResponse.json({ message: 'producto encontrado', product })
  } catch (error) {
    return NextResponse.json({ message: 'producto no encontrado' }, { status: 404 })

  }

}