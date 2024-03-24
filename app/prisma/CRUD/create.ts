import { prisma } from "@/app/prisma/lib";

export default async function create(data) {
  // JSONオブジェクトのキーと値を取得し、投稿のタイトルと説明に設定する
  const { title, description } = data;

  try {
    // Prismaを使用してデータを作成
    const postData = await prisma.post.create({
      select: {
        id: true,
        title: true,
        description: true,
      },
      data: {
        title: title,
        description: description,
      },
    });

    // 作成したデータを返す
    return postData;
  } catch (error) {
    // エラーが発生した場合はエラーを投げる
    throw error;
  }
}
