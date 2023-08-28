import { StatusCodes } from "http-status-codes";
import { NextResponse } from "next/server";

export async function GET() {
	return NextResponse.json("pong", { status: StatusCodes.OK });
}
