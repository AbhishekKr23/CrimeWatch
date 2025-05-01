import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import Report from "@/models/report";

// ✅ PATCH handler — for updating a report
export async function PATCH(
  request: Request,
  context: { params: { reportId: string } }
) {
  try {
    const { reportId } = context.params;
    const { status } = await request.json();

    await connectMongoDB();

    const updatedReport = await Report.findByIdAndUpdate(
      reportId,
      { status },
      { new: true }
    );

    if (!updatedReport) {
      return NextResponse.json(
        { message: "Report not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedReport);
  } catch (error) {
    console.error("PATCH error:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}

