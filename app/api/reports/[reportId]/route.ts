import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth"; 

// Adding minimal type annotation
export async function PATCH(
  req: Request,
  { params }: { params: any }
) {
  const reportId = params.reportId;
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const { status } = await req.json();
    const report = await prisma.report.update({
      where: { id: reportId },
      data: { status },
    });
    return NextResponse.json(report);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error updating report" },
      { status: 500 }
    );
  }
}
