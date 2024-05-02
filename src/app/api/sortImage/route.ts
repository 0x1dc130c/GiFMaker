import { NextResponse, NextRequest } from "next/server";
import models from "@/app/utils/models";

export async function POST(request: NextRequest) {
  try {
    if (request.method == "POST") {
        const body = await request.json();
        const { sort } = body;
        if (sort === "latest") {
            const data = await models.info_image.findAll({attributes:["path_Img","img_ID"], order: [['timestamp', 'DESC']], raw:true }) as any;
            const datas = data.map((item: any) => item.path_Img+"?id="+item.img_ID);
            return NextResponse.json({ message: "Success", status: 200, img_url: datas, sort: sort});
        } else if (sort === "old") {
            const data = await models.info_image.findAll({ attributes:["path_Img","img_ID"], order: [['timestamp', 'ASC']], raw:true }) as any;
            const datas = data.map((item: any) => item.path_Img+"?id="+item.img_ID);
            return NextResponse.json({ message: "Success", status: 200, img_url: datas, sort: sort });
        } else if (sort === "popular") {
            const data = await models.info_image.findAll({ attributes:["path_Img","img_ID"], order: [['user_like', 'DESC']], raw:true }) as any;
            const datas = data.map((item: any) => item.path_Img+"?id="+item.img_ID);
            return NextResponse.json({ message: "Success", status: 200, img_url: datas, sort: sort });
        }
        return NextResponse.json({istrue: true, message: "Success", status: 200 });
    }
  } catch (error) {
    console.log("Error During login : ", error);
    return NextResponse.json({istrue: false, message: "Error", status: 500 });
  }
}
