import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import type { NextApiRequest } from "next"; // ✅ just for safety if you use in logic
import type { NextRequestContext } from "next/server"; // ✅ this line fixes the error!

const prisma = new PrismaClient();

export async function GET(
  req: NextRequest,
  context: NextRequestContext
) {
  const reportId = context.params?.reportId as string;

  try {
    const report = await prisma.report.findUnique({
      where: {
        reportId,
      },
    });

    if (!report) {
      return NextResponse.json({ error: "Report not found" }, { status: 404 });
    }

    return NextResponse.json(report);
  } catch (error) {
    console.error("Error fetching report details:", error);
    return NextResponse.json(
      { error: "Failed to fetch report details" },
      { status: 500 }
    );
  }
}

export async function PATCH(
  req: NextRequest,
  context: NextRequestContext
) {
  try {
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const reportId = context.params?.reportId as string;
    const { status } = await req.json();

    const report = await prisma.report.update({
      where: { reportId },
      data: { status },
    });

    return NextResponse.json(report);
  } catch (error) {
    console.error("Error updating report:", error);
    return NextResponse.json(
      { error: "Error updating report" },
      { status: 500 }
    );
  }
}

