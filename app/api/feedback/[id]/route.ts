import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: {
        clerkUserId: userId,
      },
    });

    if (!user || user.role !== "admin") {
      return NextResponse.json(
        {
          error: "Admin access required",
        },
        { status: 403 },
      );
    }

    const { id: postId } = await params;
    const numericPostId = Number(postId);

    // gotta delete votes first
    await prisma.vote.deleteMany({
      where: { postId: numericPostId },
    });

    // then delete the feedback
    const deletedPost = await prisma.post.delete({
      where: { id: numericPostId },
    });

    return NextResponse.json({
      message: "Feedback deleted successfully",
      post: deletedPost,
    });
  } catch (error) {
    console.error("Error deleting post: ", error);
    return NextResponse.json(
      {
        error: "Internal server error",
      },
      { status: 500 },
    );
  }
}
