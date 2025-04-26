import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const prisma = new PrismaClient();

interface Context {
  params: { reportId: string };
}

export async function GET(
  request: Request,
  context: Context
) {
  try {
    const { reportId } = context.params;

    const report = await prisma.report.findUnique({
      where: { reportId },
    });

    return report 
      ? NextResponse.json(report)
      : NextResponse.json({ error: "Report not found" }, { status: 404 });
  } catch (error) {
    console.error("Error fetching report:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: Request,
  context: Context
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { status } = await request.json();
    const updatedReport = await prisma.report.update({
      where: { reportId: context.params.reportId },
      data: { status },
    });

    return NextResponse.json(updatedReport);
  } catch (error) {
    console.error("Error updating report:", error);
    return NextResponse.json(
      { error: "Failed to update report" },
      { status: 500 }
    );
  }
}
